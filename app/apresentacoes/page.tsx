"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft, Presentation } from "lucide-react"

export default function Apresentacoes() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const apresentacoes = [
    {
      id: "institucional",
      title: "Apresentação Institucional",
      description: "Conheça a Agência Integrare e nossos serviços.",
      path: "/apresentacao",
    },
    {
      id: "terceirizacao",
      title: "Terceirização em Condomínios",
      description: "Proposta de marketing para empresas de terceirização.",
      path: "/apresentacao-terceirizacao",
    },
    {
      id: "medeiros",
      title: "Regularização em Faixa de Fronteira",
      description: "Apresentação para o escritório Medeiros Advogados.",
      path: "/apresentacao-medeiros",
    },
    {
      id: "lins",
      title: "Instituição Lins Vasconcellos",
      description: "Proposta de marketing digital para a instituição.",
      path: "/apresentacao-lins",
    },
    {
      id: "design-system",
      title: "Design System",
      description: "Apresentação do sistema de design da Integrare.",
      path: "/design-system-slides",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/logo-integrare.png"
                  alt="Agência Integrare"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-medium text-integrare-blue">Integrare</span>
              </div>
            </Link>
          </div>
          <h1 className="text-lg font-semibold text-gray-700">Apresentações</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Link href="/" className="flex items-center text-integrare-blue hover:underline">
              <ArrowLeft size={16} className="mr-2" />
              Voltar para o Dashboard
            </Link>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-integrare-blue mb-4">Apresentações</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Acesse nossas apresentações sobre marketing digital, propostas de serviços e materiais institucionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apresentacoes.map((apresentacao) => (
              <Link
                key={apresentacao.id}
                href={apresentacao.path}
                className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200"
                onMouseEnter={() => setHoveredCard(apresentacao.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 transition-transform duration-300 ${
                        hoveredCard === apresentacao.id ? "scale-110" : ""
                      }`}
                    >
                      <Presentation
                        className={`w-6 h-6 text-integrare-blue transition-all duration-300 ${
                          hoveredCard === apresentacao.id ? "scale-110" : ""
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{apresentacao.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{apresentacao.description}</p>
                  <div className="flex items-center text-integrare-blue font-medium">
                    Ver Apresentação
                    <ArrowRight
                      className={`ml-2 transition-transform duration-300 ${
                        hoveredCard === apresentacao.id ? "translate-x-1" : ""
                      }`}
                      size={18}
                    />
                  </div>
                </div>
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-integrare-blue transition-all duration-300 ${
                    hoveredCard === apresentacao.id ? "w-full" : "w-0"
                  }`}
                ></div>
              </Link>
            ))}
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
