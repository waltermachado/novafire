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
                          <div className="text-2xl font-bold text-blue-900">4</div>
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
                          <div className="text-2xl font-bold text-green-900">3</div>
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
                          <div className="text-2xl font-bold text-red-900">1</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Alert de Validação */}
                  <Alert className="bg-yellow-50 border-yellow-200">
                    <Info className="h-4 w-4 text-yellow-600" />
                    <AlertDescription className="text-yellow-800">
                      <strong>Atenção!</strong> Encontramos alguns erros nos dados. Revise as informações destacadas antes de continuar.
                    </AlertDescription>
                  </Alert>

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
                            {/* Linha 1 - Válida */}
                            <tr className="hover:bg-gray-50">
                              <td className="px-4 py-3">
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                  <CheckCircle className="h-4 w-4 text-white" />
                                </div>
                              </td>
                              <td className="px-4 py-3">
                                <div className="font-medium text-gray-900">João Silva Santos</div>
                              </td>
                              <td className="px-4 py-3">
                                <div className="font-mono text-gray-900">123.456.789-00</div>
                              </td>
                              <td className="px-4 py-3">
                                <div className="text-gray-900">joao.silva@email.com</div>
                              </td>
                              <td className="px-4 py-3">
                                <div className="font-semibold text-gray-900">R$ 1.200,00</div>
                              </td>
                              <td className="px-4 py-3">
                                <Button variant="ghost" size="sm" className="gap-1">
                                  <Edit size={14} />
                                  Editar
                                </Button>
                              </td>
                            </tr>

                            {/* Linha 2 - Válida */}
                            <tr className="hover:bg-gray-50">
                              <td className="px-4 py-3">
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                  <CheckCircle className="h-4 w-4 text-white" />
                                </div>
                              </td>
                              <td className="px-4 py-3">
                                <div className="font-medium text-gray-900">Maria Oliveira Ltda</div>
                              </td>
                              <td className="px-4 py-3">
                                <div className="font-mono text-gray-900">12.345.678/0001-90</div>
                              </td>
                              <td className="px-4 py-3">
                                <div className="text-gray-900">+5511999999999</div>
                              </td>
                              <td className="px-4 py-3">
                                <div className="font-semibold text-gray-900">R$ 850,50</div>
                              </td>
                              <td className="px-4 py-3">
                                <Button variant="ghost" size="sm" className="gap-1">
                                  <Edit size={14} />
                                  Editar
                                </Button>
                              </td>
                            </tr>

                            {/* Linha 3 - Válida */}
                            <tr className="hover:bg-gray-50">
                              <td className="px-4 py-3">
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                  <CheckCircle className="h-4 w-4 text-white" />
                                </div>
                              </td>
                              <td className="px-4 py-3">
                                <div className="font-medium text-gray-900">Pedro Costa</div>
                              </td>
                              <td className="px-4 py-3">
                                <div className="font-mono text-gray-900">987.654.321-11</div>
                              </td>
                              <td className="px-4 py-3">
                                <div className="text-gray-900">987.654.321-11</div>
                              </td>
                              <td className="px-4 py-3">
                                <div className="font-semibold text-gray-900">R$ 500,00</div>
                              </td>
                              <td className="px-4 py-3">
                                <Button variant="ghost" size="sm" className="gap-1">
                                  <Edit size={14} />
                                  Editar
                                </Button>
                              </td>
                            </tr>

                            {/* Linha 4 - Com Erro */}
                            <tr className="bg-red-50 hover:bg-red-100">
                              <td className="px-4 py-3">
                                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                                  <XCircle className="h-4 w-4 text-white" />
                                </div>
                              </td>
                              <td className="px-4 py-3">
                                <div className="font-medium text-gray-900">Ana Santos ME</div>
                                <div className="text-xs text-red-600 mt-1">⚠ Nome muito curto</div>
                              </td>
                              <td className="px-4 py-3">
                                <div className="font-mono text-red-700 border-red-200 bg-red-50 px-2 py-1 rounded">
                                  98.765.432/0001-XX
                                </div>
                                <div className="text-xs text-red-600 mt-1">⚠ CNPJ inválido</div>
                              </td>
                              <td className="px-4 py-3">
                                <div className="text-red-700 border-red-200 bg-red-50 px-2 py-1 rounded">
                                  email@inválido
                                </div>
                                <div className="text-xs text-red-600 mt-1">⚠ Email inválido</div>
                              </td>
                              <td className="px-4 py-3">
                                <div className="font-semibold text-gray-900">R$ 2.500,75</div>
                              </td>
                              <td className="px-4 py-3">
                                <div className="flex gap-1">
                                  <Button variant="ghost" size="sm" className="gap-1 text-red-600 hover:text-red-700">
                                    <Edit size={14} />
                                    Corrigir
                                  </Button>
                                  <Button variant="ghost" size="sm" className="gap-1 text-red-600 hover:text-red-700">
                                    <Trash2 size={14} />
                                    Excluir
                                  </Button>
                                </div>
                              </td>
                            </tr>
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
                        <div className="text-2xl font-bold text-gray-900">R$ 2.550,50</div>
                        <div className="text-sm text-gray-500">Total Válido</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">R$ 2.500,75</div>
                        <div className="text-sm text-gray-500">Total com Erros</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">R$ 5.051,25</div>
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
                      <Button
                        variant="outline"
                        className="gap-2 text-red-600 border-red-600 hover:bg-red-50"
                      >
                        <XCircle size={16} />
                        Corrigir Erros
                      </Button>
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