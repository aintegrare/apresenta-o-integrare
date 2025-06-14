"use client"

import type React from "react"

import { useState } from "react"
import { Download } from "lucide-react"
import { createRoot } from "react-dom/client"

interface PDFGeneratorV2Props {
  fileName?: string
  slides: React.ReactNode[]
}

export default function PDFGeneratorV2({ fileName = "apresentacao", slides }: PDFGeneratorV2Props) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleDownload = async () => {
    try {
      setIsGenerating(true)
      setProgress(0)

      // Importar dinamicamente as bibliotecas necessárias
      const { jsPDF } = await import("jspdf")
      const html2canvas = (await import("html2canvas")).default

      if (!slides || slides.length === 0) {
        console.error("Nenhum slide fornecido")
        alert("Não foi possível encontrar os slides para gerar o PDF.")
        setIsGenerating(false)
        return
      }

      console.log(`Preparando para processar ${slides.length} slides`)

      // Criar um novo documento PDF com orientação paisagem
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      })

      // Criar um container temporário para renderizar os slides
      const tempContainer = document.createElement("div")
      tempContainer.style.position = "fixed"
      tempContainer.style.top = "0"
      tempContainer.style.left = "0"
      tempContainer.style.width = "100vw"
      tempContainer.style.height = "100vh"
      tempContainer.style.zIndex = "-9999"
      tempContainer.style.overflow = "hidden"
      tempContainer.style.backgroundColor = "white"
      document.body.appendChild(tempContainer)

      // Função para renderizar um slide e capturá-lo
      const renderAndCaptureSlide = async (slideElement, index) => {
        return new Promise(async (resolve, reject) => {
          try {
            setProgress(Math.round(((index + 0.1) / slides.length) * 100))
            console.log(`Renderizando slide ${index + 1}/${slides.length}`)

            // Renderizar o slide no container temporário
            const slideContainer = document.createElement("div")
            slideContainer.style.width = "100%"
            slideContainer.style.height = "100%"
            slideContainer.style.display = "flex"
            slideContainer.style.flexDirection = "column"
            slideContainer.style.overflow = "hidden"
            slideContainer.className = "slide-render-container"

            // Limpar o container temporário
            tempContainer.innerHTML = ""
            tempContainer.appendChild(slideContainer)

            // Tornar o container visível durante a captura
            tempContainer.style.visibility = "visible"

            // Renderizar o slide
            const root = createRoot(slideContainer)
            root.render(slideElement)

            // Esperar que o slide seja renderizado
            setProgress(Math.round(((index + 0.4) / slides.length) * 100))
            await new Promise((r) => setTimeout(r, 1500))

            // Configurar opções para html2canvas
            const options = {
              scale: 2, // Escala maior para melhor qualidade
              useCORS: true, // Permitir imagens de outros domínios
              allowTaint: true, // Permitir imagens que podem "manchar" o canvas
              backgroundColor: "#ffffff",
              logging: false, // Desativar logs para reduzir ruído no console
              imageTimeout: 0, // Sem timeout para carregamento de imagens
              onclone: (clonedDoc) => {
                // Processar todas as imagens no clone para garantir que estejam carregadas
                const images = clonedDoc.querySelectorAll("img")
                images.forEach((img) => {
                  img.crossOrigin = "anonymous"
                  // Forçar carregamento completo das imagens
                  if (!img.complete) {
                    img.src = img.src
                  }
                })
              },
            }

            // Capturar o slide como uma imagem
            const canvas = await html2canvas(slideContainer, options)

            // Esconder o container após a captura
            tempContainer.style.visibility = "hidden"

            // Adicionar nova página se não for o primeiro slide
            if (index > 0) {
              pdf.addPage()
            }

            // Obter dados da imagem
            const imgData = canvas.toDataURL("image/jpeg", 1.0)

            // Adicionar a imagem à página
            const pdfWidth = pdf.internal.pageSize.getWidth()
            const pdfHeight = pdf.internal.pageSize.getHeight()

            // Calcular proporções para manter a relação de aspecto
            const imgWidth = canvas.width
            const imgHeight = canvas.height
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)

            // Centralizar a imagem na página
            const x = (pdfWidth - imgWidth * ratio) / 2
            const y = (pdfHeight - imgHeight * ratio) / 2

            // Adicionar a imagem à página com dimensões corretas
            pdf.addImage(imgData, "JPEG", x, y, imgWidth * ratio, imgHeight * ratio)

            // Limpar o root React
            root.unmount()

            console.log(`Slide ${index + 1} processado com sucesso`)
            setProgress(Math.round(((index + 1) / slides.length) * 100))
            resolve(true)
          } catch (error) {
            console.error(`Erro ao processar slide ${index + 1}:`, error)
            // Continuar mesmo com erro, para não interromper todo o processo
            resolve(false)
          }
        })
      }

      // Processar cada slide sequencialmente
      for (let i = 0; i < slides.length; i++) {
        try {
          await renderAndCaptureSlide(slides[i], i)
        } catch (error) {
          console.error(`Falha ao processar slide ${i + 1}:`, error)
          // Continuar com o próximo slide
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
