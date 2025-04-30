import Image from "next/image"

interface SlideCoverProps {
  slideNumber: number
  totalSlides: number
}

export default function SlideCover({ slideNumber, totalSlides }: SlideCoverProps) {
  return (
    <div className="w-full h-screen flex flex-col bg-[#4b7bb5] text-white overflow-hidden relative">
      <div className="flex-1 flex flex-col items-center justify-center px-12 py-24">
        <Image
          src="/images/logo_integrare_full.png"
          alt="Integrare"
          width={200}
          height={80}
          className="h-24 w-auto mb-12"
          priority
          crossOrigin="anonymous"
        />
        <h1 className="text-5xl font-poppins font-bold mb-6 text-center">Design System</h1>
        <p className="text-xl font-light mb-12 text-center max-w-2xl">
          Manual completo de identidade visual e componentes digitais
        </p>
        <div className="w-24 h-1 bg-white opacity-50" />
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
