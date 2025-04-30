import SlideLayout from "./slide-layout"
import { Search, BarChart, Target, Zap, LineChart } from "lucide-react"

export default function SlideMetodologia() {
  return (
    <SlideLayout title="3. Nossa Metodologia">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
            {/* Etapa 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <Search className="w-5 h-5 text-integrare-blue" />
              </div>
              <h3 className="text-sm font-medium mb-1">Diagnóstico</h3>
              <p className="text-xs text-gray-500">Análise completa do negócio, mercado e concorrência</p>
              {/* Linha conectora */}
              <div className="hidden md:block w-full h-0.5 bg-blue-200 mt-4 relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <Target className="w-5 h-5 text-integrare-blue" />
              </div>
              <h3 className="text-sm font-medium mb-1">Planejamento</h3>
              <p className="text-xs text-gray-500">Definição de objetivos, KPIs e estratégias personalizadas</p>
              {/* Linha conectora */}
              <div className="hidden md:block w-full h-0.5 bg-blue-200 mt-4 relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 text-integrare-blue" />
              </div>
              <h3 className="text-sm font-medium mb-1">Implementação</h3>
              <p className="text-xs text-gray-500">Execução das estratégias com agilidade e precisão</p>
              {/* Linha conectora */}
              <div className="hidden md:block w-full h-0.5 bg-blue-200 mt-4 relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
            </div>

            {/* Etapa 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <BarChart className="w-5 h-5 text-integrare-blue" />
              </div>
              <h3 className="text-sm font-medium mb-1">Monitoramento</h3>
              <p className="text-xs text-gray-500">Acompanhamento contínuo de métricas e resultados</p>
              {/* Linha conectora */}
              <div className="hidden md:block w-full h-0.5 bg-blue-200 mt-4 relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
            </div>

            {/* Etapa 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <LineChart className="w-5 h-5 text-integrare-blue" />
              </div>
              <h3 className="text-sm font-medium mb-1">Otimização</h3>
              <p className="text-xs text-gray-500">Ajustes estratégicos baseados em dados para maximizar resultados</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-integrare-blue mb-3">Abordagem Data-Driven</h3>
            <p className="text-sm text-gray-600">
              Todas as nossas decisões são baseadas em dados concretos. Utilizamos ferramentas avançadas de análise para
              monitorar o desempenho das estratégias e realizar ajustes em tempo real, garantindo a maximização dos
              resultados.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-integrare-blue mb-3">Transparência e Colaboração</h3>
            <p className="text-sm text-gray-600">
              Mantemos uma comunicação clara e constante com nossos clientes. Através de relatórios detalhados e
              reuniões periódicas, compartilhamos os resultados obtidos e trabalhamos em conjunto para definir os
              próximos passos.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
