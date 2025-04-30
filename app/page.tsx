"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, FileText, Presentation, BarChart } from "lucide-react"

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Botão para o Artigo */}
            <Link
              href="/artigo"
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200"
              onMouseEnter={() => setHoveredButton("artigo")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="p-8">
                <div
                  className={`w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 transition-transform duration-300 ${
                    hoveredButton === "artigo" ? "scale-110" : ""
                  }`}
                >
                  <FileText
                    className={`w-8 h-8 text-integrare-blue transition-all duration-300 ${
                      hoveredButton === "artigo" ? "scale-110" : ""
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Panorama do Mercado Digital</h3>
                <p className="text-gray-600 mb-6">Análise aprofundada do mercado digital brasileiro.</p>
                <div className="flex items-center text-integrare-blue font-medium">
                  Acessar Artigo
                  <ArrowRight
                    className={`ml-2 transition-transform duration-300 ${
                      hoveredButton === "artigo" ? "translate-x-1" : ""
                    }`}
                    size={18}
                  />
                </div>
              </div>
              <div
                className={`absolute bottom-0 left-0 h-1 bg-integrare-blue transition-all duration-300 ${
                  hoveredButton === "artigo" ? "w-full" : "w-0"
                }`}
              ></div>
            </Link>

            {/* Botão para a Apresentação */}
            <Link
              href="/apresentacao"
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200"
              onMouseEnter={() => setHoveredButton("apresentacao")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="p-8">
                <div
                  className={`w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 transition-transform duration-300 ${
                    hoveredButton === "apresentacao" ? "scale-110" : ""
                  }`}
                >
                  <Presentation
                    className={`w-8 h-8 text-integrare-blue transition-all duration-300 ${
                      hoveredButton === "apresentacao" ? "scale-110" : ""
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Apresentação Institucional</h3>
                <p className="text-gray-600 mb-6">Conheça a Agência Integrare e nossos serviços.</p>
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

            {/* Botão para a Interface Retrô */}
            <Link
              href="/retro"
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200"
              onMouseEnter={() => setHoveredButton("retro")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="p-8">
                <div
                  className={`w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 transition-transform duration-300 ${
                    hoveredButton === "retro" ? "scale-110" : ""
                  }`}
                >
                  <div className="w-8 h-8 bg-gray-200 border-2 border-integrare-blue flex items-center justify-center">
                    <span className="text-integrare-blue font-bold text-xs">3.11</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Interface Retrô</h3>
                <p className="text-gray-600 mb-6">Experimente nossa interface inspirada no Windows 3.11.</p>
                <div className="flex items-center text-integrare-blue font-medium">
                  Acessar Interface
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
          </div>

          {/* Estatísticas */}
          <div className="mt-16 bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-xl font-bold text-integrare-blue mb-6 flex items-center">
              <BarChart className="w-5 h-5 mr-2" />
              Dados do Mercado Digital Brasileiro
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <p className="text-3xl font-bold text-integrare-blue">187.9M</p>
                <p className="text-sm text-gray-600">Usuários de internet</p>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <p className="text-3xl font-bold text-integrare-blue">9h+</p>
                <p className="text-sm text-gray-600">Tempo diário online</p>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <p className="text-3xl font-bold text-integrare-blue">R$85.7B</p>
                <p className="text-sm text-gray-600">Mercado publicitário</p>
              </div>
            </div>
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
