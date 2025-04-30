import SlideLayout from "../slide-layout"

interface SlideColorPaletteProps {
  slideNumber: number
  totalSlides: number
}

export default function SlideColorPalette({ slideNumber, totalSlides }: SlideColorPaletteProps) {
  return (
    <SlideLayout title="Paleta de Cores" section="Fundamentos" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-1 gap-8">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-3">
            <h3 className="text-xl font-medium mb-4">Cores Primárias</h3>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="h-32 bg-[#4b7bb5] p-4 flex items-end">
              <div className="text-white font-medium">Integrare Blue</div>
            </div>
            <div className="p-4 bg-white border border-gray-200 border-t-0">
              <div className="font-mono text-sm text-gray-800">#4b7bb5</div>
              <div className="text-sm text-gray-500 mt-1">Cor principal da marca</div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="h-32 bg-[#3d649e] p-4 flex items-end">
              <div className="text-white font-medium">Integrare Blue Dark</div>
            </div>
            <div className="p-4 bg-white border border-gray-200 border-t-0">
              <div className="font-mono text-sm text-gray-800">#3d649e</div>
              <div className="text-sm text-gray-500 mt-1">Variação escura para hover e ênfase</div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="h-32 bg-[#6b91c1] p-4 flex items-end">
              <div className="text-white font-medium">Integrare Blue Light</div>
            </div>
            <div className="p-4 bg-white border border-gray-200 border-t-0">
              <div className="font-mono text-sm text-gray-800">#6b91c1</div>
              <div className="text-sm text-gray-500 mt-1">Variação clara para fundos e elementos secundários</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-4">
            <h3 className="text-xl font-medium mb-4">Cores Secundárias</h3>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="h-24 bg-[#4072b0] p-4 flex items-end">
              <div className="text-white font-medium">Blue Mid</div>
            </div>
            <div className="p-4 bg-white border border-gray-200 border-t-0">
              <div className="font-mono text-sm text-gray-800">#4072b0</div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="h-24 bg-[#527eb7] p-4 flex items-end">
              <div className="text-white font-medium">Blue Lighter</div>
            </div>
            <div className="p-4 bg-white border border-gray-200 border-t-0">
              <div className="font-mono text-sm text-gray-800">#527eb7</div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="h-24 bg-[#f2f1ef] p-4 flex items-end">
              <div className="text-gray-800 font-medium">Off White</div>
            </div>
            <div className="p-4 bg-white border border-gray-200 border-t-0">
              <div className="font-mono text-sm text-gray-800">#f2f1ef</div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="h-24 bg-[#FFF8E1] p-4 flex items-end">
              <div className="text-gray-800 font-medium">Accent Yellow</div>
            </div>
            <div className="p-4 bg-white border border-gray-200 border-t-0">
              <div className="font-mono text-sm text-gray-800">#FFF8E1</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-medium mb-4">Diretrizes de Uso</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Recomendações</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Use Integrare Blue como cor principal para elementos de destaque e ação</li>
                <li>Utilize as variações de azul para criar hierarquia visual</li>
                <li>O amarelo claro deve ser usado como acento sutil, nunca como cor predominante</li>
                <li>Mantenha alto contraste entre texto e fundo para garantir legibilidade</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Acessibilidade</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Todas as combinações de cores devem atender aos padrões WCAG 2.1 AA</li>
                <li>Texto sobre fundo colorido deve ter contraste mínimo de 4.5:1</li>
                <li>Elementos grandes e ícones devem ter contraste mínimo de 3:1</li>
                <li>Nunca use cor como único meio de transmitir informações</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
