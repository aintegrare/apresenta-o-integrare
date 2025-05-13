"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import SlideCapa from "@/components/slide-capa"
import SlideSobreNos from "@/components/slide-sobre-nos"
import SlideServicos from "@/components/slide-servicos"
import SlideMetodologia from "@/components/slide-metodologia"
import SlideCases from "@/components/slide-cases"
import SlideClientes from "@/components/slide-clientes"
import SlideContato from "@/components/slide-contato"
import PDFGeneratorEnhanced from "@/components/pdf-generator-enhanced"

// Importar os novos slides da proposta
import SlidePropostaComercial from "@/components/slide-proposta-comercial"
import SlideServicosDetalhados from "@/components/slide-servicos-detalhados"
import SlideOpcoesDesenvolvimento from "@/components/slide-opcoes-desenvolvimento"
import SlideComparativoTecnologias from "@/components/slide-comparativo-tecnologias"
import SlideValorMercado from "@/components/slide-valor-mercado"
import SlideOpcoesPagamento from "@/components/slide-opcoes-pagamento"
// Remover a importação do SlidePacotesCompletos
// import SlidePacotesCompletos from "@/components/slide-pacotes-completos"

export default function PropostaMedeiros() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [allSlides, setAllSlides] = useState<React.ReactNode[]>([])

  // Inicializar os slides
  useEffect(() => {
    setAllSlides([
      <SlideCapa key="capa" />,
      <SlideSobreNos key="sobre" />,
      <SlideServicos key="servicos" />,
      <SlideMetodologia key="metodologia" />,
      <SlideCases key="cases" />,
      <SlideClientes key="clientes" />,
      // Inserir os novos slides da proposta
      <SlidePropostaComercial key="proposta-comercial" />,
      <SlideServicosDetalhados key="servicos-detalhados" />,
      <SlideOpcoesDesenvolvimento key="opcoes-desenvolvimento" />,
      <SlideComparativoTecnologias key="comparativo-tecnologias" />,
      // Remover o slide da sequência de slides
      // <SlidePacotesCompletos key="pacotes-completos" />, // Novo slide de pacotes completos
      <SlideValorMercado key="valor-mercado" />,
      <SlideOpcoesPagamento key="opcoes-pagamento" />,
      <SlideContato key="contato" />,
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
      aria-label="Proposta para Dr. Sidnei Medeiros"
    >
      {/* Renderizar apenas o slide atual */}
      {allSlides[currentSlide]}

      {/* Botão para voltar ao dashboard */}
      <Link
        href="/"
        className="absolute top-4 left-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-200"
        aria-label="Voltar para o dashboard"
      >
        <Home className="w-5 h-5 text-[#4b7bb5]" />
      </Link>

      {/* Usar o componente de geração de PDF aprimorado */}
      {allSlides.length > 0 && <PDFGeneratorEnhanced fileName="Proposta_Dr_Sidnei_Medeiros" slides={allSlides} />}

      {/* Controles de navegação minimalistas */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center items-center space-x-4 z-10">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-1 rounded-full text-gray-400 hover:text-[#4b7bb5] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
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
          className="p-1 rounded-full text-gray-400 hover:text-[#4b7bb5] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
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
