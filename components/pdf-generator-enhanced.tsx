"use client"

import type React from "react"
import { useState } from "react"
import { Download, FileText, Settings } from "lucide-react"
import { createRoot } from "react-dom/client"

interface PDFGeneratorEnhancedProps {
  fileName?: string
  slides: React.ReactNode[]
}

export default function PDFGeneratorEnhanced({ fileName = "apresentacao", slides }: PDFGeneratorEnhancedProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showSettings, setShowSettings] = useState(false)
  const [quality, setQuality] = useState<"normal" | "high" | "ultra">("high")
  const [includeMetadata, setIncludeMetadata] = useState(true)

  // Definir as escalas com base na qualidade selecionada
  const qualityScales = {
    normal: 1.5,
    high: 2,
    ultra: 3,
  }

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

      console.log(`Preparando para processar ${slides.length} slides com qualidade ${quality}`)

      // Criar um novo documento PDF com orientação paisagem
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      })

      // Adicionar metadados ao PDF se solicitado
      if (includeMetadata) {
        pdf.setProperties({
          title: `${fileName} - Agência Integrare`,
          subject: "Apresentação Institucional",
          author: "Agência Integrare",
          keywords: "marketing, branding, design, apresentação",
          creator: "PDF Generator by Agência Integrare",
        })
      }

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

      // Função para pré-carregar todas as imagens da apresentação
      const preloadImages = async () => {
        return new Promise((resolve) => {
          // Simular um pequeno atraso para mostrar o progresso
          setTimeout(() => {
            setProgress(5)
            resolve(true)
          }, 500)
        })
      }

      // Pré-carregar imagens
      await preloadImages()

      // Função para renderizar um slide e capturá-lo
      const renderAndCaptureSlide = async (slideElement, index) => {
        return new Promise(async (resolve, reject) => {
          try {
            setProgress(Math.round(5 + (index * 95) / slides.length))
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

            // Esperar que o slide seja renderizado completamente
            // Tempo de espera ajustado com base na qualidade
            const renderWaitTime = quality === "ultra" ? 2000 : quality === "high" ? 1500 : 1000
            await new Promise((r) => setTimeout(r, renderWaitTime))

            // Configurar opções para html2canvas
            const options = {
              scale: qualityScales[quality], // Escala baseada na qualidade selecionada
              useCORS: true, // Permitir imagens de outros domínios
              allowTaint: true, // Permitir imagens que podem "manchar" o canvas
              backgroundColor: "#ffffff",
              logging: false, // Desativar logs para reduzir ruído no console
              imageTimeout: 0, // Sem timeout para carregamento de imagens
              onclone: (clonedDoc) => {
                // Processar todas as imagens e elementos SVG no clone
                const images = clonedDoc.querySelectorAll("img, svg")
                images.forEach((img) => {
                  if (img instanceof HTMLImageElement) {
                    img.crossOrigin = "anonymous"
                    // Forçar carregamento completo das imagens
                    if (!img.complete) {
                      img.src = img.src
                    }
                  }
                })

                // Garantir que fontes personalizadas sejam renderizadas corretamente
                const style = clonedDoc.createElement("style")
                style.innerHTML = `
                  * { font-family: Arial, sans-serif !important; }
                  svg * { font-family: inherit !important; }
                `
                clonedDoc.head.appendChild(style)
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

            // Obter dados da imagem com qualidade ajustada conforme seleção
            const imgQuality = quality === "ultra" ? 1.0 : quality === "high" ? 0.95 : 0.85
            const imgData = canvas.toDataURL("image/jpeg", imgQuality)

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

            // Adicionar numeração de página discreta
            if (includeMetadata) {
              pdf.setFontSize(8)
              pdf.setTextColor(150, 150, 150)
              pdf.text(`${index + 1}/${slides.length}`, pdfWidth - 10, pdfHeight - 5, { align: "right" })
            }

            // Limpar o root React
            root.unmount()

            console.log(`Slide ${index + 1} processado com sucesso`)
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
    <div className="absolute top-4 right-4 z-20 flex items-center">
      {showSettings && (
        <div className="bg-white rounded-lg shadow-lg p-3 mr-2 text-sm">
          <div className="mb-2">
            <div className="font-medium mb-1">Qualidade:</div>
            <div className="flex space-x-2">
              <button
                onClick={() => setQuality("normal")}
                className={`px-2 py-1 rounded text-xs ${quality === "normal" ? "bg-integrare-blue text-white" : "bg-gray-100"}`}
              >
                Normal
              </button>
              <button
                onClick={() => setQuality("high")}
                className={`px-2 py-1 rounded text-xs ${quality === "high" ? "bg-integrare-blue text-white" : "bg-gray-100"}`}
              >
                Alta
              </button>
              <button
                onClick={() => setQuality("ultra")}
                className={`px-2 py-1 rounded text-xs ${quality === "ultra" ? "bg-integrare-blue text-white" : "bg-gray-100"}`}
              >
                Ultra
              </button>
            </div>
          </div>
          <div className="flex items-center mb-1">
            <input
              type="checkbox"
              id="include-metadata"
              checked={includeMetadata}
              onChange={(e) => setIncludeMetadata(e.target.checked)}
              className="mr-1"
            />
            <label htmlFor="include-metadata" className="text-xs">
              Incluir numeração
            </label>
          </div>
          <div className="text-xs text-gray-500 italic">Qualidade mais alta = PDF maior</div>
        </div>
      )}

      <button
        onClick={() => setShowSettings(!showSettings)}
        className={`p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-200 mr-2 ${showSettings ? "bg-gray-100" : ""}`}
        aria-label="Configurações PDF"
        title="Configurações PDF"
      >
        <Settings className="w-5 h-5 text-integrare-blue" />
      </button>

      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-200 flex items-center justify-center"
        aria-label="Baixar apresentação em PDF"
        title={`Baixar apresentação em PDF (Qualidade: ${quality})`}
      >
        {isGenerating ? (
          <FileText className="w-5 h-5 text-gray-400 animate-pulse" />
        ) : (
          <Download className="w-5 h-5 text-integrare-blue" />
        )}

        {isGenerating && (
          <div className="absolute top-0 right-0">
            <div className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-integrare-blue opacity-75"></div>
            <div className="relative inline-flex rounded-full h-3 w-3 bg-integrare-blue"></div>
          </div>
        )}

        {isGenerating && (
          <div className="absolute left-full ml-2 whitespace-nowrap bg-white px-2 py-1 text-xs rounded shadow-md">
            <div className="flex items-center">
              <span className="mr-2">Gerando PDF...</span>
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-integrare-blue transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="ml-1">{progress}%</span>
            </div>
          </div>
        )}
      </button>
    </div>
  )
}
