import SlideLayout from "./slide-layout"
import { Check, Info } from "lucide-react"

export default function SlideValoresLins() {
  return (
    <SlideLayout title="Investimento">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-integrare-blue p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Plano Completo de Marketing Digital</h3>
            <div className="flex items-center justify-center">
              <span className="text-4xl font-bold text-white">R$ 2.670,00</span>
              <span className="text-white ml-2 opacity-90">/mensal</span>
            </div>
          </div>

          <div className="p-8">
            <h4 className="text-lg font-medium text-gray-800 mb-4">Serviços Inclusos:</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Gestão completa de redes sociais</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Criação de conteúdo para blog</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Relatórios mensais de desempenho</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Otimização SEO do site</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Email marketing (1 disparo mensal)</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Suporte técnico prioritário</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Sessão fotográfica trimestral</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Reuniões mensais de alinhamento</span>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start">
                <Info className="w-5 h-5 text-integrare-blue mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-medium text-gray-800 mb-1">Informações Adicionais</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Contrato mínimo de 3 meses</li>
                    <li>• Campanhas pagas não inclusas (orçamento à parte)</li>
                    <li>• Desenvolvimento de site cobrado separadamente</li>
                    <li>• Possibilidade de personalização do pacote conforme necessidades</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 border-t border-gray-100">
            <p className="text-center text-sm text-gray-500">
              Valores sujeitos a alteração conforme necessidades específicas do projeto.
              <br />
              Consulte-nos para um orçamento personalizado.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
