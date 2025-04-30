import SlideLayout from "./slide-layout"
import Image from "next/image"

export default function SlidePortfolioLesii() {
  return (
    <SlideLayout title="Lesii Brand - Joias">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Imagens principais */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="relative rounded-lg overflow-hidden h-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/M08D06_POSTS_LESII_FOTO-02-1KFEoEe8zknqVMow9rMgeOydwcCDM6.png"
                  alt="Modelo com brincos e pulseira Lesii Brand"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-rows-2 gap-4 h-full">
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/M08D06_POSTS_LESII_COLARES-giQmpeCf8tCXcbRc2qSyh6SIwSQHmu.png"
                    alt="Colares Lesii Brand"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <Image src="/elegant-gold-wrist.png" alt="Pulseira Lesii Brand" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Imagens secundárias */}
          <div className="md:col-span-4">
            <div className="grid grid-rows-3 gap-4 h-full">
              <div className="relative rounded-lg overflow-hidden">
                <Image src="/shimmering-delicates.png" alt="Brincos Lesii Brand" fill className="object-cover" />
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image src="/opulent-ring-showcase.png" alt="Anéis Lesii Brand" fill className="object-cover" />
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image src="/pearl-necklace-display.png" alt="Colar Lesii Brand" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Rodapé com logo */}
          <div className="md:col-span-12 flex justify-center mt-2">
            <div className="bg-white px-8 py-4 rounded-lg shadow-sm">
              <Image
                src="/placeholder.svg?height=60&width=180&query=lesii brand jewelry logo elegant"
                alt="Logo Lesii Brand"
                width={180}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
