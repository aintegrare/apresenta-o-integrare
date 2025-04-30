import SlideLayout from "./slide-layout"
import { Zap, Users, BarChart, Clock, Shield, Award } from "lucide-react"

export default function SlideDiferenciais() {
  const diferenciais = [
    {
      icon: <Zap className="w-4 h-4 text-integrare-blue" />,
      title: "Agilidade e Adaptabilidade",
      desc: "Processos ágeis que permitem adaptação rápida às mudanças do mercado",
    },
    {
      icon: <Users className="w-4 h-4 text-integrare-blue" />,
      title: "Equipe Especializada",
      desc: "Profissionais certificados e constantemente atualizados nas últimas tendências",
    },
    {
      icon: <BarChart className="w-4 h-4 text-integrare-blue" />,
      title: "Foco em Resultados",
      desc: "Estratégias orientadas por dados com métricas claras e mensuráveis",
    },
    {
      icon: <Clock className="w-4 h-4 text-integrare-blue" />,
      title: "Atendimento Personalizado",
      desc: "Cada cliente tem um gestor dedicado e acesso direto à equipe",
    },
    {
      icon: <Shield className="w-4 h-4 text-integrare-blue" />,
      title: "Transparência Total",
      desc: "Relatórios detalhados e acesso em tempo real às métricas de campanhas",
    },
    {
      icon: <Award className="w-4 h-4 text-integrare-blue" />,
      title: "Metodologia Comprovada",
      desc: "Processo estruturado e testado que garante resultados consistentes",
    },
  ]

  return (
    <SlideLayout title="5. Nossos Diferenciais">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {diferenciais.map((diferencial, index) => (
          <div key={index} className="flex">
            <div className="mr-3 mt-1">{diferencial.icon}</div>
            <div>
              <h3 className="text-base font-poppins font-medium mb-1 text-gray-800">{diferencial.title}</h3>
              <p className="text-sm text-gray-500 font-inter">{diferencial.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center max-w-2xl mx-auto">
        <p className="text-gray-500 font-inter text-sm italic">
          Na Integrare, acreditamos que o sucesso dos nossos clientes é o nosso sucesso. Por isso, trabalhamos
          incansavelmente para entregar resultados que superem expectativas, com transparência, ética e compromisso.
        </p>
      </div>
    </SlideLayout>
  )
}
