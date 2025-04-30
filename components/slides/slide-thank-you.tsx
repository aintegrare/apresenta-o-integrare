import Image from "next/image"

interface SlideThankYouProps {
  slideNumber: number
  totalSlides: number
}

export default function SlideThankYou({ slideNumber, totalSlides }: SlideThankYouProps) {
  return (
    <div className="w-full h-screen flex flex-col bg-[#4b7bb5] text-white overflow-hidden relative">
      <div className="flex-1 flex flex-col items-center justify-center px-12 py-24">
        <Image
          src="/images/logo_integrare_full.png"
          alt="Integrare"
          width={180}
          height={72}
          className="h-20 w-auto mb-12"
          priority
          crossOrigin="anonymous"
        />
        <h1 className="text-5xl font-poppins font-bold mb-6 text-center">Obrigado!</h1>
        <p className="text-xl font-light mb-8 text-center max-w-2xl">
          Este design system foi criado para garantir consistência, eficiência e qualidade em todos os produtos digitais
          da Agência Integrare.
        </p>
        <div className="flex items-center space-x-6 mt-8">
          <div className="text-center">
            <p className="text-lg font-medium">contato@redeintegrare.com.br</p>
            <p className="text-sm opacity-80">Email</p>
          </div>
          <div className="h-12 w-px bg-white opacity-30"></div>
          <div className="text-center">
            <p className="text-lg font-medium">(44) 99999-9999</p>
            <p className="text-sm opacity-80">Telefone</p>
          </div>
          <div className="h-12 w-px bg-white opacity-30"></div>
          <div className="text-center">
            <p className="text-lg font-medium">redeintegrare.com.br</p>
            <p className="text-sm opacity-80">Website</p>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="px-12 py-4 flex justify-between items-center border-t border-white border-opacity-20">
        <p className="text-sm text-white text-opacity-70">Agência Integrare</p>
        <p className="text-sm text-white text-opacity-70">
          Slide {slideNumber} de {totalSlides}
        </p>
      </div>
    </div>
  )
}
