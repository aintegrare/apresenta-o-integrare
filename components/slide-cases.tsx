import SlideLayout from "./slide-layout"

export default function SlideCases() {
  return (
    <SlideLayout title="4. Cases de Sucesso">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Case 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-blue-50 p-4">
            <h3 className="text-lg font-medium text-integrare-blue">Indústria Odontológica Nacional e Internacional</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <p className="text-sm">+450 leads orgânicos por mês através de SEO técnico, Onpage e de Conteúdo.</p>
              <p className="text-sm">Posicionamento estratégico em todas as redes sociais e canais digitais</p>
              <p className="text-sm">Revisão e implamentação de uma marca de mais de 30 anos de mercado</p>
              <p className="text-sm">
                Desenvolvimento de PodCast com cobertura nacional e presença dos maiores nomes profissionais do setor.
              </p>
            </div>
          </div>
        </div>

        {/* Case 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-blue-50 p-4">
            <h3 className="text-lg font-medium text-integrare-blue">Rede de Clínicas Odontológicas</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <p className="text-sm">+50 leads via Google Ads por dia com Custo por click de R$0,15 centavos;</p>
              <p className="text-sm">
                Implementação de equipe e sistema de CRM com acompanhamento e rastreio até o momento da consulta
              </p>
              <p className="text-sm">
                Criação de marca e distribuição por diferentes filiais com trabalho de imersão e educação de time
              </p>
            </div>
          </div>
        </div>

        {/* Case 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-blue-50 p-4">
            <h3 className="text-lg font-medium text-integrare-blue">Profissionais Locais da Odontologia</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <p className="text-sm">
                Ranqueamento nas 3 primeiras posições para as principais buscas do setor para 3 profissionais na mesma
                cidade.
              </p>
              <p className="text-sm">Ocupamos o topo das buscas de interesse do setor com 3 clientes ao mesmo tempo.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center max-w-2xl mx-auto">
        <p className="text-gray-500 font-inter text-sm">
          Estes são apenas alguns exemplos dos resultados que alcançamos para nossos clientes. Cada estratégia é
          personalizada de acordo com os objetivos específicos de cada negócio, garantindo o máximo retorno sobre o
          investimento.
        </p>
      </div>
    </SlideLayout>
  )
}
