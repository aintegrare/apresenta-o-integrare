export default function Buttons() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Botões Primários</h3>
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#4b7bb5] hover:bg-[#3d649e] text-white font-medium py-2 px-4 rounded transition-colors">
            Botão Primário
          </button>
          <button className="bg-[#4b7bb5] hover:bg-[#3d649e] text-white font-medium py-2 px-4 rounded transition-colors opacity-70">
            Botão Desabilitado
          </button>
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

      <div>
        <h3 className="text-lg font-semibold mb-3">Botões Secundários</h3>
        <div className="flex flex-wrap gap-4">
          <button className="border-2 border-[#4b7bb5] text-[#4b7bb5] hover:bg-[#4b7bb5] hover:text-white font-medium py-2 px-4 rounded transition-colors">
            Botão Secundário
          </button>
          <button className="border-2 border-[#4b7bb5] text-[#4b7bb5] hover:bg-[#4b7bb5] hover:text-white font-medium py-2 px-4 rounded transition-colors opacity-70">
            Botão Desabilitado
          </button>
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

      <div>
        <h3 className="text-lg font-semibold mb-3">Botões Terciários</h3>
        <div className="flex flex-wrap gap-4">
          <button className="text-[#4b7bb5] hover:underline font-medium py-2 px-4 transition-all">
            Botão Terciário
          </button>
          <button className="text-[#4b7bb5] hover:underline font-medium py-2 px-4 transition-all opacity-70">
            Botão Desabilitado
          </button>
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

      <div>
        <h3 className="text-lg font-semibold mb-3">Tamanhos de Botões</h3>
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

      <div>
        <h3 className="text-lg font-semibold mb-3">Botões com Efeitos</h3>
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#4b7bb5] hover:bg-[#3d649e] text-white font-medium py-2 px-4 rounded transition-colors shadow-md hover:shadow-lg">
            Com Sombra
          </button>
          <button className="bg-[#4b7bb5] text-white font-medium py-2 px-4 rounded relative overflow-hidden group">
            <span className="absolute inset-0 w-0 bg-[#3d649e] transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative">Efeito Deslizante</span>
          </button>
          <button className="bg-transparent hover:bg-[#4b7bb5] text-[#4b7bb5] hover:text-white border border-[#4b7bb5] font-medium py-2 px-4 rounded transition-colors duration-300">
            Inversão de Cores
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Botões de Estado</h3>
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
  )
}
