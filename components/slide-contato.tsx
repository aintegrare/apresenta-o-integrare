import SlideLayout from "./slide-layout"
import { Mail, Phone, MapPin, Instagram, Linkedin, Globe, Clock } from "lucide-react"

export default function SlideContato() {
  return (
    <SlideLayout title="9. Entre em Contato">
      <div className="max-w-5xl mx-auto">
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
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-integrare-blue mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Horário de Atendimento</p>
                    <p className="text-sm text-gray-500">Segunda a Segunda: 09:00 às 20:00</p>
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
              <h3 className="text-lg font-poppins font-medium mb-4 text-integrare-blue">Solicite uma Proposta</h3>
              <p className="text-sm text-gray-600 mb-4">
                Preencha o formulário em nosso site ou entre em contato diretamente conosco para agendarmos uma reunião
                de diagnóstico gratuita.
              </p>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-integrare-blue">O que oferecemos na reunião inicial:</p>
                  <ul className="mt-2 space-y-1">
                    <li className="text-xs text-gray-600 flex items-start">
                      <span className="text-integrare-blue mr-2">•</span>
                      <span>Análise preliminar da sua presença digital</span>
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
                      <span>Proposta personalizada para seu negócio</span>
                    </li>
                  </ul>
                </div>
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
            Estamos prontos para ajudar seu negócio a alcançar todo o seu potencial no ambiente digital. Entre em
            contato hoje mesmo e descubra como podemos transformar sua presença online.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
