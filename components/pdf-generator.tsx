"use client"

import { useState } from "react"
import { Download } from "lucide-react"

interface PDFGeneratorProps {
  fileName?: string
}

export default function PDFGenerator({ fileName = "apresentacao" }: PDFGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleDownload = async () => {
    try {
      setIsGenerating(true)
      setProgress(0)

      // Importar dinamicamente as bibliotecas necessárias
      const { jsPDF } = await import("jspdf")
      const html2canvas = (await import("html2canvas")).default

      // Encontrar todos os slides
      const slides = document.querySelectorAll(".slide-content")

      if (!slides || slides.length === 0) {
        console.error("Nenhum slide encontrado")
        alert("Não foi possível encontrar os slides para gerar o PDF.")
        setIsGenerating(false)
        return
      }

      console.log(`Encontrados ${slides.length} slides para processar`)

      // Criar um novo documento PDF com orientação paisagem
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      })

      // Criar um container temporário para renderizar os slides
      const tempContainer = document.createElement("div")
      tempContainer.style.position = "absolute"
      tempContainer.style.left = "-9999px"
      tempContainer.style.top = "0"
      tempContainer.style.width = "1280px" // Largura fixa para consistência
      tempContainer.style.height = "720px" // Altura fixa para proporção 16:9
      document.body.appendChild(tempContainer)

      // Processar cada slide sequencialmente
      for (let i = 0; i < slides.length; i++) {
        try {
          setProgress(Math.round(((i + 0.2) / slides.length) * 100))
          console.log(`Processando slide ${i + 1}/${slides.length}`)

          // Clonar o slide para o container temporário
          const slideClone = slides[i].cloneNode(true) as HTMLElement

          // Limpar o container temporário
          tempContainer.innerHTML = ""

          // Configurar o clone para renderização
          slideClone.style.position = "relative"
          slideClone.style.left = "0"
          slideClone.style.top = "0"
          slideClone.style.width = "1280px"
          slideClone.style.height = "720px"
          slideClone.style.display = "flex"
          slideClone.style.visibility = "visible"
          slideClone.style.overflow = "visible"

          // Adicionar ao container temporário
          tempContainer.appendChild(slideClone)

          // Permitir que o DOM atualize e as imagens carreguem
          await new Promise((resolve) => setTimeout(resolve, 500))

          setProgress(Math.round(((i + 0.5) / slides.length) * 100))

          // Capturar o slide como uma imagem
          const canvas = await html2canvas(slideClone, {
            scale: 2, // Escala maior para melhor qualidade
            useCORS: true, // Permitir imagens de outros domínios
            logging: true,
            allowTaint: true,
            backgroundColor: "#ffffff",
            windowWidth: 1280,
            windowHeight: 720,
          })

          // Adicionar nova página se não for o primeiro slide
          if (i > 0) {
            pdf.addPage()
          }

          // Obter dados da imagem
          const imgData = canvas.toDataURL("image/jpeg", 1.0)

          // Adicionar a imagem à página
          const pdfWidth = pdf.internal.pageSize.getWidth()
          const pdfHeight = pdf.internal.pageSize.getHeight()

          // Calcular proporções para manter a relação de aspecto 16:9
          const imgWidth = canvas.width
          const imgHeight = canvas.height
          const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)

          // Centralizar a imagem na página
          const x = (pdfWidth - imgWidth * ratio) / 2
          const y = (pdfHeight - imgHeight * ratio) / 2

          // Adicionar a imagem à página com dimensões corretas
          pdf.addImage(imgData, "JPEG", x, y, imgWidth * ratio, imgHeight * ratio)

          console.log(`Slide ${i + 1} processado com sucesso`)
          setProgress(Math.round(((i + 1) / slides.length) * 100))
        } catch (error) {
          console.error(`Erro ao processar slide ${i + 1}:`, error)
        }
      }

      // Remover o container temporário
      document.body.removeChild(tempContainer)

      // Salvar o PDF
      pdf.save(`${fileName}.pdf`)
      console.log("PDF gerado com sucesso!")

      setIsGenerating(false)
      setProgress(0)
    } catch (error) {
      console.error("Erro ao gerar PDF:", error)
      setIsGenerating(false)
      setProgress(0)
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
        <div className="absolute top-0 right-0">
          <div className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-integrare-blue opacity-75"></div>
          <div className="relative inline-flex rounded-full h-3 w-3 bg-integrare-blue"></div>
        </div>
      )}
      {isGenerating && (
        <div className="absolute left-full ml-2 whitespace-nowrap bg-white px-2 py-1 text-xs rounded shadow">
          Gerando PDF... {progress}%
        </div>
      )}
    </button>
  )
}
