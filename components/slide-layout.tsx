import type React from "react"
import Image from "next/image"

interface SlideLayoutProps {
  children: React.ReactNode
  title: string
  section?: string
  slideNumber: number
  totalSlides: number
  bgColor?: string
  textColor?: string
}

export default function SlideLayout({
  children,
  title,
  section,
  slideNumber,
  totalSlides,
  bgColor = "bg-white",
  textColor = "text-gray-800",
}: SlideLayoutProps) {
  return (
    <div className={`w-full h-screen flex flex-col ${bgColor} ${textColor} overflow-hidden relative slide-content`}>
      {/* Barra superior com cor principal */}
      <div className="w-full h-2 bg-[#4b7bb5]" aria-hidden="true" />

      {/* Cabeçalho */}
      <div className="px-12 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/images/logo_integrare_symbol.png"
            alt="Integrare"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
            crossOrigin="anonymous"
          />
          <h1 className="ml-4 text-lg font-poppins font-medium">Design System</h1>
        </div>
        {section && (
          <div className="px-4 py-1 bg-[#4b7bb5] bg-opacity-10 rounded text-[#4b7bb5] text-sm font-medium">
            {section}
          </div>
        )}
      </div>

      {/* Título do slide */}
      <div className="px-12 pt-4 pb-6">
        <h2 className="text-3xl font-poppins font-semibold text-[#4b7bb5]">{title}</h2>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 px-12 pb-12 overflow-hidden">
        <div className="w-full h-full">{children}</div>
      </div>

      {/* Rodapé */}
      <div className="px-12 py-4 flex justify-between items-center border-t border-gray-200">
        <p className="text-sm text-gray-500">Agência Integrare - Design System</p>
        <p className="text-sm text-gray-500">
          Slide {slideNumber} de {totalSlides}
        </p>
      </div>
    </div>
  )
}
