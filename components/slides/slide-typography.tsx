import SlideLayout from "../slide-layout"

interface SlideTypographyProps {
  slideNumber: number
  totalSlides: number
}

export default function SlideTypography({ slideNumber, totalSlides }: SlideTypographyProps) {
  return (
    <SlideLayout title="Tipografia" section="Fundamentos" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-medium mb-6">Famílias Tipográficas</h3>

          <div className="mb-8 bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="text-sm text-gray-500 mb-2">Principal (Títulos e Destaques)</h4>
            <p className="font-poppins text-4xl">Poppins</p>
            <p className="font-poppins text-sm mt-3 text-gray-600">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="text-sm text-gray-500 mb-2">Secundária (Corpo de texto)</h4>
            <p className="font-inter text-4xl">Inter</p>
            <p className="font-inter text-sm mt-3 text-gray-600">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-6">Hierarquia de Texto</h3>

          <div className="space-y-6 bg-white rounded-lg p-6 border border-gray-200">
            <div>
              <span className="text-xs text-gray-500">Título Principal (H1)</span>
              <h1 className="text-4xl font-poppins font-semibold text-[#4b7bb5]">Título Principal</h1>
            </div>

            <div>
              <span className="text-xs text-gray-500">Título Secundário (H2)</span>
              <h2 className="text-3xl font-poppins font-semibold text-[#4b7bb5]">Título Secundário</h2>
            </div>

            <div>
              <span className="text-xs text-gray-500">Título Terciário (H3)</span>
              <h3 className="text-2xl font-poppins font-medium text-[#4b7bb5]">Título Terciário</h3>
            </div>

            <div>
              <span className="text-xs text-gray-500">Subtítulo (H4)</span>
              <h4 className="text-xl font-poppins font-medium text-gray-700">Subtítulo</h4>
            </div>

            <div>
              <span className="text-xs text-gray-500">Corpo de Texto (Parágrafo)</span>
              <p className="text-base font-inter text-gray-600">
                Este é um exemplo de corpo de texto usado em parágrafos. A fonte Inter é utilizada para melhor
                legibilidade em textos longos, mantendo a clareza e o conforto visual para o leitor.
              </p>
            </div>

            <div>
              <span className="text-xs text-gray-500">Texto Pequeno</span>
              <p className="text-sm font-inter text-gray-500">
                Texto pequeno para informações secundárias, notas de rodapé ou legendas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
