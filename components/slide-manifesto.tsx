import SlideLayout from "./slide-layout"

export default function SlideManifesto() {
  return (
    <SlideLayout title="Manifesto da Campanha">
      <div className="max-w-4xl mx-auto space-y-6 text-center">
        <p className="text-lg sm:text-xl font-inter text-gray-700 italic leading-relaxed">
          "No Medeiros Advogados, não enxergamos apenas terrenos e documentos – vemos histórias de vida, patrimônios
          construídos com suor e o futuro de famílias inteiras."
        </p>

        <div className="w-16 h-1 bg-amber-500 mx-auto my-8"></div>

        <p className="text-base sm:text-lg font-inter text-gray-600 leading-relaxed">
          Acreditamos que cada propriedade rural na faixa de fronteira representa não só um ativo econômico, mas um
          pedaço da história do Brasil e de quem o construiu. Por isso, nossa missão vai além da regularização: queremos
          garantir que seu legado esteja protegido.
        </p>

        <p className="text-base sm:text-lg font-inter text-gray-600 leading-relaxed">
          O tempo está se esgotando. Outubro de 2025 não é apenas uma data no calendário – é o limite entre a segurança
          jurídica e o risco. Entre a certeza e a incerteza. Entre o patrimônio garantido e a possibilidade de perdê-lo.
        </p>

        <div className="mt-10 bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
          <p className="text-base font-medium text-gray-700">
            Medeiros Advogados. Regularizamos seu presente. Protegemos seu futuro.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
