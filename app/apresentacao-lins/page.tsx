"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import SlideCapaLins from "@/components/slide-capa-lins"
import SlideSobreNosLins from "@/components/slide-sobre-nos-lins"
import SlideServicosLins from "@/components/slide-servicos-lins"
import SlideMetodologiaLins from "@/components/slide-metodologia-lins"
import SlidePortfolioLins from "@/components/slide-portfolio-lins"
import SlideSessoesFotograficasLins from "@/components/slide-sessoes-fotograficas-lins"
import SlidePropostaLins from "@/components/slide-proposta-lins"
import SlideProximosPassosLins from "@/components/slide-proximos-passos-lins"
import SlideValoresLins from "@/components/slide-valores-lins"
import SlideContatoLins from "@/components/slide-contato-lins"
import PDFGeneratorEnhanced from "@/components/pdf-generator-enhanced"

export default function ApresentacaoLins() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [allSlides, setAllSlides] = useState<React.ReactNode[]>([])

  // Inicializar os slides
  useEffect(() => {
    setAllSlides([
      <SlideCapaLins key="capa" />,
      <SlideSobreNosLins key="sobre" />,
      <SlideServicosLins key="servicos" />,
      <SlideMetodologiaLins key="metodologia" />,
      <SlidePortfolioLins key="portfolio" />,
      <SlideSessoesFotograficasLins key="sessoes-fotograficas" />,
      <SlidePropostaLins key="proposta" />,
      <SlideProximosPassosLins key="proximos-passos" />,
      <SlideValoresLins key="valores" />,
      <SlideContatoLins key="contato" />,
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
      aria-label="Apresentação de slides para Instituição Lins Vasconcellos"
    >
      {/* Renderizar apenas o slide atual */}
      {allSlides[currentSlide]}

      {/* Botão para voltar ao dashboard */}
      <Link
        href="/"
        className="absolute top-4 left-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-200"
        aria-label="Voltar para o dashboard"
      >
        <Home className="w-5 h-5 text-integrare-blue" />
      </Link>

      {/* Usar o componente de geração de PDF */}
      {allSlides.length > 0 && <PDFGeneratorEnhanced fileName="Proposta_Lins_Vasconcellos" slides={allSlides} />}

      {/* Controles de navegação minimalistas */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center items-center space-x-4 z-10">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-1 rounded-full text-gray-400 hover:text-integrare-blue disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
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
          className="p-1 rounded-full text-gray-400 hover:text-integrare-blue disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
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
