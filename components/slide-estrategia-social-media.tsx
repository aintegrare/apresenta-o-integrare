import SlideLayout from "./slide-layout"
import { TrendingUp, Target, BarChart, Zap } from "lucide-react"

export default function SlideEstrategiaSocialMedia() {
  return (
    <SlideLayout title="Estratégia de Social Media para Moda">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Abordagem Estratégica */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-poppins font-medium mb-3 text-integrare-blue">Nossa Abordagem</h3>
              <p className="text-sm text-gray-600 mb-4">
                Desenvolvemos estratégias de social media específicas para o setor de moda, considerando as
                particularidades do mercado, sazonalidade das coleções e comportamento do consumidor digital.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">•</span>
                  <span>Planejamento editorial alinhado ao calendário de lançamentos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">•</span>
                  <span>Criação de conteúdo segmentado por linha de produtos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">•</span>
                  <span>Integração entre conteúdo orgânico e campanhas pagas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">•</span>
                  <span>Análise de tendências e comportamento do consumidor</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pilares de Conteúdo */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-poppins font-medium mb-3 text-integrare-blue">Pilares de Conteúdo</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-4 h-4 text-integrare-blue mr-2" />
                    <p className="font-medium text-gray-700">Trend Alerts</p>
                  </div>
                  <p className="text-xs text-gray-600">
                    Posts destacando tendências atuais e como incorporá-las com peças da marca
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Target className="w-4 h-4 text-integrare-blue mr-2" />
                    <p className="font-medium text-gray-700">Styling e Combinações</p>
                  </div>
                  <p className="text-xs text-gray-600">
                    Conteúdo educativo sobre como combinar peças e criar diferentes looks
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center mb-2">
                    <BarChart className="w-4 h-4 text-integrare-blue mr-2" />
                    <p className="font-medium text-gray-700">Bastidores e Storytelling</p>
                  </div>
                  <p className="text-xs text-gray-600">
                    Conteúdo que humaniza a marca e cria conexão emocional com o público
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Zap className="w-4 h-4 text-integrare-blue mr-2" />
                    <p className="font-medium text-gray-700">Lançamentos e Campanhas</p>
                  </div>
                  <p className="text-xs text-gray-600">
                    Estratégias específicas para divulgação de novos produtos e coleções
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Métricas e Resultados */}
          <div className="md:col-span-2 mt-6">
            <h3 className="text-lg font-poppins font-medium mb-4 text-integrare-blue text-center">
              Métricas e Resultados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-integrare-blue mb-2">78%</p>
                <p className="text-sm text-gray-600">Aumento médio no engajamento</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-integrare-blue mb-2">45%</p>
                <p className="text-sm text-gray-600">Crescimento em seguidores</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-integrare-blue mb-2">32%</p>
                <p className="text-sm text-gray-600">Aumento em vendas online</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-integrare-blue mb-2">3.5x</p>
                <p className="text-sm text-gray-600">ROI em campanhas pagas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-integrare-blue mb-3 text-center">Nosso Processo</h3>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center px-4 mb-4 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                <span className="text-integrare-blue font-bold">1</span>
              </div>
              <p className="text-sm font-medium">Diagnóstico</p>
              <p className="text-xs text-gray-500">Análise da marca e mercado</p>
            </div>
            <div className="hidden md:block w-8 h-0.5 bg-blue-200"></div>
            <div className="text-center px-4 mb-4 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                <span className="text-integrare-blue font-bold">2</span>
              </div>
              <p className="text-sm font-medium">Estratégia</p>
              <p className="text-xs text-gray-500">Planejamento de conteúdo</p>
            </div>
            <div className="hidden md:block w-8 h-0.5 bg-blue-200"></div>
            <div className="text-center px-4 mb-4 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                <span className="text-integrare-blue font-bold">3</span>
              </div>
              <p className="text-sm font-medium">Produção</p>
              <p className="text-xs text-gray-500">Criação visual e textual</p>
            </div>
            <div className="hidden md:block w-8 h-0.5 bg-blue-200"></div>
            <div className="text-center px-4 mb-4 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                <span className="text-integrare-blue font-bold">4</span>
              </div>
              <p className="text-sm font-medium">Gestão</p>
              <p className="text-xs text-gray-500">Publicação e interação</p>
            </div>
            <div className="hidden md:block w-8 h-0.5 bg-blue-200"></div>
            <div className="text-center px-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                <span className="text-integrare-blue font-bold">5</span>
              </div>
              <p className="text-sm font-medium">Análise</p>
              <p className="text-xs text-gray-500">Métricas e otimização</p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
