import SlideLayout from "./slide-layout"
import { Globe, FileText, BarChart } from "lucide-react"

export default function SlideEstrategias() {
  return (
    <SlideLayout title="5.3 Estratégias de Marketing Digital">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="space-y-4">
          <div className="flex items-center mb-2">
            <Globe className="w-5 h-5 text-integrare-blue mr-2" />
            <h3 className="text-lg font-poppins font-medium">Otimização de SEO</h3>
          </div>
          <ul className="space-y-2 font-inter text-gray-600 text-sm">
            <li>• Criação de conteúdo relevante sobre terceirização em condomínios</li>
            <li>• Otimização on-page com palavras-chave em títulos e descrições</li>
            <li>• SEO local com perfil atualizado no Google Meu Negócio</li>
            <li>• Backlinks de qualidade de sites do mercado imobiliário</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="flex items-center mb-2">
            <FileText className="w-5 h-5 text-integrare-blue mr-2" />
            <h3 className="text-lg font-poppins font-medium">Estratégias de Conteúdo</h3>
          </div>
          <ul className="space-y-2 font-inter text-gray-600 text-sm">
            <li>• Blog especializado com informações sobre terceirização</li>
            <li>• Estudos de caso de condomínios com serviços terceirizados</li>
            <li>• Webinars e eventos online para síndicos e administradores</li>
            <li>• E-books e materiais ricos sobre aspectos da terceirização</li>
          </ul>
        </div>

        <div className="md:col-span-2 mt-4">
          <div className="space-y-4">
            <div className="flex items-center mb-2">
              <BarChart className="w-5 h-5 text-integrare-blue mr-2" />
              <h3 className="text-lg font-poppins font-medium">Táticas de Mídia Social e Anúncios Digitais</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-700">Presença em Redes Profissionais</p>
                <p className="text-gray-500">LinkedIn e outras redes para estabelecer autoridade</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Anúncios Segmentados</p>
                <p className="text-gray-500">Google Ads e Facebook Ads com segmentação geográfica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
