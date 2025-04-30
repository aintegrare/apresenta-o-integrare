import Image from "next/image"
import SlideLayout from "./slide-layout"

export default function SlideCapaLins() {
  return (
    <SlideLayout isCover={true}>
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <Image
            src="/images/logo_integrare_full.png"
            alt="Integrare"
            width={300}
            height={150}
            className="w-64 sm:w-72 md:w-80 h-auto"
            priority
          />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-integrare-blue mb-4 sm:mb-6 md:mb-8">
          Proposta de Parceria
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-poppins text-gray-500 mb-6 sm:mb-8 md:mb-12">
          Instituição Lins Vasconcellos
        </h2>
        <div className="w-12 sm:w-16 h-px bg-integrare-blue mx-auto mt-2 sm:mt-4" aria-hidden="true"></div>
      </div>
    </SlideLayout>
  )
}
