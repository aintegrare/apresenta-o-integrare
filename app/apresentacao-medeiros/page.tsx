"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import SlideCapa from "@/components/slide-capa-campanha"
import SlideManifesto from "@/components/slide-manifesto"
import SlideProblema from "@/components/slide-problema"
import SlideSolucao from "@/components/slide-solucao"
import SlideProcesso from "@/components/slide-processo"
import SlideDepoimentos from "@/components/slide-depoimentos"
import SlideFAQ from "@/components/slide-faq"
import SlideEstrategiaAnuncios from "@/components/slide-estrategia-anuncios"
import SlideAnuncios from "@/components/slide-anuncios"
import SlideContato from "@/components/slide-contato-campanha"
import SlideLogoFinal from "@/components/slide-logo-final"

// Importar o novo componente de geração de PDF
import SimplePDFDownload from "@/components/simple-pdf-download"

export default function ApresentacaoMedeiros() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [allSlides, setAllSlides] = useState<React.ReactNode[]>([])

  // Inicializar os slides
  useEffect(() => {
    setAllSlides([
      <SlideCapa key="capa" />,
      <SlideManifesto key="manifesto" />,
      <SlideProblema key="problema" />,
      <SlideSolucao key="solucao" />,
      <SlideProcesso key="processo" />,
      <SlideDepoimentos key="depoimentos" />,
      <SlideFAQ key="faq" />,
      <SlideEstrategiaAnuncios key="estrategia-anuncios" />,
      <SlideAnuncios key="anuncios" />,
      <SlideContato key="contato" />,
      <SlideLogoFinal key="logo-final" />,
    ])
  }, [])

  // Detectar dispositivo móvel
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const nextSlide = () => {
    if (currentSlide < allSlides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      nextSlide()
    } else if (e.key === "ArrowLeft") {
      prevSlide()
    }
  }

  // Adicionar suporte para swipe em dispositivos móveis
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -100) {
      // Swipe right
      prevSlide()
    }
  }

  return (
    <main
      className="relative w-full h-screen overflow-hidden"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Apresentação de slides"
    >
      {/* Renderizar apenas o slide atual */}
      {allSlides[currentSlide]}

      {/* Botão para voltar ao dashboard */}
      <Link
        href="/"
        className="absolute top-4 left-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-200"
        aria-label="Voltar para o dashboard"
      >
        <Home className="w-5 h-5 text-[#002B5B]" />
      </Link>

      {/* Usar o novo componente de geração de PDF */}
      <SimplePDFDownload fileName="Regularizacao_Faixa_Fronteira" />

      {/* Controles de navegação minimalistas */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center items-center space-x-4 z-10">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-1 rounded-full text-gray-400 hover:text-[#002B5B] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="text-xs font-medium text-gray-400" aria-live="polite">
          <span className="sr-only">Slide</span> {currentSlide + 1} <span className="sr-only">de</span> /{" "}
          {allSlides.length}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === allSlides.length - 1}
          className="p-1 rounded-full text-gray-400 hover:text-[#002B5B] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Instruções para dispositivos móveis */}
      {isMobile && (
        <div className="absolute bottom-14 left-0 right-0 text-center">
          <p className="text-xs text-gray-400 animate-pulse">Deslize para navegar</p>
        </div>
      )}
    </main>
  )
}
