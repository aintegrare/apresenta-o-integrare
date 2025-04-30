import SlideLayout from "./slide-layout"
import { BarChart3, Search } from "lucide-react"

export default function SlideDadosSEO() {
  return (
    <SlideLayout title="5. Dados para SEO e Marketing Digital">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center mb-2">
            <BarChart3 className="w-5 h-5 text-integrare-blue mr-2" />
            <h3 className="text-lg font-poppins font-medium">Estatísticas de Mercado Relevantes</h3>
          </div>
          <ul className="space-y-3 font-inter text-gray-600 text-sm">
            <li>25% dos trabalhadores formais no Brasil são terceirizados (4,3 milhões)</li>
            <li>O setor de serviços representa 70% do mercado de terceirização</li>
            <li>Mercado condominial movimenta R$ 165 bilhões anualmente</li>
            <li>Custo médio de administradora terceirizada: R$ 1.557,00 mensais</li>
            <li>Crescimento de 23,8% no número de condomínios em oito anos</li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="flex items-center mb-2">
            <Search className="w-5 h-5 text-integrare-blue mr-2" />
            <h3 className="text-lg font-poppins font-medium">Palavras-chave Relevantes para SEO</h3>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-poppins font-medium mb-2 text-gray-700">Alta Conversão</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>• Terceirização de portaria para condomínios</p>
                <p>• Empresa de limpeza para condomínio</p>
                <p>• Serviços terceirizados condomínio preço</p>
                <p>• Zeladoria terceirizada condomínio</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-poppins font-medium mb-2 text-gray-700">Cauda Longa</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>• Quanto custa terceirizar portaria em condomínio pequeno</p>
                <p>• Vantagens da terceirização de limpeza em condomínios residenciais</p>
                <p>• Como escolher empresa de terceirização para condomínio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
