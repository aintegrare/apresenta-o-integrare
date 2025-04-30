import type React from "react"
import Image from "next/image"

interface SlideLayoutProps {
  children: React.ReactNode
  title?: string
  isCover?: boolean
  isThankYou?: boolean
}

export default function SlideLayout({ children, title, isCover = false, isThankYou = false }: SlideLayoutProps) {
  return (
    <div
      className="w-full h-screen flex flex-col bg-white overflow-hidden relative slide-content"
      role="region"
      aria-label={title || "Slide"}
      data-slide-title={title || "Slide"}
      data-is-cover={isCover}
      data-is-thank-you={isThankYou}
    >
      {/* Linha superior sutil */}
      <div className="w-full h-1 bg-integrare-blue" aria-hidden="true" />

      {/* Conteúdo principal */}
      <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col overflow-hidden">
        {/* Logo no canto superior direito */}
        {!isCover && !isThankYou && (
          <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 flex items-center">
            <Image
              src="/images/logo_integrare_symbol.png"
              alt="Integrare"
              width={80}
              height={80}
              className="w-16 sm:w-20 md:w-24 h-auto object-contain"
              priority
              crossOrigin="anonymous"
            />
          </div>
        )}

        {title && !isCover && !isThankYou && (
          <h1 className="text-xl sm:text-2xl md:text-3xl font-poppins font-semibold text-integrare-blue mb-4 sm:mb-6 md:mb-8 mt-8 sm:mt-6 md:mt-4">
            {title}
          </h1>
        )}

        <div className="flex-1 flex flex-col justify-center overflow-y-auto">
          <div className="w-full max-h-full">{children}</div>
        </div>
      </div>

      {/* Rodapé minimalista */}
      <div className="w-full py-1 sm:py-2 px-4 sm:px-8 md:px-12 flex justify-between items-center border-t border-gray-100">
        <p className="text-[10px] sm:text-xs text-gray-500 font-inter">redeintegrare.com.br</p>
        <p className="text-[10px] sm:text-xs text-gray-500 font-inter">
          Agência Integrare - Agência de Marketing de Verdade
        </p>
      </div>
    </div>
  )
}
