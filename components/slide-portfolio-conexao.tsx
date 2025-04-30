import SlideLayout from "./slide-layout"
import Image from "next/image"

export default function SlidePortfolioConexao() {
  return (
    <SlideLayout title="Conexão Sistemas de Prótese">
      <div className="max-w-6xl mx-auto">
        {/* Grid principal de imagens - Agora com mais espaço vertical */}
        <div className="grid grid-cols-12 gap-4">
          {/* Imagem principal grande - Altura aumentada */}
          <div className="col-span-12 md:col-span-8 relative rounded-lg overflow-hidden shadow-lg h-[380px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mockup-outdoors-conexao.png-w9LHC2essp8daoDlbs18rNGKP4gMPL.jpeg"
              alt="Campanha Conexão - Outdoors"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-lg font-medium">Campanha Visual Integrada</h3>
            </div>
          </div>

          {/* Coluna lateral direita - Altura dos elementos aumentada */}
          <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-4">
            <div className="relative rounded-lg overflow-hidden shadow-lg h-[180px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ativo%208%404x%20-%20co%CC%81pia.webp-E5hOUwaleVWOo3hBQUUFRoqEcA1Vek.jpeg"
                alt="Embalagem Conexão"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <h3 className="text-white text-sm font-medium">Embalagem Premium</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg h-[180px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ativo%203%404x%20-%20co%CC%81pia.webp-MGAEJ1idXTIYJPcoNLnLX2FhzOJJt8.jpeg"
                alt="Painéis Internos Conexão"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <h3 className="text-white text-sm font-medium">Comunicação Interna</h3>
              </div>
            </div>
          </div>

          {/* Linha inferior com 3 imagens - Altura aumentada */}
          <div className="col-span-12 md:col-span-4 relative rounded-lg overflow-hidden shadow-lg h-[240px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/M03D15_Conexa%CC%83o_Align_2_v3.png-tv9N8olta7XY0fwcCNEAEbRgdcwNH4.jpeg"
              alt="Licenças Exocad"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <h3 className="text-white text-sm font-medium">Tecnologia Exocad</h3>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 relative rounded-lg overflow-hidden shadow-lg h-[240px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/M03D15_Conexa%CC%83o_Align_1_v3.png-RFBC5A1GiWD7SEwCCgtUahwHAz1HfE.jpeg"
              alt="Scanner iTero"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <h3 className="text-white text-sm font-medium">Scanner iTero Align</h3>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 relative rounded-lg overflow-hidden shadow-lg h-[240px] bg-blue-900 flex items-center justify-center p-6">
            <div className="text-center">
              <h3 className="text-white text-lg font-medium mb-2">Branding para Indústria de Implantes Dentários</h3>
              <p className="text-blue-100 text-sm">
                Identidade visual e comunicação para empresa com atuação internacional
              </p>
            </div>
          </div>
        </div>

        {/* Linha de elementos de identidade visual */}
        <div className="mt-4 grid grid-cols-5 gap-4">
          <div className="col-span-1 bg-blue-900 rounded-lg p-4 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <Image
                src="/images/logo_conexao.png"
                alt="Símbolo Conexão"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          <div className="col-span-4 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-4 flex items-center">
            <div className="grid grid-cols-5 gap-4 w-full">
              <div className="col-span-1 h-12 rounded bg-blue-700"></div>
              <div className="col-span-1 h-12 rounded bg-blue-600"></div>
              <div className="col-span-1 h-12 rounded bg-blue-500"></div>
              <div className="col-span-1 h-12 rounded bg-blue-400"></div>
              <div className="col-span-1 h-12 rounded bg-blue-300"></div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
