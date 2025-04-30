export default function Typography() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Famílias de Fontes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-sm text-gray-500 mb-2">Principal (Títulos e Destaques)</h4>
            <p className="font-poppins text-2xl">Poppins</p>
            <p className="font-poppins text-sm mt-2 text-gray-600">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-sm text-gray-500 mb-2">Secundária (Corpo de texto)</h4>
            <p className="font-inter text-2xl">Inter</p>
            <p className="font-inter text-sm mt-2 text-gray-600">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Hierarquia de Texto</h3>
        <div className="space-y-4 p-4 border border-gray-200 rounded-lg">
          <div>
            <span className="text-xs text-gray-500">Título Principal (H1)</span>
            <h1 className="text-3xl md:text-4xl font-poppins font-semibold text-integrare-blue">Título Principal</h1>
          </div>
          <div>
            <span className="text-xs text-gray-500">Título Secundário (H2)</span>
            <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-integrare-blue">Título Secundário</h2>
          </div>
          <div>
            <span className="text-xs text-gray-500">Título Terciário (H3)</span>
            <h3 className="text-xl md:text-2xl font-poppins font-medium text-integrare-blue">Título Terciário</h3>
          </div>
          <div>
            <span className="text-xs text-gray-500">Subtítulo (H4)</span>
            <h4 className="text-lg font-poppins font-medium text-gray-700">Subtítulo</h4>
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
  )
}
