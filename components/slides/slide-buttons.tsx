import SlideLayout from "../slide-layout"

interface SlideButtonsProps {
  slideNumber: number
  totalSlides: number
}

export default function SlideButtons({ slideNumber, totalSlides }: SlideButtonsProps) {
  return (
    <SlideLayout title="Botões" section="Componentes" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-1 gap-8">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-3">
            <h3 className="text-xl font-medium mb-4">Variações de Botões</h3>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-4">Botões Primários</h4>
            <div className="space-y-4">
              <div>
                <button className="bg-[#4b7bb5] hover:bg-[#3d649e] text-white font-medium py-2 px-4 rounded transition-colors">
                  Botão Primário
                </button>
              </div>
              <div>
                <button
                  className="bg-[#4b7bb5] hover:bg-[#3d649e] text-white font-medium py-2 px-4 rounded transition-colors opacity-70"
                  disabled
                >
                  Botão Desabilitado
                </button>
              </div>
              <div>
                <button className="bg-[#4b7bb5] hover:bg-[#3d649e] text-white font-medium py-2 px-4 rounded transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Com Ícone
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-4">Botões Secundários</h4>
            <div className="space-y-4">
              <div>
                <button className="border-2 border-[#4b7bb5] text-[#4b7bb5] hover:bg-[#4b7bb5] hover:text-white font-medium py-2 px-4 rounded transition-colors">
                  Botão Secundário
                </button>
              </div>
              <div>
                <button
                  className="border-2 border-[#4b7bb5] text-[#4b7bb5] hover:bg-[#4b7bb5] hover:text-white font-medium py-2 px-4 rounded transition-colors opacity-70"
                  disabled
                >
                  Botão Desabilitado
                </button>
              </div>
              <div>
                <button className="border-2 border-[#4b7bb5] text-[#4b7bb5] hover:bg-[#4b7bb5] hover:text-white font-medium py-2 px-4 rounded transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Com Ícone
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-4">Botões Terciários</h4>
            <div className="space-y-4">
              <div>
                <button className="text-[#4b7bb5] hover:underline font-medium py-2 px-4 transition-all">
                  Botão Terciário
                </button>
              </div>
              <div>
                <button
                  className="text-[#4b7bb5] hover:underline font-medium py-2 px-4 transition-all opacity-70"
                  disabled
                >
                  Botão Desabilitado
                </button>
              </div>
              <div>
                <button className="text-[#4b7bb5] hover:underline font-medium py-2 px-4 transition-all flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Com Ícone
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-4">Tamanhos de Botões</h4>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-[#4b7bb5] hover:bg-[#3d649e] text-white font-medium py-1 px-2 text-sm rounded transition-colors">
                Pequeno
              </button>
              <button className="bg-[#4b7bb5] hover:bg-[#3d649e] text-white font-medium py-2 px-4 rounded transition-colors">
                Médio (Padrão)
              </button>
              <button className="bg-[#4b7bb5] hover:bg-[#3d649e] text-white font-medium py-3 px-6 rounded transition-colors">
                Grande
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-4">Botões de Estado</h4>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors">
                Sucesso
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded transition-colors">
                Aviso
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-colors">
                Erro
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors">
                Informação
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-medium mb-4">Diretrizes de Uso</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Quando usar</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Use botões primários para ações principais ou de destaque</li>
                <li>Use botões secundários para ações alternativas ou menos importantes</li>
                <li>Use botões terciários para ações de baixa prioridade ou navegação</li>
                <li>Mantenha a hierarquia visual consistente em toda a interface</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Boas práticas</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Use texto claro e conciso nos rótulos dos botões</li>
                <li>Mantenha o espaçamento adequado entre botões agrupados</li>
                <li>Adicione ícones apenas quando melhorarem a compreensão</li>
                <li>Garanta que os botões sejam acessíveis via teclado e leitores de tela</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
