import SlideLayout from "./slide-layout"
import { Quote } from "lucide-react"

export default function SlideDepoimentos() {
  return (
    <SlideLayout title="Depoimentos">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Depoimento 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-amber-50 p-4">
              <div className="flex items-center">
                <Quote className="w-6 h-6 text-amber-500 mr-2" />
                <h3 className="text-lg font-medium text-gray-800">João S.</h3>
              </div>
              <p className="text-sm text-gray-500">Produtor Rural, Umuarama/PR</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 italic">
                "Achei que minha situação era impossível de resolver, mas o Medeiros Advogados cuidou de tudo com
                eficiência e transparência. Hoje tenho a tranquilidade de uma propriedade 100% regularizada."
              </p>
            </div>
          </div>

          {/* Depoimento 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-amber-50 p-4">
              <div className="flex items-center">
                <Quote className="w-6 h-6 text-amber-500 mr-2" />
                <h3 className="text-lg font-medium text-gray-800">Maria L.</h3>
              </div>
              <p className="text-sm text-gray-500">Proprietária Rural, Icaraíma/PR</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 italic">
                "Minha família estava prestes a perder terras que estão conosco há três gerações. A equipe do Medeiros
                foi incansável na busca por soluções e conseguiu regularizar nossa situação em tempo recorde."
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
