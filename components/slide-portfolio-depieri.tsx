import SlideLayout from "./slide-layout"
import Image from "next/image"

export default function SlidePortfolioDePieri() {
  return (
    <SlideLayout title="Portfolio de Branding - J De Pieri">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Logo e Conceito */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Identidade Visual</h3>
            </div>
            <div className="p-4">
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-De-Pieri-6.jpg-q4CscubHgv3T3lL3eTbtvbZ4gcI9OR.jpeg"
                    alt="Logo J De Pieri"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  Desenvolvimento de identidade visual elegante e sofisticada para a marca de moda J De Pieri, com
                  tipografia serif que transmite exclusividade e refinamento.
                </p>
              </div>
            </div>
          </div>

          {/* Aplicações */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Aplicações</h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-De-Pieri-1.jpg-Yx3Yd9Yd9Yx3Yd9Yd9Yx3Yd9Yd9"
                    alt="Cartão de visita J De Pieri"
                    fill
                    className="object-cover"
                    query="elegant business card with DE PIERI logo in navy blue"
                  />
                </div>
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-De-Pieri-2.jpg-Yx3Yd9Yd9Yx3Yd9Yd9Yx3Yd9Yd9"
                    alt="Etiquetas J De Pieri"
                    fill
                    className="object-cover"
                    query="clothing tags with DE PIERI logo in navy blue"
                  />
                </div>
              </div>
              <div className="relative h-48 rounded overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-De-Pieri-3.jpg-Yx3Yd9Yd9Yx3Yd9Yd9Yx3Yd9Yd9"
                  alt="Sacola J De Pieri"
                  fill
                  className="object-cover"
                  query="elegant shopping bag with DE PIERI logo in navy blue"
                />
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden md:col-span-2">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Comunicação Digital</h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-64 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-De-Pieri-4.jpg-Yx3Yd9Yd9Yx3Yd9Yd9Yx3Yd9Yd9"
                    alt="Post Instagram J De Pieri"
                    fill
                    className="object-cover"
                    query="elegant fashion instagram post with DE PIERI logo"
                  />
                </div>
                <div className="relative h-64 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-De-Pieri-5.jpg-Yx3Yd9Yd9Yx3Yd9Yd9Yx3Yd9Yd9"
                    alt="Post Instagram J De Pieri"
                    fill
                    className="object-cover"
                    query="elegant fashion instagram post with navy blue theme"
                  />
                </div>
                <div className="relative h-64 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-De-Pieri-6.jpg-Yx3Yd9Yd9Yx3Yd9Yd9Yx3Yd9Yd9"
                    alt="Post Instagram J De Pieri"
                    fill
                    className="object-cover"
                    query="elegant fashion instagram post with navy blue theme"
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
