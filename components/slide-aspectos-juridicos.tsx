import SlideLayout from "./slide-layout"
import { Scale, FileText } from "lucide-react"

export default function SlideAspectosJuridicos() {
  return (
    <SlideLayout title="3. Aspectos Jurídicos e Regulamentações">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center mb-2">
            <Scale className="w-5 h-5 text-integrare-blue mr-2" />
            <h3 className="text-lg font-poppins font-medium">Legislação Aplicável</h3>
          </div>
          <ul className="space-y-4 font-inter text-gray-600">
            <li>
              <p className="font-medium text-sm">Lei nº 13.429/2017 (Lei da Terceirização)</p>
              <p className="text-sm text-gray-500">
                Autoriza a terceirização de qualquer atividade, seja ela fim ou meio
              </p>
            </li>
            <li>
              <p className="font-medium text-sm">Lei nº 13.467/2017 (Reforma Trabalhista)</p>
              <p className="text-sm text-gray-500">Consolidou a possibilidade de terceirização irrestrita</p>
            </li>
            <li>
              <p className="font-medium text-sm">Decreto nº 12.174/2024</p>
              <p className="text-sm text-gray-500">
                Novas regras para trabalhadores terceirizados na administração pública
              </p>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="flex items-center mb-2">
            <FileText className="w-5 h-5 text-integrare-blue mr-2" />
            <h3 className="text-lg font-poppins font-medium">Responsabilidades e Obrigações</h3>
          </div>
          <ul className="space-y-4 font-inter text-gray-600">
            <li>
              <p className="font-medium text-sm">Contrato de Prestação de Serviços</p>
              <p className="text-sm text-gray-500">
                Obrigatório e deve detalhar claramente os serviços, prazos, valores e responsabilidades
              </p>
            </li>
            <li>
              <p className="font-medium text-sm">Responsabilidade Subsidiária</p>
              <p className="text-sm text-gray-500">
                O condomínio pode ser responsabilizado subsidiariamente por obrigações trabalhistas não cumpridas
              </p>
            </li>
            <li>
              <p className="font-medium text-sm">Due Diligence na Contratação</p>
              <p className="text-sm text-gray-500">
                Importância de verificar a idoneidade, capacidade técnica e regularidade fiscal
              </p>
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  )
}
