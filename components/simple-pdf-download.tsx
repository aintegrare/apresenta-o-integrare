"use client"

import { useState } from "react"
import { Download, Check } from "lucide-react"

interface SimplePDFDownloadProps {
  fileName?: string
}

export default function SimplePDFDownload({ fileName = "apresentacao" }: SimplePDFDownloadProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleDownload = async () => {
    try {
      setIsGenerating(true)
      setSuccess(false)

      // Importar dinamicamente as bibliotecas necessárias
      const jspdfModule = await import("jspdf")
      const html2canvasModule = await import("html2canvas")

      const { jsPDF } = jspdfModule
      const html2canvas = html2canvasModule.default

      // Criar um novo documento PDF com orientação paisagem
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      })

      // Obter todos os slides
      const slides = document.querySelectorAll(".w-full.h-screen.flex.flex-col.bg-white")

      if (!slides || slides.length === 0) {
        throw new Error("Nenhum slide encontrado")
      }

      // Processar cada slide
      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i] as HTMLElement

        // Capturar o slide como uma imagem
        const canvas = await html2canvas(slide, {
          scale: 1.5,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
        })

        // Adicionar nova página se não for o primeiro slide
        if (i > 0) {
          pdf.addPage()
        }

        // Adicionar a imagem à página
        const imgData = canvas.toDataURL("image/jpeg", 0.8)
        pdf.addImage(imgData, "JPEG", 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight())
      }

      // Salvar o PDF
      pdf.save(`${fileName}.pdf`)

      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } catch (error) {
      console.error("Erro ao gerar PDF:", error)
      alert("Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white shadow-md transition-all duration-200 flex items-center justify-center"
      aria-label="Baixar apresentação em PDF"
      title="Baixar apresentação em PDF"
    >
      {isGenerating ? (
        <div className="w-5 h-5 border-2 border-t-transparent border-integrare-blue rounded-full animate-spin"></div>
      ) : success ? (
        <Check className="w-5 h-5 text-green-500" />
      ) : (
        <Download className="w-5 h-5 text-integrare-blue" />
      )}
    </button>
  )
}
