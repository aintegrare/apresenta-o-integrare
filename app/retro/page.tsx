"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Minus, FileText, Presentation, BarChart, Users, Settings, Mail } from "lucide-react"

export default function RetroInterface() {
  const [activeWindow, setActiveWindow] = useState<string | null>("main")
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([])

  const toggleMinimize = (windowId: string) => {
    if (minimizedWindows.includes(windowId)) {
      setMinimizedWindows(minimizedWindows.filter((id) => id !== windowId))
      setActiveWindow(windowId)
    } else {
      setMinimizedWindows([...minimizedWindows, windowId])
      setActiveWindow(null)
    }
  }

  const openWindow = (windowId: string) => {
    setActiveWindow(windowId)
    setMinimizedWindows(minimizedWindows.filter((id) => id !== windowId))
  }

  const closeWindow = (windowId: string) => {
    if (activeWindow === windowId) {
      setActiveWindow(null)
    }
    setMinimizedWindows(minimizedWindows.filter((id) => id !== windowId))
  }

  return (
    <div className="min-h-screen bg-amber-50 p-4 font-sans overflow-hidden">
      {/* Barra superior estilo Windows 3.11 */}
      <div className="bg-integrare-blue text-white p-2 flex justify-between items-center mb-4 border-b-4 border-t-2 border-l-2 border-r-4 border-gray-300 shadow-md">
        <div className="flex items-center">
          <Image src="/images/logo-integrare.png" alt="Integrare" width={24} height={24} className="mr-2" />
          <span className="font-bold">Integrare Program Manager</span>
        </div>
        <div className="flex space-x-2">
          <span className="text-xs">Arquivo</span>
          <span className="text-xs">Editar</span>
          <span className="text-xs">Visualizar</span>
          <span className="text-xs">Opções</span>
          <span className="text-xs">Ajuda</span>
        </div>
      </div>

      {/* Área principal com janelas */}
      <div className="relative w-full h-[calc(100vh-6rem)]">
        {/* Janela Principal - Program Manager */}
        {activeWindow === "main" && !minimizedWindows.includes("main") && (
          <div className="absolute top-4 left-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] bg-gray-200 border-t-2 border-l-2 border-r-4 border-b-4 border-gray-400 shadow-lg">
            <div className="bg-integrare-blue text-white p-2 flex justify-between items-center">
              <span className="font-bold">Integrare - Grupo Principal</span>
              <div className="flex space-x-2">
                <button onClick={() => toggleMinimize("main")} className="focus:outline-none">
                  <Minus size={16} />
                </button>
                <button onClick={() => closeWindow("main")} className="focus:outline-none">
                  <X size={16} />
                </button>
              </div>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Ícones de grupo */}
              <div
                className="flex flex-col items-center cursor-pointer hover:bg-blue-100 p-2 rounded"
                onClick={() => openWindow("articles")}
              >
                <div className="w-16 h-16 bg-amber-100 border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                  <FileText size={32} className="text-integrare-blue" />
                </div>
                <span className="text-center font-bold">Artigos</span>
              </div>

              <div
                className="flex flex-col items-center cursor-pointer hover:bg-blue-100 p-2 rounded"
                onClick={() => openWindow("presentations")}
              >
                <div className="w-16 h-16 bg-amber-100 border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                  <Presentation size={32} className="text-integrare-blue" />
                </div>
                <span className="text-center font-bold">Apresentações</span>
              </div>

              <div
                className="flex flex-col items-center cursor-pointer hover:bg-blue-100 p-2 rounded"
                onClick={() => openWindow("statistics")}
              >
                <div className="w-16 h-16 bg-amber-100 border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                  <BarChart size={32} className="text-integrare-blue" />
                </div>
                <span className="text-center font-bold">Estatísticas</span>
              </div>

              <div
                className="flex flex-col items-center cursor-pointer hover:bg-blue-100 p-2 rounded"
                onClick={() => openWindow("clients")}
              >
                <div className="w-16 h-16 bg-amber-100 border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                  <Users size={32} className="text-integrare-blue" />
                </div>
                <span className="text-center font-bold">Clientes</span>
              </div>

              <div
                className="flex flex-col items-center cursor-pointer hover:bg-blue-100 p-2 rounded"
                onClick={() => openWindow("settings")}
              >
                <div className="w-16 h-16 bg-amber-100 border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                  <Settings size={32} className="text-integrare-blue" />
                </div>
                <span className="text-center font-bold">Configurações</span>
              </div>

              <div
                className="flex flex-col items-center cursor-pointer hover:bg-blue-100 p-2 rounded"
                onClick={() => openWindow("contact")}
              >
                <div className="w-16 h-16 bg-amber-100 border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                  <Mail size={32} className="text-integrare-blue" />
                </div>
                <span className="text-center font-bold">Contato</span>
              </div>
            </div>
          </div>
        )}

        {/* Janela de Artigos */}
        {activeWindow === "articles" && !minimizedWindows.includes("articles") && (
          <div className="absolute top-8 left-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] bg-gray-200 border-t-2 border-l-2 border-r-4 border-b-4 border-gray-400 shadow-lg">
            <div className="bg-integrare-blue text-white p-2 flex justify-between items-center">
              <span className="font-bold">Artigos</span>
              <div className="flex space-x-2">
                <button onClick={() => toggleMinimize("articles")} className="focus:outline-none">
                  <Minus size={16} />
                </button>
                <button onClick={() => closeWindow("articles")} className="focus:outline-none">
                  <X size={16} />
                </button>
              </div>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-6">
              <Link href="/artigos/panorama-mercado-digital" className="block">
                <div className="flex flex-col items-center hover:bg-blue-100 p-3 rounded cursor-pointer">
                  <div className="w-16 h-16 bg-white border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                    <FileText size={28} className="text-integrare-blue" />
                  </div>
                  <span className="text-center text-sm">Panorama do Mercado Digital</span>
                </div>
              </Link>

              <Link href="/artigos/terceirizacao-condominios" className="block">
                <div className="flex flex-col items-center hover:bg-blue-100 p-3 rounded cursor-pointer">
                  <div className="w-16 h-16 bg-white border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                    <FileText size={28} className="text-integrare-blue" />
                  </div>
                  <span className="text-center text-sm">Terceirização em Condomínios</span>
                </div>
              </Link>

              <Link href="/artigos/inteligencia-artificial-marketing" className="block">
                <div className="flex flex-col items-center hover:bg-blue-100 p-3 rounded cursor-pointer">
                  <div className="w-16 h-16 bg-white border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                    <FileText size={28} className="text-integrare-blue" />
                  </div>
                  <span className="text-center text-sm">IA no Marketing</span>
                </div>
              </Link>
            </div>
          </div>
        )}

        {/* Janela de Apresentações */}
        {activeWindow === "presentations" && !minimizedWindows.includes("presentations") && (
          <div className="absolute top-12 left-12 w-[calc(100%-6rem)] h-[calc(100%-6rem)] bg-gray-200 border-t-2 border-l-2 border-r-4 border-b-4 border-gray-400 shadow-lg">
            <div className="bg-integrare-blue text-white p-2 flex justify-between items-center">
              <span className="font-bold">Apresentações</span>
              <div className="flex space-x-2">
                <button onClick={() => toggleMinimize("presentations")} className="focus:outline-none">
                  <Minus size={16} />
                </button>
                <button onClick={() => closeWindow("presentations")} className="focus:outline-none">
                  <X size={16} />
                </button>
              </div>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-6">
              <Link href="/apresentacao" className="block">
                <div className="flex flex-col items-center hover:bg-blue-100 p-3 rounded cursor-pointer">
                  <div className="w-16 h-16 bg-white border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                    <Presentation size={28} className="text-integrare-blue" />
                  </div>
                  <span className="text-center text-sm">Apresentação Institucional</span>
                </div>
              </Link>

              <Link href="/apresentacao-terceirizacao" className="block">
                <div className="flex flex-col items-center hover:bg-blue-100 p-3 rounded cursor-pointer">
                  <div className="w-16 h-16 bg-white border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                    <Presentation size={28} className="text-integrare-blue" />
                  </div>
                  <span className="text-center text-sm">Terceirização em Condomínios</span>
                </div>
              </Link>
              <Link href="/apresentacao-medeiros" className="block">
                <div className="flex flex-col items-center hover:bg-blue-100 p-3 rounded cursor-pointer">
                  <div className="w-16 h-16 bg-white border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                    <Presentation size={28} className="text-integrare-blue" />
                  </div>
                  <span className="text-center text-sm">Regularização em Faixa de Fronteira</span>
                </div>
              </Link>
            </div>
          </div>
        )}

        {/* Janela de Estatísticas */}
        {activeWindow === "statistics" && !minimizedWindows.includes("statistics") && (
          <div className="absolute top-16 left-16 w-[calc(100%-8rem)] h-[calc(100%-8rem)] bg-gray-200 border-t-2 border-l-2 border-r-4 border-b-4 border-gray-400 shadow-lg">
            <div className="bg-integrare-blue text-white p-2 flex justify-between items-center">
              <span className="font-bold">Estatísticas</span>
              <div className="flex space-x-2">
                <button onClick={() => toggleMinimize("statistics")} className="focus:outline-none">
                  <Minus size={16} />
                </button>
                <button onClick={() => closeWindow("statistics")} className="focus:outline-none">
                  <X size={16} />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-white p-4 border-2 border-gray-400 mb-4">
                <h3 className="font-bold mb-2 text-integrare-blue">Dados do Mercado Digital Brasileiro</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-amber-50 border border-gray-300">
                    <p className="text-2xl font-bold text-integrare-blue">187.9M</p>
                    <p className="text-sm">Usuários de internet</p>
                  </div>
                  <div className="text-center p-3 bg-amber-50 border border-gray-300">
                    <p className="text-2xl font-bold text-integrare-blue">9h+</p>
                    <p className="text-sm">Tempo diário online</p>
                  </div>
                  <div className="text-center p-3 bg-amber-50 border border-gray-300">
                    <p className="text-2xl font-bold text-integrare-blue">R$85.7B</p>
                    <p className="text-sm">Mercado publicitário</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Barra de tarefas inferior estilo Windows */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-300 border-t-4 border-gray-400 p-1 flex space-x-2">
        <button
          className={`px-3 py-1 text-sm font-bold ${activeWindow === "main" ? "bg-white border-t-2 border-l-2 border-r-2 border-b-2 border-gray-500" : "bg-gray-200 border-2 border-gray-400"}`}
          onClick={() => openWindow("main")}
        >
          Grupo Principal
        </button>

        {(activeWindow === "articles" || minimizedWindows.includes("articles")) && (
          <button
            className={`px-3 py-1 text-sm font-bold ${activeWindow === "articles" ? "bg-white border-t-2 border-l-2 border-r-2 border-b-2 border-gray-500" : "bg-gray-200 border-2 border-gray-400"}`}
            onClick={() => openWindow("articles")}
          >
            Artigos
          </button>
        )}

        {(activeWindow === "presentations" || minimizedWindows.includes("presentations")) && (
          <button
            className={`px-3 py-1 text-sm font-bold ${activeWindow === "presentations" ? "bg-white border-t-2 border-l-2 border-r-2 border-b-2 border-gray-500" : "bg-gray-200 border-2 border-gray-400"}`}
            onClick={() => openWindow("presentations")}
          >
            Apresentações
          </button>
        )}

        {(activeWindow === "statistics" || minimizedWindows.includes("statistics")) && (
          <button
            className={`px-3 py-1 text-sm font-bold ${activeWindow === "statistics" ? "bg-white border-t-2 border-l-2 border-r-2 border-b-2 border-gray-500" : "bg-gray-200 border-2 border-gray-400"}`}
            onClick={() => openWindow("statistics")}
          >
            Estatísticas
          </button>
        )}

        <div className="ml-auto flex items-center">
          <span className="text-xs mr-2">12:34</span>
          <Link href="/" className="text-xs bg-gray-200 px-2 py-1 border-2 border-gray-400 hover:bg-white">
            Sair
          </Link>
        </div>
      </div>
    </div>
  )
}
