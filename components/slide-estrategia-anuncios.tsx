import SlideLayout from "./slide-layout"
import Image from "next/image"
import { BookOpen, Users, Target } from "lucide-react"

export default function SlideEstrategiaAnuncios() {
  return (
    <SlideLayout title="Estratégia de Funil para Anúncios">
      <div className="max-w-5xl mx-auto h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Anúncio Educativo - Topo do Funil */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="bg-blue-50 p-2 md:p-3 flex items-center">
              <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-[#002B5B] mr-2" />
              <h3 className="text-sm md:text-base font-medium text-[#002B5B]">Educativo</h3>
            </div>
            <div className="p-3 md:p-4">
              <div className="bg-gray-100 rounded-lg p-2 md:p-3 mb-3 md:mb-4 relative h-32 md:h-40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-2 md:p-4 bg-white/90 rounded-lg shadow-sm max-w-[90%]">
                    <h4 className="font-bold text-[#002B5B] mb-1 md:mb-2 text-xs md:text-sm">VOCÊ SABIA?</h4>
                    <p className="text-xs md:text-sm text-gray-700">
                      Propriedades rurais em faixa de fronteira precisam ser regularizadas até outubro de 2025
                    </p>
                    <div className="mt-2 flex justify-center">
                      <Image
                        src="/images/logo_medeiros_vertical.png"
                        alt="Medeiros Advogados"
                        width={60}
                        height={60}
                        className="h-6 md:h-8 w-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-1 md:space-y-2">
                <h4 className="font-medium text-gray-800 text-xs md:text-sm">Objetivo: Conscientização</h4>
                <p className="text-xs text-gray-600">
                  Informar o público sobre a existência do problema e do prazo legal, sem pressão de venda.
                </p>
                <ul className="text-xs text-gray-600 mt-1 md:mt-2 space-y-0.5 md:space-y-1">
                  <li>• Foco em dados e informações relevantes</li>
                  <li>• Tom educativo e informativo</li>
                  <li>• Call-to-action suave: "Saiba mais"</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Anúncio Engajativo - Meio do Funil */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="bg-amber-50 p-2 md:p-3 flex items-center">
              <Users className="w-4 h-4 md:w-5 md:h-5 text-amber-600 mr-2" />
              <h3 className="text-sm md:text-base font-medium text-amber-600">Engajativo</h3>
            </div>
            <div className="p-3 md:p-4">
              <div className="bg-gray-100 rounded-lg p-2 md:p-3 mb-3 md:mb-4 relative h-32 md:h-40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-2 md:p-4 bg-white/90 rounded-lg shadow-sm max-w-[90%]">
                    <h4 className="font-bold text-amber-600 mb-1 md:mb-2 text-xs md:text-sm">ENTENDA OS RISCOS</h4>
                    <p className="text-xs md:text-sm text-gray-700">
                      "Minha família quase perdeu terras que estão conosco há três gerações. A equipe do Medeiros nos
                      salvou."
                    </p>
                    <p className="text-[10px] md:text-xs italic mt-1">- Maria L., Foz do Iguaçu/PR</p>
                    <div className="mt-1 md:mt-2">
                      <button className="bg-amber-500 text-white text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded">
                        Ver depoimento completo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-1 md:space-y-2">
                <h4 className="font-medium text-gray-800 text-xs md:text-sm">Objetivo: Consideração</h4>
                <p className="text-xs text-gray-600">
                  Criar conexão emocional através de histórias reais e demonstrar a solução para o problema.
                </p>
                <ul className="text-xs text-gray-600 mt-1 md:mt-2 space-y-0.5 md:space-y-1">
                  <li>• Uso de depoimentos e casos reais</li>
                  <li>• Tom emocional e relacional</li>
                  <li>• Call-to-action moderado: "Ver depoimento"</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Anúncio Convertivo - Fundo do Funil */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="bg-red-50 p-2 md:p-3 flex items-center">
              <Target className="w-4 h-4 md:w-5 md:h-5 text-red-600 mr-2" />
              <h3 className="text-sm md:text-base font-medium text-red-600">Convertivo</h3>
            </div>
            <div className="p-3 md:p-4">
              <div className="bg-gray-100 rounded-lg p-2 md:p-3 mb-3 md:mb-4 relative h-32 md:h-40">
                <div
                  className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&w=1000&q=80')",
                    opacity: "0.3",
                  }}
                >
                  <div className="text-center p-2 md:p-4 bg-white/90 rounded-lg shadow-sm max-w-[90%]">
                    <div className="text-red-600 font-bold mb-0.5 md:mb-1 text-[10px] md:text-xs">
                      PRAZO FINAL SE APROXIMANDO
                    </div>
                    <h4 className="font-bold text-[#002B5B] mb-1 md:mb-2 text-xs md:text-sm">REGULARIZE AGORA</h4>
                    <p className="text-xs md:text-sm text-gray-700 mb-1 md:mb-2">
                      Consulta inicial gratuita e sem compromisso
                    </p>
                    <div className="flex justify-center space-x-2">
                      <button className="bg-red-600 text-white text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded font-bold">
                        AGENDAR CONSULTA
                      </button>
                    </div>
                    <p className="text-[10px] md:text-xs mt-1 md:mt-2">
                      Medeiros Advogados - 97% de sucesso em regularizações
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-1 md:space-y-2">
                <h4 className="font-medium text-gray-800 text-xs md:text-sm">Objetivo: Conversão</h4>
                <p className="text-xs text-gray-600">
                  Criar senso de urgência e oferecer solução imediata com baixa barreira de entrada.
                </p>
                <ul className="text-xs text-gray-600 mt-1 md:mt-2 space-y-0.5 md:space-y-1">
                  <li>• Ênfase no prazo limite e consequências</li>
                  <li>• Tom urgente e direto</li>
                  <li>• Call-to-action forte: "Agendar consulta"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-6 bg-gray-50 p-3 md:p-5 rounded-lg">
          <h3 className="text-sm md:text-lg font-medium text-[#002B5B] mb-2 md:mb-3 text-center">
            Estratégia de Funil Integrada
          </h3>
          <p className="text-xs md:text-sm text-gray-600 text-center mb-2 md:mb-4">
            Nossa abordagem segue o cliente em toda sua jornada de decisão, desde a conscientização inicial até a
            conversão final, com mensagens adaptadas a cada estágio.
          </p>
          <div className="flex justify-center">
            <div className="relative w-48 md:w-64 h-36 md:h-48">
              <div className="absolute top-0 left-0 right-0 h-8 md:h-12 bg-blue-100 rounded-t-lg flex items-center justify-center">
                <p className="text-xs md:text-sm font-medium text-[#002B5B]">Conscientização</p>
              </div>
              <div className="absolute top-8 md:top-12 left-6 md:left-8 right-6 md:right-8 h-8 md:h-12 bg-amber-100 flex items-center justify-center">
                <p className="text-xs md:text-sm font-medium text-amber-600">Consideração</p>
              </div>
              <div className="absolute top-16 md:top-24 left-12 md:left-16 right-12 md:right-16 h-8 md:h-12 bg-red-100 rounded-b-lg flex items-center justify-center">
                <p className="text-xs md:text-sm font-medium text-red-600">Conversão</p>
              </div>
              <div className="absolute top-28 md:top-40 left-0 right-0 text-center">
                <p className="text-[10px] md:text-xs text-gray-500">Mensagens adaptadas a cada estágio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
