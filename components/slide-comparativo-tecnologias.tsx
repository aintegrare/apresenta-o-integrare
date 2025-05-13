import SlideLayout from "./slide-layout"
import { Check, X } from "lucide-react"

export default function SlideComparativoTecnologias() {
  return (
    <SlideLayout title="Comparativo Técnico das Tecnologias">
      <div className="max-w-5xl mx-auto">
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-gray-700 font-medium w-1/3">Recursos</th>
                <th className="px-6 py-4 text-center text-[#4b7bb5] font-medium">
                  Next.js com Turbopack
                  <div className="text-xs font-normal text-gray-500 mt-1">Opção Premium</div>
                </th>
                <th className="px-6 py-4 text-center text-gray-700 font-medium">
                  Astro com React
                  <div className="text-xs font-normal text-gray-500 mt-1">Opção Padrão</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-6 py-4 text-gray-700">Renderização Híbrida (SSR/SSG)</td>
                <td className="px-6 py-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center">
                  <X className="h-5 w-5 text-red-400 mx-auto" />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-gray-700">Tempo de carregamento inicial</td>
                <td className="px-6 py-4 text-center font-medium text-[#4b7bb5]">Ultrarrápido</td>
                <td className="px-6 py-4 text-center font-medium text-gray-700">Rápido</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 text-gray-700">Suporte a APIs e integrações avançadas</td>
                <td className="px-6 py-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-amber-500 text-xs font-medium">Limitado</span>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-gray-700">Otimização automática de imagens</td>
                <td className="px-6 py-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 text-gray-700">Funcionalidades dinâmicas (formulários, área de clientes)</td>
                <td className="px-6 py-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-amber-500 text-xs font-medium">Básico</span>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-gray-700">Escalabilidade para crescimento futuro</td>
                <td className="px-6 py-4 text-center font-medium text-[#4b7bb5]">Excelente</td>
                <td className="px-6 py-4 text-center font-medium text-gray-700">Moderada</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 text-gray-700">Suporte a múltiplos idiomas</td>
                <td className="px-6 py-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-amber-500 text-xs font-medium">Possível, mas complexo</span>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-gray-700">Facilidade de atualizações futuras</td>
                <td className="px-6 py-4 text-center font-medium text-[#4b7bb5]">Alta</td>
                <td className="px-6 py-4 text-center font-medium text-gray-700">Média</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-[#4b7bb5]/10 p-5 rounded-lg">
          <h3 className="text-lg font-medium text-[#4b7bb5] mb-2">Por que o Next.js é a escolha premium?</h3>
          <p className="text-gray-700 mb-3">
            O Next.js é a tecnologia escolhida por escritórios de advocacia de elite e grandes empresas globais devido à
            sua capacidade de oferecer experiências digitais superiores. Com o Turbopack, a mais recente inovação da
            Vercel, seu site terá performance até 700x mais rápida que tecnologias convencionais.
          </p>
          <p className="text-gray-700">
            Para profissionais do Direito que valorizam excelência e precisam transmitir confiabilidade, o Next.js
            proporciona uma experiência digital que reflete o mesmo nível de qualidade dos serviços jurídicos prestados.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
