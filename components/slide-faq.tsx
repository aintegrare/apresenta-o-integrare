import SlideLayout from "./slide-layout"
import { HelpCircle } from "lucide-react"

export default function SlideFAQ() {
  return (
    <SlideLayout title="Perguntas Frequentes">
      <div className="max-w-4xl mx-auto h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Pergunta 1 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start mb-2 md:mb-3">
              <HelpCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <h3 className="text-sm md:text-base font-medium text-gray-800">
                Como sei se minha propriedade precisa ser regularizada?
              </h3>
            </div>
            <p className="text-xs md:text-sm text-gray-600 ml-7">
              Todas as propriedades rurais localizadas até 150km da fronteira brasileira precisam verificar sua
              situação. Nossa equipe pode realizar uma análise preliminar gratuita para determinar a necessidade de
              regularização.
            </p>
          </div>

          {/* Pergunta 2 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start mb-2 md:mb-3">
              <HelpCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <h3 className="text-sm md:text-base font-medium text-gray-800">
                Quanto tempo leva o processo de regularização?
              </h3>
            </div>
            <p className="text-xs md:text-sm text-gray-600 ml-7">
              O tempo varia conforme a complexidade do caso, mas pode levar de 4 a 12 meses. Por isso, é fundamental
              iniciar o processo o quanto antes, evitando a sobrecarga dos órgãos com a aproximação do prazo final.
            </p>
          </div>

          {/* Pergunta 3 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start mb-2 md:mb-3">
              <HelpCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <h3 className="text-sm md:text-base font-medium text-gray-800">
                O que acontece se eu não regularizar até o prazo?
              </h3>
            </div>
            <p className="text-xs md:text-sm text-gray-600 ml-7">
              As consequências incluem impossibilidade de transferência do imóvel, restrição a financiamentos rurais e,
              em casos extremos, a perda da propriedade. A Lei 13.178/2015 estabelece outubro de 2025 como prazo final.
            </p>
          </div>

          {/* Pergunta 4 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start mb-2 md:mb-3">
              <HelpCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <h3 className="text-sm md:text-base font-medium text-gray-800">
                Quais documentos são necessários para iniciar o processo?
              </h3>
            </div>
            <p className="text-xs md:text-sm text-gray-600 ml-7">
              Geralmente são necessários: título de propriedade, documentos pessoais, comprovação de ocupação,
              georreferenciamento, CAR e certidões negativas. Nossa equipe fará um levantamento personalizado para seu
              caso.
            </p>
          </div>
        </div>

        <div className="mt-6 md:mt-8 bg-amber-50 p-4 md:p-6 rounded-lg text-center">
          <h4 className="font-medium text-[#002B5B] mb-2 md:mb-3 text-sm md:text-base">Ainda tem dúvidas?</h4>
          <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
            Entre em contato conosco para uma consulta inicial gratuita. Nossa equipe está pronta para esclarecer todas
            as suas dúvidas e orientar sobre o melhor caminho para a regularização da sua propriedade.
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 md:px-6 py-1 md:py-2 rounded-md transition-colors text-xs md:text-sm">
            Agendar Consulta
          </button>
        </div>
      </div>
    </SlideLayout>
  )
}
