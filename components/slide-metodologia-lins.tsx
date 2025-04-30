import SlideLayout from "./slide-layout"
import { Lightbulb, Search, BarChart3, Rocket, Target, RefreshCw } from "lucide-react"

export default function SlideMetodologiaLins() {
  return (
    <SlideLayout title="3. Nossa Metodologia">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 p-2 rounded-full mr-3">
                <Search className="w-5 h-5 text-integrare-blue" />
              </div>
              <h3 className="text-lg font-poppins font-medium">1. Diagnóstico</h3>
            </div>
            <p className="text-sm text-gray-600">
              Análise completa da presença digital atual, identificação de oportunidades e desafios específicos para
              instituições como a Lins Vasconcellos.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 p-2 rounded-full mr-3">
                <Lightbulb className="w-5 h-5 text-integrare-blue" />
              </div>
              <h3 className="text-lg font-poppins font-medium">2. Estratégia</h3>
            </div>
            <p className="text-sm text-gray-600">
              Desenvolvimento de plano personalizado com objetivos claros, públicos-alvo definidos e canais prioritários
              para ampliar o alcance da instituição.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 p-2 rounded-full mr-3">
                <Rocket className="w-5 h-5 text-integrare-blue" />
              </div>
              <h3 className="text-lg font-poppins font-medium">3. Implementação</h3>
            </div>
            <p className="text-sm text-gray-600">
              Execução das estratégias definidas com criação de conteúdo de qualidade, otimização de canais e
              desenvolvimento de materiais alinhados à missão institucional.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 p-2 rounded-full mr-3">
                <BarChart3 className="w-5 h-5 text-integrare-blue" />
              </div>
              <h3 className="text-lg font-poppins font-medium">4. Monitoramento</h3>
            </div>
            <p className="text-sm text-gray-600">
              Acompanhamento constante de métricas relevantes para avaliar o desempenho das ações e o engajamento com
              diferentes públicos da instituição.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 p-2 rounded-full mr-3">
                <RefreshCw className="w-5 h-5 text-integrare-blue" />
              </div>
              <h3 className="text-lg font-poppins font-medium">5. Otimização</h3>
            </div>
            <p className="text-sm text-gray-600">
              Ajustes contínuos baseados em dados para maximizar resultados, adaptando estratégias conforme necessário
              para atingir os objetivos da instituição.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 p-2 rounded-full mr-3">
                <Target className="w-5 h-5 text-integrare-blue" />
              </div>
              <h3 className="text-lg font-poppins font-medium">6. Resultados</h3>
            </div>
            <p className="text-sm text-gray-600">
              Relatórios transparentes e objetivos, demonstrando o impacto das ações na visibilidade, engajamento e
              alcance dos objetivos institucionais.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-gray-500 font-inter text-sm">
            Nossa metodologia foi desenvolvida especificamente para atender às necessidades de instituições com
            propósito social, garantindo que cada etapa do processo esteja alinhada com a missão e valores da
            organização.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
