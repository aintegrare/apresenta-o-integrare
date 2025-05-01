"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Home, Download } from "lucide-react"

export default function ApresentacaoRetro() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  // Efeito para piscar o cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  // Efeito para navegação com teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown") {
        nextSlide()
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
        prevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide])

  const totalSlides = 7

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1 && !isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => prev + 1)
        setIsTransitioning(false)
      }, 500)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => prev - 1)
        setIsTransitioning(false)
      }, 500)
    }
  }

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(index)
        setIsTransitioning(false)
      }, 500)
    }
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden flex flex-col">
      {/* Barra superior */}
      <header className="bg-green-900 text-green-400 p-2 flex justify-between items-center border-b-2 border-green-400">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-black border border-green-400 mr-2 flex items-center justify-center">
            <span className="text-green-400 text-xs">I</span>
          </div>
          <span className="font-bold tracking-wide">INTEGRARE.EXE</span>
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="flex items-center hover:text-green-200 transition-colors">
            <Home size={16} className="mr-1" />
            <span className="text-xs uppercase">Home</span>
          </Link>
          <button className="flex items-center hover:text-green-200 transition-colors">
            <Download size={16} className="mr-1" />
            <span className="text-xs uppercase">Download</span>
          </button>
        </div>
      </header>

      {/* Área principal com slides */}
      <main className="flex-1 relative">
        {/* Slide 1 - Capa */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-500 ${
            currentSlide === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-full max-w-4xl mx-auto border-2 border-green-400 p-8 bg-black">
            <div className="text-center mb-8">
              <div className="inline-block border-2 border-green-400 p-4 mb-4">
                <h1 className="text-4xl font-bold tracking-widest mb-2">INTEGRARE</h1>
                <div className="h-1 w-full bg-green-400 mb-2"></div>
                <h2 className="text-xl tracking-wide">MARKETING DIGITAL</h2>
              </div>
            </div>

            <div className="text-center mb-12">
              <p className="text-xl mb-2">
                SISTEMA DE APRESENTAÇÃO <span className={showCursor ? "opacity-100" : "opacity-0"}>_</span>
              </p>
              <p className="text-sm mb-8">VERSÃO 1.0.1</p>
              <div className="inline-block border border-green-400 px-4 py-2 animate-pulse">CARREGANDO DADOS...</div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border border-green-400 p-4">
                <p className="text-sm mb-2">MEMÓRIA: 640K</p>
                <p className="text-sm mb-2">SISTEMA: MS-DOS 5.0</p>
                <p className="text-sm">PROCESSADOR: 486DX/33MHz</p>
              </div>
              <div className="border border-green-400 p-4">
                <p className="text-sm mb-2">DATA: {new Date().toLocaleDateString()}</p>
                <p className="text-sm mb-2">HORA: {new Date().toLocaleTimeString()}</p>
                <p className="text-sm">STATUS: OPERACIONAL</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm mb-4">PRESSIONE [ESPAÇO] PARA CONTINUAR</p>
              <div className="inline-block border border-green-400 px-4 py-2">C:\&gt; INICIAR APRESENTACAO.EXE</div>
            </div>
          </div>
        </div>

        {/* Slide 2 - Sobre Nós */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-500 ${
            currentSlide === 1 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-full max-w-4xl mx-auto border-2 border-green-400 p-8 bg-black">
            <div className="mb-6 border-b-2 border-green-400 pb-2">
              <h2 className="text-2xl font-bold tracking-wide">SOBRE A INTEGRARE</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="border border-green-400 p-4 mb-4">
                  <h3 className="text-lg font-bold mb-2">MISSÃO</h3>
                  <p className="text-sm leading-relaxed">
                    LEVAR MARKETING DE QUALIDADE, BASEADO EM EVIDÊNCIAS CIENTÍFICAS E CASOS PRÁTICOS DE SUCESSO.
                  </p>
                </div>

                <div className="border border-green-400 p-4">
                  <h3 className="text-lg font-bold mb-2">VISÃO</h3>
                  <p className="text-sm leading-relaxed">
                    MARKETING É O MEIO MAIS BARATO DE GERAÇÃO DE NEGÓCIOS DE ALTO VALOR, É O MEIO PELO QUAL CONQUISTAMOS
                    NOSSA AUTORIDADE.
                  </p>
                </div>
              </div>

              <div className="border border-green-400 p-4">
                <h3 className="text-lg font-bold mb-2">HISTÓRICO</h3>
                <ul className="text-sm space-y-2">
                  <li>
                    <span className="inline-block w-20">2020:</span> FUNDAÇÃO DA EMPRESA
                  </li>
                  <li>
                    <span className="inline-block w-20">2021:</span> EXPANSÃO DE SERVIÇOS
                  </li>
                  <li>
                    <span className="inline-block w-20">2022:</span> CRESCIMENTO DA EQUIPE
                  </li>
                  <li>
                    <span className="inline-block w-20">2023:</span> NOVOS MERCADOS
                  </li>
                  <li>
                    <span className="inline-block w-20">2024:</span> ECOSSISTEMA COMPLETO
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-block border border-green-400 px-4 py-2">C:\&gt; CARREGAR PRÓXIMO MÓDULO...</div>
            </div>
          </div>
        </div>

        {/* Slide 3 - Serviços */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-500 ${
            currentSlide === 2 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-full max-w-4xl mx-auto border-2 border-green-400 p-8 bg-black">
            <div className="mb-6 border-b-2 border-green-400 pb-2">
              <h2 className="text-2xl font-bold tracking-wide">SERVIÇOS OFERECIDOS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="border border-green-400 p-4">
                <h3 className="text-lg font-bold mb-2">SOCIAL MEDIA</h3>
                <ul className="text-sm space-y-1 list-disc pl-4">
                  <li>GESTÃO DE REDES SOCIAIS</li>
                  <li>CRIAÇÃO DE CONTEÚDO</li>
                  <li>PLANEJAMENTO ESTRATÉGICO</li>
                  <li>ANÁLISE DE MÉTRICAS</li>
                </ul>
              </div>

              <div className="border border-green-400 p-4">
                <h3 className="text-lg font-bold mb-2">TRÁFEGO PAGO</h3>
                <ul className="text-sm space-y-1 list-disc pl-4">
                  <li>GOOGLE ADS</li>
                  <li>META ADS</li>
                  <li>LINKEDIN ADS</li>
                  <li>REMARKETING</li>
                </ul>
              </div>

              <div className="border border-green-400 p-4">
                <h3 className="text-lg font-bold mb-2">BRANDING</h3>
                <ul className="text-sm space-y-1 list-disc pl-4">
                  <li>IDENTIDADE VISUAL</li>
                  <li>POSICIONAMENTO DE MARCA</li>
                  <li>ESTRATÉGIA DE COMUNICAÇÃO</li>
                  <li>MANUAL DE MARCA</li>
                </ul>
              </div>

              <div className="border border-green-400 p-4">
                <h3 className="text-lg font-bold mb-2">WEBSITES</h3>
                <ul className="text-sm space-y-1 list-disc pl-4">
                  <li>DESENVOLVIMENTO</li>
                  <li>LANDING PAGES</li>
                  <li>E-COMMERCE</li>
                  <li>OTIMIZAÇÃO SEO</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-block border border-green-400 px-4 py-2">
                C:\&gt; EXECUTANDO ANÁLISE DE SERVIÇOS...
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4 - Metodologia */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-500 ${
            currentSlide === 3 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-full max-w-4xl mx-auto border-2 border-green-400 p-8 bg-black">
            <div className="mb-6 border-b-2 border-green-400 pb-2">
              <h2 className="text-2xl font-bold tracking-wide">METODOLOGIA DE TRABALHO</h2>
            </div>

            <div className="mb-8">
              <div className="border border-green-400 p-4 mb-6">
                <h3 className="text-lg font-bold mb-4 text-center">PROCESSO OPERACIONAL</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="border border-green-400 p-2 w-32 text-center">
                    <p className="text-sm font-bold">DIAGNÓSTICO</p>
                    <p className="text-xs">FASE 1</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl">&gt;</span>
                  </div>
                  <div className="border border-green-400 p-2 w-32 text-center">
                    <p className="text-sm font-bold">PLANEJAMENTO</p>
                    <p className="text-xs">FASE 2</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl">&gt;</span>
                  </div>
                  <div className="border border-green-400 p-2 w-32 text-center">
                    <p className="text-sm font-bold">EXECUÇÃO</p>
                    <p className="text-xs">FASE 3</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl">&gt;</span>
                  </div>
                  <div className="border border-green-400 p-2 w-32 text-center">
                    <p className="text-sm font-bold">ANÁLISE</p>
                    <p className="text-xs">FASE 4</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-green-400 p-4">
                  <h3 className="text-lg font-bold mb-2">DIFERENCIAIS</h3>
                  <ul className="text-sm space-y-1 list-disc pl-4">
                    <li>BASEADO EM EVIDÊNCIAS</li>
                    <li>FOCO EM RESULTADOS</li>
                    <li>TRANSPARÊNCIA</li>
                    <li>RELATÓRIOS DETALHADOS</li>
                  </ul>
                </div>

                <div className="border border-green-400 p-4">
                  <h3 className="text-lg font-bold mb-2">FERRAMENTAS</h3>
                  <ul className="text-sm space-y-1 list-disc pl-4">
                    <li>GOOGLE ANALYTICS</li>
                    <li>META BUSINESS SUITE</li>
                    <li>SEMRUSH</li>
                    <li>SISTEMAS PROPRIETÁRIOS</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-block border border-green-400 px-4 py-2">C:\&gt; PROCESSANDO METODOLOGIA...</div>
            </div>
          </div>
        </div>

        {/* Slide 5 - Resultados */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-500 ${
            currentSlide === 4 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-full max-w-4xl mx-auto border-2 border-green-400 p-8 bg-black">
            <div className="mb-6 border-b-2 border-green-400 pb-2">
              <h2 className="text-2xl font-bold tracking-wide">RESULTADOS COMPROVADOS</h2>
            </div>

            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="border border-green-400 p-4 text-center">
                  <h3 className="text-lg font-bold mb-2">TRÁFEGO</h3>
                  <p className="text-3xl font-bold mb-1">+320%</p>
                  <p className="text-xs">AUMENTO MÉDIO</p>
                </div>

                <div className="border border-green-400 p-4 text-center">
                  <h3 className="text-lg font-bold mb-2">CONVERSÕES</h3>
                  <p className="text-3xl font-bold mb-1">+175%</p>
                  <p className="text-xs">AUMENTO MÉDIO</p>
                </div>

                <div className="border border-green-400 p-4 text-center">
                  <h3 className="text-lg font-bold mb-2">ROI</h3>
                  <p className="text-3xl font-bold mb-1">4.8x</p>
                  <p className="text-xs">RETORNO MÉDIO</p>
                </div>
              </div>

              <div className="border border-green-400 p-4 mb-6">
                <h3 className="text-lg font-bold mb-4 text-center">GRÁFICO DE DESEMPENHO</h3>
                <div className="h-40 flex items-end justify-between px-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-green-400" style={{ height: "20%" }}></div>
                    <p className="text-xs mt-1">JAN</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-green-400" style={{ height: "30%" }}></div>
                    <p className="text-xs mt-1">FEV</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-green-400" style={{ height: "45%" }}></div>
                    <p className="text-xs mt-1">MAR</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-green-400" style={{ height: "40%" }}></div>
                    <p className="text-xs mt-1">ABR</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-green-400" style={{ height: "60%" }}></div>
                    <p className="text-xs mt-1">MAI</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-green-400" style={{ height: "75%" }}></div>
                    <p className="text-xs mt-1">JUN</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-green-400" style={{ height: "90%" }}></div>
                    <p className="text-xs mt-1">JUL</p>
                  </div>
                </div>
              </div>

              <div className="border border-green-400 p-4">
                <h3 className="text-lg font-bold mb-2">CLIENTES SATISFEITOS</h3>
                <p className="text-sm">MAIS DE 50 CLIENTES ATIVOS COM TAXA DE RETENÇÃO DE 92% NOS ÚLTIMOS 12 MESES.</p>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-block border border-green-400 px-4 py-2">
                C:\&gt; ANALISANDO MÉTRICAS DE SUCESSO...
              </div>
            </div>
          </div>
        </div>

        {/* Slide 6 - Clientes */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-500 ${
            currentSlide === 5 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-full max-w-4xl mx-auto border-2 border-green-400 p-8 bg-black">
            <div className="mb-6 border-b-2 border-green-400 pb-2">
              <h2 className="text-2xl font-bold tracking-wide">CLIENTES E PARCEIROS</h2>
            </div>

            <div className="mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="border border-green-400 p-4 text-center h-24 flex items-center justify-center"
                  >
                    <p className="text-sm font-bold">CLIENTE {i + 1}</p>
                  </div>
                ))}
              </div>

              <div className="border border-green-400 p-4 mb-6">
                <h3 className="text-lg font-bold mb-2">DEPOIMENTOS</h3>
                <div className="text-sm space-y-4">
                  <div>
                    <p className="mb-1">
                      "A INTEGRARE TRANSFORMOU NOSSA PRESENÇA DIGITAL. RESULTADOS IMPRESSIONANTES EM TEMPO RECORDE."
                    </p>
                    <p className="text-xs">- EMPRESA ABC, CEO</p>
                  </div>
                  <div>
                    <p className="mb-1">"PROFISSIONALISMO E ESTRATÉGIA DE ALTO NÍVEL. RECOMENDO SEM HESITAÇÃO."</p>
                    <p className="text-xs">- EMPRESA XYZ, DIRETOR DE MARKETING</p>
                  </div>
                </div>
              </div>

              <div className="border border-green-400 p-4">
                <h3 className="text-lg font-bold mb-2">SETORES ATENDIDOS</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div className="border border-green-400 p-2 text-center">
                    <p className="text-xs">SAÚDE</p>
                  </div>
                  <div className="border border-green-400 p-2 text-center">
                    <p className="text-xs">EDUCAÇÃO</p>
                  </div>
                  <div className="border border-green-400 p-2 text-center">
                    <p className="text-xs">VAREJO</p>
                  </div>
                  <div className="border border-green-400 p-2 text-center">
                    <p className="text-xs">SERVIÇOS</p>
                  </div>
                  <div className="border border-green-400 p-2 text-center">
                    <p className="text-xs">INDÚSTRIA</p>
                  </div>
                  <div className="border border-green-400 p-2 text-center">
                    <p className="text-xs">TECNOLOGIA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-block border border-green-400 px-4 py-2">C:\&gt; CARREGANDO PORTFÓLIO...</div>
            </div>
          </div>
        </div>

        {/* Slide 7 - Contato */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-500 ${
            currentSlide === 6 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-full max-w-4xl mx-auto border-2 border-green-400 p-8 bg-black">
            <div className="mb-6 border-b-2 border-green-400 pb-2">
              <h2 className="text-2xl font-bold tracking-wide">CONTATO</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="border border-green-400 p-4 mb-4">
                  <h3 className="text-lg font-bold mb-2">INFORMAÇÕES</h3>
                  <ul className="text-sm space-y-2">
                    <li>
                      <span className="inline-block w-20">EMAIL:</span> CONTATO@AINTEGRARE.COM.BR
                    </li>
                    <li>
                      <span className="inline-block w-20">TELEFONE:</span> (44) 9999-8765
                    </li>
                    <li>
                      <span className="inline-block w-20">ENDEREÇO:</span> RUA EXEMPLO, 123 - CENTRO
                    </li>
                    <li>
                      <span className="inline-block w-20">HORÁRIO:</span> SEG-SEX, 9H-18H
                    </li>
                  </ul>
                </div>

                <div className="border border-green-400 p-4">
                  <h3 className="text-lg font-bold mb-2">REDES SOCIAIS</h3>
                  <ul className="text-sm space-y-2">
                    <li>
                      <span className="inline-block w-20">INSTAGRAM:</span> @INTEGRARE
                    </li>
                    <li>
                      <span className="inline-block w-20">LINKEDIN:</span> /COMPANY/INTEGRARE
                    </li>
                    <li>
                      <span className="inline-block w-20">FACEBOOK:</span> /INTEGRARE
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border border-green-400 p-4">
                <h3 className="text-lg font-bold mb-4 text-center">FORMULÁRIO DE CONTATO</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1">NOME:</label>
                    <div className="border border-green-400 p-2 bg-black">
                      <span className="text-sm">_</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">EMAIL:</label>
                    <div className="border border-green-400 p-2 bg-black">
                      <span className="text-sm">_</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">MENSAGEM:</label>
                    <div className="border border-green-400 p-2 bg-black h-20">
                      <span className="text-sm">_</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="border border-green-400 px-4 py-2 hover:bg-green-900 transition-colors">
                      ENVIAR MENSAGEM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-block border border-green-400 px-4 py-2">C:\&gt; FINALIZANDO APRESENTAÇÃO...</div>
            </div>
          </div>
        </div>
      </main>

      {/* Controles de navegação */}
      <div className="bg-green-900 p-4 border-t-2 border-green-400">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center ${
              currentSlide === 0 ? "text-green-800 cursor-not-allowed" : "hover:text-green-200"
            }`}
          >
            <ArrowLeft size={16} className="mr-1" />
            <span>ANTERIOR</span>
          </button>

          <div className="flex space-x-2">
            {[...Array(totalSlides)].map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 ${currentSlide === i ? "bg-green-400" : "bg-green-900 border border-green-400"}`}
                aria-label={`Ir para slide ${i + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`flex items-center ${
              currentSlide === totalSlides - 1 ? "text-green-800 cursor-not-allowed" : "hover:text-green-200"
            }`}
          >
            <span>PRÓXIMO</span>
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  )
}
