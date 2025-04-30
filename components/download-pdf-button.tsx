"use client"

import { useState } from "react"
import { Download } from "lucide-react"

interface DownloadPDFButtonProps {
  presentationId: string
  fileName?: string
}

export default function DownloadPDFButton({ presentationId, fileName = "apresentacao" }: DownloadPDFButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = async () => {
    try {
      setIsGenerating(true)

      // Importar dinamicamente a biblioteca jspdf e html2canvas
      const { jsPDF } = await import("jspdf")
      const html2canvas = (await import("html2canvas")).default

      // Encontrar o slide atual
      const currentSlide = document.querySelector(".w-full.h-screen.flex.flex-col.bg-white") as HTMLElement

      if (!currentSlide) {
        console.error("Elemento do slide não encontrado")
        setIsGenerating(false)
        return
      }

      // Criar um novo documento PDF com orientação paisagem
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      })

      // Obter todos os slides
      const allSlides = document.querySelectorAll(".w-full.h-screen.flex.flex-col.bg-white")

      // Função para processar cada slide
      const processSlide = async (slideElement: Element, index: number) => {
        // Tornar apenas o slide atual visível
        const originalDisplay = (slideElement as HTMLElement).style.display
        ;(slideElement as HTMLElement).style.display = "flex"

        // Capturar o slide como uma imagem
        const canvas = await html2canvas(slideElement as HTMLElement, {
          scale: 2, // Escala maior para melhor qualidade
          useCORS: true, // Permitir imagens de outros domínios
          logging: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
          windowWidth: 1920,
          windowHeight: 1080,
        })

        // Restaurar a visibilidade original
        ;(slideElement as HTMLElement).style.display = originalDisplay

        // Adicionar a imagem ao PDF
        const imgData = canvas.toDataURL("image/jpeg", 1.0)

        // Se não for o primeiro slide, adicionar uma nova página
        if (index > 0) {
          pdf.addPage()
        }

        // Adicionar a imagem à página
        pdf.addImage(imgData, "JPEG", 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight())

        return true
      }

      // Processar cada slide sequencialmente
      for (let i = 0; i < allSlides.length; i++) {
        await processSlide(allSlides[i], i)
      }

      // Salvar o PDF
      pdf.save(`${fileName}.pdf`)

      setIsGenerating(false)
    } catch (error) {
      console.error("Erro ao gerar PDF:", error)
      setIsGenerating(false)
      alert("Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.")
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-200 flex items-center justify-center"
      aria-label="Baixar apresentação em PDF"
      title="Baixar apresentação em PDF de alta qualidade"
    >
      <Download className={`w-5 h-5 ${isGenerating ? "text-gray-400" : "text-integrare-blue"}`} />
      {isGenerating && (
        <span className="absolute top-0 right-0 h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-integrare-blue opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-integrare-blue"></span>
        </span>
      )}
    </button>
  )
}
