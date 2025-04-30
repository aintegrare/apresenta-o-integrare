import SlideLayout from "./slide-layout"
import Image from "next/image"

export default function SlidePortfolioLins() {
  return (
    <SlideLayout title="4. Portfólio - Casos de Sucesso">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Caso 1 - Usando imagem real do projeto */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="relative h-48">
              <Image
                src="/images/logo_conexao_digital.png"
                alt="Conexão Digital - Campanha de Conscientização"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-medium text-integrare-blue mb-2">Campanha de Conscientização</h3>
              <p className="text-sm text-gray-600 mb-3">
                Desenvolvimento de campanha digital para instituição educacional que resultou em aumento de 75% no
                engajamento e 40% em novos apoiadores.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-integrare-blue text-xs px-2 py-1 rounded">Estratégia Digital</span>
                <span className="bg-blue-50 text-integrare-blue text-xs px-2 py-1 rounded">Redes Sociais</span>
                <span className="bg-blue-50 text-integrare-blue text-xs px-2 py-1 rounded">Conteúdo</span>
              </div>
            </div>
          </div>

          {/* Caso 2 - Usando imagem real do projeto */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="relative h-48">
              <Image
                src="/images/logo_eee_new.png"
                alt="EEE - Redesenho de Site Institucional"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-medium text-integrare-blue mb-2">Redesenho de Site Institucional</h3>
              <p className="text-sm text-gray-600 mb-3">
                Reformulação completa do site de uma fundação, resultando em aumento de 120% no tempo de permanência e
                60% nas conversões de contato e doações.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-integrare-blue text-xs px-2 py-1 rounded">Desenvolvimento Web</span>
                <span className="bg-blue-50 text-integrare-blue text-xs px-2 py-1 rounded">UX/UI</span>
                <span className="bg-blue-50 text-integrare-blue text-xs px-2 py-1 rounded">SEO</span>
              </div>
            </div>
          </div>

          {/* Caso 3 - Usando imagem real do projeto */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-48 md:h-auto">
                <Image
                  src="/images/logo_integrare_full.png"
                  alt="Integrare - Estratégia de Comunicação Integrada"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-5 md:col-span-2">
                <h3 className="text-lg font-medium text-integrare-blue mb-2">Estratégia de Comunicação Integrada</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Desenvolvimento de estratégia completa para ONG de assistência social, incluindo identidade visual,
                  site, redes sociais e materiais impressos. Os resultados incluíram aumento de 200% na visibilidade
                  online, 85% no engajamento nas redes sociais e 50% em novos voluntários.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-50 text-integrare-blue text-xs px-2 py-1 rounded">Branding</span>
                  <span className="bg-blue-50 text-integrare-blue text-xs px-2 py-1 rounded">Marketing Digital</span>
                  <span className="bg-blue-50 text-integrare-blue text-xs px-2 py-1 rounded">Gestão de Redes</span>
                  <span className="bg-blue-50 text-integrare-blue text-xs px-2 py-1 rounded">Conteúdo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-16 bg-white rounded p-2 flex items-center justify-center">
            <Image
              src="/images/logo_conexao.png"
              alt="Cliente: Conexão"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="relative h-16 bg-white rounded p-2 flex items-center justify-center">
            <Image src="/images/logo_eee.png" alt="Cliente: EEE" width={100} height={50} className="object-contain" />
          </div>
          <div className="relative h-16 bg-white rounded p-2 flex items-center justify-center">
            <Image src="/images/logo_cora.png" alt="Cliente: Cora" width={100} height={50} className="object-contain" />
          </div>
          <div className="relative h-16 bg-white rounded p-2 flex items-center justify-center">
            <Image
              src="/images/logo_portal_cidade.png"
              alt="Cliente: Portal Cidade"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-gray-500 font-inter text-sm">
            Nossos casos de sucesso demonstram nossa capacidade de desenvolver estratégias eficazes para instituições
            com propósito social, gerando resultados mensuráveis e alinhados com a missão de cada organização.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
