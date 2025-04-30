export default function Buttons() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Botões Primários</h3>
        <div className="flex flex-wrap gap-4">
          <button className="bg-integrare-blue hover:bg-[#0a4a7a] text-white font-medium py-2 px-4 rounded transition-colors">
            Botão Primário
          </button>
          <button className="bg-integrare-blue hover:bg-[#0a4a7a] text-white font-medium py-2 px-4 rounded transition-colors opacity-70">
            Botão Desabilitado
          </button>
          <button className="bg-integrare-blue hover:bg-[#0a4a7a] text-white font-medium py-2 px-4 rounded transition-colors flex items-center gap-2">
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
          <button className="border-2 border-integrare-blue text-integrare-blue hover:bg-integrare-blue hover:text-white font-medium py-2 px-4 rounded transition-colors">
            Botão Secundário
          </button>
          <button className="border-2 border-integrare-blue text-integrare-blue hover:bg-integrare-blue hover:text-white font-medium py-2 px-4 rounded transition-colors opacity-70">
            Botão Desabilitado
          </button>
          <button className="border-2 border-integrare-blue text-integrare-blue hover:bg-integrare-blue hover:text-white font-medium py-2 px-4 rounded transition-colors flex items-center gap-2">
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
          <button className="text-integrare-blue hover:underline font-medium py-2 px-4 transition-all">
            Botão Terciário
          </button>
          <button className="text-integrare-blue hover:underline font-medium py-2 px-4 transition-all opacity-70">
            Botão Desabilitado
          </button>
          <button className="text-integrare-blue hover:underline font-medium py-2 px-4 transition-all flex items-center gap-2">
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
          <button className="bg-integrare-blue hover:bg-[#0a4a7a] text-white font-medium py-1 px-2 text-sm rounded transition-colors">
            Pequeno
          </button>
          <button className="bg-integrare-blue hover:bg-[#0a4a7a] text-white font-medium py-2 px-4 rounded transition-colors">
            Médio (Padrão)
          </button>
          <button className="bg-integrare-blue hover:bg-[#0a4a7a] text-white font-medium py-3 px-6 rounded transition-colors">
            Grande
          </button>
        </div>
      </div>
    </div>
  )
}
