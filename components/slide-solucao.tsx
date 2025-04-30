import SlideLayout from "./slide-layout"
import { CheckCircle, Award, Clock, Users } from "lucide-react"
import Image from "next/image"

export default function SlideSolucao() {
  return (
    <SlideLayout title="Nossa Solução">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="relative h-64 md:h-auto">
          <Image
            src="/placeholder.svg?height=400&width=600&text=Propriedade rural"
            alt="Propriedade rural"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute bottom-0 right-0 bg-white bg-opacity-75 p-2 text-xs text-gray-500">
            Fonte: Ilustrativo
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center mb-4">
            <CheckCircle className="w-5 h-5 text-[#002B5B] mr-2" />
            <h3 className="text-lg font-poppins font-medium">Por que escolher o Medeiros Advogados?</h3>
          </div>

          <ul className="space-y-4 font-inter text-gray-600">
            <li className="flex items-start">
              <Award className="w-4 h-4 text-[#002B5B] mr-2 mt-1 flex-shrink-0" />
              <p className="text-sm">
                <span className="font-medium">Experiência comprovada:</span> Mais de 10 anos dedicados exclusivamente à
                regularização de propriedades em faixa de fronteira.
              </p>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-[#002B5B] mr-2 mt-1 flex-shrink-0" />
              <p className="text-sm">
                <span className="font-medium">Abordagem integrada:</span> Somos o único escritório da região
                especializado na intersecção entre direito ambiental e imobiliário.
              </p>
            </li>
            <li className="flex items-start">
              <Clock className="w-4 h-4 text-[#002B5B] mr-2 mt-1 flex-shrink-0" />
              <p className="text-sm">
                <span className="font-medium">Metodologia eficiente:</span> Nosso processo otimizado reduz o tempo de
                regularização e aumenta as chances de sucesso.
              </p>
            </li>
            <li className="flex items-start">
              <Users className="w-4 h-4 text-[#002B5B] mr-2 mt-1 flex-shrink-0" />
              <p className="text-sm">
                <span className="font-medium">Atendimento personalizado:</span> Cada propriedade é única e merece uma
                estratégia específica.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 bg-blue-50 p-6 rounded-lg max-w-3xl mx-auto">
        <h4 className="font-medium text-[#002B5B] mb-4 text-center">Nosso compromisso</h4>
        <p className="text-center text-gray-600">
          Não prometemos milagres nem soluções mágicas. Oferecemos conhecimento técnico especializado, experiência
          comprovada e um compromisso inabalável com a proteção do seu patrimônio.
        </p>
      </div>
    </SlideLayout>
  )
}
