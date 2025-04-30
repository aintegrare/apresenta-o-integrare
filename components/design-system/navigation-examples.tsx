export default function NavigationExamples() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Navegação Principal</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-[#4b7bb5] text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="font-medium">Integrare</div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="font-medium">Início</div>
                <div>Serviços</div>
                <div>Portfólio</div>
                <div>Sobre</div>
                <div>Contato</div>
                <button className="bg-white text-[#4b7bb5] px-4 py-1 rounded font-medium">Orçamento</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Navegação Responsiva</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-[#4b7bb5] text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="font-medium">Integrare</div>
              </div>
              <div className="md:hidden">
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className="w-6 h-0.5 bg-white"></div>
                  <div className="w-6 h-0.5 bg-white"></div>
                  <div className="w-6 h-0.5 bg-white"></div>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <div className="font-medium">Início</div>
                <div>Serviços</div>
                <div>Portfólio</div>
                <div>Sobre</div>
                <div>Contato</div>
                <button className="bg-white text-[#4b7bb5] px-4 py-1 rounded font-medium">Orçamento</button>
              </div>
            </div>
          </div>
          <div className="border-t border-[#6b91c1] bg-[#4b7bb5] text-white p-4 md:hidden">
            <div className="space-y-3">
              <div className="py-2 font-medium">Início</div>
              <div className="py-2">Serviços</div>
              <div className="py-2">Portfólio</div>
              <div className="py-2">Sobre</div>
              <div className="py-2">Contato</div>
              <button className="bg-white text-[#4b7bb5] px-4 py-2 rounded font-medium w-full mt-2">Orçamento</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Navegação Lateral</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden flex">
          <div className="w-64 bg-white border-r border-gray-200 p-4 min-h-[300px]">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-[#4b7bb5] rounded-full"></div>
              <div className="font-medium text-[#4b7bb5]">Integrare</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-3 p-2 bg-[#4b7bb5] bg-opacity-10 text-[#4b7bb5] rounded">
                <div className="w-4 h-4 bg-[#4b7bb5] rounded-sm"></div>
                <div>Dashboard</div>
              </div>
              <div className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-100 rounded">
                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                <div>Projetos</div>
              </div>
              <div className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-100 rounded">
                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                <div>Clientes</div>
              </div>
              <div className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-100 rounded">
                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                <div>Relatórios</div>
              </div>
              <div className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-100 rounded">
                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                <div>Configurações</div>
              </div>
            </div>
          </div>
          <div className="flex-1 p-6 bg-gray-50">
            <div className="mb-6">
              <div className="text-xl font-medium text-gray-800">Dashboard</div>
              <div className="text-sm text-gray-500">Bem-vindo de volta à sua área de trabalho</div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="text-sm text-gray-500 mb-1">Projetos Ativos</div>
                <div className="text-2xl font-semibold text-[#4b7bb5]">12</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="text-sm text-gray-500 mb-1">Clientes</div>
                <div className="text-2xl font-semibold text-[#4b7bb5]">24</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="text-sm text-gray-500 mb-1">Tarefas Pendentes</div>
                <div className="text-2xl font-semibold text-[#4b7bb5]">8</div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-lg font-medium text-gray-800 mb-4">Atividade Recente</div>
              <div className="space-y-3">
                <div className="flex items-center pb-3 border-b border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-[#E6EEF7] flex items-center justify-center text-[#4b7bb5] mr-3">
                    P
                  </div>
                  <div>
                    <div className="text-sm font-medium">Projeto atualizado: Website Corporativo</div>
                    <div className="text-xs text-gray-500">Há 2 horas atrás</div>
                  </div>
                </div>
                <div className="flex items-center pb-3 border-b border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-[#E6EEF7] flex items-center justify-center text-[#4b7bb5] mr-3">
                    C
                  </div>
                  <div>
                    <div className="text-sm font-medium">Novo cliente adicionado: Empresa XYZ</div>
                    <div className="text-xs text-gray-500">Ontem às 15:30</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#E6EEF7] flex items-center justify-center text-[#4b7bb5] mr-3">
                    T
                  </div>
                  <div>
                    <div className="text-sm font-medium">Tarefa concluída: Revisão de Design</div>
                    <div className="text-xs text-gray-500">Ontem às 10:15</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
