import SlideLayout from "./slide-layout"
import { BrainCircuit, Fingerprint, Layers, Sparkles, LineChart } from "lucide-react"

export default function SlideTendencias() {
  return (
    <SlideLayout title="8. Tendências e Inovações">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <BrainCircuit className="w-5 h-5 text-integrare-blue mr-2" />
              <h3 className="text-lg font-poppins font-medium">Inteligência Artificial</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Utilizamos IA para otimizar campanhas, personalizar conteúdos e analisar dados de forma mais eficiente,
              garantindo melhores resultados para nossos clientes.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2">•</span>
                <span>Otimização automática de campanhas</span>
              </li>
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2">•</span>
                <span>Geração de conteúdo assistida por IA</span>
              </li>
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2">•</span>
                <span>Análise preditiva de comportamento</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Fingerprint className="w-5 h-5 text-integrare-blue mr-2" />
              <h3 className="text-lg font-poppins font-medium">Hiperpersonalização</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Desenvolvemos estratégias altamente personalizadas baseadas em dados comportamentais, criando experiências
              únicas para cada segmento de público.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2">•</span>
                <span>Segmentação avançada de audiências</span>
              </li>
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2">•</span>
                <span>Jornadas de compra personalizadas</span>
              </li>
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2">•</span>
                <span>Conteúdo dinâmico baseado em comportamento</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Layers className="w-5 h-5 text-integrare-blue mr-2" />
              <h3 className="text-lg font-poppins font-medium">Integração Marketing e Vendas</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Implementamos estratégias de Smarketing que alinham os esforços de marketing e vendas, criando um funil
              integrado que maximiza conversões.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2">•</span>
                <span>CRM integrado com automação de marketing</span>
              </li>
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2">•</span>
                <span>Lead scoring e qualificação automatizada</span>
              </li>
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2">•</span>
                <span>Análise unificada do funil de vendas</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Sparkles className="w-5 h-5 text-integrare-blue mr-2" />
              <h3 className="text-lg font-poppins font-medium">Conteúdo Interativo</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Criamos experiências imersivas através de conteúdos interativos que engajam o público e aumentam o tempo
              de permanência e conversão.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2">•</span>
                <span>Vídeos interativos e shoppable</span>
              </li>
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2">•</span>
                <span>Realidade aumentada em campanhas</span>
              </li>
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2">•</span>
                <span>Quizzes e calculadoras personalizadas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full">
            <LineChart className="w-4 h-4 text-integrare-blue mr-2" />
            <p className="text-sm font-medium text-integrare-blue">
              Estamos sempre na vanguarda das tendências digitais
            </p>
          </div>
          <p className="text-gray-500 font-inter text-sm mt-4 max-w-2xl mx-auto">
            Nossa equipe participa regularmente de eventos, cursos e certificações para se manter atualizada sobre as
            últimas inovações do mercado digital, garantindo que nossos clientes sempre estejam à frente da
            concorrência.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
