import SlideLayout from "./slide-layout"
import { ArrowRight, Calendar, FileText, Users, Settings } from "lucide-react"

export default function SlideProximosPassosLins() {
  return (
    <SlideLayout title="6. Próximos Passos">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-8">
          <h3 className="text-xl font-medium text-integrare-blue mb-4 text-center">Jornada de Implementação</h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                <Calendar className="w-5 h-5 text-integrare-blue" />
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-1">1. Reunião Inicial</h4>
                <p className="text-sm text-gray-600">
                  Agendamento de reunião para entender em profundidade as necessidades, objetivos e expectativas da
                  Instituição Lins Vasconcellos.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                <FileText className="w-5 h-5 text-integrare-blue" />
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-1">2. Proposta Detalhada</h4>
                <p className="text-sm text-gray-600">
                  Elaboração de proposta técnica e comercial detalhada, com escopo, cronograma e investimento para cada
                  etapa do projeto.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                <Settings className="w-5 h-5 text-integrare-blue" />
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-1">3. Planejamento Estratégico</h4>
                <p className="text-sm text-gray-600">
                  Desenvolvimento do plano estratégico detalhado, com definição de metas, indicadores e cronograma de
                  ações para alcançar os objetivos estabelecidos.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                <Users className="w-5 h-5 text-integrare-blue" />
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-1">4. Início da Implementação</h4>
                <p className="text-sm text-gray-600">
                  Formação da equipe dedicada ao projeto e início da implementação das primeiras ações estratégicas
                  conforme cronograma aprovado.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-integrare-blue mb-4 text-center">Para Avançarmos</h3>
          <div className="space-y-3">
            <p className="text-sm text-gray-700 flex items-start">
              <ArrowRight className="w-4 h-4 text-integrare-blue mr-2 flex-shrink-0 mt-0.5" />
              <span>Agende uma reunião de diagnóstico gratuita com nossa equipe</span>
            </p>
            <p className="text-sm text-gray-700 flex items-start">
              <ArrowRight className="w-4 h-4 text-integrare-blue mr-2 flex-shrink-0 mt-0.5" />
              <span>Compartilhe materiais e informações sobre a instituição para análise preliminar</span>
            </p>
            <p className="text-sm text-gray-700 flex items-start">
              <ArrowRight className="w-4 h-4 text-integrare-blue mr-2 flex-shrink-0 mt-0.5" />
              <span>Indique os principais desafios e objetivos de comunicação da instituição</span>
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
