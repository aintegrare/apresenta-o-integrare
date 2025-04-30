import SlideLayout from "./slide-layout"
import Image from "next/image"

export default function SlidePortfolioBranding() {
  return (
    <SlideLayout title="Portfolio de Branding">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Introdução */}
          <div className="md:col-span-2 mb-2">
            <p className="text-center text-gray-600 font-inter text-sm">
              Desenvolvemos identidades visuais completas, desde a concepção da marca até todas as suas aplicações
            </p>
          </div>

          {/* Coluna 1 - Identidades Visuais */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-integrare-blue mb-2">Identidades Visuais</h3>

            <div className="grid grid-cols-2 gap-3">
              {/* Cartões de visita Dr. Trevisani */}
              <div className="relative h-40 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M09_MANUALDEMARCA_BIODENTE2_Pa%CC%81gina_3.jpg-wEqdRHUKmXoNXWdYZfbf48p8G3ykcY.jpeg"
                  alt="Cartões de visita Dr. Antonio Trevisani"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2">
                  <p className="text-white text-xs">Dr. Antonio Trevisani</p>
                </div>
              </div>

              {/* Cartões de visita Sacolão Galvão */}
              <div className="relative h-40 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M07_MANUALDEMARCA_SACOLAOGALVAO_Pa%CC%81gina_1.jpg-DnFoNP4fyjO4x7bsGBUYGJyzN12MDe.jpeg"
                  alt="Cartões de visita Sacolão Galvão"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2">
                  <p className="text-white text-xs">Sacolão Galvão</p>
                </div>
              </div>
            </div>

            {/* Website BioDente */}
            <div className="relative h-48 rounded-lg overflow-hidden shadow-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M09_MANUALDEMARCA_BIODENTE2_Pa%CC%81gina_2.jpg-MKUSyeYLA6Ya2sHm0tvxIVsmVPhpGL.jpeg"
                alt="Website BioDente"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2">
                <p className="text-white text-xs">Website BioDente</p>
              </div>
            </div>

            {/* Posts BioDente */}
            <div className="relative h-48 rounded-lg overflow-hidden shadow-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M09_MANUALDEMARCA_BIODENTE2_Pa%CC%81gina_4.jpg-IlT96qGLm7c7cSHAi63g9g9opIQ8nD.jpeg"
                alt="Posts para redes sociais BioDente"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2">
                <p className="text-white text-xs">Redes Sociais BioDente</p>
              </div>
            </div>
          </div>

          {/* Coluna 2 - Aplicações */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-integrare-blue mb-2">Aplicações</h3>

            {/* Fachada EEE */}
            <div className="relative h-48 rounded-lg overflow-hidden shadow-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M11_MANUALDEMARCA_EFF_Pa%CC%81gina_1.jpg-xoldQivIyIEWBgefFk1BIK3pjL6ph8.jpeg"
                alt="Fachada EEE Dental"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2">
                <p className="text-white text-xs">Fachada EEE Dental</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Embalagens EEE */}
              <div className="relative h-40 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M11_MANUALDEMARCA_EFF_Pa%CC%81gina_2.jpg-5bfrBvTiraNSPILoJo45CzqefcJQP2.jpeg"
                  alt="Embalagens EEE Dental"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2">
                  <p className="text-white text-xs">Embalagens EEE</p>
                </div>
              </div>

              {/* Embalagem sustentável EEE */}
              <div className="relative h-40 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M11_MANUALDEMARCA_EFF_Pa%CC%81gina_3.jpg-Fu3XtgJ4FWE4jeeaBr7ZZuDtgkfvl9.jpeg"
                  alt="Embalagem sustentável EEE Dental"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2">
                  <p className="text-white text-xs">Embalagem Eco EEE</p>
                </div>
              </div>
            </div>

            {/* Posts Sacolão Galvão */}
            <div className="relative h-48 rounded-lg overflow-hidden shadow-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M07_MANUALDEMARCA_SACOLAOGALVAO_Pa%CC%81gina_4.jpg-yF3R4jRsOl6VCqRWSyDgiGgHO99kwS.jpeg"
                alt="Posts para redes sociais Sacolão Galvão"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2">
                <p className="text-white text-xs">Redes Sociais Sacolão Galvão</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
