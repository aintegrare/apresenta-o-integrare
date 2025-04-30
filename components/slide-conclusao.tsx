import SlideLayout from "./slide-layout"

export default function SlideConclusao() {
  return (
    <SlideLayout title="7. Conclusão">
      <div className="max-w-3xl mx-auto space-y-10">
        <p className="font-inter text-gray-600 leading-relaxed text-center">
          O mercado de terceirização em condomínios no Brasil apresenta um potencial significativo de crescimento,
          impulsionado pelas mudanças na legislação trabalhista, pela expansão do setor imobiliário e pelas inovações
          tecnológicas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-medium text-integrare-blue mb-1">Crescimento Contínuo</p>
            <p className="text-sm text-gray-500">Expansão do mercado condominial</p>
          </div>
          <div>
            <p className="font-medium text-integrare-blue mb-1">Inovação Tecnológica</p>
            <p className="text-sm text-gray-500">Diferencial competitivo</p>
          </div>
          <div>
            <p className="font-medium text-integrare-blue mb-1">Estratégias Digitais</p>
            <p className="text-sm text-gray-500">Essenciais para visibilidade</p>
          </div>
        </div>

        <p className="font-inter text-gray-600 leading-relaxed text-center">
          Para estratégias de SEO e anúncios digitais, é fundamental compreender as particularidades deste mercado,
          utilizando palavras-chave relevantes e desenvolvendo conteúdos que abordem as principais preocupações e
          necessidades dos síndicos e administradores de condomínios.
        </p>

        <div className="border-t border-gray-100 pt-6">
          <p className="font-inter text-center text-gray-500 italic">
            À medida que o mercado condominial continua a se desenvolver, a terceirização se consolida como uma solução
            eficiente para os desafios de gestão, oferecendo qualidade, especialização e economia.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
