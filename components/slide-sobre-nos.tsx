import SlideLayout from "./slide-layout"
import { Calendar, Users, Award, Target } from "lucide-react"

export default function SlideSobreNos() {
  return (
    <SlideLayout title="1. Sobre a Integrare">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto px-2 sm:px-4">
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center mb-2">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-integrare-blue mr-2" aria-hidden="true" />
            <h3 className="text-base sm:text-lg font-poppins font-medium">Nossa História</h3>
          </div>
          <p className="text-sm sm:text-base text-gray-600 font-inter">
            Fundada em 2020, a Integrare nasceu com a missão de levar Marketing de Qualidade, baseado em evidências
            científicas e casos práticos de sucesso. Começamos oferecendo serviços simples de gestão de social media e
            hoje oferecemos um ecossistema completo de serviços de marketing, que inclui todos os aspectos dos negócios
            digitais das empresas.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center mb-2">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-integrare-blue mr-2" aria-hidden="true" />
            <h3 className="text-base sm:text-lg font-poppins font-medium">Nossa Filosofia</h3>
          </div>
          <p className="text-sm sm:text-base text-gray-600 font-inter">
            Tratamos os negócios dos nossos clientes como se fossem o nosso, trabalhamos lado a lado, porque nosso
            compromisso é com os resultados que entregamos. Marketing não é sobre vender mais, é sobre ter propósito e
            mostrar isso para o mundo. É uma ferramenta de reafirmação do porquê viemos e para que estamos aqui.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center mb-2">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-integrare-blue mr-2" aria-hidden="true" />
            <h3 className="text-base sm:text-lg font-poppins font-medium">Nossa Visão</h3>
          </div>
          <p className="text-sm sm:text-base text-gray-600 font-inter">
            Marketing é o meio mais barato de geração de negócios de alto valor, é o meio pelo qual conquistamos nossa
            autoridade e conquistamos a confiança do consumidor e dos concorrentes. Nosso objetivo é que nosso cliente
            tenha confiança e nosso concorrente ansiedade quando pensarem em nós.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center mb-2">
            <Target className="w-4 h-4 sm:w-5 sm:h-5 text-integrare-blue mr-2" aria-hidden="true" />
            <h3 className="text-base sm:text-lg font-poppins font-medium">Missão e Valores</h3>
          </div>
          <p className="text-sm sm:text-base text-gray-600 font-inter">
            Nossos valores são reafirmados diariamente e aplicados em todas as nossas rotinas: inovar, inovar e inovar.
            Mudar para melhor, desenvolver novas ideias e projetos. Conquistar e arriscar novos processos e ferramentas
            - esse é nosso valor fundamental e nosso propósito é levar isso para o mundo.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
