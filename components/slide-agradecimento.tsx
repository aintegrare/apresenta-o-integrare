import Image from "next/image"
import SlideLayout from "./slide-layout"

export default function SlideAgradecimento() {
  return (
    <SlideLayout isThankYou={true}>
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-light text-integrare-blue mb-8 sm:mb-10 md:mb-12">
          Obrigado
        </h1>
        <div className="mb-8 sm:mb-10 md:mb-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/M08D04_LOGO%20AZUL_INTEGRARE%281%29-D5rOH9L7vfiMA2x69mvb4B07edGGnG.png"
            alt="Agência Integrare"
            width={160}
            height={160}
            className="w-32 sm:w-36 md:w-40 h-auto"
            priority
          />
        </div>
        <p className="text-base sm:text-lg md:text-xl font-inter text-gray-500 max-w-xl mx-auto mb-6 sm:mb-8 md:mb-10">
          Transformando negócios através do marketing digital
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-10 mt-2 sm:mt-4">
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1">Contato</p>
            <p className="text-sm">contato@aintegrare.com.br</p>
            <p className="text-sm mt-1">(44) 9996-87264</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1">Website</p>
            <p className="text-sm">www.aintegrare.com.br</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
