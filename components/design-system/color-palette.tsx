"use client"

import { useState } from "react"
import { Copy } from "lucide-react"

interface ColorProps {
  name: string
  hex: string
  className?: string
  textClass?: string
}

const Color = ({ name, hex, className, textClass = "text-white" }: ColorProps) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={`rounded-lg p-4 flex flex-col h-24 relative group cursor-pointer ${className}`}
      onClick={copyToClipboard}
    >
      <div className="flex justify-between items-start">
        <span className={`font-medium ${textClass}`}>{name}</span>
        <Copy className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${textClass}`} />
      </div>
      <span className={`mt-auto ${textClass}`}>{hex}</span>
      {copied && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <span className="text-white font-medium">Copiado!</span>
        </div>
      )}
    </div>
  )
}

export default function ColorPalette() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Cores Primárias</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Color name="Integrare Blue" hex="#0F5B94" className="bg-[#0F5B94]" />
          <Color name="Integrare Blue Light" hex="#4b7bb5" className="bg-[#4b7bb5]" />
          <Color name="Integrare Blue Dark" hex="#3d649e" className="bg-[#3d649e]" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Cores Secundárias</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Color name="Integrare Blue Mid" hex="#4072b0" className="bg-[#4072b0]" />
          <Color name="Integrare Blue Pale" hex="#6b91c1" className="bg-[#6b91c1]" />
          <Color name="Integrare Blue Lighter" hex="#527eb7" className="bg-[#527eb7]" />
          <Color name="Off White" hex="#f2f1ef" className="bg-[#f2f1ef]" textClass="text-gray-800" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Cores de Acento</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Color name="Amarelo Claro" hex="#FFF8E1" className="bg-[#FFF8E1]" textClass="text-gray-800" />
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">Diretrizes de Uso</h4>
            <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
              <li>Use como cor de destaque sutil</li>
              <li>Ideal para fundos de seções importantes</li>
              <li>Não use como cor predominante</li>
              <li>Combine com os tons de azul principal</li>
            </ul>
          </div>
          <div className="p-4 bg-[#FFF8E1] rounded-lg border border-gray-200">
            <div className="flex items-center mb-2">
              <span className="h-3 w-3 rounded-full bg-[#0F5B94] mr-2"></span>
              <span className="text-sm text-gray-800 font-medium">Combinação Recomendada</span>
            </div>
            <p className="text-sm text-gray-700">
              O amarelo claro funciona bem como fundo sutil para destacar conteúdos importantes, com elementos em azul
              em primeiro plano.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Tons Neutros</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <Color name="White" hex="#FFFFFF" className="bg-white border border-gray-200" textClass="text-gray-800" />
          <Color name="Gray 100" hex="#F3F4F6" className="bg-gray-100" textClass="text-gray-800" />
          <Color name="Gray 300" hex="#D1D5DB" className="bg-gray-300" textClass="text-gray-800" />
          <Color name="Gray 500" hex="#6B7280" className="bg-gray-500" />
          <Color name="Gray 700" hex="#374151" className="bg-gray-700" />
          <Color name="Black" hex="#111827" className="bg-gray-900" />
        </div>
      </div>
    </div>
  )
}
