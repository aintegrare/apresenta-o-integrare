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
          <Color name="Integrare Blue" hex="#4b7bb5" className="bg-[#4b7bb5]" />
          <Color name="Integrare Blue Dark" hex="#3d649e" className="bg-[#3d649e]" />
          <Color name="Integrare Blue Light" hex="#6b91c1" className="bg-[#6b91c1]" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Cores Secundárias</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Color name="Integrare Blue Mid" hex="#4072b0" className="bg-[#4072b0]" />
          <Color name="Integrare Blue Lighter" hex="#527eb7" className="bg-[#527eb7]" />
          <Color name="Off White" hex="#f2f1ef" className="bg-[#f2f1ef]" textClass="text-gray-800" />
          <Color name="Accent Yellow" hex="#FFF8E1" className="bg-[#FFF8E1]" textClass="text-gray-800" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Variações de Azul</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Color name="Blue 100" hex="#E6EEF7" className="bg-[#E6EEF7]" textClass="text-gray-800" />
          <Color name="Blue 200" hex="#C0D4EA" className="bg-[#C0D4EA]" textClass="text-gray-800" />
          <Color name="Blue 300" hex="#9BBADE" className="bg-[#9BBADE]" textClass="text-gray-800" />
          <Color name="Blue 400" hex="#769FD1" className="bg-[#769FD1]" />
          <Color name="Blue 500" hex="#4b7bb5" className="bg-[#4b7bb5]" />
          <Color name="Blue 600" hex="#3d649e" className="bg-[#3d649e]" />
          <Color name="Blue 700" hex="#2F4D7A" className="bg-[#2F4D7A]" />
          <Color name="Blue 800" hex="#213657" className="bg-[#213657]" />
          <Color name="Blue 900" hex="#142033" className="bg-[#142033]" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Cores de Acento</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Color name="Amarelo Claro" hex="#FFF8E1" className="bg-[#FFF8E1]" textClass="text-gray-800" />
          <Color name="Amarelo Médio" hex="#FFE082" className="bg-[#FFE082]" textClass="text-gray-800" />
          <Color name="Amarelo Escuro" hex="#FFD54F" className="bg-[#FFD54F]" textClass="text-gray-800" />
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

      <div>
        <h3 className="text-lg font-semibold mb-3">Cores de Estado</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Color name="Success" hex="#10B981" className="bg-[#10B981]" />
          <Color name="Warning" hex="#F59E0B" className="bg-[#F59E0B]" />
          <Color name="Error" hex="#EF4444" className="bg-[#EF4444]" />
          <Color name="Info" hex="#3B82F6" className="bg-[#3B82F6]" />
        </div>
      </div>
    </div>
  )
}
