export default function LayoutPatterns() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-semibold mb-3">Layout de Página</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-100 p-4 border-b border-gray-200">
            <div className="h-10 bg-integrare-blue rounded-md"></div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-8">
                <div className="space-y-4">
                  <div className="h-12 bg-gray-200 rounded-md w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded-md"></div>
                  <div className="h-4 bg-gray-200 rounded-md"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-4/5"></div>
                  <div className="h-40 bg-gray-200 rounded-md"></div>
                  <div className="h-4 bg-gray-200 rounded-md"></div>
                  <div className="h-4 bg-gray-200 rounded-md"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-4/5"></div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="space-y-4">
                  <div className="h-40 bg-gray-200 rounded-md"></div>
                  <div className="h-60 bg-gray-200 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-4 border-t border-gray-200">
            <div className="h-10 bg-gray-300 rounded-md"></div>
          </div>
        </div>
        <div className="mt-4 bg-white p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Diretrizes</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Use o layout de página padrão para manter consistência entre as páginas</li>
            <li>Mantenha o cabeçalho e rodapé consistentes em todas as páginas</li>
            <li>Use a grade de 12 colunas para organizar o conteúdo</li>
            <li>Em dispositivos móveis, empilhe as colunas para melhor legibilidade</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Seção Hero</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-integrare-blue p-8">
            <div className="max-w-3xl mx-auto">
              <div className="h-12 bg-white bg-opacity-20 rounded-md w-3/4 mb-4"></div>
              <div className="h-4 bg-white bg-opacity-20 rounded-md mb-2"></div>
              <div className="h-4 bg-white bg-opacity-20 rounded-md mb-2"></div>
              <div className="h-4 bg-white bg-opacity-20 rounded-md w-4/5 mb-6"></div>
              <div className="flex space-x-4">
                <div className="h-10 w-32 bg-white rounded-md"></div>
                <div className="h-10 w-32 bg-transparent border-2 border-white rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Diretrizes</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Use a seção hero para destacar a mensagem principal da página</li>
            <li>Mantenha o texto conciso e direto</li>
            <li>Inclua uma chamada para ação clara</li>
            <li>Use imagens de alta qualidade como fundo, quando apropriado</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Grade de Cartões</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded-md mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-4/5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 bg-white p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Diretrizes</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Use grades de cartões para exibir coleções de itens semelhantes</li>
            <li>Mantenha a consistência no tamanho e proporção dos cartões</li>
            <li>Adapte o número de colunas com base no tamanho da tela</li>
            <li>Use espaçamento consistente entre os cartões</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Seção de Recursos</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden p-6">
          <div className="text-center mb-8">
            <div className="h-8 bg-gray-200 rounded-md w-1/3 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 rounded-md w-2/3 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="h-16 w-16 bg-[#FFF8E1] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="h-8 w-8 bg-integrare-blue rounded-full"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded-md w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 rounded-md mb-1"></div>
                <div className="h-4 bg-gray-200 rounded-md mb-1"></div>
                <div className="h-4 bg-gray-200 rounded-md w-4/5 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 bg-white p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Diretrizes</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Use seções de recursos para destacar os principais benefícios ou características</li>
            <li>Mantenha o conteúdo conciso e focado</li>
            <li>Use ícones consistentes para representar cada recurso</li>
            <li>Considere usar o amarelo claro como cor de acento para os ícones</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
