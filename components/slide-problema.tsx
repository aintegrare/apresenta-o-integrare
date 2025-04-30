import SlideLayout from "./slide-layout"
import { AlertTriangle, Clock, MapPin } from "lucide-react"
import Image from "next/image"

export default function SlideProblema() {
  return (
    <SlideLayout title="O Problema">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
            <h3 className="text-lg font-poppins font-medium">Sua propriedade está em risco?</h3>
          </div>

          <ul className="space-y-4 font-inter text-gray-600">
            <li className="flex items-start">
              <MapPin className="w-4 h-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
              <p className="text-sm">
                <span className="font-medium">Localização crítica:</span> Imóveis até 150km da fronteira do Brasil com
                outros países.
              </p>
            </li>
            <li className="flex items-start">
              <Clock className="w-4 h-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
              <p className="text-sm">
                <span className="font-medium">Prazo se esgotando:</span> A Lei 13.178/2015 estabelece outubro de 2025
                como prazo final para regularização.
              </p>
            </li>
          </ul>

          <div className="bg-amber-50 p-4 border-l-4 border-amber-500 mt-6">
            <p className="text-sm font-medium">
              Em especial, proprietários com áreas acima de 15 módulos fiscais enfrentam um processo mais complexo que
              demanda atenção imediata.
            </p>
          </div>
        </div>

        <div className="relative h-64 md:h-auto">
          <Image
            src="/placeholder.svg?height=400&width=600&text=Mapa da faixa de fronteira do Brasil"
            alt="Mapa da faixa de fronteira do Brasil"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute bottom-0 right-0 bg-white bg-opacity-75 p-2 text-xs text-gray-500">
            Fonte: Ilustrativo
          </div>
        </div>
      </div>

      <div className="mt-10 bg-red-50 p-6 rounded-lg max-w-3xl mx-auto">
        <h4 className="font-medium text-red-700 mb-2">Consequências da não regularização:</h4>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <li className="bg-white p-3 rounded border border-red-100">Impossibilidade de transferência do imóvel</li>
          <li className="bg-white p-3 rounded border border-red-100">Restrição a financiamentos rurais</li>
          <li className="bg-white p-3 rounded border border-red-100">Risco de perda da propriedade</li>
        </ul>
      </div>
    </SlideLayout>
  )
}
