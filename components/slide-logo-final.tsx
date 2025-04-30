import SlideLayout from "./slide-layout"
import Image from "next/image"

export default function SlideLogoFinal() {
  return (
    <SlideLayout isThankYou={true}>
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <div className="w-full max-w-md">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/M08D04_LOGO%20AZUL_INTEGRARE%281%29-D5rOH9L7vfiMA2x69mvb4B07edGGnG.png"
            alt="Integrare"
            width={600}
            height={300}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </SlideLayout>
  )
}
