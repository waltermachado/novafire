const fs = require('fs');
const path = require('path');

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full, files);
    } else {
      files.push(full);
    }
  }
  return files;
}

function fixLine(line) {
  const trimmed = line.trimStart();
  if (!trimmed.startsWith('import')) return line;
  return line.replace(/(['"])([^'"\n]+)\1/g, (m, q, spec) => {
    // We only want to modify module specifiers, not other string literals on the line.
    // Heuristic: if spec includes a slash or letters and is at the end part of an import statement.
    // Core logic: remove trailing @version part that occurs after position 0 (to preserve scoped packages like @radix-ui)
    const atIdx = spec.indexOf('@', 1);
    if (atIdx > 0) {
      return q + spec.slice(0, atIdx) + q;
    }
    return m;
  });
}

function fixFile(filePath) {
  const ext = path.extname(filePath);
  if (!['.ts', '.tsx', '.jsx', '.js'].includes(ext)) return false;
  let content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  const newLines = lines.map(fixLine);
  const newContent = newLines.join('\n');
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
  }
  return false;
}

const srcDir = path.join(process.cwd(), 'src');
if (!fs.existsSync(srcDir)) {
  console.error('src directory not found');
  process.exit(1);
}

const files = walk(srcDir);
let changed = 0;
for (const f of files) {
  if (fixFile(f)) {
    changed++;
    console.log('Fixed imports in:', path.relative(process.cwd(), f));
  }
}
console.log('Total files changed:', changed);