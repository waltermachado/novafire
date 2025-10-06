import { useState, DragEvent, ChangeEvent } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Card, CardContent, CardHeader } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Avatar, AvatarFallback } from "./components/ui/avatar";
import { Alert, AlertDescription } from "./components/ui/alert";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./components/ui/dialog";
import { 
  Search, 
  Plus, 
  Eye, 
  EyeOff, 
  Home,
  BarChart3,
  CreditCard,
  ArrowLeftRight,
  Split,
  FileText,
  Receipt,
  LogOut,
  Bell,
  Settings,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  PiggyBank,
  Zap,
  Copy,
  Heart,
  Star,
  ArrowUpRight,
  ArrowDownLeft,
  RefreshCw,
  Info,
  MoreHorizontal,
  Download,
  Filter,
  Calendar,
  ChevronDown,
  Clock,
  Shield,
  User,
  Palette,
  Smartphone,
  Lock,
  HelpCircle,
  CheckCircle,
  XCircle,
  Edit,
  Trash2,
  Check,
  X
} from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [pixDropdownOpen, setPixDropdownOpen] = useState(false);
  const [extratoDropdownOpen, setExtratoDropdownOpen] = useState(false);
  const [lotesDropdownOpen, setLotesDropdownOpen] = useState(false);
  const [showExampleModal, setShowExampleModal] = useState(false);

  const DashboardPage = () => (
    <div className="flex-1">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-gray-900">Dashboard Walter Bank</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <EyeOff size={16} />
              Ocultar Saldo
            </Button>
            <Button variant="ghost" size="sm">
              <RefreshCw size={16} />
            </Button>
            <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
              <span className="text-sm text-gray-600">R$ 999,45</span>
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-orange-500 text-white text-sm">WN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Alert */}
        <Alert className="mb-6 bg-yellow-50 border-yellow-200">
          <Info className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-800">
            <strong>A conta possui valores bloqueados!</strong> Clique aqui para visualizar
          </AlertDescription>
        </Alert>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <p className="text-sm text-gray-600">Entradas (mês)</p>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 6.615.203,56</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <p className="text-sm text-gray-600">Saldo disponível</p>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 693.284,08</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <p className="text-sm text-gray-600">Saídas (mês)</p>
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <TrendingDown className="h-4 w-4 text-red-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 5.920.127,43</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Acesso Rápido</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3">
                  <Zap className="h-6 w-6 text-orange-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">Pix com Chave</span>
              </div>
            </Card>

            <Card className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                  <Copy className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">Pix Copia e Cola</span>
              </div>
            </Card>

            <Card className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">Pix Favorecido</span>
              </div>
            </Card>

            <Card className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-3">
                  <Search className="h-6 w-6 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">Buscar Transações</span>
              </div>
            </Card>

            <Card className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">Pix Agendados</span>
              </div>
            </Card>

            <Card className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-3">
                  <FileText className="h-6 w-6 text-yellow-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">Extrato Detalhado</span>
              </div>
            </Card>

            <Card className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-3">
                  <BarChart3 className="h-6 w-6 text-indigo-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">Extrato Consolidado</span>
              </div>
            </Card>

            <Card className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-3">
                  <Star className="h-6 w-6 text-pink-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">Favorecidos</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Últimas Transações</h2>
            <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50">
              Ver Extrato
            </Button>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-100">
                <div className="p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <ArrowDownLeft className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Transferência Recebida</div>
                      <div className="text-sm text-gray-500">PIX - João Silva</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-600">+ R$ 1.250,00</div>
                    <div className="text-sm text-gray-500">Hoje, 14:30</div>
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <ArrowUpRight className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Transferência Enviada</div>
                      <div className="text-sm text-gray-500">PIX - Maria Santos</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-red-600">- R$ 850,00</div>
                    <div className="text-sm text-gray-500">Hoje, 11:15</div>
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Pagamento de Boleto</div>
                      <div className="text-sm text-gray-500">Conta de Luz - Enel</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-red-600">- R$ 245,80</div>
                    <div className="text-sm text-gray-500">Ontem, 16:45</div>
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <ArrowDownLeft className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Depósito</div>
                      <div className="text-sm text-gray-500">TED - Empresa XYZ Ltda</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-600">+ R$ 5.000,00</div>
                    <div className="text-sm text-gray-500">Ontem, 09:30</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

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

    return (
      <div className="flex-1">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <FileText size={18} />
                <span className="font-medium">Planilha - Importação</span>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Sistema Online
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Bell size={16} />
              </Button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Saldo:</span>
                  <span className="font-bold text-green-600">R$ 999,45</span>
                  <Eye size={16} className="text-gray-400 cursor-pointer" />
                </div>
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-orange-500 text-white text-sm">WN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Stepper */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              {/* Step 1 */}
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step > 1 ? <CheckCircle size={16} /> : '1'}
                </div>
                <span className={`ml-2 text-sm ${step >= 1 ? 'text-orange-600 font-medium' : 'text-gray-500'}`}>
                  Importar
                </span>
              </div>

              {/* Connector */}
              <div className={`w-16 h-0.5 mx-4 ${step > 1 ? 'bg-orange-500' : 'bg-gray-200'}`} />

              {/* Step 2 */}
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step > 2 ? <CheckCircle size={16} /> : '2'}
                </div>
                <span className={`ml-2 text-sm ${step >= 2 ? 'text-orange-600 font-medium' : 'text-gray-500'}`}>
                  Validar
                </span>
              </div>

              {/* Connector */}
              <div className={`w-16 h-0.5 mx-4 ${step > 2 ? 'bg-orange-500' : 'bg-gray-200'}`} />

              {/* Step 3 */}
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= 3 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step > 3 ? <CheckCircle size={16} /> : '3'}
                </div>
                <span className={`ml-2 text-sm ${step >= 3 ? 'text-orange-600 font-medium' : 'text-gray-500'}`}>
                  Confirmar
                </span>
              </div>

              {/* Connector */}
              <div className={`w-16 h-0.5 mx-4 ${step > 3 ? 'bg-orange-500' : 'bg-gray-200'}`} />

              {/* Step 4 */}
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= 4 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step > 4 ? <CheckCircle size={16} /> : '4'}
                </div>
                <span className={`ml-2 text-sm ${step >= 4 ? 'text-orange-600 font-medium' : 'text-gray-500'}`}>
                  Finalizar
                </span>
              </div>
            </div>
          </div>

          {/* Step 1 - Importar Arquivo */}
          {step === 1 && (
            <Card className="max-w-3xl mx-auto">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">IMPORTAR PLANILHA DE PAGAMENTOS</h2>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowExampleModal(true)}
                  className="text-orange-500 hover:text-orange-600"
                >
                  <Info size={16} className="mr-1" />
                  EXEMPLO
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {!uploadedFile ? (
                  <>
                    {/* Drag and Drop Area */}
                    <div
                      className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                        dragActive 
                          ? 'border-orange-400 bg-orange-50' 
                          : 'border-gray-300 bg-gray-50'
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <div className="flex flex-col items-center">
                        <FileText size={48} className="text-gray-400 mb-4" />
                        <p className="text-lg text-gray-600 mb-2">
                          Clique aqui ou arraste um arquivo
                        </p>
                        <p className="text-sm text-gray-400">
                          Formatos aceitos: XLS, CSV, XLSX
                        </p>
                        <Button 
                          className="mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white"
                          onClick={() => document.getElementById('file-upload')?.click()}
                        >
                          Selecionar Arquivo
                        </Button>
                        <input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          accept=".xls,.xlsx,.csv"
                          onChange={handleFileSelect}
                        />
                      </div>
                    </div>

                    {/* Warning Alert */}
                    <Alert className="bg-orange-50 border-orange-200">
                      <Info className="h-4 w-4 text-orange-600" />
                      <AlertDescription className="text-orange-800">
                        <strong>Arquivo de dados não localizado!</strong> Para continuar, adicione o arquivo nos formatos válidos.
                      </AlertDescription>
                    </Alert>

                    {/* Buttons */}
                    <div className="flex justify-between pt-4">
                      <Button
                        variant="outline"
                        onClick={() => setCurrentPage("dashboard")}
                      >
                        Voltar
                      </Button>
                      <Button
                        disabled
                        className="bg-gray-400 text-white cursor-not-allowed"
                      >
                        Avançar
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Drag and Drop Area com Arquivo */}
                    <div className="border-2 border-dashed border-gray-300 bg-gray-50 rounded-lg p-12 text-center">
                      <div className="flex flex-col items-center">
                        <FileText size={48} className="text-gray-400 mb-4" />
                        <p className="text-lg text-gray-600 mb-2">
                          Clique aqui ou arraste um arquivo
                        </p>
                      </div>
                    </div>

                    {/* Arquivo Enviado */}
                    <div className="text-gray-700 mb-4">
                      <span className="font-medium">Arquivo: </span>
                      <span>planilha_exemplo_walter_bank (1).csv</span>
                    </div>

                    {/* Success Alert */}
                    <Alert className="bg-green-50 border-green-200 p-4">
                      <div className="flex items-center gap-3 flex-nowrap">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <AlertDescription className="text-green-800 p-0 m-0 flex-1 whitespace-nowrap">
                          <strong>Arquivo importado com sucesso!</strong> Você já pode continuar para realizar a validação dos dados.
                        </AlertDescription>
                      </div>
                    </Alert>

                    {/* Buttons */}
                    <div className="flex justify-between pt-4">
                      <Button
                        variant="outline"
                        onClick={() => setUploadedFile(null)}
                      >
                        Voltar
                      </Button>
                      <Button
                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white"
                        onClick={() => setStep(2)}
                      >
                        Avançar
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 2 - Validar Dados */}
          {step === 2 && (
            <div className="max-w-6xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold text-gray-900">VALIDAÇÃO DOS DADOS IMPORTADOS</h2>
                  <p className="text-gray-600">Revise os dados importados antes de prosseguir</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Resumo da Importação */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <FileText className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-blue-600 font-medium">Total de Registros</div>
                          <div className="text-2xl font-bold text-blue-900">{totalRecords}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-green-600 font-medium">Registros Válidos</div>
                          <div className="text-2xl font-bold text-green-900">{validRecords}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                          <XCircle className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-red-600 font-medium">Com Erros</div>
                          <div className="text-2xl font-bold text-red-900">{errorRecords}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Alert de Validação */}
                  {errorRecords > 0 && (
                    <Alert className="bg-yellow-50 border-yellow-200">
                      <Info className="h-4 w-4 text-yellow-600" />
                      <AlertDescription className="text-yellow-800">
                        <strong>Atenção!</strong> Encontramos alguns erros nos dados. Revise as informações destacadas antes de continuar.
                      </AlertDescription>
                    </Alert>
                  )}

                  {/* Tabela de Dados Importados */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Dados Importados</h3>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Filter size={16} />
                          Filtrar Erros
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download size={16} />
                          Exportar Log
                        </Button>
                      </div>
                    </div>

                    <Card className="overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                            <tr>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 w-12">Status</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Nome do Favorecido</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">CPF/CNPJ</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Chave PIX</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Valor</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Ações</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {tableData.map((row) => (
                              <tr key={row.id} className={`hover:bg-gray-50 ${!row.isValid ? 'bg-red-50 hover:bg-red-100' : ''}`}>
                                <td className="px-4 py-3">
                                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                    row.isValid ? 'bg-green-500' : 'bg-red-500'
                                  }`}>
                                    {row.isValid ? (
                                      <CheckCircle className="h-4 w-4 text-white" />
                                    ) : (
                                      <XCircle className="h-4 w-4 text-white" />
                                    )}
                                  </div>
                                </td>
                                
                                {/* Nome */}
                                <td className="px-4 py-3">
                                  {editingRowId === row.id ? (
                                    <Input
                                      value={editData.name}
                                      onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                                      className="h-8"
                                    />
                                  ) : (
                                    <div>
                                      <div className="font-medium text-gray-900">{row.name}</div>
                                      {!row.isValid && row.errors.includes("Nome muito curto") && (
                                        <div className="text-xs text-red-600 mt-1">⚠ Nome muito curto</div>
                                      )}
                                    </div>
                                  )}
                                </td>

                                {/* CPF/CNPJ */}
                                <td className="px-4 py-3">
                                  {editingRowId === row.id ? (
                                    <Input
                                      value={editData.cpfCnpj}
                                      onChange={(e) => setEditData(prev => ({ ...prev, cpfCnpj: e.target.value }))}
                                      className="h-8 font-mono"
                                    />
                                  ) : (
                                    <div>
                                      <div className={`font-mono ${
                                        !row.isValid && row.errors.includes("CNPJ inválido") 
                                          ? 'text-red-700 border-red-200 bg-red-50 px-2 py-1 rounded' 
                                          : 'text-gray-900'
                                      }`}>
                                        {row.cpfCnpj}
                                      </div>
                                      {!row.isValid && row.errors.includes("CNPJ inválido") && (
                                        <div className="text-xs text-red-600 mt-1">⚠ CNPJ inválido</div>
                                      )}
                                    </div>
                                  )}
                                </td>

                                {/* Chave PIX */}
                                <td className="px-4 py-3">
                                  {editingRowId === row.id ? (
                                    <Input
                                      value={editData.pixKey}
                                      onChange={(e) => setEditData(prev => ({ ...prev, pixKey: e.target.value }))}
                                      className="h-8"
                                    />
                                  ) : (
                                    <div>
                                      <div className={`${
                                        !row.isValid && row.errors.includes("Email inválido") 
                                          ? 'text-red-700 border-red-200 bg-red-50 px-2 py-1 rounded' 
                                          : 'text-gray-900'
                                      }`}>
                                        {row.pixKey}
                                      </div>
                                      {!row.isValid && row.errors.includes("Email inválido") && (
                                        <div className="text-xs text-red-600 mt-1">⚠ Email inválido</div>
                                      )}
                                    </div>
                                  )}
                                </td>

                                {/* Valor */}
                                <td className="px-4 py-3">
                                  {editingRowId === row.id ? (
                                    <Input
                                      value={editData.value}
                                      onChange={(e) => setEditData(prev => ({ ...prev, value: e.target.value }))}
                                      className="h-8"
                                    />
                                  ) : (
                                    <div className="font-semibold text-gray-900">
                                      R$ {parseFloat(row.value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                    </div>
                                  )}
                                </td>

                                {/* Ações */}
                                <td className="px-4 py-3">
                                  {editingRowId === row.id ? (
                                    <div className="flex gap-1">
                                      <Button 
                                        variant="ghost" 
                                        size="sm" 
                                        className="gap-1 text-green-600 hover:text-green-700"
                                        onClick={saveEditing}
                                      >
                                        <Check size={14} />
                                        Salvar
                                      </Button>
                                      <Button 
                                        variant="ghost" 
                                        size="sm" 
                                        className="gap-1 text-gray-600 hover:text-gray-700"
                                        onClick={cancelEditing}
                                      >
                                        <X size={14} />
                                        Cancelar
                                      </Button>
                                    </div>
                                  ) : (
                                    <div className="flex gap-1">
                                      {row.isValid ? (
                                        <Button variant="ghost" size="sm" className="gap-1" onClick={() => startEditing(row)}>
                                          <Edit size={14} />
                                          Editar
                                        </Button>
                                      ) : (
                                        <>
                                          <Button variant="ghost" size="sm" className="gap-1 text-red-600 hover:text-red-700" onClick={() => startEditing(row)}>
                                            <Edit size={14} />
                                            Corrigir
                                          </Button>
                                          <Button variant="ghost" size="sm" className="gap-1 text-red-600 hover:text-red-700" onClick={() => deleteRow(row.id)}>
                                            <Trash2 size={14} />
                                            Excluir
                                          </Button>
                                        </>
                                      )}
                                    </div>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Card>
                  </div>

                  {/* Resumo de Valores */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Resumo Financeiro</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          R$ {totalValidValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </div>
                        <div className="text-sm text-gray-500">Total Válido</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">
                          R$ {totalErrorValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </div>
                        <div className="text-sm text-gray-500">Total com Erros</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          R$ {totalGeneralValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </div>
                        <div className="text-sm text-gray-500">Total Geral</div>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="gap-2"
                    >
                      Voltar
                    </Button>
                    <div className="flex gap-3">
                      {errorRecords > 0 && (
                        <Button
                          variant="outline"
                          className="gap-2 text-red-600 border-red-600 hover:bg-red-50"
                        >
                          <XCircle size={16} />
                          Corrigir Erros
                        </Button>
                      )}
                      <Button
                        onClick={() => setStep(3)}
                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white gap-2"
                      >
                        <CheckCircle size={16} />
                        Continuar com Válidos
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Steps 3 e 4 podem ser implementados posteriormente */}
          {step === 3 && (
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <h2 className="text-xl font-semibold text-gray-900">CONFIRMAR DADOS</h2>
                <p className="text-gray-600">Step 3 - Confirmar dados</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    Voltar
                  </Button>
                  <Button onClick={() => setStep(4)} className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    Finalizar
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <h2 className="text-xl font-semibold text-gray-900">FINALIZAR IMPORTAÇÃO</h2>
                <p className="text-gray-600">Step 4 - Finalizar</p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Importação Concluída!</h3>
                  <p className="text-gray-600">Os dados foram processados com sucesso.</p>
                </div>
                <div className="flex justify-center pt-4">
                  <Button onClick={() => {
                    setStep(1);
                    setUploadedFile(null);
                    setCurrentPage("dashboard");
                  }} className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    Voltar ao Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  };

  // Simplified sidebar and other components remain the same...
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-semibold text-gray-900">Walter Bank</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setCurrentPage("dashboard")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${
              currentPage === "dashboard" ? "bg-orange-50 text-orange-600" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Home size={18} />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => setCurrentPage("cobranca")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${
              currentPage === "cobranca" ? "bg-orange-50 text-orange-600" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Receipt size={18} />
            <span>Gestão de cobrança</span>
          </button>

          <button
            onClick={() => setLotesDropdownOpen(!lotesDropdownOpen)}
            className="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-left text-gray-600 hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <Split size={18} />
              <span>Lotes</span>
            </div>
            <ChevronDown size={16} className={`transition-transform ${lotesDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {lotesDropdownOpen && (
            <div className="ml-6 space-y-1">
              <button
                onClick={() => setCurrentPage("planilha-importacao")}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-sm ${
                  currentPage === "planilha-importacao" ? "bg-orange-50 text-orange-600" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <FileText size={16} />
                <span>Planilha - Importação</span>
              </button>
              <button
                onClick={() => setCurrentPage("planilha-pendentes")}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-sm ${
                  currentPage === "planilha-pendentes" ? "bg-orange-50 text-orange-600" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Clock size={16} />
                <span>Planilha - Pendentes</span>
              </button>
            </div>
          )}
        </nav>

        {/* Footer buttons */}
        <div className="p-4 border-t border-gray-200 space-y-2">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-gray-600 hover:bg-gray-50">
            <Settings size={18} />
            <span>Configurações</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-gray-600 hover:bg-gray-50">
            <LogOut size={18} />
            <span>Sair</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      {currentPage === "dashboard" && <DashboardPage />}
      {currentPage === "planilha-importacao" && <PlanilhaImportacaoPage />}
    </div>
  );
}