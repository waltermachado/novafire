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
import { toast } from "sonner";
import { Toaster } from "./components/ui/sonner";
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
  X,
  MessageCircle,
  Send,
  Minimize2
} from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [pixDropdownOpen, setPixDropdownOpen] = useState(false);

  const [lotesDropdownOpen, setLotesDropdownOpen] = useState(false);
  const [showExampleModal, setShowExampleModal] = useState(false);
  const [transactionModalOpen, setTransactionModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);
  
  // States for chat bot
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      text: "Como posso te ajudar meu Fire Cliente?",
      isBot: true,
      timestamp: new Date()
    }
  ]);

  // Chat bot helper functions
  const sendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        text: chatMessage,
        isBot: false,
        timestamp: new Date()
      };
      setChatMessages([...chatMessages, newMessage]);
      setChatMessage("");
      
      // Show typing indicator and simulate bot response
      setIsTyping(true);
      setTimeout(() => {
        let botResponseText = "Obrigado pela sua mensagem! Nossa equipe de suporte irá te ajudar em breve. Para questões urgentes, ligue para (85) 99102-9888.";
        
        const message = chatMessage.toLowerCase();
        if (message.includes('saldo') || message.includes('conta')) {
          botResponseText = "Para consultar seu saldo e informações da conta, você pode verificar na parte superior da tela ou entrar em contato conosco pelo (85) 99102-9888.";
        } else if (message.includes('pix') || message.includes('transferencia')) {
          botResponseText = "Para realizar PIX ou transferências, use o menu lateral ou acesse 'Acesso Rápido' na tela principal. Precisa de ajuda específica?";
        } else if (message.includes('cobrança') || message.includes('boleto')) {
          botResponseText = "Para gerenciar suas cobranças, acesse 'Gestão de cobrança' no menu lateral. Nossa equipe pode te ajudar pelo (85) 99102-9888.";
        } else if (message.includes('suporte') || message.includes('ajuda')) {
          botResponseText = "Estou aqui para te ajudar! Para suporte técnico especializado, entre em contato pelo (85) 99102-9888 ou walter.machado@firebanking.io";
        }
        
        setIsTyping(false);
        const botResponse = {
          id: chatMessages.length + 2,
          text: botResponseText,
          isBot: true,
          timestamp: new Date()
        };
        setChatMessages(prev => [...prev, botResponse]);
      }, 1500);
    }
  };

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

      {/* Chat Bot Support */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Window */}
        {isChatOpen && (
          <div className="absolute bottom-16 right-0 mb-4 animate-in slide-in-from-bottom-8 duration-300 ease-out">
            <Card className="w-80 h-[28rem] shadow-2xl border-orange-200 bg-white">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Fire Banking Suporte</h3>
                      <p className="text-xs text-orange-100">Online agora</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsChatOpen(false)}
                    className="text-white hover:bg-white/20 h-8 w-8 p-0"
                  >
                    <Minimize2 size={16} />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="p-4 flex flex-col h-full">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto space-y-3 mb-4 max-h-64">
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-in slide-in-from-bottom-2 duration-200`}
                    >
                      <div className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
                        message.isBot 
                          ? 'bg-orange-50 text-orange-900 border border-orange-200' 
                          : 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                        <div className={`text-xs mt-1 ${
                          message.isBot ? 'text-orange-600' : 'text-orange-100'
                        }`}>
                          {message.timestamp.toLocaleTimeString('pt-BR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-200">
                      <div className="bg-orange-50 text-orange-900 border border-orange-200 p-3 rounded-lg max-w-[80%]">
                        <div className="flex items-center gap-1">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                          <span className="text-xs text-orange-600 ml-2">Fire Support está digitando...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Actions */}
                {chatMessages.length === 1 && (
                  <div className="mb-4 space-y-2">
                    <p className="text-xs text-gray-500 mb-2">Perguntas frequentes:</p>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs h-7 text-orange-600 border-orange-200 hover:bg-orange-50"
                        onClick={() => {
                          const newMessage = {
                            id: chatMessages.length + 1,
                            text: "Como consulto meu saldo?",
                            isBot: false,
                            timestamp: new Date()
                          };
                          setChatMessages([...chatMessages, newMessage]);
                          
                          setIsTyping(true);
                          setTimeout(() => {
                            setIsTyping(false);
                            const botResponse = {
                              id: chatMessages.length + 2,
                              text: "Para consultar seu saldo e informações da conta, você pode verificar na parte superior da tela ou entrar em contato conosco pelo (85) 99102-9888.",
                              isBot: true,
                              timestamp: new Date()
                            };
                            setChatMessages(prev => [...prev, botResponse]);
                          }, 1500);
                        }}
                      >
                        💰 Consultar saldo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs h-7 text-orange-600 border-orange-200 hover:bg-orange-50"
                        onClick={() => {
                          const newMessage = {
                            id: chatMessages.length + 1,
                            text: "Como fazer um PIX?",
                            isBot: false,
                            timestamp: new Date()
                          };
                          setChatMessages([...chatMessages, newMessage]);
                          
                          setIsTyping(true);
                          setTimeout(() => {
                            setIsTyping(false);
                            const botResponse = {
                              id: chatMessages.length + 2,
                              text: "Para realizar PIX ou transferências, use o menu lateral ou acesse 'Acesso Rápido' na tela principal. Precisa de ajuda específica?",
                              isBot: true,
                              timestamp: new Date()
                            };
                            setChatMessages(prev => [...prev, botResponse]);
                          }, 1500);
                        }}
                      >
                        ⚡ PIX
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs h-7 text-orange-600 border-orange-200 hover:bg-orange-50"
                        onClick={() => {
                          const newMessage = {
                            id: chatMessages.length + 1,
                            text: "Preciso de suporte técnico",
                            isBot: false,
                            timestamp: new Date()
                          };
                          setChatMessages([...chatMessages, newMessage]);
                          
                          setIsTyping(true);
                          setTimeout(() => {
                            setIsTyping(false);
                            const botResponse = {
                              id: chatMessages.length + 2,
                              text: "Estou aqui para te ajudar! Para suporte técnico especializado, entre em contato pelo (85) 99102-9888 ou walter.machado@firebanking.io",
                              isBot: true,
                              timestamp: new Date()
                            };
                            setChatMessages(prev => [...prev, botResponse]);
                          }, 1500);
                        }}
                      >
                        🛠️ Suporte
                      </Button>
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className="flex gap-2">
                  <Input
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    className="flex-1"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        sendMessage();
                      }
                    }}
                  />
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                    onClick={sendMessage}
                  >
                    <Send size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Chat Button */}
        <Button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 relative ${
            isChatOpen 
              ? 'bg-red-500 hover:bg-red-600' 
              : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
          } ${!isChatOpen ? 'animate-pulse' : ''}`}
        >
          {isChatOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <MessageCircle size={24} className="text-white" />
          )}
        </Button>

        {/* Notification Badge */}
        {!isChatOpen && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white text-xs font-bold">!</span>
          </div>
        )}
      </div>
    </div>
  );

  const GestaoCobrancaPage = () => (
    <div className="flex-1">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Receipt size={18} />
              <span className="font-medium">Gestão de cobrança</span>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              Sistema Online
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Bell size={16} />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings size={16} />
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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Gerar cobrança</h1>
            <p className="text-gray-600">Gerencie seus clientes e cobranças de forma eficiente</p>
          </div>
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg">
            <Plus size={18} className="mr-2" />
            Gerar cobrança
          </Button>
        </div>

        <Tabs defaultValue="clientes" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <TabsList className="grid w-64 grid-cols-2 bg-gray-100">
              <TabsTrigger value="cobranças" className="data-[state=active]:bg-white">Cobranças</TabsTrigger>
              <TabsTrigger value="clientes" className="data-[state=active]:bg-white">Clientes</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-3">
              <Select defaultValue="todos">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filtrar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="ativos">Ativos</SelectItem>
                  <SelectItem value="pendentes">Pendentes</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50">
                <Plus size={16} className="mr-2" />
                Adicionar cliente
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="text-gray-600">
                    <Download size={16} className="mr-2" />
                    Exportar
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <FileText size={16} className="mr-2" />
                    Exportar como CSV
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FileText size={16} className="mr-2" />
                    Exportar como Excel
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FileText size={16} className="mr-2" />
                    Exportar como PDF
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <TabsContent value="clientes" className="space-y-6">
            {/* Enhanced Search and Filters */}
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Procurar por nome, email ou documento" 
                  className="pl-10 bg-white border-gray-200 focus:border-orange-500"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter size={16} />
                Filtros
              </Button>
              <Button variant="outline" className="gap-2">
                <Calendar size={16} />
                Período
              </Button>
            </div>

            {/* Enhanced Table */}
            <Card className="overflow-hidden shadow-sm">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-4">
                    <span className="text-sm font-semibold text-gray-700">Clientes</span>
                  </div>
                  <div className="col-span-3">
                    <span className="text-sm font-semibold text-gray-700">Cobranças</span>
                  </div>
                  <div className="col-span-3">
                    <span className="text-sm font-semibold text-gray-700">CPF / CNPJ</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-sm font-semibold text-gray-700">Ações</span>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {/* Enhanced Client 1 */}
                <div className="px-6 py-5 hover:bg-gray-50 transition-colors">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-blue-100 text-blue-700">LM</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-gray-900">Lucas Maia</div>
                          <div className="text-sm text-gray-500">lequinhas123ref@yahoo.com.br</div>
                          <div className="text-sm text-gray-500">(11) 99999-9999</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-100 text-green-700 border-green-200">
                            3 Pagas
                          </Badge>
                          <span className="text-xs text-green-600 font-medium">R$ 450,00</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-red-100 text-red-700 border-red-200">
                            1 Pendente
                          </Badge>
                          <span className="text-xs text-red-600 font-medium">R$ 150,00</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <span className="text-gray-900 font-mono">017.136.550-04</span>
                    </div>
                    <div className="col-span-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal size={16} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                          <DropdownMenuItem>Editar cliente</DropdownMenuItem>
                          <DropdownMenuItem>Nova cobrança</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Remover</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>

                {/* Enhanced Client 2 */}
                <div className="px-6 py-5 hover:bg-gray-50 transition-colors">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-purple-100 text-purple-700">WM</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-gray-900">Walter Machado</div>
                          <div className="text-sm text-gray-500">walter.machado@firebanking.io</div>
                          <div className="text-sm text-gray-500">(85) 99102-9888</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-100 text-green-700 border-green-200">
                            2 Pagas
                          </Badge>
                          <span className="text-xs text-green-600 font-medium">R$ 300,00</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">
                            1 Vencendo
                          </Badge>
                          <span className="text-xs text-yellow-600 font-medium">R$ 200,00</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <span className="text-gray-900 font-mono">608.960.593-08</span>
                    </div>
                    <div className="col-span-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal size={16} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                          <DropdownMenuItem>Editar cliente</DropdownMenuItem>
                          <DropdownMenuItem>Nova cobrança</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Remover</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Enhanced Pagination */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Mostrando <span className="font-medium">1-2</span> de <span className="font-medium">2</span> clientes
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled className="gap-2">
                  Anterior
                </Button>
                <Button size="sm" className="bg-orange-500 text-white border-orange-500 w-8 h-8 p-0">
                  1
                </Button>
                <Button variant="outline" size="sm" disabled className="gap-2">
                  Próximo
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cobranças" className="space-y-6">
            <Card className="p-8">
              <div className="text-center">
                <Receipt size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Gerencie suas cobranças</h3>
                <p className="text-gray-500 mb-6">Visualize e controle todas as cobranças dos seus clientes</p>
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <Plus size={16} className="mr-2" />
                  Criar primeira cobrança
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );

  const BoletoTituloPage = () => {
    const [step, setStep] = useState(1);
    const [barcodeValue, setBarcodeValue] = useState("");
    const [paymentValue, setPaymentValue] = useState("10,00");
    const [description, setDescription] = useState("");

    const handleBarcodeSubmit = () => {
      if (barcodeValue.trim()) {
        setStep(2);
      }
    };

    const handleConfirmPayment = () => {
      setStep(3);
    };

    const handleFinalizePayment = () => {
      setStep(4);
    };

    return (
      <div className="flex-1">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Receipt size={18} />
                <span className="font-medium">Pagamento de Título</span>
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
        <div className="p-6 max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-8">
              {/* Step 1 - Colar */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  1
                </div>
                <span className={`font-medium ${step >= 1 ? 'text-orange-500' : 'text-gray-400'}`}>
                  Colar
                </span>
              </div>
              <div className={`w-16 h-0.5 ${step >= 2 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
              
              {/* Step 2 - Digitar */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  2
                </div>
                <span className={`font-medium ${step >= 2 ? 'text-orange-500' : 'text-gray-400'}`}>
                  Digitar
                </span>
              </div>
              <div className={`w-16 h-0.5 ${step >= 3 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
              
              {/* Step 3 - Confirmar */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 3 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  3
                </div>
                <span className={`font-medium ${step >= 3 ? 'text-orange-500' : 'text-gray-400'}`}>
                  Confirmar
                </span>
              </div>
              <div className={`w-16 h-0.5 ${step >= 4 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
              
              {/* Step 4 - Finalização */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 4 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  4
                </div>
                <span className={`font-medium ${step >= 4 ? 'text-orange-500' : 'text-gray-400'}`}>
                  Finalização
                </span>
              </div>
            </div>
          </div>

          {/* Step 1 - Código de Barras */}
          {step === 1 && (
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <h2 className="text-xl font-semibold text-gray-900">PAGAMENTO DE TÍTULO</h2>
                <p className="text-gray-600">Realize pagamentos do tipo boleto ou convênio</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CÓDIGO DE BARRAS DO BOLETO *
                  </label>
                  <Input
                    placeholder="ex. 26090.08913 73840.139106 91200.000007 7 88680000000500"
                    value={barcodeValue}
                    onChange={(e) => setBarcodeValue(e.target.value)}
                    className="text-sm"
                  />
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={handleBarcodeSubmit}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8"
                    disabled={!barcodeValue.trim()}
                  >
                    Avançar
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2 - Informações do Título */}
          {step === 2 && (
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold text-gray-900">INFORMAÇÕES DO TÍTULO</h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Saldo e Banco */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-gray-600">SALDO DISPONÍVEL</span>
                        <Eye size={16} className="text-gray-400" />
                      </div>
                      <div className="text-xl font-bold text-gray-900">R$ 20,00</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-600 mb-2">VENCIMENTO</div>
                      <div className="text-lg text-gray-900">3 de out. de 2025</div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 mb-2">BANCO ASSOCIADO</div>
                  <div className="text-lg font-medium text-gray-900">Nubank</div>

                  {/* Beneficiário e Pagador */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">BENEFICIÁRIO</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-gray-500">NOME/RAZÃO SOCIAL</div>
                          <div className="font-medium">NU PAGAMENTOS SA</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">CPF/CNPJ</div>
                          <div className="font-mono">18.236.120/0001-58</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">PAGADOR</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-gray-500">NOME/RAZÃO SOCIAL</div>
                          <div className="font-medium">WALTER SOUZA MACHADO DOS SANTOS JUNIOR</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">CPF/CNPJ</div>
                          <div className="font-mono">***.960.593-**</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Valores */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">VALORES</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">VALOR DO DOCUMENTO</div>
                        <div className="font-semibold">R$ 10,00</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">JUROS</div>
                        <div className="font-semibold">R$ 0,00</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">MULTA</div>
                        <div className="font-semibold">R$ 0,00</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">DESCONTO</div>
                        <div className="font-semibold">R$ 0,00</div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-500">TOTAL ATUALIZADO</div>
                      <div className="text-xl font-bold text-gray-900">R$ 10,00</div>
                    </div>
                  </div>

                  {/* Valor a Pagar */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      DIGITE O VALOR QUE DESEJA PAGAR *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">R$</span>
                      <Input
                        value={paymentValue}
                        onChange={(e) => setPaymentValue(e.target.value)}
                        className="pl-10"
                        placeholder="10,00"
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Valor mínimo permitido: R$ 0,01<br />
                      Valor máximo permitido: R$ 999.999.999.999,99
                    </div>
                  </div>

                  {/* Descrição */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      DESCRIÇÃO
                    </label>
                    <Input
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="ex. Pagamento Internet"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="gap-2"
                    >
                      Voltar
                    </Button>
                    <Button
                      onClick={handleConfirmPayment}
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white gap-2"
                    >
                      Avançar
                      <ChevronDown size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 3 - Confirmação do Boleto */}
          {step === 3 && (
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <h2 className="text-xl font-semibold text-gray-900">Confirmar Pagamento de Boleto</h2>
                  <p className="text-gray-600">Verifique os dados e confirme o pagamento</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Dados do Boleto */}
                  <div className="border border-gray-200 rounded-lg p-6 space-y-4">
                    <div className="text-center border-b border-gray-100 pb-4">
                      <h3 className="font-semibold text-gray-900 mb-1">NU PAGAMENTOS SA</h3>
                      <p className="text-sm text-gray-500">CNPJ: 18.236.120/0001-58</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Vencimento:</span>
                        <div className="font-medium">03/10/2025</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Documento:</span>
                        <div className="font-medium">Título de Cobrança</div>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Valor a pagar:</span>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">R$ {paymentValue}</div>
                        </div>
                      </div>
                    </div>

                    {description && (
                      <div className="border-t border-gray-100 pt-4">
                        <span className="text-gray-500 text-sm">Descrição:</span>
                        <div className="font-medium">{description}</div>
                      </div>
                    )}
                  </div>

                  {/* Aviso */}
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Info size={18} className="text-orange-500 mt-0.5" />
                      <div className="text-sm text-orange-700">
                        <p className="font-medium mb-1">Atenção!</p>
                        <p>Ao confirmar, o valor será debitado imediatamente da sua conta e o pagamento será processado.</p>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setStep(2)}
                      className="gap-2"
                    >
                      Voltar
                    </Button>
                    <Button
                      onClick={handleFinalizePayment}
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white gap-2"
                    >
                      Confirmar Pagamento
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 4 - Pagamento Bem-Sucedido */}
          {step === 4 && (
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Pagamento Realizado!</h2>
                  <p className="text-gray-600 mb-6">
                    Seu boleto foi pago com sucesso e está aguardando compensação bancária.
                  </p>

                  {/* Status do Pagamento */}
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock size={18} className="text-orange-500" />
                      <span className="font-medium text-orange-700">Aguardando Compensação</span>
                    </div>
                    <p className="text-sm text-orange-600">
                      O pagamento pode levar até 1 dia útil para ser processado pelo banco do beneficiário.
                    </p>
                  </div>

                  {/* Detalhes da Transação */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                    <h3 className="font-semibold text-gray-900 mb-3 text-center">Comprovante de Pagamento</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Data/Hora:</span>
                        <span>{new Date().toLocaleString('pt-BR')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Beneficiário:</span>
                        <span>NU PAGAMENTOS SA</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">CNPJ:</span>
                        <span className="font-mono">18.236.120/0001-58</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Vencimento:</span>
                        <span>03/10/2025</span>
                      </div>
                      <div className="flex justify-between border-t pt-2 mt-2">
                        <span className="font-medium text-gray-900">Valor Pago:</span>
                        <span className="font-bold text-green-600">R$ {paymentValue}</span>
                      </div>
                      {description && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Descrição:</span>
                          <span>{description}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Ações */}
                  <div className="space-y-3">
                    <div className="flex gap-3 justify-center">
                      <Button
                        variant="outline"
                        className="gap-2"
                        onClick={() => {
                          // Simular download do comprovante
                          console.log("Download do comprovante");
                        }}
                      >
                        <Download size={16} />
                        Baixar Comprovante
                      </Button>
                      <Button
                        variant="outline"
                        className="gap-2"
                        onClick={() => {
                          // Compartilhar comprovante
                          if (navigator.share) {
                            navigator.share({
                              title: 'Comprovante de Pagamento',
                              text: `Pagamento de boleto no valor de R$ ${paymentValue} realizado com sucesso.`
                            });
                          }
                        }}
                      >
                        <ArrowUpRight size={16} />
                        Compartilhar
                      </Button>
                    </div>
                    
                    <div className="flex gap-3 justify-center">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setStep(1);
                          setBarcodeValue("");
                          setPaymentValue("10,00");
                          setDescription("");
                        }}
                      >
                        Novo Pagamento
                      </Button>
                      <Button
                        onClick={() => setCurrentPage("dashboard")}
                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white"
                      >
                        Voltar ao Início
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    );
  };

  const PlanilhaHistoricoPage = () => {
    return (
      <div className="flex-1">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <BarChart3 size={18} />
                <span className="font-medium">Planilha - Histórico</span>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Sistema Online
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Bell size={16} />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings size={16} />
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
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Histórico de Lotes</h1>
              <p className="text-gray-600">Visualize o histórico completo dos seus lotes processados</p>
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg">
              <Download size={18} className="mr-2" />
              Exportar Relatório
            </Button>
          </div>

          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Buscar..." 
                  className="pl-10 bg-white border-gray-200 focus:border-orange-500"
                />
              </div>
              <Button variant="outline" className="gap-2">
                Avançado
                <ChevronDown size={16} />
              </Button>
              <Button variant="ghost" size="sm">
                <RefreshCw size={16} />
              </Button>
            </div>

            {/* Table */}
            <Card className="overflow-hidden shadow-sm">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-1">
                    <span className="text-sm font-semibold text-gray-700">Qtd</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-sm font-semibold text-gray-700">Valor Total</span>
                  </div>
                  <div className="col-span-1">
                    <span className="text-sm font-semibold text-gray-700 text-center">Aguard.</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-sm font-semibold text-gray-700">Em Process.</span>
                  </div>
                  <div className="col-span-1">
                    <span className="text-sm font-semibold text-gray-700">Process.</span>
                  </div>
                  <div className="col-span-1">
                    <span className="text-sm font-semibold text-gray-700">Falhas</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-sm font-semibold text-gray-700">Última Alteração</span>
                  </div>
                  <div className="col-span-1">
                    <span className="text-sm font-semibold text-gray-700">Status</span>
                  </div>
                  <div className="col-span-1">
                    <span className="text-sm font-semibold text-gray-700">Ações</span>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {/* Lote 1 - Cancelado */}
                <div className="px-6 py-5 hover:bg-gray-50 transition-colors">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-1">
                      <span className="font-medium text-gray-900">1</span>
                    </div>
                    <div className="col-span-2">
                      <span className="font-semibold text-gray-900">R$ 0,50</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-gray-900">1</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-900">0</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-gray-900">0</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-gray-900">0</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-900">22/09/2025, 16:32</span>
                    </div>
                    <div className="col-span-1">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200">
                        Cancelado
                      </Badge>
                    </div>
                    <div className="col-span-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => console.log("Ver detalhes do lote")}>
                        <Eye size={16} />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Lote 2 - Cancelado */}
                <div className="px-6 py-5 hover:bg-gray-50 transition-colors">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-1">
                      <span className="font-medium text-gray-900">1</span>
                    </div>
                    <div className="col-span-2">
                      <span className="font-semibold text-gray-900">R$ 0,50</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-gray-900">1</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-900">0</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-gray-900">0</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-gray-900">0</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-900">22/09/2025, 15:35</span>
                    </div>
                    <div className="col-span-1">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200">
                        Cancelado
                      </Badge>
                    </div>
                    <div className="col-span-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => console.log("Ver detalhes do lote")}>
                        <Eye size={16} />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Lote 3 - Concluído */}
                <div className="px-6 py-5 hover:bg-gray-50 transition-colors">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-1">
                      <span className="font-medium text-gray-900">3</span>
                    </div>
                    <div className="col-span-2">
                      <span className="font-semibold text-gray-900">R$ 2.550,50</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-gray-900">0</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-900">0</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-gray-900">3</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-gray-900">0</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-900">22/09/2025, 14:33</span>
                    </div>
                    <div className="col-span-1">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                        Concluído
                      </Badge>
                    </div>
                    <div className="col-span-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => console.log("Ver detalhes do lote")}>
                        <Eye size={16} />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Lote 4 - Falha */}
                <div className="px-6 py-5 hover:bg-gray-50 transition-colors">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-1">
                      <span className="font-medium text-gray-900">2</span>
                    </div>
                    <div className="col-span-2">
                      <span className="font-semibold text-gray-900">R$ 1.750,00</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-gray-900">0</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-900">0</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-gray-900">1</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-gray-900">1</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-900">22/09/2025, 14:32</span>
                    </div>
                    <div className="col-span-1">
                      <Badge variant="secondary" className="bg-red-100 text-red-700 border-red-200">
                        Falha
                      </Badge>
                    </div>
                    <div className="col-span-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => console.log("Ver detalhes do lote")}>
                        <Eye size={16} />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Lote 5 - Processando */}
                <div className="px-6 py-5 hover:bg-gray-50 transition-colors">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-1">
                      <span className="font-medium text-gray-900">5</span>
                    </div>
                    <div className="col-span-2">
                      <span className="font-semibold text-gray-900">R$ 4.200,75</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-gray-900">2</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-900">3</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-gray-900">0</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-gray-900">0</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-900">22/09/2025, 13:15</span>
                    </div>
                    <div className="col-span-1">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                        Processando
                      </Badge>
                    </div>
                    <div className="col-span-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => console.log("Ver detalhes do lote")}>
                        <Eye size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Pagination */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <span>25</span>
                <Select defaultValue="25">
                  <SelectTrigger className="w-16 h-8 text-xs inline-flex ml-1 mr-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-gray-500">por página</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <ChevronDown size={16} className="rotate-90" />
                </Button>
                <div className="w-8 h-8 bg-orange-500 text-white rounded flex items-center justify-center">
                  <span className="text-sm">1</span>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <ChevronDown size={16} className="-rotate-90" />
                </Button>
              </div>
              
              <div className="text-sm text-gray-500">
                5 itens encontrados
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PlanilhaPendentesPage = () => {
    return (
      <div className="flex-1">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock size={18} />
                <span className="font-medium">Planilha - Pendentes</span>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Sistema Online
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Bell size={16} />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings size={16} />
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
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Pagamentos em Lote</h1>
              <p className="text-gray-600">Acompanhe e gerencie seus lotes de pagamento</p>
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg">
              <Plus size={18} className="mr-2" />
              Novo Lote
            </Button>
          </div>

          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Procurar por data, valor ou status" 
                  className="pl-10 bg-white border-gray-200 focus:border-orange-500"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter size={16} />
                Filtros
              </Button>
              <Button variant="outline" className="gap-2">
                <Calendar size={16} />
                Período
              </Button>
            </div>

            {/* Table */}
            <Card className="overflow-hidden shadow-sm">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-1">
                    <span className="text-sm font-semibold text-gray-700">Qtd</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-sm font-semibold text-gray-700">Valor Total</span>
                  </div>
                  <div className="col-span-1 text-left py-[0px] pt-[0px] pr-[20px] pb-[0px] pl-[0px]">
                    <span className="text-sm font-semibold text-gray-700 text-center p-[0px] mt-[0px] mr-[0px] mb-[0px] ml-[-24px]">Aguard.</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-sm font-semibold text-gray-700">Em Process.</span>
                  </div>
                  <div className="col-span-1 mt-[0px] mr-[0px] mb-[0px] ml-[-20px]">
                    <span className="text-sm font-semibold text-gray-700">Process.</span>
                  </div>
                  <div className="col-span-1">
                    <span className="text-sm font-semibold text-gray-700 mx-[-15px] my-[0px]">Falhas</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-sm font-semibold text-gray-700">Última Alteração</span>
                  </div>
                  <div className="col-span-1">
                    <span className="text-sm font-semibold text-gray-700">Status</span>
                  </div>
                  <div className="col-span-1">
                    <span className="text-sm font-semibold text-gray-700 mx-[20px] my-[0px]">Ações</span>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                <div className="px-6 py-5 hover:bg-gray-50 transition-colors">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-1">
                      <span className="font-medium text-gray-900 px-[10px] py-[0px]">1</span>
                    </div>
                    <div className="col-span-2">
                      <span className="font-semibold text-gray-900">R$ 0,50</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-gray-900">1</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-900 mx-[30px] my-[0px]">0</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-gray-900">0</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-gray-900">0</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-900">22/09/2025, 16:32</span>
                    </div>
                    <div className="col-span-1">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 border-yellow-200 text-left px-[8px] py-[2px] my-[0px] mx-[-10px]">
                        Aguard. aprovação
                      </Badge>
                    </div>
                    <div className="col-span-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 mx-[20px] my-[0px]" onClick={() => console.log("Ver detalhes do lote")}>
                        <Eye size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Pagination */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Mostrando <span className="font-medium">1-1</span> de <span className="font-medium">1</span> lote
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled className="gap-2">
                  Anterior
                </Button>
                <Button size="sm" className="bg-orange-500 text-white border-orange-500 w-8 h-8 p-0">
                  1
                </Button>
                <Button variant="outline" size="sm" disabled className="gap-2">
                  Próximo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

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

    // Calcular estatísticas baseadas nos dados atuais
    const totalRecords = tableData.length;
    const validRecords = tableData.filter(row => row.isValid).length;
    const errorRecords = tableData.filter(row => !row.isValid).length;
    const totalValidValue = tableData.filter(row => row.isValid).reduce((sum, row) => sum + parseFloat(row.value), 0);
    const totalErrorValue = tableData.filter(row => !row.isValid).reduce((sum, row) => sum + parseFloat(row.value), 0);
    const totalGeneralValue = totalValidValue + totalErrorValue;

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
        console.log("File uploaded:", e.dataTransfer.files[0]);
      }
    };

    const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setUploadedFile(e.target.files[0]);
        console.log("File selected:", e.target.files[0]);
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
        <div className="p-6 max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-8">
              {/* Step 1 - Importar */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  1
                </div>
                <span className={`font-medium ${step >= 1 ? 'text-orange-500' : 'text-gray-400'}`}>
                  Importar
                </span>
              </div>
              <div className={`w-16 h-0.5 ${step >= 2 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
              
              {/* Step 2 - Validar */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  2
                </div>
                <span className={`font-medium ${step >= 2 ? 'text-orange-500' : 'text-gray-400'}`}>
                  Validar
                </span>
              </div>
              <div className={`w-16 h-0.5 ${step >= 3 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
              
              {/* Step 3 - Confirmar */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 3 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  3
                </div>
                <span className={`font-medium ${step >= 3 ? 'text-orange-500' : 'text-gray-400'}`}>
                  Confirmar
                </span>
              </div>
              <div className={`w-16 h-0.5 ${step >= 4 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
              
              {/* Step 4 - Finalização */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 4 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  4
                </div>
                <span className={`font-medium ${step >= 4 ? 'text-orange-500' : 'text-gray-400'}`}>
                  Finalização
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

          {/* Step 3 - Confirmar (Tela de Finalização) */}
          {step === 3 && (
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-8 text-center">
                  {/* Success Icon */}
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle size={24} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">FINALIZAR PLANILHA DE PAGAMENTOS</h2>
                  
                  {/* Success Message */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                    <div className="flex items-center justify-center gap-3">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                      <span className="text-green-700 font-medium">
                        Pagamentos processados com sucesso! Próximo passo é a aprovação dos pagamentos pelo gestor.
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 justify-center">
                    <Button
                      variant="outline"
                      onClick={() => {
                        // Reset form and go back to step 1
                        setStep(1);
                        setUploadedFile(null);
                        // Reset table data to initial state
                        setTableData([
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
                      }}
                      className="gap-2"
                    >
                      <RefreshCw size={16} />
                      Realizar nova importação
                    </Button>
                    <Button
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white gap-2"
                      onClick={() => setCurrentPage("planilha-pendentes")}
                    >
                      <CheckCircle size={16} />
                      Aprovar agora
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Modal de Exemplo */}
        <Dialog open={showExampleModal} onOpenChange={setShowExampleModal}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold text-gray-900">
                Ajuda para importação de arquivos
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <p className="text-gray-600">
                Para realizar a importação, seu arquivo deve seguir o formato abaixo:
              </p>

              {/* Formatos e Tipos */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText size={18} className="text-gray-600" />
                    <span className="font-medium text-gray-900">Formatos aceitos:</span>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">XLS</Badge>
                    <Badge variant="secondary">CSV</Badge>
                    <Badge variant="secondary">XLSX</Badge>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText size={18} className="text-gray-600" />
                    <span className="font-medium text-gray-900">Tipos de conta:</span>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">CACC</Badge>
                    <Badge variant="secondary">TRAN</Badge>
                    <Badge variant="secondary">SVGS</Badge>
                    <Badge variant="secondary">SLRY</Badge>
                  </div>
                </div>
              </div>

              {/* Colunas Necessárias */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Colunas necessárias (em ordem):</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <User size={16} className="text-orange-500" />
                    <span className="text-gray-900">Nome do favorecido</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText size={16} className="text-orange-500" />
                    <span className="text-gray-900">CPF/CNPJ</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap size={16} className="text-orange-500" />
                    <span className="text-gray-900">Chave PIX</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign size={16} className="text-orange-500" />
                    <span className="text-gray-900">Valor da transferência (EX: 1200 - 1200.00)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText size={16} className="text-gray-400" />
                    <span className="text-gray-500">Código do banco - ISPB (opcional)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText size={16} className="text-gray-400" />
                    <span className="text-gray-500">Agência (opcional)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText size={16} className="text-gray-400" />
                    <span className="text-gray-500">Conta (opcional)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText size={16} className="text-gray-400" />
                    <span className="text-gray-500">Tipo de Conta (opcional)</span>
                  </div>
                </div>
              </div>

              {/* Botão de Download */}
              <div className="flex justify-center pt-4">
                <Button
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white gap-2"
                  onClick={() => {
                    // Criar dados de exemplo para a planilha
                    const exampleData = [
                      ['Nome do favorecido', 'CPF/CNPJ', 'Chave PIX', 'Valor da transferência', 'Código do banco - ISPB', 'Agência', 'Conta', 'Tipo de Conta'],
                      ['João Silva Santos', '123.456.789-00', 'joao.silva@email.com', '1200.00', '60746948', '1234', '567890-1', 'CACC'],
                      ['Maria Oliveira Ltda', '12.345.678/0001-90', '+5511999999999', '850.50', '00000000', '0001', '123456-0', 'TRAN'],
                      ['Pedro Costa', '987.654.321-11', '987.654.321-11', '500.00', '60701190', '2468', '987654-3', 'SVGS'],
                      ['Ana Santos ME', '98.765.432/0001-12', 'ana.santos@empresa.com', '2500.75', '60746948', '1357', '456789-8', 'SLRY']
                    ];

                    // Converter para CSV
                    const csvContent = exampleData.map(row => 
                      row.map(field => `"${field}"`).join(',')
                    ).join('\n');

                    // Criar blob e fazer download
                    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                    const link = document.createElement('a');
                    const url = URL.createObjectURL(blob);
                    link.setAttribute('href', url);
                    link.setAttribute('download', 'planilha_exemplo_walter_bank.csv');
                    link.style.visibility = 'hidden';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                  }}
                >
                  <Download size={16} />
                  Baixar arquivo de exemplo
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  };

  // Dados de exemplo para as transações
  const transactionsData = [
    {
      id: 1,
      valorBruto: "5,50",
      valorLiquido: "5,50",
      taxas: "0,00", 
      tipo: "Pix",
      transacao: "Saque",
      liquidacao: "24/09/2025",
      dataTransacao: "25 de set de 2025",
      horario: "13:51",
      idTransacao: "c3f62bd8-3fb5-4b24-8f36-c92d0455e314",
      endToEnd: "E13935893202509251651lNhwNXgDUO9",
      contaOrigem: {
        nome: "DETSEGINFOR SERVICOS DIGITAIS LTDA",
        cpfCnpj: "57.439.304/0001-77",
        instituicao: "CELCOIN"
      },
      contaDestino: {
        nome: "LUCAS FERNANDES LEAL COSTA", 
        cpfCnpj: "***66302727",
        instituicao: "BCO DO BRASIL S.A."
      }
    },
    {
      id: 2,
      valorBruto: "10,00",
      valorLiquido: "9,55",
      taxas: "0,45",
      tipo: "Pix", 
      transacao: "Depósito",
      liquidacao: "24/09/2025",
      dataTransacao: "25 de set de 2025",
      horario: "14:20",
      idTransacao: "d4a73be9-4fc6-5c35-9a47-d03e1566f425",
      endToEnd: "E24046904213509251743mOjwPYhEVO2",
      contaOrigem: {
        nome: "MARIA SILVA COMERCIO LTDA",
        cpfCnpj: "12.345.678/0001-90", 
        instituicao: "NUBANK"
      },
      contaDestino: {
        nome: "WALTER SOUZA MACHADO",
        cpfCnpj: "***960593**",
        instituicao: "FIRE BANKING"
      }
    }
    // Adicionar mais transações conforme necessário
  ];

  const openTransactionModal = (transactionId: number) => {
    const transaction = transactionsData.find(t => t.id === transactionId);
    if (transaction) {
      setSelectedTransaction(transaction);
      setTransactionModalOpen(true);
    }
  };

  const ExtratoPage = () => (
    <div className="flex-1">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <FileText size={18} />
              <span className="font-medium">Extrato</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">R$ 303,92</span>
              <Eye size={16} className="text-gray-400 cursor-pointer" />
            </div>
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-orange-500 text-white text-sm">WN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Saldo Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Saldo</p>
              <h1 className="text-4xl font-bold text-gray-900">R$ 303,92</h1>
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
              Sacar Saldo
            </Button>
          </div>
        </div>

        {/* Extrato Section */}
        <div className="space-y-6">
          {/* Header with search and actions */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">📄 Extrato</h2>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Pesquisar" 
                  className="pl-10 w-64 bg-white border-gray-200 focus:border-orange-500"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter size={16} />
                Filtro
              </Button>
              <Button variant="outline" className="gap-2">
                <Download size={16} />
                Exportar
              </Button>
            </div>
          </div>

          {/* Table */}
          <Card className="overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Valor bruto</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Taxas</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Juros e tarifas</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Valor líquido</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Tipo de Produto</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Transação</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Cliente</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Documento</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Transação</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {/* Transaction 1 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">R$ 5,50</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">R$ 0,00</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">R$ 0,00</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">R$ 5,50</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Pix</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Saque</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">João Almeida</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900 font-mono">123.456.789-00</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">25/09/2025</span>
                    </td>
                    <td className="px-4 py-3">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-orange-500"
                        onClick={() => openTransactionModal(1)}
                      >
                        <Eye size={16} />
                      </Button>
                    </td>
                  </tr>

                  {/* Transaction 2 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">R$ 10,00</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">R$ 0,45</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">R$ 0,00</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">R$ 9,55</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Pix</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Depósito</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Bruno Magrini</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900 font-mono">12.345.678/0001-90</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">25/09/2025</span>
                    </td>
                    <td className="px-4 py-3">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-orange-500"
                        onClick={() => openTransactionModal(2)}
                      >
                        <Eye size={16} />
                      </Button>
                    </td>
                  </tr>

                  {/* Transaction 3 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">R$ 9,50</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">R$ 0,45</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">R$ 0,00</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">R$ 9,05</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Pix</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Saque</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Victor Papa</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900 font-mono">987.654.321-11</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">25/09/2025</span>
                    </td>
                    <td className="px-4 py-3">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-orange-500"
                        onClick={() => openTransactionModal(1)}
                      >
                        <Eye size={16} />
                      </Button>
                    </td>
                  </tr>

                  {/* Transaction 4 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">R$ 11,00</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">R$ 0,45</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">R$ 0,00</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">R$ 10,55</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Pix</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Depósito</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Pix de 50 centavos</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900 font-mono">98.765.432/0001-12</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">25/09/2025</span>
                    </td>
                    <td className="px-4 py-3">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-orange-500"
                        onClick={() => openTransactionModal(1)}
                      >
                        <Eye size={16} />
                      </Button>
                    </td>
                  </tr>

                  {/* Transaction 5 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">R$ 19,00</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">R$ 0,45</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">R$ 0,00</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">R$ 18,55</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Pix</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Saque</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">João Almeida</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900 font-mono">456.789.123-77</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">25/09/2025</span>
                    </td>
                    <td className="px-4 py-3">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-orange-500"
                        onClick={() => openTransactionModal(1)}
                      >
                        <Eye size={16} />
                      </Button>
                    </td>
                  </tr>

                  {/* Transaction 6 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">R$ 49,00</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">R$ 0,45</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">R$ 0,00</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">R$ 48,55</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Pix</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Depósito</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Bruno Magrini</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900 font-mono">78.901.234/0001-56</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">25/09/2025</span>
                    </td>
                    <td className="px-4 py-3">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-orange-500"
                        onClick={() => openTransactionModal(1)}
                      >
                        <Eye size={16} />
                      </Button>
                    </td>
                  </tr>

                  {/* Transaction 7 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">R$ 50,00</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">R$ 0,45</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">R$ 0,00</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">R$ 49,55</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Pix</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Depósito</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Victor Papa</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900 font-mono">321.654.987-44</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">25/09/2025</span>
                    </td>
                    <td className="px-4 py-3">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-orange-500"
                        onClick={() => openTransactionModal(1)}
                      >
                        <Eye size={16} />
                      </Button>
                    </td>
                  </tr>

                  {/* Transaction 8 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">R$ 52,80</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">R$ 0,45</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">R$ 0,00</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">R$ 52,35</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Pix</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Saque</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Pix de 50 centavos</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900 font-mono">11.222.333/0001-44</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">25/09/2025</span>
                    </td>
                    <td className="px-4 py-3">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-orange-500"
                        onClick={() => openTransactionModal(1)}
                      >
                        <Eye size={16} />
                      </Button>
                    </td>
                  </tr>

                  {/* Transaction 9 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">R$ 54,00</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">R$ 0,45</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">R$ 0,00</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">R$ 53,55</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Pix</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">Depósito</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">João Almeida</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900 font-mono">654.321.987-33</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-gray-900">25/09/2025</span>
                    </td>
                    <td className="px-4 py-3">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-orange-500"
                        onClick={() => openTransactionModal(1)}
                      >
                        <Eye size={16} />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* Pagination */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              01 de 1 páginas
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                <ChevronDown size={16} className="rotate-90" />
              </Button>
              <Button size="sm" className="bg-orange-500 text-white border-orange-500 w-8 h-8 p-0">
                1
              </Button>
              <Button variant="outline" size="sm" disabled>
                <ChevronDown size={16} className="-rotate-90" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ConfiguracoesPage = () => (
    <div className="flex-1">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Settings size={18} />
              <span className="font-medium">Configurações</span>
            </div>
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Configurações</h1>
          <p className="text-gray-600">Gerencie suas preferências e configurações da conta</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Settings Categories */}
          <div className="lg:col-span-1">
            <Card className="p-1">
              <nav className="space-y-1">
                <div className="flex items-center gap-3 px-4 py-3 text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg cursor-pointer">
                  <User size={18} />
                  <span>Perfil</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <Lock size={18} />
                  <span>Segurança</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <Bell size={18} />
                  <span>Notificações</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <Palette size={18} />
                  <span>Aparência</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <Smartphone size={18} />
                  <span>Dispositivos</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <HelpCircle size={18} />
                  <span>Ajuda & Suporte</span>
                </div>
              </nav>
            </Card>
          </div>

          {/* Main Settings Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Section */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <User size={20} className="text-orange-500" />
                  <h3 className="text-lg font-semibold">Informações do Perfil</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-orange-500 text-white text-xl">WS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Walter Souza Machado Dos Santos</h4>
                    <p className="text-sm text-gray-500">walter.machado@firebanking.io</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Alterar Foto
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Nome Completo</label>
                    <Input defaultValue="Walter Souza Machado Dos Santos" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                    <Input defaultValue="walter.machado@firebanking.io" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Telefone</label>
                    <Input defaultValue="(85) 99102-9888" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">CPF</label>
                    <Input defaultValue="608.960.593-08" disabled />
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <Button variant="outline">Cancelar</Button>
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    Salvar Alterações
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Security Section */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lock size={20} className="text-orange-500" />
                  <h3 className="text-lg font-semibold">Segurança</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Autenticação de Dois Fatores</h4>
                    <p className="text-sm text-gray-500">Adicione uma camada extra de segurança</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Ativo</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Senha</h4>
                    <p className="text-sm text-gray-500">Última alteração: há 30 dias</p>
                  </div>
                  <Button variant="outline" size="sm">Alterar Senha</Button>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Sessões Ativas</h4>
                    <p className="text-sm text-gray-500">2 dispositivos conectados</p>
                  </div>
                  <Button variant="outline" size="sm">Ver Dispositivos</Button>
                </div>
              </CardContent>
            </Card>

            {/* Notifications Section */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Bell size={20} className="text-orange-500" />
                  <h3 className="text-lg font-semibold">Preferências de Notificação</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Transações</h4>
                    <p className="text-sm text-gray-500">Receber notificações de PIX e transferências</p>
                  </div>
                  <Button variant="outline" size="sm" className="bg-orange-500 text-white border-orange-500">
                    Ativo
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Cobranças</h4>
                    <p className="text-sm text-gray-500">Alertas sobre vencimentos e pagamentos</p>
                  </div>
                  <Button variant="outline" size="sm" className="bg-orange-500 text-white border-orange-500">
                    Ativo
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Promoções</h4>
                    <p className="text-sm text-gray-500">Ofertas especiais e novidades</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Inativo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Walter Bank</h2>
              <p className="text-xs text-gray-500">FINTECH OFICIAL</p>
            </div>
          </div>
          
          <nav className="space-y-1">
            <div 
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                currentPage === "dashboard" 
                  ? "text-white bg-gradient-to-r from-orange-500 to-red-500" 
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setCurrentPage("dashboard")}
            >
              <Home size={18} />
              <span>Página inicial</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <Search size={18} />
              <span>Busca de Transações</span>
            </div>
            
            <div 
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                currentPage === "extrato" 
                  ? "text-white bg-gradient-to-r from-orange-500 to-red-500" 
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setCurrentPage("extrato")}
            >
              <FileText size={18} />
              <span>Extrato</span>
            </div>

            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <ArrowLeftRight size={18} />
              <span>Transferência Interna</span>
            </div>
            <div>
              <div 
                className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer"
                onClick={() => setPixDropdownOpen(!pixDropdownOpen)}
              >
                <Zap size={18} />
                <span>Pix</span>
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <ChevronDown size={14} className={`text-gray-400 transition-transform ${pixDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>
              {pixDropdownOpen && (
                <div className="ml-6 space-y-1 mt-1">
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg cursor-pointer text-sm">
                    <Heart size={16} />
                    <span>Para favorecido</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg cursor-pointer text-sm">
                    <Zap size={16} />
                    <span>Com Chave</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg cursor-pointer text-sm">
                    <Copy size={16} />
                    <span>Copia e Cola</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg cursor-pointer text-sm">
                    <FileText size={16} />
                    <span>Digitado</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg cursor-pointer text-sm">
                    <Clock size={16} />
                    <span>Agendamentos</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg cursor-pointer text-sm">
                    <Star size={16} />
                    <span>Chaves Pix</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg cursor-pointer text-sm">
                    <Shield size={16} />
                    <span>Infrações</span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <Receipt size={18} />
              <span>Transações Pendentes</span>
            </div>
            <div 
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                currentPage === "gestao-cobranca" 
                  ? "text-white bg-gradient-to-r from-orange-500 to-red-500" 
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setCurrentPage("gestao-cobranca")}
            >
              <Receipt size={18} />
              <span>Gestão de cobrança</span>
            </div>
            <div 
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                currentPage === "boleto-titulo" 
                  ? "text-white bg-gradient-to-r from-orange-500 to-red-500" 
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setCurrentPage("boleto-titulo")}
            >
              <Receipt size={18} />
              <span>Boleto ou Título</span>
            </div>
            <div>
              <div 
                className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer"
                onClick={() => setLotesDropdownOpen(!lotesDropdownOpen)}
              >
                <PiggyBank size={18} />
                <span>Lotes</span>
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <ChevronDown size={14} className={`text-gray-400 transition-transform ${lotesDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>
              {lotesDropdownOpen && (
                <div className="ml-6 space-y-1 mt-1">
                  <div 
                    className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg cursor-pointer text-sm"
                    onClick={() => setCurrentPage("planilha-importacao")}
                  >
                    <FileText size={16} />
                    <span>Planilha - Importação</span>
                  </div>
                  <div 
                    className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg cursor-pointer text-sm"
                    onClick={() => setCurrentPage("planilha-pendentes")}
                  >
                    <Clock size={16} />
                    <span>Planilha - Pendentes</span>
                  </div>
                  <div 
                    className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg cursor-pointer text-sm"
                    onClick={() => setCurrentPage("planilha-historico")}
                  >
                    <BarChart3 size={16} />
                    <span>Planilha - Histórico</span>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
        
        <div className="fixed bottom-4 left-4 w-56 space-y-3">
          {/* User Profile */}
          
          {/* Footer Actions */}
          <div className="space-y-1">
            <div 
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                currentPage === "configuracoes" 
                  ? "text-white bg-gradient-to-r from-orange-500 to-red-500" 
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setCurrentPage("configuracoes")}
            >
              <Settings size={16} />
              <span className="text-sm">Configurações</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <LogOut size={18} />
              <span>Sair</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Conditional Rendering */}
      {currentPage === "dashboard" && <DashboardPage />}
      {currentPage === "gestao-cobranca" && <GestaoCobrancaPage />}
      {currentPage === "boleto-titulo" && <BoletoTituloPage />}
      {currentPage === "extrato" && <ExtratoPage />}
      {currentPage === "planilha-importacao" && <PlanilhaImportacaoPage />}
      {currentPage === "planilha-pendentes" && <PlanilhaPendentesPage />}
      {currentPage === "planilha-historico" && <PlanilhaHistoricoPage />}
      {currentPage === "configuracoes" && <ConfiguracoesPage />}

      {/* Modal de Informações da Transação */}
      <Dialog open={transactionModalOpen} onOpenChange={setTransactionModalOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] p-0 gap-0">
          <div className="flex flex-col h-full">
            {/* Header fixo */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10 rounded-[1000px]">
              <h3 className="font-medium text-gray-900">Info. da transação</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTransactionModalOpen(false)}
                className="h-6 w-6 p-0 hover:bg-gray-100"
              >
                <X size={16} />
              </Button>
            </div>

            {/* Conteúdo scrollável */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {selectedTransaction && (
                <>
                  {/* Valor */}
                  <div>
                    <h4 className="text-sm text-gray-600 mb-1">Valor</h4>
                    <div className="text-2xl font-bold text-gray-900">R$ {selectedTransaction.valorBruto}</div>
                  </div>

                  {/* Ações */}
                  <div>
                    <h4 className="text-sm text-gray-600 mb-2">Ações</h4>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-orange-500 border-orange-200 hover:bg-orange-50"
                    >
                      ⬇ Baixar comprovante
                    </Button>
                  </div>

                  {/* Informações principais em grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm text-gray-600 mb-1">Tipo</h4>
                      <div className="text-gray-900">{selectedTransaction.tipo}</div>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-600 mb-1">Taxa</h4>
                      <div className="text-gray-900">R$ {selectedTransaction.taxas}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm text-gray-600 mb-1">Data da transação:</h4>
                      <div className="text-gray-900">{selectedTransaction.dataTransacao}</div>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-600 mb-1">Horário:</h4>
                      <div className="text-gray-900">{selectedTransaction.horario}</div>
                    </div>
                  </div>

                  {/* ID da transação */}
                  <div>
                    <h4 className="text-sm text-gray-600 mb-2">ID da transação:</h4>
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded text-xs font-mono text-gray-700">
                      <span className="flex-1 break-all">{selectedTransaction.idTransacao}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 flex-shrink-0"
                        onClick={async () => {
                          try {
                            await navigator.clipboard.writeText(selectedTransaction.idTransacao);
                            toast.success('ID da transação copiado com sucesso!', {
                              description: 'O ID foi copiado para sua área de transferência.',
                              duration: 3000,
                            });
                          } catch (err) {
                            console.error('Erro ao copiar:', err);
                            // Fallback para navegadores mais antigos
                            const textArea = document.createElement('textarea');
                            textArea.value = selectedTransaction.idTransacao;
                            document.body.appendChild(textArea);
                            textArea.select();
                            document.execCommand('copy');
                            document.body.removeChild(textArea);
                            toast.success('ID da transação copiado com sucesso!', {
                              description: 'O ID foi copiado para sua área de transferência.',
                              duration: 3000,
                            });
                          }
                        }}
                      >
                        <Copy size={12} />
                      </Button>
                    </div>
                  </div>

                  {/* End to end */}
                  <div>
                    <h4 className="text-sm text-gray-600 mb-2">End to end</h4>
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded text-xs font-mono text-gray-700">
                      <span className="flex-1 break-all">{selectedTransaction.endToEnd}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 flex-shrink-0"
                        onClick={async () => {
                          try {
                            await navigator.clipboard.writeText(selectedTransaction.endToEnd);
                            toast.success('End to end copiado com sucesso!', {
                              description: 'O código foi copiado para sua área de transferência.',
                              duration: 3000,
                            });
                          } catch (err) {
                            console.error('Erro ao copiar:', err);
                            // Fallback para navegadores mais antigos
                            const textArea = document.createElement('textarea');
                            textArea.value = selectedTransaction.endToEnd;
                            document.body.appendChild(textArea);
                            textArea.select();
                            document.execCommand('copy');
                            document.body.removeChild(textArea);
                            toast.success('End to end copiado com sucesso!', {
                              description: 'O código foi copiado para sua área de transferência.',
                              duration: 3000,
                            });
                          }
                        }}
                      >
                        <Copy size={12} />
                      </Button>
                    </div>
                  </div>

                  {/* Contas de Origem e Destino - Lado a Lado */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Conta de origem */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Conta de origem</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="text-sm text-gray-600 mb-1">Nome</h5>
                          <div className="text-gray-900">{selectedTransaction.contaOrigem.nome}</div>
                        </div>
                        <div>
                          <h5 className="text-sm text-gray-600 mb-1">CPF/CNPJ</h5>
                          <div className="text-gray-900 font-mono">{selectedTransaction.contaOrigem.cpfCnpj}</div>
                        </div>
                        <div>
                          <h5 className="text-sm text-gray-600 mb-1">Instituição</h5>
                          <div className="text-gray-900">{selectedTransaction.contaOrigem.instituicao}</div>
                        </div>
                      </div>
                    </div>

                    {/* Conta de Destino */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Conta de Destino</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="text-sm text-gray-600 mb-1">Nome</h5>
                          <div className="text-gray-900">{selectedTransaction.contaDestino.nome}</div>
                        </div>
                        <div>
                          <h5 className="text-sm text-gray-600 mb-1">CPF/CNPJ</h5>
                          <div className="text-gray-900 font-mono">{selectedTransaction.contaDestino.cpfCnpj}</div>
                        </div>
                        <div>
                          <h5 className="text-sm text-gray-600 mb-1">Instituição</h5>
                          <div className="text-gray-900">{selectedTransaction.contaDestino.instituicao}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Toaster para notificações */}
      <Toaster />
    </div>
  );
}