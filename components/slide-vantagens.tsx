import SlideLayout from "./slide-layout"
import { BadgeCheck, DollarSign, FileCheck, Shuffle, ShieldCheck, ThumbsUp } from "lucide-react"

export default function SlideVantagens() {
  const vantagens = [
    {
      icon: <BadgeCheck className="w-4 h-4 text-integrare-blue" />,
      title: "Acesso a Profissionais Especializados",
      desc: "Empresas terceirizadas proporcionam acesso a profissionais treinados e com expertise específica",
    },
    {
      icon: <DollarSign className="w-4 h-4 text-integrare-blue" />,
      title: "Redução de Custos Operacionais",
      desc: "Eliminação de encargos trabalhistas diretos, gerando economia significativa",
    },
    {
      icon: <FileCheck className="w-4 h-4 text-integrare-blue" />,
      title: "Diminuição da Burocracia",
      desc: "A empresa terceirizada assume a responsabilidade por processos burocráticos",
    },
    {
      icon: <Shuffle className="w-4 h-4 text-integrare-blue" />,
      title: "Flexibilidade na Gestão",
      desc: "Possibilidade de ajustar rapidamente o número de profissionais conforme necessidade",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-integrare-blue" />,
      title: "Redução de Riscos Trabalhistas",
      desc: "Transferência dos riscos e responsabilidades trabalhistas para a empresa terceirizada",
    },
    {
      icon: <ThumbsUp className="w-4 h-4 text-integrare-blue" />,
      title: "Melhoria na Qualidade",
      desc: "Especialização dos serviços e maior eficiência operacional, resultando em maior satisfação",
    },
  ]

  return (
    <SlideLayout title="2.2 Vantagens da Terceirização em Condomínios">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {vantagens.map((vantagem, index) => (
          <div key={index} className="flex">
            <div className="mr-3 mt-1">{vantagem.icon}</div>
            <div>
              <h3 className="text-base font-poppins font-medium mb-1 text-gray-800">{vantagem.title}</h3>
              <p className="text-sm text-gray-500 font-inter">{vantagem.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center max-w-2xl mx-auto">
        <p className="text-gray-500 font-inter text-sm italic">
          A terceirização oferece diversas vantagens para os condomínios, desde a redução de custos até o acesso a
          profissionais especializados, contribuindo para uma gestão mais eficiente e profissional.
        </p>
      </div>
    </SlideLayout>
  )
}
