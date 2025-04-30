import SlideLayout from "./slide-layout"
import Image from "next/image"

export default function SlidePortfolioBrandingCompleto() {
  return (
    <SlideLayout title="Portfolio de Branding">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Introdução */}
          <div className="md:col-span-3 mb-2">
            <p className="text-center text-gray-600 font-inter text-sm">
              Desenvolvemos identidades visuais completas, desde a concepção da marca até todas as suas aplicações
            </p>
          </div>

          {/* Projeto De Pieri */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-3 bg-gray-50 border-b">
              <h3 className="text-base font-medium text-integrare-blue">De Pieri</h3>
              <p className="text-xs text-gray-600">Produtos para casa</p>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative h-24 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-De-Pieri-9.jpg-wPNEcDXzqYAXTSgs7ILzi7lJWnRUEg.jpeg"
                    alt="Cartões de visita De Pieri"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-De-Pieri-11.jpg-2ytzEYAdT3kV3WLJCr8as5eA2pr6X0.jpeg"
                    alt="Embalagem De Pieri"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-De-Pieri-10.jpg-PtXJ6cJbzMFOHfgLu4NxWarIwgWIDL.jpeg"
                    alt="Aplicações externas De Pieri"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-De-Pieri-14.jpg-b5tn3jwOMVkCCWuMBYSJvhVRJjhOtN.jpeg"
                    alt="Ecobag De Pieri"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Projeto Dra. Vanessa Delmiro */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-3 bg-gray-50 border-b">
              <h3 className="text-base font-medium text-integrare-blue">Dra. Vanessa Delmiro</h3>
              <p className="text-xs text-gray-600">Cardiologista</p>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative h-24 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-Vanessa-Delmiro-7.jpg-gT91SGF5VDtStfAUM1L5jYp9e0PMHT.jpeg"
                    alt="Cartão de visita Dra. Vanessa Delmiro"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-Vanessa-Delmiro-6.jpg-1TPvHMJZSMDmnZ2qbVSCnUDTJP3keW.jpeg"
                    alt="Cartões de visita Dra. Vanessa Delmiro"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded overflow-hidden md:col-span-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-Vanessa-Delmiro-8.jpg-PzlnwJRUXhVCOZUluVhPHK90K1PIoq.jpeg"
                    alt="Ecobag Dra. Vanessa Delmiro"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Projeto EEE Dental */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-3 bg-gray-50 border-b">
              <h3 className="text-base font-medium text-integrare-blue">EEE Dental</h3>
              <p className="text-xs text-gray-600">Componentes odontológicos</p>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative h-24 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M11_MANUALDEMARCA_EFF_Pa%CC%81gina_1.jpg-xoldQivIyIEWBgefFk1BIK3pjL6ph8.jpeg"
                    alt="Fachada EEE Dental"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M11_MANUALDEMARCA_EFF_Pa%CC%81gina_2.jpg-5bfrBvTiraNSPILoJo45CzqefcJQP2.jpeg"
                    alt="Embalagens EEE Dental"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded overflow-hidden md:col-span-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M11_MANUALDEMARCA_EFF_Pa%CC%81gina_3.jpg-Fu3XtgJ4FWE4jeeaBr7ZZuDtgkfvl9.jpeg"
                    alt="Embalagem sustentável EEE Dental"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Aplicações Digitais */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden md:col-span-3">
            <div className="p-3 bg-gray-50 border-b">
              <h3 className="text-base font-medium text-integrare-blue">Aplicações Digitais e Impressas</h3>
              <p className="text-xs text-gray-600">Websites, redes sociais e materiais promocionais</p>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                <div className="relative h-28 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M09_MANUALDEMARCA_BIODENTE2_Pa%CC%81gina_2.jpg-MKUSyeYLA6Ya2sHm0tvxIVsmVPhpGL.jpeg"
                    alt="Website BioDente"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M09_MANUALDEMARCA_BIODENTE2_Pa%CC%81gina_4.jpg-IlT96qGLm7c7cSHAi63g9g9opIQ8nD.jpeg"
                    alt="Posts para redes sociais BioDente"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-De-Pieri-15.jpg-b3ezVP8ppS0Ohm0AJ4aoF21APqkyLU.jpeg"
                    alt="Post para redes sociais De Pieri"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-De-Pieri-13.jpg-d7349jzbuvpzG2Vhyad0SYeORscZNM.jpeg"
                    alt="Pôster emoldurado De Pieri"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-De-Pieri-12.jpg-GjNIkJ9lUAqDZZYEnmPaPToEU2FlfD.jpeg"
                    alt="Banner/anúncio De Pieri"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Projeto Sacolão Galvão */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden md:col-span-3">
            <div className="p-3 bg-gray-50 border-b">
              <h3 className="text-base font-medium text-integrare-blue">Sacolão Galvão</h3>
              <p className="text-xs text-gray-600">Supermercado de produtos frescos</p>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-3 gap-2">
                <div className="relative h-28 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M07_MANUALDEMARCA_SACOLAOGALVAO_Pa%CC%81gina_1.jpg-DnFoNP4fyjO4x7bsGBUYGJyzN12MDe.jpeg"
                    alt="Cartões de visita Sacolão Galvão"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M07_MANUALDEMARCA_SACOLAOGALVAO_Pa%CC%81gina_2.jpg-c6F9FdC8zvwUO6AhUxGKEKzd8YmnLn.jpeg"
                    alt="Interior Sacolão Galvão"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M07_MANUALDEMARCA_SACOLAOGALVAO_Pa%CC%81gina_4.jpg-yF3R4jRsOl6VCqRWSyDgiGgHO99kwS.jpeg"
                    alt="Posts para redes sociais Sacolão Galvão"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Nosso processo de branding é completo e personalizado para cada cliente, garantindo uma identidade visual
            única e memorável que se destaca no mercado.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
