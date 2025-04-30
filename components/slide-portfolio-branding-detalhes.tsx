import SlideLayout from "./slide-layout"
import Image from "next/image"

export default function SlidePortfolioBrandingDetalhes() {
  return (
    <SlideLayout title="Detalhes de Projetos">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Projeto BioDente */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Projeto BioDente</h3>
              <p className="text-sm text-gray-600">Identidade visual para clínica odontológica</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M09_MANUALDEMARCA_BIODENTE2_Pa%CC%81gina_3.jpg-wEqdRHUKmXoNXWdYZfbf48p8G3ykcY.jpeg"
                    alt="Cartões de visita Dr. Antonio Trevisani"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M09_MANUALDEMARCA_BIODENTE2_Pa%CC%81gina_2.jpg-MKUSyeYLA6Ya2sHm0tvxIVsmVPhpGL.jpeg"
                    alt="Website BioDente"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden md:col-span-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M09_MANUALDEMARCA_BIODENTE2_Pa%CC%81gina_4.jpg-IlT96qGLm7c7cSHAi63g9g9opIQ8nD.jpeg"
                    alt="Posts para redes sociais BioDente"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-600">
                  Desenvolvimento de identidade visual premium para clínica odontológica, incluindo logo, cartões de
                  visita, website e estratégia para redes sociais.
                </p>
              </div>
            </div>
          </div>

          {/* Projeto EEE Dental */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Projeto EEE Dental</h3>
              <p className="text-sm text-gray-600">Rebranding e aplicações para indústria odontológica</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M11_MANUALDEMARCA_EFF_Pa%CC%81gina_1.jpg-xoldQivIyIEWBgefFk1BIK3pjL6ph8.jpeg"
                    alt="Fachada EEE Dental"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M11_MANUALDEMARCA_EFF_Pa%CC%81gina_2.jpg-5bfrBvTiraNSPILoJo45CzqefcJQP2.jpeg"
                    alt="Embalagens EEE Dental"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden md:col-span-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M11_MANUALDEMARCA_EFF_Pa%CC%81gina_3.jpg-Fu3XtgJ4FWE4jeeaBr7ZZuDtgkfvl9.jpeg"
                    alt="Embalagem sustentável EEE Dental"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-600">
                  Reposicionamento de marca para empresa de componentes odontológicos, com aplicações em fachada,
                  embalagens e materiais sustentáveis.
                </p>
              </div>
            </div>
          </div>

          {/* Projeto Sacolão Galvão */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden md:col-span-2">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Projeto Sacolão Galvão</h3>
              <p className="text-sm text-gray-600">Identidade visual e estratégia de conteúdo para supermercado</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M07_MANUALDEMARCA_SACOLAOGALVAO_Pa%CC%81gina_1.jpg-DnFoNP4fyjO4x7bsGBUYGJyzN12MDe.jpeg"
                    alt="Cartões de visita Sacolão Galvão"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M07_MANUALDEMARCA_SACOLAOGALVAO_Pa%CC%81gina_2.jpg-c6F9FdC8zvwUO6AhUxGKEKzd8YmnLn.jpeg"
                    alt="Interior Sacolão Galvão"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M07_MANUALDEMARCA_SACOLAOGALVAO_Pa%CC%81gina_4.jpg-yF3R4jRsOl6VCqRWSyDgiGgHO99kwS.jpeg"
                    alt="Posts para redes sociais Sacolão Galvão"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-600">
                  Desenvolvimento de identidade visual para supermercado de bairro, com foco em produtos frescos e
                  saudáveis. O projeto incluiu cartões de visita, sinalização interna e estratégia de conteúdo para
                  redes sociais com receitas e dicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
