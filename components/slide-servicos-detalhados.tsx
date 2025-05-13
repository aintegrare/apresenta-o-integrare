import SlideLayout from "./slide-layout"
import { FileText, Users, Palette, BarChart } from "lucide-react"

export default function SlideServicosDetalhados() {
  return (
    <SlideLayout title="Serviços Inclusos na Proposta">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#4b7bb5]">
            <div className="flex items-center mb-4">
              <Palette className="h-8 w-8 text-[#4b7bb5] mr-3" />
              <h3 className="text-lg font-poppins font-medium text-[#4b7bb5]">Criação de Marca</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Desenvolvimento de uma identidade visual exclusiva e memorável, alinhada com os valores e posicionamento
              do seu escritório de advocacia.
            </p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-[#4b7bb5] mr-2">•</span>
                <span>Criação de logotipo exclusivo em múltiplas versões</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4b7bb5] mr-2">•</span>
                <span>Definição de paleta de cores profissional</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4b7bb5] mr-2">•</span>
                <span>Seleção de tipografia alinhada ao setor jurídico</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4b7bb5] mr-2">•</span>
                <span>Elementos gráficos complementares</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#4b7bb5]">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-[#4b7bb5] mr-3" />
              <h3 className="text-lg font-poppins font-medium text-[#4b7bb5]">Manual de Marca</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Documento completo com todas as diretrizes para uso correto da sua identidade visual, garantindo
              consistência em todas as aplicações.
            </p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-[#4b7bb5] mr-2">•</span>
                <span>Regras de aplicação do logotipo</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4b7bb5] mr-2">•</span>
                <span>Especificações técnicas de cores e tipografia</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4b7bb5] mr-2">•</span>
                <span>Exemplos de aplicações em diferentes materiais</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4b7bb5] mr-2">•</span>
                <span>Orientações para comunicação visual</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#4b7bb5]">
            <div className="flex items-center mb-4">
              <BarChart className="h-8 w-8 text-[#4b7bb5] mr-3" />
              <h3 className="text-lg font-poppins font-medium text-[#4b7bb5]">Estudo de Mercado</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Análise aprofundada do cenário jurídico local e digital, identificando oportunidades e diferenciais
              competitivos para seu escritório.
            </p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-[#4b7bb5] mr-2">•</span>
                <span>Análise de concorrentes diretos e indiretos</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4b7bb5] mr-2">•</span>
                <span>Identificação de tendências no setor jurídico</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4b7bb5] mr-2">•</span>
                <span>Mapeamento de oportunidades de posicionamento</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4b7bb5] mr-2">•</span>
                <span>Recomendações estratégicas baseadas em dados</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#4b7bb5]">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-[#4b7bb5] mr-3" />
              <h3 className="text-lg font-poppins font-medium text-[#4b7bb5]">Estudo de Público-alvo</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Identificação e análise detalhada do perfil ideal de clientes para seus serviços jurídicos, permitindo
              comunicação mais eficiente.
            </p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-[#4b7bb5] mr-2">•</span>
                <span>Definição de personas detalhadas</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4b7bb5] mr-2">•</span>
                <span>Mapeamento da jornada do cliente</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4b7bb5] mr-2">•</span>
                <span>Análise de comportamento e necessidades</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4b7bb5] mr-2">•</span>
                <span>Estratégias de comunicação personalizada</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic max-w-3xl mx-auto">
            Todos os serviços são desenvolvidos por uma equipe multidisciplinar de especialistas em marketing jurídico,
            design e estratégia digital, garantindo resultados alinhados às particularidades do setor.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
