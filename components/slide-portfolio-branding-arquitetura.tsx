import SlideLayout from "./slide-layout"
import Image from "next/image"

export default function SlidePortfolioBrandingArquitetura() {
  return (
    <SlideLayout title="Portfolio de Branding - Arquitetura">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Projeto Roberta Rosa */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Roberta Rosa</h3>
              <p className="text-sm text-gray-600">Identidade visual para escritório de arquitetura</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20M05D07_identidade-visual-idv_ROBERTA_Pa%CC%81gina_2.jpg-qcJeGyMHScv5k2NMktTPYhahB9Vq9H.jpeg"
                    alt="Variações do logotipo Roberta Rosa"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20M05D07_identidade-visual-idv_ROBERTA_Pa%CC%81gina_7.jpg-6rE0wwYwzz6xvDF3Q4qGlvYI9oSucF.jpeg"
                    alt="Aplicação do logotipo em projeto arquitetônico"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20M05D07_identidade-visual-idv_ROBERTA_Pa%CC%81gina_6.jpg-XJFM4KsuRtxvQKcFHW5TU4Ua1UBRFB.jpeg"
                    alt="Paleta de cores Roberta Rosa"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20M05D07_identidade-visual-idv_ROBERTA_Pa%CC%81gina_8.jpg-nyHdWpdSNO8Z1wIICxATpxQ0XV9BXL.jpeg"
                    alt="Elementos visuais Roberta Rosa"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xs text-gray-600">
                  Desenvolvimento de identidade visual sofisticada para escritório de arquitetura, com tipografia
                  elegante e paleta de cores neutras que transmitem simplicidade, elegância e conforto. O projeto
                  incluiu variações do logotipo para diferentes aplicações e um sistema visual completo que reflete a
                  estética minimalista e contemporânea dos projetos do escritório.
                </p>
              </div>
            </div>
          </div>

          {/* Projeto Mateus Dias */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Mateus Dias</h3>
              <p className="text-sm text-gray-600">Identidade visual para arquiteto</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mateus%20Dias%20Arquitetura%20-%20Manual%20de%20Onboarding3%2047.jpg-sbHNiffGTKpCk4hEW39D1eMdXzoxYP.jpeg"
                    alt="Cartões de visita Mateus Dias"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mateus%20Dias%20Arquitetura%20-%20Manual%20de%20Onboarding3%2048.jpg-Y1LZWgpIlQrqBnSZ9NiGgO6ekVhMmS.jpeg"
                    alt="Produtos promocionais Mateus Dias"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden md:col-span-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mateus%20Dias%20Arquitetura%20-%20Manual%20de%20Onboarding3%2049.jpg-soSCI4Kqk0zoXM2zkQqoDWnQOY8HzO.jpeg"
                    alt="Aplicação em parede Mateus Dias"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xs text-gray-600">
                  Criação de identidade visual moderna e minimalista para escritório de arquitetura, com monograma
                  distintivo que combina as iniciais "M" e "D". A paleta em azul marinho e branco transmite
                  profissionalismo e sofisticação. O projeto incluiu papelaria completa, produtos promocionais e
                  sinalização para o escritório, criando uma experiência de marca coesa e memorável.
                </p>
              </div>
            </div>
          </div>

          {/* Conceito e Aplicações */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden md:col-span-2">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Conceito e Aplicações</h3>
              <p className="text-sm text-gray-600">Estratégia e desenvolvimento de marca para arquitetura</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-base font-medium text-gray-700 mb-2">Estratégia de Marca</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Nossas identidades visuais para escritórios de arquitetura são desenvolvidas com base em um profundo
                    entendimento do estilo de cada profissional, seus projetos e valores. Criamos marcas que:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-integrare-blue mr-2 font-bold">•</span>
                      <span>Refletem a estética e filosofia do escritório</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-integrare-blue mr-2 font-bold">•</span>
                      <span>Comunicam sofisticação e atenção aos detalhes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-integrare-blue mr-2 font-bold">•</span>
                      <span>Funcionam em diversos contextos e aplicações</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-integrare-blue mr-2 font-bold">•</span>
                      <span>Destacam-se no mercado competitivo de arquitetura</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-700 mb-2">Aplicações Desenvolvidas</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-medium text-sm text-gray-700">Papelaria Corporativa</p>
                      <p className="text-xs text-gray-600">Cartões de visita, papel timbrado, envelopes, pastas</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-medium text-sm text-gray-700">Materiais Digitais</p>
                      <p className="text-xs text-gray-600">Assinaturas de email, apresentações, redes sociais</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-medium text-sm text-gray-700">Sinalização</p>
                      <p className="text-xs text-gray-600">Fachada, placas internas, identificação de projetos</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-medium text-sm text-gray-700">Produtos Promocionais</p>
                      <p className="text-xs text-gray-600">Ecobags, garrafas, brindes para clientes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Nossa experiência em branding para escritórios de arquitetura combina estética refinada com estratégia de
            marca eficaz, criando identidades visuais que comunicam a essência de cada profissional e fortalecem seu
            posicionamento no mercado.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
