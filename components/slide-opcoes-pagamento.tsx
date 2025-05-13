import SlideLayout from "./slide-layout"
import { CreditCard, Calendar, CheckCircle } from "lucide-react"

export default function SlideOpcoesPagamento() {
  return (
    <SlideLayout title="Opções de Pagamento e Próximos Passos">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-[#4b7bb5] p-5 text-white">
              <h3 className="text-xl font-poppins font-medium">Opção Premium</h3>
              <p className="text-sm opacity-90 mt-1">Next.js com Turbopack</p>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-[#4b7bb5]/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <CreditCard className="h-8 w-8 text-[#4b7bb5]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Pagamento à Vista</h4>
                    <p className="text-2xl font-bold text-[#4b7bb5]">R$ 6.700,00</p>
                    <p className="text-sm text-gray-500 mt-1">Transferência, PIX ou cartão de crédito</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-[#4b7bb5]/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <Calendar className="h-8 w-8 text-[#4b7bb5]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Parcelamento</h4>
                    <p className="text-2xl font-bold text-[#4b7bb5]">3x R$ 2.270,00</p>
                    <p className="text-sm text-gray-500 mt-1">Entrada + 2 parcelas mensais</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gray-700 p-5 text-white">
              <h3 className="text-xl font-poppins font-medium">Opção Padrão</h3>
              <p className="text-sm opacity-90 mt-1">Astro com React</p>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mr-4">
                    <CreditCard className="h-8 w-8 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Pagamento à Vista</h4>
                    <p className="text-2xl font-bold text-gray-700">R$ 5.270,00</p>
                    <p className="text-sm text-gray-500 mt-1">Transferência, PIX ou cartão de crédito</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mr-4">
                    <Calendar className="h-8 w-8 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Parcelamento</h4>
                    <p className="text-2xl font-bold text-gray-700">3x R$ 1.770,00</p>
                    <p className="text-sm text-gray-500 mt-1">Entrada + 2 parcelas mensais</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#4b7bb5]">
          <h3 className="text-lg font-poppins font-medium text-[#4b7bb5] mb-4">Próximos Passos</h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-[#4b7bb5]/10 flex items-center justify-center flex-shrink-0 mr-3">
                <span className="text-[#4b7bb5] font-medium">1</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Aprovação da Proposta</h4>
                <p className="text-sm text-gray-600">Confirmação da opção escolhida e modalidade de pagamento</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-[#4b7bb5]/10 flex items-center justify-center flex-shrink-0 mr-3">
                <span className="text-[#4b7bb5] font-medium">2</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Reunião de Briefing</h4>
                <p className="text-sm text-gray-600">Levantamento detalhado de informações e expectativas</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-[#4b7bb5]/10 flex items-center justify-center flex-shrink-0 mr-3">
                <span className="text-[#4b7bb5] font-medium">3</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Desenvolvimento do Projeto</h4>
                <p className="text-sm text-gray-600">Criação da identidade visual e desenvolvimento do site</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-[#4b7bb5]/10 flex items-center justify-center flex-shrink-0 mr-3">
                <span className="text-[#4b7bb5] font-medium">4</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Entrega e Implementação</h4>
                <p className="text-sm text-gray-600">
                  Lançamento da nova identidade e site, com treinamento para gestão
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center bg-green-50 p-3 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
            <p className="text-sm text-gray-700">
              <span className="font-medium">Prazo de entrega estimado:</span> 30 a 45 dias após aprovação da proposta
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
