import SlideLayout from "./slide-layout"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"

export default function SlideContato() {
  return (
    <SlideLayout title="Entre em Contato">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-poppins font-medium mb-4 text-[#002B5B]">Informações de Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-gray-500">contato@medeirosadvogados.com.br</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Telefone</p>
                    <p className="text-sm text-gray-500">(45) 3333-4444</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Endereço</p>
                    <p className="text-sm text-gray-500">
                      Av. Brasil, 1234 - Centro
                      <br />
                      Foz do Iguaçu - PR, 85851-000
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-poppins font-medium mb-4 text-[#002B5B]">Agende uma Consulta</h3>
              <p className="text-sm text-gray-600 mb-4">
                Não deixe para a última hora! O processo de regularização pode levar meses e, com a aproximação do
                prazo, os órgãos responsáveis ficarão sobrecarregados.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 text-amber-500 mr-2" />
                  <p className="font-medium text-gray-700">Consulta inicial gratuita</p>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Agende uma análise preliminar da situação do seu imóvel sem compromisso.
                </p>
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md transition-colors">
                  QUERO GARANTIR MINHA PROPRIEDADE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-blue-50 p-6 rounded-lg text-center">
          <h3 className="text-lg font-medium text-[#002B5B] mb-3">PROTEJA SEU PATRIMÔNIO ENQUANTO HÁ TEMPO</h3>
          <p className="text-gray-600 mb-6">
            O Brasil conta com proprietários rurais que produzem, preservam e desenvolvem nossas fronteiras. Conte
            conosco para garantir que essa história continue nas mãos de quem a construiu.
          </p>
          <p className="font-medium text-[#002B5B]">
            Medeiros Advogados. Regularizamos seu presente. Protegemos seu futuro.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
