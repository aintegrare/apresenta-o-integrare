"use client"

import { useState } from "react"
import { Download, AlertCircle } from "lucide-react"

interface FallbackPDFDownloadProps {
  fileName?: string
}

export default function FallbackPDFDownload({ fileName = "apresentacao" }: FallbackPDFDownloadProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleDownload = async () => {
    try {
      setIsGenerating(true)
      setError(null)

      // Método alternativo usando apenas html2canvas
      const html2canvas = (await import("html2canvas")).default

      // Obter o slide atual
      const currentSlide = document.querySelector(".w-full.h-screen.flex.flex-col.bg-white") as HTMLElement

      if (!currentSlide) {
        throw new Error("Slide atual não encontrado")
      }

      // Capturar o slide como uma imagem
      const canvas = await html2canvas(currentSlide, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
      })

      // Criar um link para download da imagem
      const link = document.createElement("a")
      link.download = `${fileName}-slide.png`
      link.href = canvas.toDataURL("image/png")
      link.click()
    } catch (error) {
      console.error("Erro ao gerar imagem:", error)
      setError("Não foi possível gerar o PDF. Tente novamente mais tarde.")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="absolute top-4 right-4 z-20">
      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className="p-2 rounded-full bg-white/90 hover:bg-white shadow-md transition-all duration-200 flex items-center justify-center"
        aria-label="Baixar slide atual como imagem"
        title="Baixar slide atual como imagem"
      >
        {isGenerating ? (
          <div className="w-5 h-5 border-2 border-t-transparent border-integrare-blue rounded-full animate-spin"></div>
        ) : (
          <Download className="w-5 h-5 text-integrare-blue" />
        )}
      </button>

      {error && (
        <div className="absolute top-full right-0 mt-2 bg-red-50 text-red-600 p-2 rounded shadow-md text-xs flex items-center">
          <AlertCircle className="w-3 h-3 mr-1" />
          {error}
        </div>
      )}
    </div>
  )
}
