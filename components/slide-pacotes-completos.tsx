import SlideLayout from "./slide-layout"
import { Check, Package } from "lucide-react"

export default function SlidePacotesCompletos() {
  return (
    <SlideLayout title="Pacotes Completos">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas que incluem todos os serviços de branding e desenvolvimento web em um único
            pacote integrado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-[#4b7bb5] p-5 text-white">
              <h3 className="text-xl font-poppins font-medium">Pacote Premium</h3>
              <p className="text-sm opacity-90 mt-1">Branding + Next.js com Turbopack</p>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-3xl font-bold text-[#4b7bb5]">R$ 6.700,00</span>
                  <p className="text-sm text-gray-500 mt-1">ou 3x de R$ 2.270,00</p>
                </div>
                <div className="bg-[#4b7bb5]/10 px-3 py-1 rounded text-[#4b7bb5] text-sm font-medium">Recomendado</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#4b7bb5] mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Criação de Marca Completa</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#4b7bb5] mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Manual de Marca Detalhado</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#4b7bb5] mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Estudo de Mercado Aprofundado</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#4b7bb5] mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Análise de Público-alvo</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#4b7bb5] mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Site em Next.js com Turbopack</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#4b7bb5] mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Hospedagem Premium (12 meses)</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-[#4b7bb5] mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Suporte Técnico Prioritário</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg text-sm">
                <div className="flex items-start">
                  <Package className="h-5 w-5 text-[#4b7bb5] mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-medium">Economia de até 80%</span> comparado ao valor de mercado de R$ 30.000
                    a R$ 40.000 para serviços similares.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gray-700 p-5 text-white">
              <h3 className="text-xl font-poppins font-medium">Pacote Padrão</h3>
              <p className="text-sm opacity-90 mt-1">Branding + Astro e React</p>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-3xl font-bold text-gray-700">R$ 5.270,00</span>
                  <p className="text-sm text-gray-500 mt-1">ou 3x de R$ 1.770,00</p>
                </div>
                <div className="bg-gray-100 px-3 py-1 rounded text-gray-600 text-sm font-medium">Econômico</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gray-700 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Criação de Marca Completa</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gray-700 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Manual de Marca Detalhado</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gray-700 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Estudo de Mercado</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gray-700 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Análise de Público-alvo</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gray-700 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Site em Astro e React</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gray-700 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Hospedagem Padrão (12 meses)</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gray-700 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Suporte Técnico</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg text-sm">
                <div className="flex items-start">
                  <Package className="h-5 w-5 text-gray-700 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-medium">Economia de até 85%</span> comparado ao valor de mercado de R$ 30.000
                    a R$ 40.000 para serviços similares.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic max-w-3xl mx-auto">
            Ambos os pacotes incluem todos os serviços de branding e desenvolvimento web integrados, garantindo uma
            identidade digital coesa e profissional.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
