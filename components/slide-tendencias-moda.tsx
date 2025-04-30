import SlideLayout from "./slide-layout"
import Image from "next/image"
import { TrendingUp, Sparkles, Palette, Zap } from "lucide-react"

export default function SlideTendenciasModa() {
  return (
    <SlideLayout title="Tendências em Social Media para Moda">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Introdução */}
          <div className="md:col-span-2 mb-2">
            <p className="text-center text-gray-600 font-inter text-sm">
              Acompanhamos as principais tendências do mercado de moda e social media, implementando estratégias
              inovadoras que mantêm nossos clientes à frente da concorrência
            </p>
          </div>

          {/* Tendências Atuais */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Tendências Atuais</h3>
              <p className="text-sm text-gray-600">O que está moldando o mercado</p>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-integrare-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Conteúdo Vertical e Imersivo</p>
                    <p className="text-xs text-gray-600">
                      Formatos verticais como Reels e TikTok dominam o consumo de conteúdo de moda, com experiências
                      mais imersivas e interativas
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Sparkles className="w-5 h-5 text-integrare-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Autenticidade e Transparência</p>
                    <p className="text-xs text-gray-600">
                      Consumidores valorizam marcas que mostram processos, bastidores e adotam práticas sustentáveis e
                      éticas
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Palette className="w-5 h-5 text-integrare-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Personalização e Exclusividade</p>
                    <p className="text-xs text-gray-600">
                      Conteúdo segmentado e experiências personalizadas que fazem o consumidor se sentir especial e
                      compreendido
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Zap className="w-5 h-5 text-integrare-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Social Commerce Integrado</p>
                    <p className="text-xs text-gray-600">
                      Experiências de compra diretamente nas plataformas sociais, reduzindo a fricção entre descoberta e
                      conversão
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Como Aplicamos */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Como Aplicamos</h3>
              <p className="text-sm text-gray-600">Estratégias inovadoras para nossos clientes</p>
            </div>
            <div className="p-4">
              <div className="relative h-40 rounded overflow-hidden mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/M02D26_SAIADISCO_CARLAMENDES%201.jpg-THeLSesnCfhtd0TMznZxMSeFrZ8yBK.jpeg"
                  alt="Trend Alert - Exemplo de conteúdo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <p className="text-white text-sm font-medium p-3">
                    Trend Alert: Conteúdo que conecta tendências globais com produtos locais
                  </p>
                </div>
              </div>

              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">1.</span>
                  <span>Criação de séries de conteúdo vertical com narrativas envolventes sobre as peças</span>
                </li>
                <li className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">2.</span>
                  <span>Desenvolvimento de estratégias de UGC (User Generated Content) para amplificar alcance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">3.</span>
                  <span>Implementação de lojas integradas no Instagram e TikTok com experiência fluida</span>
                </li>
                <li className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">4.</span>
                  <span>Conteúdo educativo sobre sustentabilidade e práticas éticas das marcas</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Estudo de Caso */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden md:col-span-2">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Estudo de Caso: Trend Alert CM</h3>
              <p className="text-sm text-gray-600">Transformando tendências em vendas</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600 mb-4">
                    Desenvolvemos para a Carla Mendes uma série de conteúdos "Trend Alert" que identificam tendências
                    emergentes e mostram como incorporá-las com peças da marca. A estratégia combina:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-gray-700">Pesquisa de Tendências</p>
                      <p className="text-xs text-gray-600">
                        Monitoramento constante de desfiles, influenciadores globais e comportamento do consumidor
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-gray-700">Conteúdo Educativo</p>
                      <p className="text-xs text-gray-600">
                        Posts e vídeos que explicam a tendência e como adaptá-la ao estilo pessoal
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-gray-700">Styling Inspiracional</p>
                      <p className="text-xs text-gray-600">
                        Produções que mostram múltiplas formas de usar as peças alinhadas à tendência
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-gray-700">Call-to-Action Direto</p>
                      <p className="text-xs text-gray-600">
                        Links diretos para compra das peças destacadas, facilitando a conversão imediata
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-base font-medium text-gray-700 mb-3 text-center">Resultados</h4>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-integrare-blue">+187%</p>
                      <p className="text-xs text-gray-600">Aumento no engajamento</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-integrare-blue">+92%</p>
                      <p className="text-xs text-gray-600">Crescimento em vendas dos itens destacados</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-integrare-blue">+45%</p>
                      <p className="text-xs text-gray-600">Aumento em tempo de permanência no site</p>
                    </div>
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
