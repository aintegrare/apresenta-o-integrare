import SlideLayout from "./slide-layout"
import Image from "next/image"
import { FileText, Target, Users } from "lucide-react"

export default function SlideAnuncios() {
  return (
    <SlideLayout title="Exemplos de Anúncios">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Anúncio Principal */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-2 bg-blue-50">
              <h3 className="text-sm font-medium text-[#002B5B] flex items-center">
                <Target className="w-4 h-4 text-[#002B5B] mr-2" />
                Anúncio Principal
              </h3>
            </div>
            <div className="p-3">
              <div className="relative h-64 w-full mb-2">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Anúncio Medeiros Advogados"
                  alt="Anúncio Medeiros Advogados"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-gray-600">
                Anúncio com vista aérea de propriedades rurais, destacando o prazo final e a necessidade de
                regularização.
              </p>
            </div>
          </div>

          {/* Coluna de Variações e Estratégia */}
          <div className="space-y-4">
            {/* Variações de Anúncios */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-2 bg-amber-50">
                <h3 className="text-sm font-medium text-amber-600 flex items-center">
                  <Users className="w-4 h-4 text-amber-600 mr-2" />
                  Variações de Anúncios
                </h3>
              </div>
              <div className="p-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="relative h-32 mb-1">
                      <Image
                        src="/placeholder.svg?height=200&width=300&text=Anúncio de Urgência"
                        alt="Anúncio de Urgência"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-xs text-gray-600">Foco na urgência e prazo final</p>
                  </div>
                  <div>
                    <div className="relative h-32 mb-1">
                      <Image
                        src="/placeholder.svg?height=200&width=300&text=Anúncio com Foco Visual"
                        alt="Anúncio com Foco Visual"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-xs text-gray-600">Conexão emocional com o público</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Estratégia de Anúncios */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-2 bg-blue-50">
                <h3 className="text-sm font-medium text-[#002B5B] flex items-center">
                  <FileText className="w-4 h-4 text-[#002B5B] mr-2" />
                  Estratégia de Anúncios
                </h3>
              </div>
              <div className="p-3">
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <p className="font-medium text-xs text-gray-700">Consciência</p>
                    <p className="text-xs text-gray-600">Alertas sobre o prazo final</p>
                  </div>
                  <div>
                    <p className="font-medium text-xs text-gray-700">Consideração</p>
                    <p className="text-xs text-gray-600">Conteúdo educativo</p>
                  </div>
                  <div>
                    <p className="font-medium text-xs text-gray-700">Conversão</p>
                    <p className="text-xs text-gray-600">Chamadas para ação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-gray-50 p-3 rounded-lg">
          <h3 className="text-sm font-medium text-[#002B5B] mb-2">Elementos-chave dos anúncios:</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-xs">
            <div className="bg-white p-2 rounded border border-gray-100">
              <p className="font-medium text-gray-700">Prazo final destacado</p>
              <p className="text-gray-600">Criando senso de urgência</p>
            </div>
            <div className="bg-white p-2 rounded border border-gray-100">
              <p className="font-medium text-gray-700">Imagens de propriedades</p>
              <p className="text-gray-600">Conexão com o público-alvo</p>
            </div>
            <div className="bg-white p-2 rounded border border-gray-100">
              <p className="font-medium text-gray-700">Ícones informativos</p>
              <p className="text-gray-600">Comunicação visual eficiente</p>
            </div>
            <div className="bg-white p-2 rounded border border-gray-100">
              <p className="font-medium text-gray-700">Call-to-action claro</p>
              <p className="text-gray-600">Direcionamento para conversão</p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
