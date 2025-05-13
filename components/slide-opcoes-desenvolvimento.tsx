import SlideLayout from "./slide-layout"
import { Server, Zap, ShieldCheck, Gauge, Smartphone, Globe } from "lucide-react"

export default function SlideOpcoesDesenvolvimento() {
  return (
    <SlideLayout title="Opções de Desenvolvimento Web">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-[#4b7bb5] p-5 text-white">
              <h3 className="text-xl font-poppins font-medium">Opção Premium</h3>
              <p className="text-sm opacity-90 mt-1">Desenvolvimento em Next.js com Turbopack</p>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-lg font-medium text-[#4b7bb5]">Tecnologia Enterprise</span>
                </div>
                <div className="bg-[#4b7bb5]/10 px-3 py-1 rounded text-[#4b7bb5] text-sm font-medium">Recomendado</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Server className="h-5 w-5 text-[#4b7bb5] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800">Framework Enterprise</h4>
                    <p className="text-sm text-gray-600">
                      Tecnologia utilizada por grandes empresas como Netflix, Airbnb e TikTok
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Zap className="h-5 w-5 text-[#4b7bb5] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800">Performance Superior</h4>
                    <p className="text-sm text-gray-600">
                      Carregamento ultrarrápido com Turbopack e renderização híbrida
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-[#4b7bb5] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800">Segurança Avançada</h4>
                    <p className="text-sm text-gray-600">Proteção robusta para dados sensíveis de clientes</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Smartphone className="h-5 w-5 text-[#4b7bb5] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800">Experiência Mobile Premium</h4>
                    <p className="text-sm text-gray-600">Adaptação perfeita para todos os dispositivos</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg text-sm">
                <p className="text-gray-700">
                  <span className="font-medium">Ideal para:</span> Escritórios que buscam excelência digital, máxima
                  performance e escalabilidade para crescimento futuro.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gray-700 p-5 text-white">
              <h3 className="text-xl font-poppins font-medium">Opção Padrão</h3>
              <p className="text-sm opacity-90 mt-1">Desenvolvimento em Astro e React</p>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-lg font-medium text-gray-700">Tecnologia Moderna</span>
                </div>
                <div className="bg-gray-100 px-3 py-1 rounded text-gray-600 text-sm font-medium">Econômico</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Server className="h-5 w-5 text-gray-700 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800">Framework Moderno</h4>
                    <p className="text-sm text-gray-600">
                      Tecnologia eficiente para sites estáticos com componentes dinâmicos
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Gauge className="h-5 w-5 text-gray-700 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800">Boa Performance</h4>
                    <p className="text-sm text-gray-600">Carregamento rápido para conteúdo estático</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-gray-700 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800">Segurança Padrão</h4>
                    <p className="text-sm text-gray-600">Proteção adequada para sites informativos</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Globe className="h-5 w-5 text-gray-700 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800">Design Responsivo</h4>
                    <p className="text-sm text-gray-600">Adaptação para diferentes dispositivos</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg text-sm">
                <p className="text-gray-700">
                  <span className="font-medium">Ideal para:</span> Escritórios que buscam uma presença digital
                  profissional com orçamento mais controlado.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic max-w-3xl mx-auto">
            Ambas as opções incluem hospedagem por 12 meses, suporte técnico, otimização para mecanismos de busca (SEO)
            e integração com Google Analytics.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
