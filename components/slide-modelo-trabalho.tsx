import SlideLayout from "./slide-layout"

export default function SlideModeloTrabalho() {
  return (
    <SlideLayout title="7. Nosso Modelo de Trabalho">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-poppins font-medium mb-3 text-integrare-blue">Modelos de Contratação</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">•</span>
                  <div>
                    <p className="font-medium">Fee Mensal</p>
                    <p className="text-gray-500 text-xs">Pacote completo de serviços com valor fixo mensal</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">•</span>
                  <div>
                    <p className="font-medium">Projetos Específicos</p>
                    <p className="text-gray-500 text-xs">Desenvolvimento de projetos pontuais com escopo definido</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">•</span>
                  <div>
                    <p className="font-medium">Performance</p>
                    <p className="text-gray-500 text-xs">Remuneração baseada em resultados e metas alcançadas</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">•</span>
                  <div>
                    <p className="font-medium">Consultoria</p>
                    <p className="text-gray-500 text-xs">Assessoria estratégica para equipes internas</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-poppins font-medium mb-3 text-integrare-blue">Processo de Onboarding</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">1.</span>
                  <div>
                    <p className="font-medium">Reunião de Descoberta</p>
                    <p className="text-gray-500 text-xs">Entendimento profundo do negócio, objetivos e desafios</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">2.</span>
                  <div>
                    <p className="font-medium">Diagnóstico Digital</p>
                    <p className="text-gray-500 text-xs">Análise da presença digital atual e oportunidades</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">3.</span>
                  <div>
                    <p className="font-medium">Proposta Estratégica</p>
                    <p className="text-gray-500 text-xs">Apresentação do plano de ação personalizado</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-integrare-blue mr-2 font-bold">4.</span>
                  <div>
                    <p className="font-medium">Implementação</p>
                    <p className="text-gray-500 text-xs">Início das ações com acompanhamento constante</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-poppins font-medium mb-3 text-integrare-blue">
            Gestão de Projetos e Comunicação
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-medium text-gray-700">Ferramentas de Gestão</p>
              <p className="text-gray-500">
                Utilizamos plataformas como Asana, Trello e Monday para garantir transparência e eficiência na gestão
                dos projetos.
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Relatórios Periódicos</p>
              <p className="text-gray-500">
                Enviamos relatórios detalhados quinzenais ou mensais com análise de resultados e próximos passos.
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Reuniões de Alinhamento</p>
              <p className="text-gray-500">
                Realizamos reuniões periódicas para apresentação de resultados e ajustes estratégicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
