import SlideLayout from "../slide-layout"

interface SlideLayoutsProps {
  slideNumber: number
  totalSlides: number
}

export default function SlideLayouts({ slideNumber, totalSlides }: SlideLayoutsProps) {
  return (
    <SlideLayout title="Layouts e Grids" section="Padrões" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-1 gap-8">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <h3 className="text-xl font-medium mb-4">Sistema de Grid</h3>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-4">Grid de 12 Colunas</h4>
            <div className="grid grid-cols-12 gap-2 mb-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-8 bg-[#4b7bb5] bg-opacity-20 rounded flex items-center justify-center">
                  <span className="text-xs text-[#4b7bb5]">{i + 1}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-6 gap-2 mb-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-8 bg-[#4b7bb5] bg-opacity-30 rounded flex items-center justify-center">
                  <span className="text-xs text-[#4b7bb5]">2</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-8 bg-[#4b7bb5] bg-opacity-40 rounded flex items-center justify-center">
                  <span className="text-xs text-[#4b7bb5]">3</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-8 bg-[#4b7bb5] bg-opacity-50 rounded flex items-center justify-center">
                  <span className="text-xs text-[#4b7bb5]">4</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="h-8 bg-[#4b7bb5] bg-opacity-60 rounded flex items-center justify-center">
                  <span className="text-xs text-[#4b7bb5]">6</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="h-8 bg-[#4b7bb5] bg-opacity-70 rounded flex items-center justify-center">
                <span className="text-xs text-white">12</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-4">Espaçamento e Margens</h4>
            <div className="space-y-6">
              <div>
                <div className="text-sm text-gray-500 mb-2">Espaçamento Externo (Margens)</div>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <div className="border-4 border-dashed border-[#4b7bb5] border-opacity-30 rounded-lg p-4 flex items-center justify-center">
                    <div className="bg-[#4b7bb5] text-white p-4 rounded">Elemento</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2">Espaçamento Interno (Padding)</div>
                <div className="bg-[#4b7bb5] bg-opacity-30 rounded-lg p-8">
                  <div className="bg-[#4b7bb5] text-white p-4 rounded">Elemento</div>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2">Espaçamento Entre Elementos (Gap)</div>
                <div className="flex gap-4">
                  <div className="bg-[#4b7bb5] text-white p-4 rounded">Item 1</div>
                  <div className="bg-[#4b7bb5] text-white p-4 rounded">Item 2</div>
                  <div className="bg-[#4b7bb5] text-white p-4 rounded">Item 3</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <h3 className="text-xl font-medium mb-4">Layouts Responsivos</h3>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-4">Breakpoints</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nome
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tamanho
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Dispositivos
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Classe
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mobile</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">&lt; 640px</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Smartphones</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(padrão)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Small (sm)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">≥ 640px</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Smartphones grandes</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">sm:</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Medium (md)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">≥ 768px</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tablets</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">md:</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Large (lg)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">≥ 1024px</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Laptops</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">lg:</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Extra Large (xl)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">≥ 1280px</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Desktops</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">xl:</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-medium mb-4">Diretrizes de Layout</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Princípios de Design Responsivo</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Projete para dispositivos móveis primeiro (mobile-first)</li>
                <li>Use unidades relativas (%, rem, em) em vez de pixels fixos</li>
                <li>Teste em múltiplos dispositivos e tamanhos de tela</li>
                <li>Considere diferentes métodos de entrada (toque, mouse, teclado)</li>
                <li>Otimize imagens e mídia para diferentes tamanhos de tela</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Boas Práticas</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Mantenha a consistência visual em todos os breakpoints</li>
                <li>Priorize o conteúdo mais importante em telas menores</li>
                <li>Use layouts flexíveis que se adaptam ao conteúdo</li>
                <li>Considere a acessibilidade em todos os tamanhos de tela</li>
                <li>Evite layouts horizontais que exijam rolagem lateral</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
