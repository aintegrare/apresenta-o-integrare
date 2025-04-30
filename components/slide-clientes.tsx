import SlideLayout from "./slide-layout"
import Image from "next/image"

export default function SlideClientes() {
  // Array com os logos dos clientes reais
  const logos = [
    {
      id: 1,
      src: "/images/logo_medeiros.png",
      alt: "Medeiros Advogados",
      categoria: "servicos",
    },
    {
      id: 2,
      src: "/images/logo_mateus_dias.png",
      alt: "Mateus Dias Arquitetura e Interiores",
      categoria: "servicos",
    },
    {
      id: 3,
      src: "/images/logo_cora.png",
      alt: "Cora Brasil",
      categoria: "saude",
    },
    {
      id: 4,
      src: "/images/logo_sparksales.png",
      alt: "Spark Sales",
      categoria: "tecnologia",
    },
    {
      id: 5,
      src: "/images/logo_ana.png",
      alt: "ANA Cosméticos",
      categoria: "servicos",
    },
    {
      id: 6,
      src: "/images/logo_billions.png",
      alt: "Billions Terceirização e Intermediação",
      categoria: "servicos",
    },
    {
      id: 7,
      src: "/images/logo_dra_vanessa.png",
      alt: "Dra. Vanessa Delmiro Cardiologista",
      categoria: "saude",
    },
    {
      id: 8,
      src: "/images/logo_conexao_digital_horizontal.png",
      alt: "Conexão Digital",
      categoria: "tecnologia",
    },
    {
      id: 9,
      src: "/images/logo_eee_new.png",
      alt: "EEE Dental Componentes",
      categoria: "saude",
    },
    {
      id: 10,
      src: "/images/logo_lydian_mendes.png",
      alt: "Lydian Mendes Personal Trainer",
      categoria: "saude",
    },
    {
      id: 11,
      src: "/images/logo_jonric.png",
      alt: "JonRic Medical Spa Boca Raton",
      categoria: "saude",
    },
    {
      id: 12,
      src: "/images/logo_eletroritz.png",
      alt: "Eletroritz",
      categoria: "tecnologia",
    },
    {
      id: 13,
      src: "/images/logo_clinica_lupe.png",
      alt: "Clínica Lupe PSA Estética Avançada",
      categoria: "saude",
    },
    {
      id: 14,
      src: "/images/logo_wood4all.png",
      alt: "Wood 4 All Marcenaria",
      categoria: "servicos",
    },
    {
      id: 15,
      src: "/images/logo_biomedico.png",
      alt: "Central do Biomédico",
      categoria: "saude",
    },
    {
      id: 16,
      src: "/images/logo_eletro_beltrao.png",
      alt: "Eletro Beltrão",
      categoria: "tecnologia",
    },
    {
      id: 17,
      src: "/images/logo_portal_cidade.png",
      alt: "Portal da Cidade Paranavaí",
      categoria: "tecnologia",
    },
    {
      id: 18,
      src: "/images/logo_espaco_chic.png",
      alt: "Espaço Chic Boutique",
      categoria: "servicos",
    },
    {
      id: 19,
      src: "/images/logo_cacau_show.png",
      alt: "Cacau Show Paraíso do Norte",
      categoria: "servicos",
    },
    // Novos logos adicionados
    {
      id: 20,
      src: "/images/logo_casa_automovel.png",
      alt: "Casa do Automóvel Películas",
      categoria: "servicos",
    },
    {
      id: 21,
      src: "/images/logo_espaco_chic_novo.png",
      alt: "Espaço Chic Boutique (Nova Identidade)",
      categoria: "servicos",
    },
    {
      id: 22,
      src: "/images/logo_cacau_show_novo.png",
      alt: "Cacau Show Paraíso do Norte (Nova Identidade)",
      categoria: "servicos",
    },
    {
      id: 23,
      src: "/images/logo_marina_regiani.png",
      alt: "Marina Regiani Saúde e Estética Dental",
      categoria: "saude",
    },
    {
      id: 24,
      src: "/images/logo_sanches_viagens.png",
      alt: "Sanches Viagens",
      categoria: "servicos",
    },
    {
      id: 25,
      src: "/images/logo_yidam.png",
      alt: "Yidam Medicina e Odontologia",
      categoria: "saude",
    },
    // Logo mais recente
    {
      id: 26,
      src: "/images/logo_youmais.png",
      alt: "YouMais",
      categoria: "tecnologia",
    },
    // Adicionando os dois novos logos
    {
      id: 27,
      src: "/images/logo_carla_mendes.png",
      alt: "Carla Mendes",
      categoria: "moda",
    },
    {
      id: 28,
      src: "/images/logo_de_pieri.png",
      alt: "DE PIERI",
      categoria: "moda",
    },
  ]

  // Remover a função getLogosByCategory que não será mais necessária
  // Modificar o return para remover as seções por categoria

  // Substitua todo o conteúdo do return por:
  return (
    <SlideLayout title="6. Nossos Clientes">
      <div className="max-w-5xl mx-auto">
        {/* Grid de logos com rolagem horizontal em telas menores */}
        <div className="overflow-x-auto pb-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 min-w-max sm:min-w-0">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center p-4 bg-white rounded-lg w-36 h-24 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-gray-500 font-inter text-sm">
            Atendemos empresas de diversos portes e segmentos, desde startups até grandes corporações. Nossa experiência
            multissetorial nos permite compreender as particularidades de cada mercado e desenvolver estratégias
            personalizadas para cada cliente.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
