"use client"

import type React from "react"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface TokenProps {
  name: string
  value: string
  category: string
  preview?: React.ReactNode
}

const Token = ({ name, value, category, preview }: TokenProps) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-gray-50">{preview}</div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-1">
          <span className="font-medium text-gray-900">{name}</span>
          <button
            onClick={copyToClipboard}
            className="text-gray-500 hover:text-integrare-blue focus:outline-none"
            aria-label={`Copiar valor ${value}`}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
        <span className="text-sm text-gray-500">{category}</span>
        <div className="mt-2 bg-gray-100 rounded px-2 py-1 font-mono text-sm">{value}</div>
      </div>
    </div>
  )
}

export default function DesignTokens() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Tokens de Cor</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Token
            name="color-primary"
            value="#0F5B94"
            category="Cor Primária"
            preview={<div className="h-16 bg-[#0F5B94] rounded"></div>}
          />
          <Token
            name="color-primary-light"
            value="#4b7bb5"
            category="Cor Primária - Clara"
            preview={<div className="h-16 bg-[#4b7bb5] rounded"></div>}
          />
          <Token
            name="color-primary-dark"
            value="#3d649e"
            category="Cor Primária - Escura"
            preview={<div className="h-16 bg-[#3d649e] rounded"></div>}
          />
          <Token
            name="color-accent"
            value="#FFF8E1"
            category="Cor de Acento"
            preview={<div className="h-16 bg-[#FFF8E1] rounded"></div>}
          />
          <Token
            name="color-neutral-light"
            value="#f2f1ef"
            category="Cor Neutra - Clara"
            preview={<div className="h-16 bg-[#f2f1ef] rounded"></div>}
          />
          <Token
            name="color-neutral-dark"
            value="#374151"
            category="Cor Neutra - Escura"
            preview={<div className="h-16 bg-[#374151] rounded"></div>}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Tokens de Tipografia</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Token
            name="font-family-primary"
            value="'Poppins', sans-serif"
            category="Família de Fonte - Primária"
            preview={<p className="font-poppins text-xl">Poppins - Aa Bb Cc 123</p>}
          />
          <Token
            name="font-family-secondary"
            value="'Inter', sans-serif"
            category="Família de Fonte - Secundária"
            preview={<p className="font-inter text-xl">Inter - Aa Bb Cc 123</p>}
          />
          <Token
            name="font-size-heading-1"
            value="2.5rem (40px)"
            category="Tamanho de Fonte - Título 1"
            preview={<p className="text-4xl font-poppins font-semibold">Título 1</p>}
          />
          <Token
            name="font-size-heading-2"
            value="2rem (32px)"
            category="Tamanho de Fonte - Título 2"
            preview={<p className="text-3xl font-poppins font-semibold">Título 2</p>}
          />
          <Token
            name="font-size-heading-3"
            value="1.5rem (24px)"
            category="Tamanho de Fonte - Título 3"
            preview={<p className="text-2xl font-poppins font-medium">Título 3</p>}
          />
          <Token
            name="font-size-body"
            value="1rem (16px)"
            category="Tamanho de Fonte - Corpo"
            preview={<p className="text-base font-inter">Texto de corpo</p>}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Tokens de Espaçamento</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Token
            name="spacing-xs"
            value="0.25rem (4px)"
            category="Espaçamento - Extra Pequeno"
            preview={
              <div className="flex items-center justify-center bg-gray-100 h-16">
                <div className="bg-integrare-blue p-1 rounded">
                  <div className="bg-white h-4 w-4 rounded"></div>
                </div>
              </div>
            }
          />
          <Token
            name="spacing-sm"
            value="0.5rem (8px)"
            category="Espaçamento - Pequeno"
            preview={
              <div className="flex items-center justify-center bg-gray-100 h-16">
                <div className="bg-integrare-blue p-2 rounded">
                  <div className="bg-white h-4 w-4 rounded"></div>
                </div>
              </div>
            }
          />
          <Token
            name="spacing-md"
            value="1rem (16px)"
            category="Espaçamento - Médio"
            preview={
              <div className="flex items-center justify-center bg-gray-100 h-16">
                <div className="bg-integrare-blue p-4 rounded">
                  <div className="bg-white h-4 w-4 rounded"></div>
                </div>
              </div>
            }
          />
          <Token
            name="spacing-lg"
            value="1.5rem (24px)"
            category="Espaçamento - Grande"
            preview={
              <div className="flex items-center justify-center bg-gray-100 h-16">
                <div className="bg-integrare-blue p-6 rounded">
                  <div className="bg-white h-4 w-4 rounded"></div>
                </div>
              </div>
            }
          />
          <Token
            name="spacing-xl"
            value="2rem (32px)"
            category="Espaçamento - Extra Grande"
            preview={
              <div className="flex items-center justify-center bg-gray-100 h-16">
                <div className="bg-integrare-blue p-8 rounded">
                  <div className="bg-white h-4 w-4 rounded"></div>
                </div>
              </div>
            }
          />
          <Token
            name="spacing-2xl"
            value="3rem (48px)"
            category="Espaçamento - 2x Extra Grande"
            preview={
              <div className="flex items-center justify-center bg-gray-100 h-16">
                <div className="bg-integrare-blue p-12 rounded">
                  <div className="bg-white h-4 w-4 rounded"></div>
                </div>
              </div>
            }
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Tokens de Borda</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Token
            name="border-radius-sm"
            value="0.125rem (2px)"
            category="Raio de Borda - Pequeno"
            preview={<div className="h-16 w-full bg-gray-100 rounded-sm"></div>}
          />
          <Token
            name="border-radius-md"
            value="0.25rem (4px)"
            category="Raio de Borda - Médio"
            preview={<div className="h-16 w-full bg-gray-100 rounded"></div>}
          />
          <Token
            name="border-radius-lg"
            value="0.5rem (8px)"
            category="Raio de Borda - Grande"
            preview={<div className="h-16 w-full bg-gray-100 rounded-lg"></div>}
          />
          <Token
            name="border-radius-xl"
            value="1rem (16px)"
            category="Raio de Borda - Extra Grande"
            preview={<div className="h-16 w-full bg-gray-100 rounded-xl"></div>}
          />
          <Token
            name="border-radius-full"
            value="9999px"
            category="Raio de Borda - Completo"
            preview={<div className="h-16 w-16 mx-auto bg-gray-100 rounded-full"></div>}
          />
          <Token
            name="border-width"
            value="1px"
            category="Largura de Borda - Padrão"
            preview={<div className="h-16 w-full bg-white border border-gray-300 rounded"></div>}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Tokens de Sombra</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Token
            name="shadow-sm"
            value="0 1px 2px 0 rgba(0, 0, 0, 0.05)"
            category="Sombra - Pequena"
            preview={<div className="h-16 w-full bg-white shadow-sm rounded"></div>}
          />
          <Token
            name="shadow-md"
            value="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            category="Sombra - Média"
            preview={<div className="h-16 w-full bg-white shadow-md rounded"></div>}
          />
          <Token
            name="shadow-lg"
            value="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            category="Sombra - Grande"
            preview={<div className="h-16 w-full bg-white shadow-lg rounded"></div>}
          />
          <Token
            name="shadow-xl"
            value="0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            category="Sombra - Extra Grande"
            preview={<div className="h-16 w-full bg-white shadow-xl rounded"></div>}
          />
          <Token
            name="shadow-inner"
            value="inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)"
            category="Sombra - Interna"
            preview={<div className="h-16 w-full bg-white shadow-inner rounded"></div>}
          />
          <Token
            name="shadow-none"
            value="none"
            category="Sombra - Nenhuma"
            preview={<div className="h-16 w-full bg-white border border-gray-200 rounded"></div>}
          />
        </div>
      </div>
    </div>
  )
}
