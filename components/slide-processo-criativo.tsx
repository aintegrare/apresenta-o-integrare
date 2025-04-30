import SlideLayout from "./slide-layout"
import { Lightbulb, Palette, FileCheck, Zap, Users } from "lucide-react"

export default function SlideProcessoCriativo() {
  return (
    <SlideLayout title="Nosso Processo Criativo">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
            {/* Etapa 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <Lightbulb className="w-5 h-5 text-integrare-blue" />
              </div>
              <h3 className="text-sm font-medium mb-1">Briefing</h3>
              <p className="text-xs text-gray-500">Entendimento profundo do negócio, público e objetivos</p>
              {/* Linha conectora */}
              <div className="hidden md:block w-full h-0.5 bg-blue-200 mt-4 relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-integrare-blue" />
              </div>
              <h3 className="text-sm font-medium mb-1">Pesquisa</h3>
              <p className="text-xs text-gray-500">Análise de mercado, concorrência e tendências do setor</p>
              {/* Linha conectora */}
              <div className="hidden md:block w-full h-0.5 bg-blue-200 mt-4 relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <Palette className="w-5 h-5 text-integrare-blue" />
              </div>
              <h3 className="text-sm font-medium mb-1">Criação</h3>
              <p className="text-xs text-gray-500">Desenvolvimento de conceitos, logo e identidade visual</p>
              {/* Linha conectora */}
              <div className="hidden md:block w-full h-0.5 bg-blue-200 mt-4 relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
            </div>

            {/* Etapa 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <FileCheck className="w-5 h-5 text-integrare-blue" />
              </div>
              <h3 className="text-sm font-medium mb-1">Refinamento</h3>
              <p className="text-xs text-gray-500">Ajustes e aprimoramentos com base no feedback do cliente</p>
              {/* Linha conectora */}
              <div className="hidden md:block w-full h-0.5 bg-blue-200 mt-4 relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
            </div>

            {/* Etapa 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 text-integrare-blue" />
              </div>
              <h3 className="text-sm font-medium mb-1">Implementação</h3>
              <p className="text-xs text-gray-500">Aplicação da identidade visual em todos os pontos de contato</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium text-integrare-blue mb-3">Nossa Abordagem</h3>
            <p className="text-sm text-gray-600 mb-4">
              Desenvolvemos identidades visuais que não apenas representam visualmente uma marca, mas contam sua
              história e transmitem seus valores. Cada projeto é único e personalizado, considerando o contexto do
              mercado, o público-alvo e os objetivos estratégicos do cliente.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2 font-bold">•</span>
                <span>Foco na diferenciação e posicionamento estratégico</span>
              </li>
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2 font-bold">•</span>
                <span>Criação de sistemas visuais completos e coerentes</span>
              </li>
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2 font-bold">•</span>
                <span>Atenção aos detalhes em todas as aplicações</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium text-integrare-blue mb-3">Resultados Entregues</h3>
            <p className="text-sm text-gray-600 mb-4">
              Ao final do processo, nossos clientes recebem um pacote completo de branding que inclui todos os elementos
              necessários para implementar e manter sua identidade visual de forma consistente em todos os canais e
              pontos de contato.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2 font-bold">•</span>
                <span>Manual de identidade visual completo</span>
              </li>
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2 font-bold">•</span>
                <span>Arquivos em diversos formatos para diferentes aplicações</span>
              </li>
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2 font-bold">•</span>
                <span>Templates para materiais de comunicação</span>
              </li>
              <li className="flex items-start">
                <span className="text-integrare-blue mr-2 font-bold">•</span>
                <span>Orientação para implementação e uso da marca</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
