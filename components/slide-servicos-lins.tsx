import SlideLayout from "./slide-layout"
import { Search, BarChart, Smartphone, PenTool, Globe, Megaphone } from "lucide-react"

export default function SlideServicosLins() {
  const servicos = [
    {
      icon: <Search className="w-5 h-5 text-integrare-blue" />,
      title: "SEO e Conteúdo",
      desc: "Estratégias de otimização para mecanismos de busca e produção de conteúdo relevante para instituições",
    },
    {
      icon: <BarChart className="w-5 h-5 text-integrare-blue" />,
      title: "Marketing de Impacto",
      desc: "Campanhas focadas em ampliar o alcance e engajamento com a comunidade e potenciais apoiadores",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-integrare-blue" />,
      title: "Gestão de Redes Sociais",
      desc: "Estratégia, criação de conteúdo e gestão de comunidades em plataformas sociais",
    },
    {
      icon: <PenTool className="w-5 h-5 text-integrare-blue" />,
      title: "Design e Branding",
      desc: "Criação e desenvolvimento de identidade visual e materiais gráficos alinhados com a missão institucional",
    },
    {
      icon: <Globe className="w-5 h-5 text-integrare-blue" />,
      title: "Desenvolvimento Web",
      desc: "Criação de sites, portais e plataformas otimizadas para divulgação de projetos e captação de recursos",
    },
    {
      icon: <Megaphone className="w-5 h-5 text-integrare-blue" />,
      title: "Consultoria Estratégica",
      desc: "Análise de comunicação, planejamento e implementação de estratégias digitais para instituições",
    },
  ]

  return (
    <SlideLayout title="2. Nossos Serviços">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {servicos.map((servico, index) => (
          <div key={index} className="flex items-start">
            <div className="mr-3 mt-1">{servico.icon}</div>
            <div>
              <h3 className="text-base font-poppins font-medium mb-1 text-gray-800">{servico.title}</h3>
              <p className="text-sm text-gray-500 font-inter">{servico.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center max-w-2xl mx-auto">
        <p className="text-gray-500 font-inter text-sm">
          Oferecemos soluções completas e personalizadas para instituições, com foco em resultados mensuráveis e
          ampliação do impacto social. Nossa abordagem integrada garante consistência e eficiência em todas as frentes
          de comunicação digital.
        </p>
      </div>
    </SlideLayout>
  )
}
