import SlideLayout from "./slide-layout"
import { TrendingUp, Award, DollarSign } from "lucide-react"

export default function SlideValorMercado() {
  return (
    <SlideLayout title="Valor de Mercado e Investimento">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-[#4b7bb5]/10 to-white p-6 rounded-lg mb-8">
          <div className="flex items-start">
            <TrendingUp className="h-8 w-8 text-[#4b7bb5] mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-poppins font-medium mb-3 text-[#4b7bb5]">
                Posicionamento Premium a Custo Acessível
              </h3>
              <p className="text-gray-700">
                No mercado atual, projetos de branding e desenvolvimento web para o setor jurídico com este nível de
                qualidade e personalização são tipicamente orçados entre <strong>R$ 30.000,00 e R$ 40.000,00</strong>{" "}
                por agências tradicionais e consultorias de marketing jurídico.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <Award className="h-7 w-7 text-[#4b7bb5] mr-3" />
              <h3 className="text-lg font-poppins font-medium text-[#4b7bb5]">Diferencial Competitivo</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Nossa proposta oferece o mesmo nível de qualidade e sofisticação de grandes agências, porém com valores
              significativamente mais acessíveis devido à nossa estrutura otimizada e processos eficientes.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Economia de até 80%</span> em comparação com propostas similares de
                agências tradicionais, sem comprometer a qualidade e os resultados.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <DollarSign className="h-7 w-7 text-[#4b7bb5] mr-3" />
              <h3 className="text-lg font-poppins font-medium text-[#4b7bb5]">Retorno sobre Investimento</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Uma identidade digital profissional e estratégica para advogados não representa um custo, mas um
              investimento com potencial de retorno expressivo através da captação de clientes de maior valor.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Aquisição de apenas 1-2 novos clientes</span> de valor médio/alto já
                proporciona o retorno completo do investimento realizado.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#4b7bb5] text-white p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-3">Proposta de Valor Exclusiva</h3>
          <p className="mb-4">
            Nossa proposta para o Dr. Sidnei Medeiros representa uma oportunidade única de elevar sua presença digital
            ao mesmo patamar de excelência dos seus serviços jurídicos, com um investimento significativamente abaixo do
            valor de mercado para projetos desta categoria.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-lg font-medium mb-1">Valor de Mercado</p>
              <p className="text-2xl font-bold mb-1">R$ 30.000,00 - R$ 40.000,00</p>
              <p className="text-sm opacity-80">Preço praticado por agências tradicionais</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <p className="text-lg font-medium mb-1">Nossa Proposta</p>
              <p className="text-2xl font-bold mb-1">R$ 6.700,00</p>
              <p className="text-sm opacity-80">Opção Premium com Next.js (recomendada)</p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
