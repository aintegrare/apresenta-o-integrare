"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Globe,
  ExternalLink,
  Check,
  Clock,
  Users,
  BarChart,
  Target,
  RefreshCw,
  PenTool,
  MessageSquare,
  ShoppingBag,
} from "lucide-react"

export default function PaginaInstitucional() {
  const [activeWindow, setActiveWindow] = useState<string | null>("bemvindo")
  const [bootComplete, setBootComplete] = useState(false)
  const [showStartup, setShowStartup] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [currentTime, setCurrentTime] = useState<string>("")
  const [showStartMenu, setShowStartMenu] = useState(false)
  const startButtonRef = useRef<HTMLButtonElement | null>(null)
  const [activeTab, setActiveTab] = useState("empresa")

  // Controla sons do sistema
  const playSound = (soundType: string) => {
    if (audioRef.current) {
      audioRef.current.src = `/sounds/windows95-${soundType}.mp3`
      audioRef.current.play().catch((err) => console.log("Erro ao reproduzir som:", err))
    }
  }

  // Atualiza o relógio
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      })
      setCurrentTime(timeString)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  // Sequência de inicialização
  useEffect(() => {
    const startupTimer = setTimeout(() => {
      setShowStartup(false)
      playSound("startup")
      setBootComplete(true)
    }, 3000)

    return () => clearTimeout(startupTimer)
  }, [])

  // Fechar menu iniciar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (showStartMenu && startButtonRef.current && !startButtonRef.current.contains(e.target as Node)) {
        setShowStartMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [showStartMenu])

  const openWindow = (windowName: string) => {
    setActiveWindow(windowName)
    setShowStartMenu(false)
    playSound("open")
  }

  // Conteúdo da inicialização do Windows 95
  if (showStartup) {
    return (
      <div className="bg-[#008080] h-screen w-full flex flex-col items-center justify-center text-white font-sans">
        <div className="flex items-center mb-8">
          <span className="text-5xl font-bold mr-2">Windows</span>
          <span className="text-4xl font-bold bg-black px-2">95</span>
        </div>
        <div className="w-64 h-4 bg-gray-700 border border-white relative overflow-hidden">
          <div className="h-full bg-white absolute animate-progressBar"></div>
        </div>
        <div className="mt-4">Iniciando Windows 95...</div>
      </div>
    )
  }

  return (
    <div className="bg-[#008080] h-screen w-full overflow-hidden font-sans relative">
      <audio ref={audioRef} className="hidden" />

      {/* Área de trabalho */}
      <div className="flex flex-wrap p-4 h-[calc(100vh-28px)] overflow-auto relative">
        {/* Ícones da área de trabalho */}
        <div
          className="flex flex-col items-center w-20 h-24 m-2 cursor-pointer hover:bg-[#008080]/40"
          onClick={() => openWindow("sobre")}
        >
          <div className="w-10 h-10 mb-1 flex items-center justify-center bg-[#c0c0c0] rounded-sm border border-[#ffffff] border-r-[#808080] border-b-[#808080]">
            <Users className="w-6 h-6 text-[#4b7bb5]" />
          </div>
          <div className="text-center text-white text-xs text-shadow">Sobre Nós</div>
        </div>

        <div
          className="flex flex-col items-center w-20 h-24 m-2 cursor-pointer hover:bg-[#008080]/40"
          onClick={() => openWindow("servicos")}
        >
          <div className="w-10 h-10 mb-1 flex items-center justify-center bg-[#c0c0c0] rounded-sm border border-[#ffffff] border-r-[#808080] border-b-[#808080]">
            <PenTool className="w-6 h-6 text-[#4b7bb5]" />
          </div>
          <div className="text-center text-white text-xs text-shadow">Serviços</div>
        </div>

        <div
          className="flex flex-col items-center w-20 h-24 m-2 cursor-pointer hover:bg-[#008080]/40"
          onClick={() => openWindow("portfolio")}
        >
          <div className="w-10 h-10 mb-1 flex items-center justify-center bg-[#c0c0c0] rounded-sm border border-[#ffffff] border-r-[#808080] border-b-[#808080]">
            <ShoppingBag className="w-6 h-6 text-[#4b7bb5]" />
          </div>
          <div className="text-center text-white text-xs text-shadow">Portfólio</div>
        </div>

        <div
          className="flex flex-col items-center w-20 h-24 m-2 cursor-pointer hover:bg-[#008080]/40"
          onClick={() => openWindow("contato")}
        >
          <div className="w-10 h-10 mb-1 flex items-center justify-center bg-[#c0c0c0] rounded-sm border border-[#ffffff] border-r-[#808080] border-b-[#808080]">
            <Mail className="w-6 h-6 text-[#4b7bb5]" />
          </div>
          <div className="text-center text-white text-xs text-shadow">Contato</div>
        </div>

        {/* Janela de Bem-vindo */}
        {activeWindow === "bemvindo" && (
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-[500px] bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-md z-10">
            <div className="bg-[#000080] text-white p-1 flex justify-between items-center">
              <div className="flex items-center font-bold text-sm">
                <span className="mr-1">🖥️</span>
                <span>Bem-vindo à Agência Integrare</span>
              </div>
              <div className="flex">
                <button
                  className="w-5 h-5 flex items-center justify-center bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] text-black text-xs"
                  onClick={() => setActiveWindow(null)}
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex mb-4">
                <div className="w-16 h-16 bg-[#4b7bb5] text-white flex items-center justify-center text-3xl mr-4">
                  I
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#000080] mb-1">Bem-vindo à Agência Integrare</h2>
                  <p className="text-sm mb-2">Sua parceira em Marketing Digital e Estratégia de Negócios</p>
                </div>
              </div>

              <p className="text-sm mb-4">
                Fundada em 2020, a Integrare nasceu com a missão de levar Marketing de Qualidade, baseado em evidências
                científicas e casos práticos de sucesso.
              </p>

              <div className="bg-white border border-[#808080] p-3 mb-4">
                <p className="text-sm italic">
                  "Tratamos os negócios dos nossos clientes como se fossem o nosso, trabalhamos lado a lado, porque
                  nosso compromisso é com os resultados que entregamos."
                </p>
              </div>

              <p className="text-sm mb-4">
                Clique nos ícones na área de trabalho para conhecer mais sobre nossa agência ou use o menu iniciar para
                navegar pelos recursos disponíveis.
              </p>

              <div className="flex justify-center">
                <button
                  className="bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] px-3 py-1"
                  onClick={() => setActiveWindow(null)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Janela Sobre */}
        {activeWindow === "sobre" && (
          <div className="absolute top-10 left-20 w-[600px] bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-md z-10">
            <div className="bg-[#000080] text-white p-1 flex justify-between items-center">
              <div className="flex items-center font-bold text-sm">
                <span className="mr-1">👥</span>
                <span>Sobre a Integrare</span>
              </div>
              <div className="flex">
                <button
                  className="w-5 h-5 flex items-center justify-center bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] text-black text-xs"
                  onClick={() => setActiveWindow(null)}
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-3 border-b border-[#808080] pb-2">
                <div className="bg-[#f0f0f0] border border-[#808080] flex p-1">
                  <button
                    className={`mr-1 px-2 ${activeTab === "empresa" ? "bg-[#c0c0c0] border border-[#808080] border-b-0" : ""}`}
                    onClick={() => setActiveTab("empresa")}
                  >
                    Empresa
                  </button>
                  <button
                    className={`mr-1 px-2 ${activeTab === "filosofia" ? "bg-[#c0c0c0] border border-[#808080] border-b-0" : ""}`}
                    onClick={() => setActiveTab("filosofia")}
                  >
                    Filosofia
                  </button>
                  <button
                    className={`mr-1 px-2 ${activeTab === "visao" ? "bg-[#c0c0c0] border border-[#808080] border-b-0" : ""}`}
                    onClick={() => setActiveTab("visao")}
                  >
                    Visão
                  </button>
                </div>
              </div>

              {activeTab === "empresa" && (
                <div>
                  <div className="flex mb-4">
                    <div className="w-16 h-16 bg-[#4b7bb5] text-white flex items-center justify-center text-3xl mr-4">
                      I
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-[#000080] mb-1">Nossa História</h2>
                      <p className="text-sm mb-2">Trajetória de inovação e crescimento</p>
                    </div>
                  </div>

                  <p className="text-sm mb-3">
                    Fundada em 2020, a Integrare nasceu com a missão de levar Marketing de Qualidade, baseado em
                    evidências científicas e casos práticos de sucesso.
                  </p>

                  <p className="text-sm mb-3">
                    Começamos oferecendo serviços simples de gestão de social media e hoje oferecemos um ecossistema
                    completo de serviços de marketing, que inclui todos os aspectos dos negócios digitais das empresas.
                  </p>

                  <div className="bg-[#f0f0f0] border border-[#808080] p-3 mb-4">
                    <h3 className="font-bold text-sm mb-2">Nossa Trajetória:</h3>
                    <ul className="text-sm list-disc pl-5">
                      <li className="mb-1">2020 - Fundação da empresa</li>
                      <li className="mb-1">2021 - Expansão para serviços completos de marketing digital</li>
                      <li className="mb-1">2022 - Desenvolvimento de metodologia própria</li>
                      <li className="mb-1">2023 - Consolidação no mercado</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "filosofia" && (
                <div>
                  <div className="flex mb-4">
                    <div className="w-16 h-16 bg-[#4b7bb5] text-white flex items-center justify-center text-3xl mr-4">
                      I
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-[#000080] mb-1">Nossa Filosofia</h2>
                      <p className="text-sm mb-2">Princípios que nos guiam</p>
                    </div>
                  </div>

                  <p className="text-sm mb-3">
                    Tratamos os negócios dos nossos clientes como se fossem o nosso, trabalhamos lado a lado, porque
                    nosso compromisso é com os resultados que entregamos.
                  </p>

                  <p className="text-sm mb-3">
                    Marketing não é sobre vender mais, é sobre ter propósito e mostrar isso para o mundo. É uma
                    ferramenta de reafirmação do porquê viemos e para que estamos aqui.
                  </p>

                  <div className="bg-[#f0f0f0] border border-[#808080] p-3 mb-4">
                    <h3 className="font-bold text-sm mb-2">Nossos Valores:</h3>
                    <ul className="text-sm">
                      <li className="flex items-center mb-1">
                        <Check size={14} className="mr-1 text-[#4b7bb5]" /> Transparência
                      </li>
                      <li className="flex items-center mb-1">
                        <Check size={14} className="mr-1 text-[#4b7bb5]" /> Compromisso com resultados
                      </li>
                      <li className="flex items-center mb-1">
                        <Check size={14} className="mr-1 text-[#4b7bb5]" /> Inovação constante
                      </li>
                      <li className="flex items-center mb-1">
                        <Check size={14} className="mr-1 text-[#4b7bb5]" /> Ética profissional
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "visao" && (
                <div>
                  <div className="flex mb-4">
                    <div className="w-16 h-16 bg-[#4b7bb5] text-white flex items-center justify-center text-3xl mr-4">
                      I
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-[#000080] mb-1">Nossa Visão</h2>
                      <p className="text-sm mb-2">Para onde estamos indo</p>
                    </div>
                  </div>

                  <p className="text-sm mb-3">
                    Marketing é o meio mais barato de geração de negócios de alto valor, é o meio pelo qual conquistamos
                    nossa autoridade e conquistamos a confiança do consumidor e dos concorrentes.
                  </p>

                  <p className="text-sm mb-3">
                    Nosso objetivo é que nosso cliente tenha confiança e nosso concorrente ansiedade quando pensa em
                    nosso trabalho.
                  </p>

                  <div className="bg-[#f0f0f0] border border-[#808080] p-3 mb-4">
                    <h3 className="font-bold text-sm mb-2">Objetivos Estratégicos:</h3>
                    <ul className="text-sm list-disc pl-5">
                      <li className="mb-1">Ser referência em marketing baseado em dados</li>
                      <li className="mb-1">Crescer de forma sustentável mantendo a qualidade</li>
                      <li className="mb-1">Desenvolver constantemente nossa metodologia</li>
                      <li className="mb-1">Impactar positivamente os negócios de nossos clientes</li>
                    </ul>
                  </div>
                </div>
              )}

              <div className="flex justify-end mt-4">
                <button
                  className="bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] px-3 py-1"
                  onClick={() => setActiveWindow(null)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Janela Serviços */}
        {activeWindow === "servicos" && (
          <div className="absolute top-12 left-40 w-[620px] bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-md z-10">
            <div className="bg-[#000080] text-white p-1 flex justify-between items-center">
              <div className="flex items-center font-bold text-sm">
                <span className="mr-1">🛠️</span>
                <span>Serviços - Integrare</span>
              </div>
              <div className="flex">
                <button
                  className="w-5 h-5 flex items-center justify-center bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] text-black text-xs"
                  onClick={() => setActiveWindow(null)}
                >
                  ×
                </button>
              </div>
            </div>
            <div className="bg-[#f0f0f0] p-1 border-b border-[#808080] flex">
              <div className="mr-3">Arquivo</div>
              <div className="mr-3">Editar</div>
              <div className="mr-3">Visualizar</div>
              <div className="mr-3">Ajuda</div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold text-[#000080] mb-3">Nossos Serviços</h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white border border-[#808080] p-3">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-[#4b7bb5] text-white flex items-center justify-center rounded-full mr-2">
                      <Globe size={16} />
                    </div>
                    <h3 className="font-bold">Marketing Digital</h3>
                  </div>
                  <p className="text-sm">
                    Estratégias completas de marketing digital, incluindo SEO, marketing de conteúdo e posicionamento de
                    marca.
                  </p>
                </div>

                <div className="bg-white border border-[#808080] p-3">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-[#4b7bb5] text-white flex items-center justify-center rounded-full mr-2">
                      <MessageSquare size={16} />
                    </div>
                    <h3 className="font-bold">Redes Sociais</h3>
                  </div>
                  <p className="text-sm">
                    Gestão de redes sociais, criação de conteúdo, estratégia e planejamento para engajamento e
                    crescimento.
                  </p>
                </div>

                <div className="bg-white border border-[#808080] p-3">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-[#4b7bb5] text-white flex items-center justify-center rounded-full mr-2">
                      <Target size={16} />
                    </div>
                    <h3 className="font-bold">SEO</h3>
                  </div>
                  <p className="text-sm">
                    Otimização para mecanismos de busca, estratégias de palavras-chave e aumento de tráfego orgânico
                    qualificado.
                  </p>
                </div>

                <div className="bg-white border border-[#808080] p-3">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-[#4b7bb5] text-white flex items-center justify-center rounded-full mr-2">
                      <RefreshCw size={16} />
                    </div>
                    <h3 className="font-bold">Desenvolvimento Web</h3>
                  </div>
                  <p className="text-sm">
                    Criação de websites, landing pages e e-commerces com foco em conversão e experiência do usuário.
                  </p>
                </div>
              </div>

              <div className="bg-[#f0f0f0] border border-[#808080] p-3 mb-4">
                <h3 className="font-bold text-sm mb-2">Nossa Metodologia:</h3>
                <div className="grid grid-cols-4 gap-2 text-sm">
                  <div className="bg-white border border-[#808080] p-2 flex flex-col items-center">
                    <div className="w-6 h-6 bg-[#4b7bb5] text-white flex items-center justify-center rounded-full mb-1">
                      1
                    </div>
                    <div className="text-center font-bold">Diagnóstico</div>
                  </div>
                  <div className="bg-white border border-[#808080] p-2 flex flex-col items-center">
                    <div className="w-6 h-6 bg-[#4b7bb5] text-white flex items-center justify-center rounded-full mb-1">
                      2
                    </div>
                    <div className="text-center font-bold">Planejamento</div>
                  </div>
                  <div className="bg-white border border-[#808080] p-2 flex flex-col items-center">
                    <div className="w-6 h-6 bg-[#4b7bb5] text-white flex items-center justify-center rounded-full mb-1">
                      3
                    </div>
                    <div className="text-center font-bold">Execução</div>
                  </div>
                  <div className="bg-white border border-[#808080] p-2 flex flex-col items-center">
                    <div className="w-6 h-6 bg-[#4b7bb5] text-white flex items-center justify-center rounded-full mb-1">
                      4
                    </div>
                    <div className="text-center font-bold">Análise</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  className="bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] px-3 py-1 flex items-center"
                  onClick={() => openWindow("portfolio")}
                >
                  Ver Portfólio <ArrowRight size={14} className="ml-1" />
                </button>
                <button
                  className="bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] px-3 py-1"
                  onClick={() => setActiveWindow(null)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Janela Portfolio */}
        {activeWindow === "portfolio" && (
          <div className="absolute top-20 left-60 w-[650px] bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-md z-10">
            <div className="bg-[#000080] text-white p-1 flex justify-between items-center">
              <div className="flex items-center font-bold text-sm">
                <span className="mr-1">📁</span>
                <span>Portfólio - Integrare</span>
              </div>
              <div className="flex">
                <button
                  className="w-5 h-5 flex items-center justify-center bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] text-black text-xs"
                  onClick={() => setActiveWindow(null)}
                >
                  ×
                </button>
              </div>
            </div>
            <div className="bg-[#f0f0f0] p-1 border-b border-[#808080] flex">
              <div className="mr-3">Arquivo</div>
              <div className="mr-3">Editar</div>
              <div className="mr-3">Visualizar</div>
              <div className="mr-3">Ajuda</div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold text-[#000080] mb-3">Nossos Casos de Sucesso</h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white border border-[#808080] p-3">
                  <div className="h-32 bg-[#4b7bb5] text-white flex items-center justify-center mb-2">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="font-bold text-sm">Aumento de 150% em Tráfego Orgânico</h3>
                  <p className="text-xs mt-1 mb-2">Cliente: Clínica Odontológica Especializada</p>
                  <p className="text-xs">
                    Implementamos uma estratégia completa de SEO que incluiu otimização on-page, criação de conteúdo e
                    link building, resultando em um aumento significativo de tráfego.
                  </p>
                </div>

                <div className="bg-white border border-[#808080] p-3">
                  <div className="h-32 bg-[#4b7bb5] text-white flex items-center justify-center mb-2">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="font-bold text-sm">Gestão de Redes Sociais com 200% de Engajamento</h3>
                  <p className="text-xs mt-1 mb-2">Cliente: Marca de Moda Sustentável</p>
                  <p className="text-xs">
                    Desenvolvimento de estratégia de conteúdo e programação para Instagram e Facebook, com aumento
                    expressivo no engajamento e conversões.
                  </p>
                </div>

                <div className="bg-white border border-[#808080] p-3">
                  <div className="h-32 bg-[#4b7bb5] text-white flex items-center justify-center mb-2">
                    <span className="text-2xl">🛒</span>
                  </div>
                  <h3 className="font-bold text-sm">E-commerce com Crescimento de 120% nas Vendas</h3>
                  <p className="text-xs mt-1 mb-2">Cliente: Loja de Produtos Naturais</p>
                  <p className="text-xs">
                    Implementação de estratégia completa de marketing digital incluindo ads, email marketing e
                    otimização de funil de vendas.
                  </p>
                </div>

                <div className="bg-white border border-[#808080] p-3">
                  <div className="h-32 bg-[#4b7bb5] text-white flex items-center justify-center mb-2">
                    <span className="text-2xl">🖥️</span>
                  </div>
                  <h3 className="font-bold text-sm">Website com Conversão de 15%</h3>
                  <p className="text-xs mt-1 mb-2">Cliente: Escritório de Advocacia</p>
                  <p className="text-xs">
                    Desenvolvimento de site profissional com otimização para conversão e geração de leads qualificados.
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4 bg-[#f0f0f0] border border-[#808080] p-3">
                <BarChart size={32} className="text-[#4b7bb5] mr-3" />
                <div>
                  <h3 className="font-bold text-sm">Nossos Números</h3>
                  <div className="grid grid-cols-3 gap-2 mt-2 text-sm">
                    <div className="flex flex-col items-center">
                      <div className="font-bold text-lg text-[#4b7bb5]">+50</div>
                      <div className="text-xs">Clientes Atendidos</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="font-bold text-lg text-[#4b7bb5]">+200%</div>
                      <div className="text-xs">ROI Médio</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="font-bold text-lg text-[#4b7bb5]">+150%</div>
                      <div className="text-xs">Crescimento</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  className="bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] px-3 py-1 flex items-center"
                  onClick={() => openWindow("contato")}
                >
                  Solicitar Orçamento <ArrowRight size={14} className="ml-1" />
                </button>
                <button
                  className="bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] px-3 py-1"
                  onClick={() => setActiveWindow(null)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Janela Contato */}
        {activeWindow === "contato" && (
          <div className="absolute top-30 left-80 w-[500px] bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-md z-10">
            <div className="bg-[#000080] text-white p-1 flex justify-between items-center">
              <div className="flex items-center font-bold text-sm">
                <span className="mr-1">✉️</span>
                <span>Contato - Integrare</span>
              </div>
              <div className="flex">
                <button
                  className="w-5 h-5 flex items-center justify-center bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] text-black text-xs"
                  onClick={() => setActiveWindow(null)}
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold text-[#000080] mb-3">Entre em Contato</h2>

              <div className="grid grid-cols-1 gap-3 mb-4">
                <div className="bg-white border border-[#808080] p-3">
                  <div className="flex items-center mb-2">
                    <Mail size={16} className="text-[#4b7bb5] mr-2" />
                    <h3 className="font-bold text-sm">Email</h3>
                  </div>
                  <p className="text-sm">contato@aintegrare.com.br</p>
                </div>

                <div className="bg-white border border-[#808080] p-3">
                  <div className="flex items-center mb-2">
                    <Phone size={16} className="text-[#4b7bb5] mr-2" />
                    <h3 className="font-bold text-sm">Telefone</h3>
                  </div>
                  <p className="text-sm">(44) 9999-8765</p>
                </div>

                <div className="bg-white border border-[#808080] p-3">
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="text-[#4b7bb5] mr-2" />
                    <h3 className="font-bold text-sm">Endereço</h3>
                  </div>
                  <p className="text-sm">
                    Av. das Soluções Digitais, 123 - Centro
                    <br />
                    Campo Mourão - PR
                  </p>
                </div>
              </div>

              <div className="bg-[#f0f0f0] border border-[#808080] p-3 mb-4">
                <h3 className="font-bold text-sm mb-2">Formulário de Contato:</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs mb-1 block">Nome:</label>
                    <input type="text" className="w-full bg-white border border-[#808080] p-1 text-sm" />
                  </div>
                  <div>
                    <label className="text-xs mb-1 block">Email:</label>
                    <input type="email" className="w-full bg-white border border-[#808080] p-1 text-sm" />
                  </div>
                  <div>
                    <label className="text-xs mb-1 block">Assunto:</label>
                    <select className="w-full bg-white border border-[#808080] p-1 text-sm">
                      <option>Selecione um assunto</option>
                      <option>Orçamento</option>
                      <option>Dúvidas</option>
                      <option>Parceria</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs mb-1 block">Mensagem:</label>
                    <textarea className="w-full bg-white border border-[#808080] p-1 text-sm" rows={3}></textarea>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  className="bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] px-3 py-1 flex items-center"
                  onClick={() => {
                    setActiveWindow(null)
                    playSound("ding")
                    setTimeout(() => {
                      setActiveWindow("mensagem-enviada")
                    }, 500)
                  }}
                >
                  Enviar Mensagem
                </button>
                <button
                  className="bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] px-3 py-1"
                  onClick={() => setActiveWindow(null)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Janela Mensagem Enviada */}
        {activeWindow === "mensagem-enviada" && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-md z-20">
            <div className="bg-[#000080] text-white p-1 flex justify-between items-center">
              <div className="flex items-center font-bold text-sm">
                <span className="mr-1">ℹ️</span>
                <span>Informação</span>
              </div>
              <div className="flex">
                <button
                  className="w-5 h-5 flex items-center justify-center bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] text-black text-xs"
                  onClick={() => setActiveWindow(null)}
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-4 flex items-start">
              <div className="text-3xl mr-3">ℹ️</div>
              <div>
                <p className="text-sm mb-4">Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.</p>
                <div className="flex justify-center">
                  <button
                    className="bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] px-3 py-1"
                    onClick={() => setActiveWindow(null)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Barra de tarefas */}
      <div className="absolute bottom-0 left-0 right-0 h-7 bg-[#c0c0c0] border-t-2 border-[#ffffff] flex items-center">
        <button
          ref={startButtonRef}
          className="h-6 px-2 bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] ml-1 mr-2 flex items-center"
          onClick={() => {
            setShowStartMenu(!showStartMenu)
            if (!showStartMenu) {
              playSound("menu")
            }
          }}
        >
          <span className="text-lg mr-1">🪟</span>
          <span className="font-bold text-sm">Iniciar</span>
        </button>

        {activeWindow && (
          <div className="h-6 px-2 bg-[#c0c0c0] border-2 border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff] flex items-center">
            <span className="text-xs">
              {activeWindow === "bemvindo" && "Bem-vindo à Agência Integrare"}
              {activeWindow === "sobre" && "Sobre - Integrare"}
              {activeWindow === "servicos" && "Serviços - Integrare"}
              {activeWindow === "portfolio" && "Portfólio - Integrare"}
              {activeWindow === "contato" && "Contato - Integrare"}
              {activeWindow === "mensagem-enviada" && "Informação"}
            </span>
          </div>
        )}

        <div className="ml-auto h-6 px-2 bg-[#c0c0c0] border-2 border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff] flex items-center mr-1">
          <Clock size={12} className="mr-1" />
          <span className="text-xs">{currentTime}</span>
        </div>
      </div>

      {/* Menu Iniciar */}
      {showStartMenu && (
        <div className="absolute bottom-7 left-0 w-64 bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-md z-50">
          <div className="bg-[#000080] h-6 flex items-center px-2 font-bold text-white">
            <span className="transform -rotate-90 origin-center text-lg ml-[-4px]">Integrare</span>
          </div>
          <div className="py-1">
            <div
              className="hover:bg-[#000080] hover:text-white px-4 py-1 cursor-pointer flex items-center"
              onClick={() => openWindow("bemvindo")}
            >
              <span className="mr-2">🖥️</span>
              <span>Bem-vindo</span>
            </div>
            <div
              className="hover:bg-[#000080] hover:text-white px-4 py-1 cursor-pointer flex items-center"
              onClick={() => openWindow("sobre")}
            >
              <span className="mr-2">👥</span>
              <span>Sobre Nós</span>
            </div>
            <div
              className="hover:bg-[#000080] hover:text-white px-4 py-1 cursor-pointer flex items-center"
              onClick={() => openWindow("servicos")}
            >
              <span className="mr-2">🛠️</span>
              <span>Serviços</span>
            </div>
            <div
              className="hover:bg-[#000080] hover:text-white px-4 py-1 cursor-pointer flex items-center"
              onClick={() => openWindow("portfolio")}
            >
              <span className="mr-2">📁</span>
              <span>Portfólio</span>
            </div>
            <div
              className="hover:bg-[#000080] hover:text-white px-4 py-1 cursor-pointer flex items-center"
              onClick={() => openWindow("contato")}
            >
              <span className="mr-2">✉️</span>
              <span>Contato</span>
            </div>
            <div className="border-t border-[#808080] border-b border-[#ffffff] my-1"></div>
            <Link
              href="/windows95"
              className="hover:bg-[#000080] hover:text-white px-4 py-1 cursor-pointer flex items-center"
            >
              <span className="mr-2">🪟</span>
              <span>Windows 95 Completo</span>
            </Link>
            <div
              className="hover:bg-[#000080] hover:text-white px-4 py-1 cursor-pointer flex items-center"
              onClick={() => {
                setShowStartMenu(false)
                window.location.href = "/"
              }}
            >
              <span className="mr-2">🚪</span>
              <span>Sair</span>
            </div>
          </div>
        </div>
      )}

      {/* Link para voltar */}
      <Link
        href="/windows95"
        className="absolute top-0 right-0 bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] p-1 text-xs flex items-center z-50"
      >
        <span>Windows 95 Completo</span>
        <ExternalLink size={12} className="ml-1" />
      </Link>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        
        body {
          font-family: 'MS Sans Serif', sans-serif;
          overflow: hidden;
        }
        
        .text-shadow {
          text-shadow: 1px 1px 1px black;
        }
        
        @keyframes progressBar {
          0% { width: 0; }
          100% { width: 100%; }
        }
        
        .animate-progressBar {
          animation: progressBar 3s linear forwards;
        }
      `}</style>
    </div>
  )
}
