import SlideLayout from "./slide-layout"
import Image from "next/image"
import { Camera, Users, Palette, Sun } from "lucide-react"

export default function SlideSessoesFotograficas() {
  return (
    <SlideLayout title="Sessões Fotográficas">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Introdução */}
          <div className="md:col-span-2 mb-2">
            <p className="text-center text-gray-600 font-inter text-sm">
              Planejamento e execução de sessões fotográficas completas para marcas de moda, com foco em storytelling
              visual e identidade de marca
            </p>
          </div>

          {/* Processo Criativo */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Processo Criativo</h3>
              <p className="text-sm text-gray-600">Da concepção à entrega final</p>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Palette className="w-5 h-5 text-integrare-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Conceito e Direção Criativa</p>
                    <p className="text-xs text-gray-600">
                      Desenvolvimento do conceito visual alinhado à identidade da marca e objetivos da coleção,
                      incluindo moodboards, referências e diretrizes estéticas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="w-5 h-5 text-integrare-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Produção e Casting</p>
                    <p className="text-xs text-gray-600">
                      Seleção de modelos, styling completo, produção de cenário e coordenação de equipe de beleza para
                      garantir a execução perfeita da visão criativa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Camera className="w-5 h-5 text-integrare-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Fotografia e Direção</p>
                    <p className="text-xs text-gray-600">
                      Execução fotográfica com direção técnica e artística, garantindo a captura de imagens que
                      comunicam a essência da marca e valorizam os produtos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Sun className="w-5 h-5 text-integrare-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Pós-produção</p>
                    <p className="text-xs text-gray-600">
                      Tratamento de imagens, correção de cor e finalização com padrão estético consistente, preparando o
                      material para diferentes plataformas e formatos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Galeria */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Galeria de Projetos</h3>
              <p className="text-sm text-gray-600">Exemplos de sessões realizadas</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/M05D06_Carla-07-SW84gdTOM2We1eBIejzEyhahcVIau1.png"
                    alt="Sessão fotográfica com fundo azul"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-1">
                    <p className="text-white text-[10px]">Coleção Verão</p>
                  </div>
                </div>
                <div className="relative h-40 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/M06D18_VESTIDOINVERNO_CARLAMENDES%202.jpg-1UsjUBIrrchB6DLyBSW3yhwq3wqV48.jpeg"
                    alt="Sessão fotográfica minimalista"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-1">
                    <p className="text-white text-[10px]">Linha Inverno</p>
                  </div>
                </div>
                <div className="relative h-40 rounded overflow-hidden md:col-span-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/M02D26_SAIADISCO_CARLAMENDES%201.jpg-THeLSesnCfhtd0TMznZxMSeFrZ8yBK.jpeg"
                    alt="Detalhe de saia com discos"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-1">
                    <p className="text-white text-[10px]">Campanha Trend Alert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
