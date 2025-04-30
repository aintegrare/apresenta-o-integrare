import SlideLayout from "./slide-layout"
import Image from "next/image"
import { Camera, Users, Calendar, FileImage, PenTool, Share2 } from "lucide-react"

export default function SlideSessoesFotograficasLins() {
  return (
    <SlideLayout title="5. Sessões Fotográficas Periódicas">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-integrare-blue">Documentação Visual Estratégica</h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <Calendar className="w-5 h-5 text-integrare-blue mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-base font-medium text-gray-800">Cronograma Planejado</h4>
                <p className="text-sm text-gray-600">
                  Sessões fotográficas trimestrais para capturar o dia a dia, eventos especiais e evolução dos projetos
                  da instituição.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Users className="w-5 h-5 text-integrare-blue mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-base font-medium text-gray-800">Humanização da Marca</h4>
                <p className="text-sm text-gray-600">
                  Fotografias da equipe, voluntários e beneficiários (com as devidas autorizações) para criar conexão
                  emocional com o público.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Camera className="w-5 h-5 text-integrare-blue mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-base font-medium text-gray-800">Equipe Especializada</h4>
                <p className="text-sm text-gray-600">
                  Fotógrafos profissionais com experiência em instituições sociais, garantindo imagens de alta qualidade
                  e sensibilidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-medium text-integrare-blue">Aplicação Estratégica</h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <FileImage className="w-5 h-5 text-integrare-blue mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-base font-medium text-gray-800">Banco de Imagens Exclusivo</h4>
                <p className="text-sm text-gray-600">
                  Criação de um banco de imagens próprio para uso em todos os materiais de comunicação, reduzindo a
                  dependência de bancos de imagens genéricos.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <PenTool className="w-5 h-5 text-integrare-blue mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-base font-medium text-gray-800">Conteúdo Autêntico</h4>
                <p className="text-sm text-gray-600">
                  Material visual autêntico para redes sociais, site, relatórios, newsletters e materiais
                  institucionais.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Share2 className="w-5 h-5 text-integrare-blue mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-base font-medium text-gray-800">Engajamento Ampliado</h4>
                <p className="text-sm text-gray-600">
                  Conteúdo visual de qualidade gera até 94% mais engajamento nas redes sociais e aumenta a credibilidade
                  institucional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        <div className="relative h-48 rounded-lg overflow-hidden shadow-sm">
          <Image
            src="/placeholder.svg?height=400&width=600&text=Evento+Institucional"
            alt="Exemplo de fotografia de evento institucional"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-48 rounded-lg overflow-hidden shadow-sm">
          <Image
            src="/placeholder.svg?height=400&width=600&text=Equipe+em+Ação"
            alt="Exemplo de fotografia de equipe em ação"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-48 rounded-lg overflow-hidden shadow-sm">
          <Image
            src="/placeholder.svg?height=400&width=600&text=Impacto+Social"
            alt="Exemplo de fotografia mostrando impacto social"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-6 text-center max-w-2xl mx-auto">
        <p className="text-gray-500 font-inter text-sm">
          As sessões fotográficas periódicas são parte integral da nossa estratégia de comunicação, fornecendo material
          visual autêntico e de alta qualidade que fortalece a identidade da instituição e amplifica o alcance de sua
          mensagem.
        </p>
      </div>
    </SlideLayout>
  )
}
