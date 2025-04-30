import SlideLayout from "./slide-layout"
import Image from "next/image"

export default function SlidePortfolioModa() {
  return (
    <SlideLayout title="Portfolio de Moda">
      <div className="max-w-6xl mx-auto">
        {/* Grid principal de imagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Coluna 1 - Imagem principal */}
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image src="/shimmering-adornment.png" alt="Sessão fotográfica de joias" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-xl font-semibold">Carla Mendes Joalheria</h3>
              <p className="text-white/80 text-sm">Sessão fotográfica de produtos</p>
            </div>
          </div>

          {/* Coluna 2 - Grid de imagens menores */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[240px] rounded-lg overflow-hidden shadow-md">
              <Image src="/elegant-gold-wrist.png" alt="Pulseira dourada elegante" fill className="object-cover" />
            </div>
            <div className="relative h-[240px] rounded-lg overflow-hidden shadow-md">
              <Image src="/shimmering-delicates.png" alt="Joias delicadas cintilantes" fill className="object-cover" />
            </div>
            <div className="relative h-[240px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/opulent-ring-showcase.png"
                alt="Exposição de anéis opulentos"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[240px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/pearl-necklace-display.png"
                alt="Exposição de colar de pérolas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Descrição do projeto */}
        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-sm mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Sobre o Projeto</h3>
          <p className="text-gray-600">
            Desenvolvemos uma identidade visual sofisticada e elegante para a marca de joias Carla Mendes, complementada
            por sessões fotográficas profissionais que destacam a beleza e os detalhes das peças. O projeto incluiu a
            criação de conteúdo para redes sociais, e-commerce e material promocional.
          </p>
        </div>

        {/* Linha do tempo do projeto */}
        <div className="relative mb-8">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 ml-6 md:ml-8"></div>

          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0 w-12 md:w-16 pt-1">
                <div className="w-4 h-4 bg-integrare-blue rounded-full ml-4 md:ml-6"></div>
              </div>
              <div className="flex-grow">
                <h4 className="text-lg font-medium text-gray-800">Planejamento e Briefing</h4>
                <p className="text-sm text-gray-600">
                  Análise do mercado de joias e definição do posicionamento visual da marca.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-12 md:w-16 pt-1">
                <div className="w-4 h-4 bg-integrare-blue rounded-full ml-4 md:ml-6"></div>
              </div>
              <div className="flex-grow">
                <h4 className="text-lg font-medium text-gray-800">Produção Visual</h4>
                <p className="text-sm text-gray-600">
                  Sessões fotográficas em estúdio com iluminação controlada para destacar os detalhes das joias.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-12 md:w-16 pt-1">
                <div className="w-4 h-4 bg-integrare-blue rounded-full ml-4 md:ml-6"></div>
              </div>
              <div className="flex-grow">
                <h4 className="text-lg font-medium text-gray-800">Implementação</h4>
                <p className="text-sm text-gray-600">
                  Aplicação das imagens em redes sociais, e-commerce e material promocional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
