export default function Cards() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Cards Básicos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h4 className="font-poppins font-medium text-lg mb-2">Card Básico</h4>
            <p className="text-gray-600">
              Este é um card básico com borda e sombra sutil, ideal para conteúdo simples.
            </p>
          </div>

          <div className="bg-white border-l-4 border-integrare-blue border-t border-r border-b border-gray-200 rounded-lg p-6 shadow-sm">
            <h4 className="font-poppins font-medium text-lg mb-2">Card com Destaque</h4>
            <p className="text-gray-600">Este card possui uma borda de destaque à esquerda, indicando importância.</p>
          </div>

          <div className="bg-integrare-blue bg-opacity-5 border border-integrare-blue border-opacity-20 rounded-lg p-6">
            <h4 className="font-poppins font-medium text-lg mb-2 text-integrare-blue">Card Colorido</h4>
            <p className="text-gray-700">Card com fundo colorido sutil, útil para destacar informações importantes.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Cards Interativos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <h4 className="font-poppins font-medium text-lg mb-2">Card Clicável</h4>
            <p className="text-gray-600 mb-4">Este card possui efeito hover, indicando que é clicável.</p>
            <div className="flex justify-end">
              <span className="text-integrare-blue font-medium flex items-center gap-1">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm group cursor-pointer">
            <div className="h-40 bg-gray-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-integrare-blue bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-medium">Ver detalhes</span>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-poppins font-medium text-lg mb-2">Card com Imagem</h4>
              <p className="text-gray-600">Este card possui uma área para imagem com efeito hover.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Cards de Estatísticas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="text-sm text-gray-500 uppercase tracking-wider">Clientes</p>
            <p className="text-3xl font-poppins font-semibold mt-1 text-integrare-blue">60+</p>
            <p className="text-sm text-gray-600 mt-2">Clientes ativos</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="text-sm text-gray-500 uppercase tracking-wider">Segmentos</p>
            <p className="text-3xl font-poppins font-semibold mt-1 text-integrare-blue">15</p>
            <p className="text-sm text-gray-600 mt-2">Segmentos de mercado</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="text-sm text-gray-500 uppercase tracking-wider">Retenção</p>
            <p className="text-3xl font-poppins font-semibold mt-1 text-integrare-blue">95%</p>
            <p className="text-sm text-gray-600 mt-2">Taxa de retenção</p>
          </div>
        </div>
      </div>
    </div>
  )
}
