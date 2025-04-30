import Image from "next/image"
import SlideLayout from "./slide-layout"

export default function SlideCapa() {
  return (
    <SlideLayout isCover={true}>
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <Image
            src="/images/logo_medeiros_vertical.png"
            alt="Medeiros Advogados"
            width={200}
            height={240}
            className="w-40 sm:w-48 md:w-52 h-auto"
            priority
          />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-[#002B5B] mb-4 sm:mb-6 md:mb-8">
          Regularização em Faixa de Fronteira
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-poppins text-amber-600 mb-6 sm:mb-8 md:mb-12">
          Sua Propriedade. Seu Legado. Nossa Missão.
        </h2>
        <div className="w-12 sm:w-16 h-px bg-[#002B5B] mx-auto mt-2 sm:mt-4" aria-hidden="true"></div>

        <p className="mt-8 text-sm sm:text-base md:text-lg max-w-2xl text-gray-700">Prazo final: Outubro de 2025</p>
      </div>
    </SlideLayout>
  )
}
