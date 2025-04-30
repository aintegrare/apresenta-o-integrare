import SlideLayout from "./slide-layout"
import { AlertTriangle, Lightbulb } from "lucide-react"

export default function SlideDesafios() {
  return (
    <SlideLayout title="6. Desafios e Oportunidades no Mercado">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 text-integrare-blue mr-2" />
            <h3 className="text-lg font-poppins font-medium">Principais Desafios</h3>
          </div>
          <ul className="space-y-4 font-inter text-gray-600 text-sm">
            <li>
              <p className="font-medium">Alta Rotatividade de Funcionários</p>
              <p className="text-gray-500">Compromete a qualidade e continuidade dos serviços</p>
            </li>
            <li>
              <p className="font-medium">Integração com a Cultura do Condomínio</p>
              <p className="text-gray-500">Garantir que funcionários se integrem às especificidades</p>
            </li>
            <li>
              <p className="font-medium">Controle de Qualidade</p>
              <p className="text-gray-500">Manter padrões consistentes em contratos de longo prazo</p>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="flex items-center mb-2">
            <Lightbulb className="w-5 h-5 text-integrare-blue mr-2" />
            <h3 className="text-lg font-poppins font-medium">Oportunidades de Mercado</h3>
          </div>
          <ul className="space-y-4 font-inter text-gray-600 text-sm">
            <li>
              <p className="font-medium">Serviços Especializados para Nichos</p>
              <p className="text-gray-500">Soluções sob medida para tipos específicos de condomínios</p>
            </li>
            <li>
              <p className="font-medium">Integração de Tecnologia</p>
              <p className="text-gray-500">Automação, IoT e inteligência artificial nos serviços</p>
            </li>
            <li>
              <p className="font-medium">Soluções Sustentáveis</p>
              <p className="text-gray-500">Crescente demanda por práticas sustentáveis</p>
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  )
}
