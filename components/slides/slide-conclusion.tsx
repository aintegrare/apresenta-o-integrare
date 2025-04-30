import SlideLayout from "../slide-layout"

interface SlideConclusionProps {
  slideNumber: number
  totalSlides: number
}

export default function SlideConclusion({ slideNumber, totalSlides }: SlideConclusionProps) {
  return (
    <SlideLayout title="Conclusão" section="Encerramento" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white rounded-lg p-8 border border-gray-200">
          <h3 className="text-xl font-medium text-[#4b7bb5] mb-6">Benefícios do Design System</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-[#4b7bb5] text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Consistência</h4>
                <p className="text-gray-600">
                  Garante uma experiência unificada em todos os produtos digitais da marca
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-[#4b7bb5] text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Eficiência</h4>
                <p className="text-gray-600">
                  Acelera o desenvolvimento com componentes reutilizáveis e padrões estabelecidos
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-[#4b7bb5] text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Qualidade</h4>
                <p className="text-gray-600">Melhora a qualidade do produto com componentes testados e validados</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-[#4b7bb5] text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Colaboração</h4>
                <p className="text-gray-600">Facilita a comunicação entre designers, desenvolvedores e stakeholders</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 border border-gray-200">
          <h3 className="text-xl font-medium text-[#4b7bb5] mb-6">Próximos Passos</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#4b7bb5] bg-opacity-10 text-[#4b7bb5] flex items-center justify-center mr-4 flex-shrink-0">
                1
              </div>
              <p className="text-gray-700">Implementar os componentes em código usando React e Tailwind CSS</p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#4b7bb5] bg-opacity-10 text-[#4b7bb5] flex items-center justify-center mr-4 flex-shrink-0">
                2
              </div>
              <p className="text-gray-700">Criar uma biblioteca de componentes acessível para toda a equipe</p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#4b7bb5] bg-opacity-10 text-[#4b7bb5] flex items-center justify-center mr-4 flex-shrink-0">
                3
              </div>
              <p className="text-gray-700">Estabelecer processos para manutenção e evolução do design system</p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#4b7bb5] bg-opacity-10 text-[#4b7bb5] flex items-center justify-center mr-4 flex-shrink-0">
                4
              </div>
              <p className="text-gray-700">Treinar a equipe para utilizar o design system de forma eficiente</p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#4b7bb5] bg-opacity-10 text-[#4b7bb5] flex items-center justify-center mr-4 flex-shrink-0">
                5
              </div>
              <p className="text-gray-700">Coletar feedback e iterar para melhorar continuamente</p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
