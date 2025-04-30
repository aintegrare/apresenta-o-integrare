import SlideLayout from "./slide-layout"
import { Users, TrendingUp, Target, Award } from "lucide-react"

export default function SlideInfluencerMarketingModa() {
  return (
    <SlideLayout title="Influencer Marketing para Moda">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Introdução */}
          <div className="md:col-span-2 mb-2">
            <p className="text-center text-gray-600 font-inter text-sm">
              Estratégias de colaboração com influenciadores para amplificar o alcance de marcas de moda, gerar
              credibilidade e impulsionar vendas através de conteúdo autêntico
            </p>
          </div>

          {/* Abordagem Estratégica */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Nossa Abordagem</h3>
              <p className="text-sm text-gray-600">Estratégia personalizada para cada marca</p>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-integrare-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Seleção Estratégica</p>
                    <p className="text-xs text-gray-600">
                      Identificação de influenciadores alinhados com os valores da marca e com audiência qualificada,
                      priorizando engajamento sobre número de seguidores
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-integrare-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Conteúdo Autêntico</p>
                    <p className="text-xs text-gray-600">
                      Desenvolvimento de briefings que permitem liberdade criativa ao influenciador enquanto mantêm
                      coerência com o posicionamento da marca
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Target className="w-5 h-5 text-integrare-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Mensuração de Resultados</p>
                    <p className="text-xs text-gray-600">
                      Análise completa de métricas de desempenho, incluindo engajamento, tráfego, conversões e ROI de
                      cada colaboração
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Award className="w-5 h-5 text-integrare-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Relacionamento Contínuo</p>
                    <p className="text-xs text-gray-600">
                      Construção de parcerias de longo prazo com influenciadores-chave, gerando maior autenticidade e
                      resultados consistentes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tipos de Colaboração */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Tipos de Colaboração</h3>
              <p className="text-sm text-gray-600">Formatos adaptados para cada objetivo</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">Unboxing e Reviews</p>
                  <p className="text-xs text-gray-600">
                    Conteúdo que destaca a experiência de recebimento e primeiras impressões dos produtos, gerando
                    desejo e expectativa
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">Styling e Lookbooks</p>
                  <p className="text-xs text-gray-600">
                    Demonstração de diferentes formas de usar as peças, inspirando o público e mostrando versatilidade
                    dos produtos
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">Takeovers e Lives</p>
                  <p className="text-xs text-gray-600">
                    Conteúdo em tempo real que gera proximidade com a audiência e oportunidades de interação direta com
                    a marca
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">Co-criação de Produtos</p>
                  <p className="text-xs text-gray-600">
                    Desenvolvimento de coleções cápsulas ou itens específicos em colaboração com influenciadores
                    estratégicos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Resultados e Case */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden md:col-span-2">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Resultados e Cases</h3>
              <p className="text-sm text-gray-600">O impacto do influencer marketing para marcas de moda</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-integrare-blue mb-2">4.8x</p>
                  <p className="text-sm text-gray-600">ROI médio em campanhas com influenciadores</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-integrare-blue mb-2">+67%</p>
                  <p className="text-sm text-gray-600">Aumento em engajamento nas redes sociais</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-integrare-blue mb-2">+43%</p>
                  <p className="text-sm text-gray-600">Crescimento em vendas de produtos destacados</p>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h4 className="text-base font-medium text-gray-700 mb-3">Case: Lançamento Coleção Verão CM</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-600 mb-3">
                      Para o lançamento da coleção de verão da Carla Mendes, desenvolvemos uma estratégia com 12
                      influenciadores de diferentes nichos e tamanhos de audiência, criando uma campanha integrada que
                      combinou:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-integrare-blue mr-2 font-bold">•</span>
                        <span>Pré-lançamento exclusivo para influenciadores</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-integrare-blue mr-2 font-bold">•</span>
                        <span>Conteúdo de styling personalizado para cada perfil</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-integrare-blue mr-2 font-bold">•</span>
                        <span>Lives de shopping com códigos de desconto exclusivos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-integrare-blue mr-2 font-bold">•</span>
                        <span>Repostagem estratégica de conteúdo nos canais da marca</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <p className="text-sm font-medium text-gray-700 mb-2">Resultados da Campanha</p>
                    <ul className="space-y-2 text-xs">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 font-bold">↑</span>
                        <span>Esgotamento de 78% dos itens em 48h</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 font-bold">↑</span>
                        <span>Aumento de 215% em tráfego para o e-commerce</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 font-bold">↑</span>
                        <span>Crescimento de 12.500 seguidores em uma semana</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 font-bold">↑</span>
                        <span>ROI de 6.2x sobre o investimento na campanha</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
