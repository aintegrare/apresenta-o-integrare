"use client"

import { AlertTriangle, Check } from "lucide-react"

export default function AccentColorExamples() {
  return (
    <div className="space-y-8">
      <h3 className="text-lg font-semibold">Exemplos de Uso do Amarelo Claro</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Exemplo correto 1 */}
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <div className="p-3 bg-green-100 flex items-center">
            <Check className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-800 font-medium">Uso Correto</span>
          </div>
          <div className="p-5 bg-white">
            <div className="bg-[#FFF8E1] p-4 rounded-lg mb-4">
              <h4 className="text-[#0F5B94] font-medium">Destaque Importante</h4>
              <p className="text-gray-700 text-sm">
                Esta seção usa o amarelo claro como fundo para destacar uma informação importante, mantendo o azul como
                cor principal do texto.
              </p>
            </div>
            <div className="bg-white p-4 border border-gray-200 rounded-lg">
              <p className="text-gray-700 text-sm">
                Conteúdo regular do site com fundo branco e texto em tons neutros para leitura confortável.
              </p>
            </div>
          </div>
        </div>

        {/* Exemplo incorreto 1 */}
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <div className="p-3 bg-red-100 flex items-center">
            <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-800 font-medium">Uso Incorreto</span>
          </div>
          <div className="p-5 bg-[#FFF8E1]">
            <div className="bg-[#FFF8E1] border border-yellow-200 p-4 rounded-lg mb-4">
              <h4 className="text-yellow-600 font-medium">Uso Excessivo</h4>
              <p className="text-yellow-800 text-sm">
                Este exemplo usa o amarelo claro em excesso, como cor de fundo da página e também dos elementos,
                tornando-se cansativo visualmente.
              </p>
            </div>
            <div className="bg-[#FFF8E1] border border-yellow-200 p-4 rounded-lg">
              <p className="text-yellow-800 text-sm">
                Mais conteúdo com fundo amarelo claro, sem o devido contraste com o resto da página.
              </p>
            </div>
          </div>
        </div>

        {/* Exemplo correto 2 */}
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <div className="p-3 bg-green-100 flex items-center">
            <Check className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-800 font-medium">Uso Correto</span>
          </div>
          <div className="p-5 bg-white">
            <div className="mb-4">
              <h3 className="text-[#0F5B94] text-lg font-medium mb-2">Serviços da Agência</h3>
              <p className="text-gray-600">Conheça nossos principais serviços de marketing digital.</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white border border-gray-200 p-3 rounded-lg">
                <h5 className="text-[#0F5B94] font-medium">Branding</h5>
                <p className="text-xs text-gray-600">Identidade visual</p>
              </div>
              <div className="bg-[#FFF8E1] border border-gray-200 p-3 rounded-lg">
                <h5 className="text-[#0F5B94] font-medium">Social Media</h5>
                <p className="text-xs text-gray-600">Gerenciamento de redes</p>
              </div>
              <div className="bg-white border border-gray-200 p-3 rounded-lg">
                <h5 className="text-[#0F5B94] font-medium">SEO</h5>
                <p className="text-xs text-gray-600">Otimização para buscas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Exemplo incorreto 2 */}
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <div className="p-3 bg-red-100 flex items-center">
            <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-800 font-medium">Uso Incorreto</span>
          </div>
          <div className="p-5 bg-white">
            <div className="mb-4">
              <h3 className="text-yellow-500 text-lg font-medium mb-2">Serviços da Agência</h3>
              <p className="text-yellow-600">Conheça nossos principais serviços de marketing digital.</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#FFF8E1] border border-yellow-300 p-3 rounded-lg">
                <h5 className="text-yellow-600 font-medium">Branding</h5>
                <p className="text-xs text-yellow-700">Identidade visual</p>
              </div>
              <div className="bg-[#FFF8E1] border border-yellow-300 p-3 rounded-lg">
                <h5 className="text-yellow-600 font-medium">Social Media</h5>
                <p className="text-xs text-yellow-700">Gerenciamento de redes</p>
              </div>
              <div className="bg-[#FFF8E1] border border-yellow-300 p-3 rounded-lg">
                <h5 className="text-yellow-600 font-medium">SEO</h5>
                <p className="text-xs text-yellow-700">Otimização para buscas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
