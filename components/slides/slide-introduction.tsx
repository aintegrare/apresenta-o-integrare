import SlideLayout from "../slide-layout"

interface SlideIntroductionProps {
  slideNumber: number
  totalSlides: number
}

export default function SlideIntroduction({ slideNumber, totalSlides }: SlideIntroductionProps) {
  return (
    <SlideLayout
      title="Introdução ao Design System"
      section="Introdução"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
    >
      <div className="grid grid-cols-2 gap-8 h-full">
        <div className="flex flex-col justify-center">
          <p className="text-lg text-gray-700 mb-6">
            Este design system é um conjunto abrangente de diretrizes, componentes e padrões que definem a identidade
            visual e a experiência do usuário para todos os produtos digitais da Agência Integrare.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Nosso objetivo é garantir consistência, eficiência e qualidade em todas as interfaces, permitindo que as
            equipes se concentrem na resolução de problemas de negócios e na criação de experiências excepcionais.
          </p>
          <p className="text-lg text-gray-700">
            Use este manual como referência para todos os aspectos da marca no ambiente digital, desde os fundamentos
            básicos até os componentes complexos e padrões de interação.
          </p>
        </div>
        <div className="bg-[#E6EEF7] rounded-xl p-8 flex flex-col justify-center">
          <h3 className="text-xl font-medium text-[#4b7bb5] mb-6">Princípios do Design System</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-[#4b7bb5] text-white flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Consistência</h4>
                <p className="text-gray-600">Experiência unificada em todos os pontos de contato digitais</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-[#4b7bb5] text-white flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Acessibilidade</h4>
                <p className="text-gray-600">Interfaces inclusivas e acessíveis para todos os usuários</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-[#4b7bb5] text-white flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Eficiência</h4>
                <p className="text-gray-600">Componentes reutilizáveis que aceleram o desenvolvimento</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-[#4b7bb5] text-white flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Flexibilidade</h4>
                <p className="text-gray-600">Sistema adaptável que evolui com as necessidades do negócio</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  )
}
