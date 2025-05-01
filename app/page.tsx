"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
// Adicione o import do ícone Computer
import { ArrowRight, FileText, Presentation, Terminal, Computer } from "lucide-react"

export default function Dashboard() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/logo-integrare.png"
              alt="Agência Integrare"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-medium text-integrare-blue">Integrare</span>
          </div>
          <h1 className="text-lg font-semibold text-gray-700">Portal de Conteúdo</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-integrare-blue mb-4">Agência Integrare</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Acesse nossos materiais exclusivos sobre marketing digital, tendências de mercado e apresentação
              institucional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
            {/* Botão para a Interface Retrô */}
            <Link
              href="/retro"
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 aspect-square"
              onMouseEnter={() => setHoveredButton("retro")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="p-6 flex flex-col items-center justify-center h-full">
                <div
                  className={`w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 transition-transform duration-300 ${
                    hoveredButton === "retro" ? "scale-110" : ""
                  }`}
                >
                  <div className="w-8 h-8 bg-gray-200 border-2 border-integrare-blue flex items-center justify-center">
                    <span className="text-integrare-blue font-bold text-xs">3.11</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Interface Retrô</h3>
                <p className="text-gray-600 mb-4 text-center text-sm">
                  Experimente nossa interface inspirada no Windows 3.11.
                </p>
                <div className="flex items-center text-integrare-blue font-medium">
                  Acessar
                  <ArrowRight
                    className={`ml-2 transition-transform duration-300 ${
                      hoveredButton === "retro" ? "translate-x-1" : ""
                    }`}
                    size={18}
                  />
                </div>
              </div>
              <div
                className={`absolute bottom-0 left-0 h-1 bg-integrare-blue transition-all duration-300 ${
                  hoveredButton === "retro" ? "w-full" : "w-0"
                }`}
              ></div>
            </Link>

            {/* Botão para a Apresentação Retrô */}
            <Link
              href="/apresentacao-retro"
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 aspect-square"
              onMouseEnter={() => setHoveredButton("apresentacao-retro")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="p-6 flex flex-col items-center justify-center h-full">
                <div
                  className={`w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 transition-transform duration-300 ${
                    hoveredButton === "apresentacao-retro" ? "scale-110" : ""
                  }`}
                >
                  <Terminal
                    className={`w-8 h-8 text-integrare-blue transition-all duration-300 ${
                      hoveredButton === "apresentacao-retro" ? "scale-110" : ""
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Apresentação Retrô</h3>
                <p className="text-gray-600 mb-4 text-center text-sm">
                  Veja nossa apresentação no estilo DOS/Terminal.
                </p>
                <div className="flex items-center text-integrare-blue font-medium">
                  Ver Apresentação
                  <ArrowRight
                    className={`ml-2 transition-transform duration-300 ${
                      hoveredButton === "apresentacao-retro" ? "translate-x-1" : ""
                    }`}
                    size={18}
                  />
                </div>
              </div>
              <div
                className={`absolute bottom-0 left-0 h-1 bg-integrare-blue transition-all duration-300 ${
                  hoveredButton === "apresentacao-retro" ? "w-full" : "w-0"
                }`}
              ></div>
            </Link>

            {/* Botão para Windows 95 */}
            <Link
              href="/windows95"
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 aspect-square"
              onMouseEnter={() => setHoveredButton("windows95")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="p-6 flex flex-col items-center justify-center h-full">
                <div
                  className={`w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 transition-transform duration-300 ${
                    hoveredButton === "windows95" ? "scale-110" : ""
                  }`}
                >
                  <Computer
                    className={`w-8 h-8 text-integrare-blue transition-all duration-300 ${
                      hoveredButton === "windows95" ? "scale-110" : ""
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Windows 95</h3>
                <p className="text-gray-600 mb-4 text-center text-sm">
                  Experimente nossa interface inspirada no Windows 95.
                </p>
                <div className="flex items-center text-integrare-blue font-medium">
                  Acessar
                  <ArrowRight
                    className={`ml-2 transition-transform duration-300 ${
                      hoveredButton === "windows95" ? "translate-x-1" : ""
                    }`}
                    size={18}
                  />
                </div>
              </div>
              <div
                className={`absolute bottom-0 left-0 h-1 bg-integrare-blue transition-all duration-300 ${
                  hoveredButton === "windows95" ? "w-full" : "w-0"
                }`}
              ></div>
            </Link>

            {/* Botão para a Apresentação Institucional */}
            <Link
              href="/apresentacao"
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 aspect-square"
              onMouseEnter={() => setHoveredButton("apresentacao")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="p-6 flex flex-col items-center justify-center h-full">
                <div
                  className={`w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 transition-transform duration-300 ${
                    hoveredButton === "apresentacao" ? "scale-110" : ""
                  }`}
                >
                  <Presentation
                    className={`w-8 h-8 text-integrare-blue transition-all duration-300 ${
                      hoveredButton === "apresentacao" ? "scale-110" : ""
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Apresentação Institucional</h3>
                <p className="text-gray-600 mb-4 text-center text-sm">Conheça a Agência Integrare e nossos serviços.</p>
                <div className="flex items-center text-integrare-blue font-medium">
                  Ver Apresentação
                  <ArrowRight
                    className={`ml-2 transition-transform duration-300 ${
                      hoveredButton === "apresentacao" ? "translate-x-1" : ""
                    }`}
                    size={18}
                  />
                </div>
              </div>
              <div
                className={`absolute bottom-0 left-0 h-1 bg-integrare-blue transition-all duration-300 ${
                  hoveredButton === "apresentacao" ? "w-full" : "w-0"
                }`}
              ></div>
            </Link>

            {/* Botão para Apresentações */}
            <Link
              href="/apresentacoes"
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 aspect-square"
              onMouseEnter={() => setHoveredButton("apresentacoes")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="p-6 flex flex-col items-center justify-center h-full">
                <div
                  className={`w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 transition-transform duration-300 ${
                    hoveredButton === "apresentacoes" ? "scale-110" : ""
                  }`}
                >
                  <Presentation
                    className={`w-8 h-8 text-integrare-blue transition-all duration-300 ${
                      hoveredButton === "apresentacoes" ? "scale-110" : ""
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Apresentações</h3>
                <p className="text-gray-600 mb-4 text-center text-sm">Acesse todas as apresentações disponíveis.</p>
                <div className="flex items-center text-integrare-blue font-medium">
                  Ver Apresentações
                  <ArrowRight
                    className={`ml-2 transition-transform duration-300 ${
                      hoveredButton === "apresentacoes" ? "translate-x-1" : ""
                    }`}
                    size={18}
                  />
                </div>
              </div>
              <div
                className={`absolute bottom-0 left-0 h-1 bg-integrare-blue transition-all duration-300 ${
                  hoveredButton === "apresentacoes" ? "w-full" : "w-0"
                }`}
              ></div>
            </Link>

            {/* Botão para Artigos */}
            <Link
              href="/artigos"
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 aspect-square"
              onMouseEnter={() => setHoveredButton("artigos")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="p-6 flex flex-col items-center justify-center h-full">
                <div
                  className={`w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 transition-transform duration-300 ${
                    hoveredButton === "artigos" ? "scale-110" : ""
                  }`}
                >
                  <FileText
                    className={`w-8 h-8 text-integrare-blue transition-all duration-300 ${
                      hoveredButton === "artigos" ? "scale-110" : ""
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Artigos</h3>
                <p className="text-gray-600 mb-4 text-center text-sm">Acesse nossos artigos sobre marketing digital.</p>
                <div className="flex items-center text-integrare-blue font-medium">
                  Ler Artigos
                  <ArrowRight
                    className={`ml-2 transition-transform duration-300 ${
                      hoveredButton === "artigos" ? "translate-x-1" : ""
                    }`}
                    size={18}
                  />
                </div>
              </div>
              <div
                className={`absolute bottom-0 left-0 h-1 bg-integrare-blue transition-all duration-300 ${
                  hoveredButton === "artigos" ? "w-full" : "w-0"
                }`}
              ></div>
            </Link>

            {/* Botão para Apresentação Detalhada */}
            <Link
              href="/apresentacao-detalhada"
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 aspect-square"
              onMouseEnter={() => setHoveredButton("apresentacao-detalhada")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="p-6 flex flex-col items-center justify-center h-full">
                <div
                  className={`w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 transition-transform duration-300 ${
                    hoveredButton === "apresentacao-detalhada" ? "scale-110" : ""
                  }`}
                >
                  <FileText
                    className={`w-8 h-8 text-integrare-blue transition-all duration-300 ${
                      hoveredButton === "apresentacao-detalhada" ? "scale-110" : ""
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Apresentação Detalhada</h3>
                <p className="text-gray-600 mb-4 text-center text-sm">
                  Conheça em detalhes nossos serviços e metodologia.
                </p>
                <div className="flex items-center text-integrare-blue font-medium">
                  Ver Detalhes
                  <ArrowRight
                    className={`ml-2 transition-transform duration-300 ${
                      hoveredButton === "apresentacao-detalhada" ? "translate-x-1" : ""
                    }`}
                    size={18}
                  />
                </div>
              </div>
              <div
                className={`absolute bottom-0 left-0 h-1 bg-integrare-blue transition-all duration-300 ${
                  hoveredButton === "apresentacao-detalhada" ? "w-full" : "w-0"
                }`}
              ></div>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2025 Agência Integrare. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">contato@aintegrare.com.br</div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div className="text-sm text-gray-500">(44) 9999-8765</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
