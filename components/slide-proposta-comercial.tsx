import SlideLayout from "./slide-layout"
import { Check } from "lucide-react"

export default function SlidePropostaComercial() {
  return (
    <SlideLayout title="Proposta Comercial para Dr. Sidnei Medeiros">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-[#4b7bb5]/10 to-white p-6 rounded-lg mb-8">
          <h3 className="text-xl font-poppins font-medium mb-4 text-[#4b7bb5]">
            Transformação Digital para Advocacia de Excelência
          </h3>
          <p className="text-gray-700 mb-4">
            Prezado Dr. Sidnei Medeiros, apresentamos nossa proposta personalizada para elevar sua presença digital ao
            mesmo patamar de excelência dos seus serviços jurídicos.
          </p>
          <p className="text-gray-700">
            Nossa abordagem estratégica foi desenvolvida especificamente para profissionais do Direito que buscam se
            destacar em um mercado competitivo, transmitindo autoridade, confiabilidade e sofisticação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#4b7bb5]">Objetivos da Proposta</h4>
            <ul className="space-y-2">
              {[
                "Estabelecer uma identidade visual distintiva e memorável",
                "Posicionar sua marca como referência no setor jurídico",
                "Criar uma presença digital que transmita confiança e profissionalismo",
                "Atrair clientes qualificados através de uma estratégia digital integrada",
                "Otimizar sua comunicação com o público-alvo ideal",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-[#4b7bb5] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#4b7bb5]">Benefícios Esperados</h4>
            <ul className="space-y-2">
              {[
                "Aumento da credibilidade e reconhecimento profissional",
                "Diferenciação clara dos concorrentes no mercado jurídico",
                "Atração de clientes de maior valor agregado",
                "Comunicação eficiente com seu público-alvo",
                "Presença digital alinhada com a excelência dos seus serviços",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-[#4b7bb5] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 p-5 rounded-lg border border-gray-200">
          <p className="text-center text-gray-600 italic">
            "Investir em uma identidade digital profissional não é um custo, mas um investimento estratégico que
            potencializa a captação de clientes e fortalece sua autoridade no mercado jurídico."
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
