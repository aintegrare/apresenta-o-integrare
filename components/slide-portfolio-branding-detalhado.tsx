import SlideLayout from "./slide-layout"
import Image from "next/image"

export default function SlidePortfolioBrandingDetalhado() {
  return (
    <SlideLayout title="Projetos em Destaque">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Projeto De Pieri */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Projeto De Pieri</h3>
              <p className="text-sm text-gray-600">Identidade visual para loja de produtos para casa</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-De-Pieri-9.jpg-wPNEcDXzqYAXTSgs7ILzi7lJWnRUEg.jpeg"
                    alt="Cartões de visita De Pieri"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-De-Pieri-11.jpg-2ytzEYAdT3kV3WLJCr8as5eA2pr6X0.jpeg"
                    alt="Embalagem De Pieri"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-De-Pieri-10.jpg-PtXJ6cJbzMFOHfgLu4NxWarIwgWIDL.jpeg"
                    alt="Aplicações externas De Pieri"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-De-Pieri-14.jpg-b5tn3jwOMVkCCWuMBYSJvhVRJjhOtN.jpeg"
                    alt="Ecobag De Pieri"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xs text-gray-600">
                  Desenvolvimento de identidade visual premium para loja de produtos para casa, com foco em elegância e
                  sofisticação. O projeto incluiu logo, cartões de visita, embalagens, sinalização externa e materiais
                  promocionais.
                </p>
              </div>
            </div>
          </div>

          {/* Projeto Dra. Vanessa Delmiro */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Projeto Dra. Vanessa Delmiro</h3>
              <p className="text-sm text-gray-600">Identidade visual para cardiologista</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-Vanessa-Delmiro-7.jpg-gT91SGF5VDtStfAUM1L5jYp9e0PMHT.jpeg"
                    alt="Cartão de visita Dra. Vanessa Delmiro"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-Vanessa-Delmiro-6.jpg-1TPvHMJZSMDmnZ2qbVSCnUDTJP3keW.jpeg"
                    alt="Cartões de visita Dra. Vanessa Delmiro"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden md:col-span-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-Vanessa-Delmiro-8.jpg-PzlnwJRUXhVCOZUluVhPHK90K1PIoq.jpeg"
                    alt="Ecobag Dra. Vanessa Delmiro"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xs text-gray-600">
                  Criação de identidade visual para médica cardiologista, com símbolo que combina coração e
                  eletrocardiograma. Aplicações em cartões de visita, ecobags e materiais promocionais, utilizando
                  paleta de cores em tons de rosa e bordô.
                </p>
              </div>
            </div>
          </div>

          {/* Projeto EEE Dental */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Projeto EEE Dental</h3>
              <p className="text-sm text-gray-600">Rebranding para indústria odontológica</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
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
              <div className="mt-3">
                <p className="text-xs text-gray-600">
                  Reposicionamento de marca para empresa de componentes odontológicos, com aplicações em fachada,
                  embalagens e materiais sustentáveis. Uso de cores verde e branco para transmitir confiança e
                  compromisso ambiental.
                </p>
              </div>
            </div>
          </div>

          {/* Projeto Sacolão Galvão */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Projeto Sacolão Galvão</h3>
              <p className="text-sm text-gray-600">Identidade visual para supermercado</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M07_MANUALDEMARCA_SACOLAOGALVAO_Pa%CC%81gina_1.jpg-DnFoNP4fyjO4x7bsGBUYGJyzN12MDe.jpeg"
                    alt="Cartões de visita Sacolão Galvão"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M07_MANUALDEMARCA_SACOLAOGALVAO_Pa%CC%81gina_2.jpg-c6F9FdC8zvwUO6AhUxGKEKzd8YmnLn.jpeg"
                    alt="Interior Sacolão Galvão"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden md:col-span-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M07_MANUALDEMARCA_SACOLAOGALVAO_Pa%CC%81gina_4.jpg-yF3R4jRsOl6VCqRWSyDgiGgHO99kwS.jpeg"
                    alt="Posts para redes sociais Sacolão Galvão"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-3">
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
