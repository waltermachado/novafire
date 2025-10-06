  // Implementação da funcionalidade de edição para a página PlanilhaImportacao
  
  const PlanilhaImportacaoPage = () => {
    const [step, setStep] = useState(1);
    const [dragActive, setDragActive] = useState(false);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    
    // Estados para controle de edição
    const [editingRowId, setEditingRowId] = useState<number | null>(null);
    const [tableData, setTableData] = useState([
      {
        id: 1,
        name: "João Silva Santos",
        cpfCnpj: "123.456.789-00",
        pixKey: "joao.silva@email.com",
        value: "1200.00",
        isValid: true,
        errors: []
      },
      {
        id: 2,
        name: "Maria Oliveira Ltda",
        cpfCnpj: "12.345.678/0001-90",
        pixKey: "+5511999999999",
        value: "850.50",
        isValid: true,
        errors: []
      },
      {
        id: 3,
        name: "Pedro Costa",
        cpfCnpj: "987.654.321-11",
        pixKey: "987.654.321-11",
        value: "500.00",
        isValid: true,
        errors: []
      },
      {
        id: 4,
        name: "Ana Santos ME",
        cpfCnpj: "98.765.432/0001-XX",
        pixKey: "email@inválido",
        value: "2500.75",
        isValid: false,
        errors: ["Nome muito curto", "CNPJ inválido", "Email inválido"]
      }
    ]);
    const [editData, setEditData] = useState({
      name: "",
      cpfCnpj: "",
      pixKey: "",
      value: ""
    });

    // Funções para drag and drop
    const handleDrag = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        setUploadedFile(e.dataTransfer.files[0]);
      }
    };

    const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setUploadedFile(file);
      }
    };

    // Funções para edição de dados
    const startEditing = (row: any) => {
      setEditingRowId(row.id);
      setEditData({
        name: row.name,
        cpfCnpj: row.cpfCnpj,
        pixKey: row.pixKey,
        value: row.value
      });
    };

    const cancelEditing = () => {
      setEditingRowId(null);
      setEditData({ name: "", cpfCnpj: "", pixKey: "", value: "" });
    };

    const saveEditing = () => {
      setTableData(prev => prev.map(row => {
        if (row.id === editingRowId) {
          // Simular validação básica
          const hasErrors = !editData.name.trim() || !editData.cpfCnpj.trim() || !editData.pixKey.trim() || !editData.value.trim();
          return {
            ...row,
            name: editData.name,
            cpfCnpj: editData.cpfCnpj,
            pixKey: editData.pixKey,
            value: editData.value,
            isValid: !hasErrors,
            errors: hasErrors ? ["Dados incompletos"] : []
          };
        }
        return row;
      }));
      setEditingRowId(null);
      setEditData({ name: "", cpfCnpj: "", pixKey: "", value: "" });
    };

    const deleteRow = (id: number) => {
      setTableData(prev => prev.filter(row => row.id !== id));
    };

    // Calcular estatísticas baseadas nos dados atuais
    const totalRecords = tableData.length;
    const validRecords = tableData.filter(row => row.isValid).length;
    const errorRecords = tableData.filter(row => !row.isValid).length;
    const totalValidValue = tableData.filter(row => row.isValid).reduce((sum, row) => sum + parseFloat(row.value), 0);
    const totalErrorValue = tableData.filter(row => !row.isValid).reduce((sum, row) => sum + parseFloat(row.value), 0);
    const totalGeneralValue = totalValidValue + totalErrorValue;