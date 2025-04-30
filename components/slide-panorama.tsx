import SlideLayout from "./slide-layout"
import { TrendingUp, Building } from "lucide-react"

export default function SlidePanorama() {
  return (
    <SlideLayout title="1. Panorama do Mercado de Terceirização no Brasil">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto px-2 sm:px-4">
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center mb-2">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-integrare-blue mr-2" aria-hidden="true" />
            <h3 className="text-base sm:text-lg font-poppins font-medium">Contexto Atual e Evolução</h3>
          </div>
          <ul className="space-y-3 md:space-y-4 font-inter text-gray-600 text-sm sm:text-base">
            <li className="flex items-start">
              <span className="text-integrare-blue mr-2 flex-shrink-0" aria-hidden="true">
                •
              </span>
              <span>4,3 milhões de profissionais terceirizados no Brasil (25% dos trabalhadores formais)</span>
            </li>
            <li className="flex items-start">
              <span className="text-integrare-blue mr-2 flex-shrink-0" aria-hidden="true">
                •
              </span>
              <span>80% das empresas brasileiras utilizam terceirização</span>
            </li>
            <li className="flex items-start">
              <span className="text-integrare-blue mr-2 flex-shrink-0" aria-hidden="true">
                •
              </span>
              <span>Reforma trabalhista de 2017 ampliou o escopo da terceirização</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center mb-2">
            <Building className="w-4 h-4 sm:w-5 sm:h-5 text-integrare-blue mr-2" aria-hidden="true" />
            <h3 className="text-base sm:text-lg font-poppins font-medium">O Mercado Condominial Brasileiro</h3>
          </div>
          <ul className="space-y-3 md:space-y-4 font-inter text-gray-600 text-sm sm:text-base">
            <li className="flex items-start">
              <span className="text-integrare-blue mr-2 flex-shrink-0" aria-hidden="true">
                •
              </span>
              <span>12,5% dos brasileiros moram em condomínios</span>
            </li>
            <li className="flex items-start">
              <span className="text-integrare-blue mr-2 flex-shrink-0" aria-hidden="true">
                •
              </span>
              <span>Mercado condominial movimenta R$ 165 bilhões anualmente</span>
            </li>
            <li className="flex items-start">
              <span className="text-integrare-blue mr-2 flex-shrink-0" aria-hidden="true">
                •
              </span>
              <span>Crescimento de 23,8% no número de condomínios em oito anos</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 mt-2">
          <p className="text-center font-inter text-gray-500 italic text-sm sm:text-base">
            "O setor de serviços representa 70% do mercado de terceirização no Brasil, tendo apresentado um crescimento
            de 8,8% em 2020, mesmo durante a pandemia."
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
