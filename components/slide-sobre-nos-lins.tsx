import SlideLayout from "./slide-layout"
import { Calendar, Users, Award, Target } from "lucide-react"

export default function SlideSobreNosLins() {
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
            hoje oferecemos um ecossistema completo de serviços de marketing digital.
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
            mostrar isso para o mundo.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center mb-2">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-integrare-blue mr-2" aria-hidden="true" />
            <h3 className="text-base sm:text-lg font-poppins font-medium">Nossa Visão</h3>
          </div>
          <p className="text-sm sm:text-base text-gray-600 font-inter">
            Marketing é o meio mais barato de geração de negócios de alto valor, é o meio pelo qual conquistamos nossa
            autoridade e conquistamos a confiança do público. Nosso objetivo é que nossos clientes tenham confiança e
            seus concorrentes sintam ansiedade quando pensarem em sua marca.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center mb-2">
            <Target className="w-4 h-4 sm:w-5 sm:h-5 text-integrare-blue mr-2" aria-hidden="true" />
            <h3 className="text-base sm:text-lg font-poppins font-medium">Nossos Valores</h3>
          </div>
          <p className="text-sm sm:text-base text-gray-600 font-inter">
            Inovação constante, excelência em resultados e transparência são os pilares que sustentam nosso trabalho.
            Acreditamos que instituições com propósito merecem estratégias de comunicação que ampliem seu impacto e
            fortaleçam sua missão na sociedade.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
