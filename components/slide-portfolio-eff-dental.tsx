import SlideLayout from "./slide-layout"
import Image from "next/image"

export default function SlidePortfolioEFFDental() {
  return (
    <SlideLayout title="Portfolio de Branding - EFF Dental">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fachada */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Fachada</h3>
            </div>
            <div className="p-4">
              <div className="relative h-64 rounded overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M11_MANUALDEMARCA_EFF_Pa%CC%81gina_1.jpg-xoldQivIyIEWBgefFk1BIK3pjL6ph8.jpeg"
                  alt="Fachada EFF Dental"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Embalagens */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Embalagens</h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 gap-3">
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M11_MANUALDEMARCA_EFF_Pa%CC%81gina_2.jpg-5bfrBvTiraNSPILoJo45CzqefcJQP2.jpeg"
                    alt="Embalagens EFF Dental"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pa%CC%81ginas%20de%20A22M11_MANUALDEMARCA_EFF_Pa%CC%81gina_3.jpg-Fu3XtgJ4FWE4jeeaBr7ZZuDtgkfvl9.jpeg"
                    alt="Embalagem sustentável EFF Dental"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Aplicações Adicionais */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden md:col-span-2">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Aplicações Adicionais</h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-48 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EFF-Dental-1.jpg-Yx3Yd9Yd9Yx3Yd9Yd9Yx3Yd9Yd9"
                    alt="Cartão de visita EFF Dental"
                    fill
                    className="object-cover"
                    query="dental business card with blue logo"
                  />
                </div>
                <div className="relative h-48 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EFF-Dental-2.jpg-Yx3Yd9Yd9Yx3Yd9Yd9Yx3Yd9Yd9"
                    alt="Uniforme EFF Dental"
                    fill
                    className="object-cover"
                    query="dental uniform with blue logo"
                  />
                </div>
                <div className="relative h-48 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EFF-Dental-3.jpg-Yx3Yd9Yd9Yx3Yd9Yd9Yx3Yd9Yd9"
                    alt="Website EFF Dental"
                    fill
                    className="object-cover"
                    query="dental website with blue theme"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
