"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import SlideCapa from "@/components/slide-capa"
import SlideSobreNos from "@/components/slide-sobre-nos"
import SlideServicos from "@/components/slide-servicos"
import SlideMetodologia from "@/components/slide-metodologia"
import SlideCases from "@/components/slide-cases"
import SlideClientes from "@/components/slide-clientes"
import SlidePropostaComercial from "@/components/slide-proposta-comercial"
import SlideServicosDetalhados from "@/components/slide-servicos-detalhados"
import SlideOpcoesDesenvolvimento from "@/components/slide-opcoes-desenvolvimento"
import SlideComparativoTecnologias from "@/components/slide-comparativo-tecnologias"
import SlideValorMercado from "@/components/slide-valor-mercado"
import SlideOpcoesPagamento from "@/components/slide-opcoes-pagamento"
import SlideContato from "@/components/slide-contato"
import PdfDownloadButton from "@/components/pdf-download-button"

export default function PropostaMedeirosPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    <SlideCapa key="capa" title="Proposta Comercial" subtitle="Dr. Sidnei Medeiros" />,
    <SlideSobreNos key="sobre-nos" />,
    <SlideServicos key="servicos" />,
    <SlideMetodologia key="metodologia" />,
    <SlideCases key="cases" />,
    <SlideClientes key="clientes" />,
    <SlidePropostaComercial key="proposta-comercial" clientName="Dr. Sidnei Medeiros" />,
    <SlideServicosDetalhados key="servicos-detalhados" />,
    <SlideOpcoesDesenvolvimento key="opcoes-desenvolvimento" />,
    <SlideComparativoTecnologias key="comparativo-tecnologias" />,
    <SlideValorMercado key="valor-mercado" />,
    <SlideOpcoesPagamento key="opcoes-pagamento" />,
    <SlideContato key="contato" />,
  ]

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-white shadow-sm py-2 px-4 flex justify-between items-center">
        <Link href="/windows95" className="flex items-center text-integrare-blue hover:text-blue-700 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span className="text-sm">Voltar para Home</span>
        </Link>
        <PdfDownloadButton presentationId="proposta-medeiros" fileName="Proposta_Comercial_Dr_Sidnei_Medeiros.pdf" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute inset-0 flex items-center justify-center">{slides[currentSlide]}</div>
          </div>

          <div className="flex justify-between items-center p-4 bg-gray-50 border-t border-gray-200">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`px-4 py-2 rounded-md flex items-center ${
                currentSlide === 0
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-integrare-blue text-white hover:bg-blue-700"
              }`}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Anterior
            </button>
            <div className="text-gray-500">
              Slide {currentSlide + 1} de {slides.length}
            </div>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`px-4 py-2 rounded-md flex items-center ${
                currentSlide === slides.length - 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-integrare-blue text-white hover:bg-blue-700"
              }`}
            >
              Próximo
              <ArrowLeft className="w-4 h-4 ml-1 transform rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
