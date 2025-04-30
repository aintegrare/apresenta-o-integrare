import SlideLayout from "./slide-layout"
import Image from "next/image"
import { ShoppingBag, Camera, BarChart3, Smartphone } from "lucide-react"

export default function SlideEcommerceModa() {
  return (
    <SlideLayout title="E-commerce de Moda">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Introdução */}
          <div className="md:col-span-2 mb-2">
            <p className="text-center text-gray-600 font-inter text-sm">
              Estratégias integradas para impulsionar vendas online de produtos de moda, combinando fotografia
              profissional, conteúdo estratégico e otimização de conversão
            </p>
          </div>

          {/* Fotografia para E-commerce */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Fotografia para E-commerce</h3>
              <p className="text-sm text-gray-600">Imagens que vendem</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/M06D18_VESTIDOINVERNO_CARLAMENDES%202.jpg-1UsjUBIrrchB6DLyBSW3yhwq3wqV48.jpeg"
                    alt="Fotografia de produto - vestido"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/M03D12_JOIAS_CARLAMENDES%203.jpg-O5KIBesiqzH2f8ZXzMsqBcuK24n0ze.jpeg"
                    alt="Fotografia de produto - acessórios"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Camera className="w-4 h-4 text-integrare-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Fotografia Técnica</p>
                    <p className="text-xs text-gray-600">
                      Imagens padronizadas que destacam detalhes, texturas e cores reais dos produtos
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ShoppingBag className="w-4 h-4 text-integrare-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Styling de Produto</p>
                    <p className="text-xs text-gray-600">
                      Composições que mostram versatilidade e inspiram o consumidor a visualizar o uso
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart3 className="w-4 h-4 text-integrare-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Resultados</p>
                    <p className="text-xs text-gray-600">
                      Redução de 65% na taxa de devolução e aumento de 42% na conversão de vendas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Estratégias Omnichannel */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Estratégias Omnichannel</h3>
              <p className="text-sm text-gray-600">Integração entre social media e e-commerce</p>
            </div>
            <div className="p-4">
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-center font-medium text-integrare-blue">
                  Aumento médio de 38% nas vendas online com estratégias integradas
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Smartphone className="w-4 h-4 text-integrare-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Social Shopping</p>
                    <p className="text-xs text-gray-600">
                      Integração de lojas no Instagram e Facebook, com conteúdo shoppable e estratégias de remarketing
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">•</span>
                  <p className="text-xs text-gray-600">
                    Criação de conteúdo específico para cada etapa do funil de vendas
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">•</span>
                  <p className="text-xs text-gray-600">
                    Estratégias de cross-selling e upselling através de conteúdo personalizado
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">•</span>
                  <p className="text-xs text-gray-600">
                    Campanhas sazonais integradas entre plataformas sociais e e-commerce
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Case de Sucesso */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden md:col-span-2">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Case de Sucesso: Carla Mendes</h3>
              <p className="text-sm text-gray-600">Transformação digital para marca de moda feminina</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <h4 className="text-base font-medium text-gray-700 mb-2">Desafio</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    A marca Carla Mendes buscava aumentar suas vendas online e criar uma presença digital mais forte,
                    com foco na valorização de seus produtos premium e na criação de uma experiência de compra
                    diferenciada.
                  </p>

                  <h4 className="text-base font-medium text-gray-700 mb-2">Solução</h4>
                  <ul className="space-y-2 text-sm mb-4">
                    <li className="flex items-start">
                      <span className="text-integrare-blue mr-2 font-bold">1.</span>
                      <span>Reformulação completa da fotografia de produtos para o e-commerce</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-integrare-blue mr-2 font-bold">2.</span>
                      <span>Criação de conteúdo segmentado para diferentes linhas de produtos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-integrare-blue mr-2 font-bold">3.</span>
                      <span>Implementação de estratégia de social shopping integrada</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-integrare-blue mr-2 font-bold">4.</span>
                      <span>Campanhas sazonais com conceito visual unificado</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-base font-medium text-gray-700 mb-3 text-center">Resultados</h4>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-integrare-blue">+156%</p>
                      <p className="text-xs text-gray-600">Aumento em vendas online</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-integrare-blue">-32%</p>
                      <p className="text-xs text-gray-600">Redução no custo de aquisição</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-integrare-blue">+89%</p>
                      <p className="text-xs text-gray-600">Aumento no valor médio do pedido</p>
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
