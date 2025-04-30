import SlideLayout from "./slide-layout"
import { Mail, Phone, MapPin, Instagram, Linkedin, Globe } from "lucide-react"

export default function SlideContatoLins() {
  return (
    <SlideLayout title="7. Entre em Contato">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-poppins font-medium mb-4 text-integrare-blue">Informações de Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-integrare-blue mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-gray-500">falecom@aintegrare.com.br</p>
                    <p className="text-sm text-gray-500">contato@redeintegrare.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-integrare-blue mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Telefone</p>
                    <p className="text-sm text-gray-500">(44) 99968-7264</p>
                    <p className="text-sm text-gray-500">(44) 93300-8009</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-integrare-blue mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Endereço</p>
                    <p className="text-sm text-gray-500">
                      Rua Arthur Thomas, 288 - Zona 01
                      <br />
                      Maringá - PR
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-poppins font-medium mb-4 text-integrare-blue">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                  <Instagram className="w-5 h-5 text-integrare-blue" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                  <Linkedin className="w-5 h-5 text-integrare-blue" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                  <Globe className="w-5 h-5 text-integrare-blue" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-poppins font-medium mb-4 text-integrare-blue">Agende uma Reunião</h3>
              <p className="text-sm text-gray-600 mb-4">
                Estamos à disposição para uma reunião de diagnóstico gratuita, onde poderemos conhecer melhor as
                necessidades da Instituição Lins Vasconcellos e apresentar soluções personalizadas.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-integrare-blue mb-2">O que oferecemos na reunião inicial:</p>
                <ul className="space-y-2">
                  <li className="text-xs text-gray-600 flex items-start">
                    <span className="text-integrare-blue mr-2">•</span>
                    <span>Análise preliminar da presença digital atual</span>
                  </li>
                  <li className="text-xs text-gray-600 flex items-start">
                    <span className="text-integrare-blue mr-2">•</span>
                    <span>Identificação de oportunidades de melhoria</span>
                  </li>
                  <li className="text-xs text-gray-600 flex items-start">
                    <span className="text-integrare-blue mr-2">•</span>
                    <span>Sugestões iniciais de estratégias</span>
                  </li>
                  <li className="text-xs text-gray-600 flex items-start">
                    <span className="text-integrare-blue mr-2">•</span>
                    <span>Esclarecimento de dúvidas sobre o processo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-base font-poppins font-medium mb-2 text-gray-700">Visite Nosso Site</h3>
              <p className="text-sm text-gray-600">
                <a href="https://redeintegrare.com.br" className="text-integrare-blue hover:underline">
                  www.redeintegrare.com.br
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center max-w-2xl mx-auto">
          <p className="text-gray-500 font-inter text-sm">
            Estamos ansiosos para contribuir com a missão da Instituição Lins Vasconcellos, ampliando seu impacto
            através de estratégias de comunicação eficazes e alinhadas com seus valores.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
