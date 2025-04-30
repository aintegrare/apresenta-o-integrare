import SlideLayout from "./slide-layout"
import { FileText, Search, FileCheck, CheckCircle, Clock } from "lucide-react"

export default function SlideProcesso() {
  return (
    <SlideLayout title="Nosso Processo">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
            {/* Etapa 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                <Search className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-sm font-medium mb-1">Diagnóstico</h3>
              <p className="text-xs text-gray-500">Análise completa da situação do imóvel</p>
              {/* Linha conectora */}
              <div className="hidden md:block w-full h-0.5 bg-amber-200 mt-4 relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-amber-400 rounded-full"></div>
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                <FileText className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-sm font-medium mb-1">Documentação</h3>
              <p className="text-xs text-gray-500">Levantamento e organização dos documentos necessários</p>
              {/* Linha conectora */}
              <div className="hidden md:block w-full h-0.5 bg-amber-200 mt-4 relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-amber-400 rounded-full"></div>
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                <FileCheck className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-sm font-medium mb-1">Protocolo</h3>
              <p className="text-xs text-gray-500">Submissão aos órgãos competentes</p>
              {/* Linha conectora */}
              <div className="hidden md:block w-full h-0.5 bg-amber-200 mt-4 relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-amber-400 rounded-full"></div>
              </div>
            </div>

            {/* Etapa 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-sm font-medium mb-1">Acompanhamento</h3>
              <p className="text-xs text-gray-500">Monitoramento constante do processo</p>
              {/* Linha conectora */}
              <div className="hidden md:block w-full h-0.5 bg-amber-200 mt-4 relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-amber-400 rounded-full"></div>
              </div>
            </div>

            {/* Etapa 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-sm font-medium mb-1">Regularização</h3>
              <p className="text-xs text-gray-500">Obtenção do título definitivo e segurança jurídica</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-[#002B5B] mb-3">Tempo Estimado</h3>
            <p className="text-sm text-gray-600">
              O processo de regularização pode levar de 4 a 12 meses, dependendo da complexidade do caso e da situação
              documental do imóvel. Por isso, é fundamental iniciar o processo o quanto antes, evitando a sobrecarga dos
              órgãos responsáveis com a aproximação do prazo final.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-[#002B5B] mb-3">Documentação Necessária</h3>
            <p className="text-sm text-gray-600">
              Cada caso exige documentação específica, mas geralmente são necessários: título de propriedade, documentos
              pessoais, comprovação de ocupação, georreferenciamento, CAR (Cadastro Ambiental Rural) e certidões
              negativas. Nossa equipe fará um levantamento personalizado para o seu caso.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
