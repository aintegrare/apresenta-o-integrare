import SlideLayout from "../slide-layout"

interface SlideCardsProps {
  slideNumber: number
  totalSlides: number
}

export default function SlideCards({ slideNumber, totalSlides }: SlideCardsProps) {
  return (
    <SlideLayout title="Cards" section="Componentes" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-1 gap-8">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-3">
            <h3 className="text-xl font-medium mb-4">Tipos de Cards</h3>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
            <div className="h-40 bg-[#4b7bb5] flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-[#4b7bb5] rounded"></div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-poppins font-medium text-lg mb-2 text-gray-800">Card de Serviço</h4>
              <p className="text-gray-600 mb-4">
                Ideal para destacar serviços ou recursos com ícone, título e descrição.
              </p>
              <a href="#" className="text-[#4b7bb5] font-medium flex items-center">
                Saiba mais
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#E6EEF7] rounded-full flex items-center justify-center text-[#4b7bb5] font-medium mr-4">
                JD
              </div>
              <div>
                <h5 className="font-medium text-gray-800">João da Silva</h5>
                <p className="text-sm text-gray-500">CEO, Empresa ABC</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "A Integrare transformou completamente nossa presença digital. A equipe é extremamente profissional."
            </p>
            <div className="flex text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <p className="text-sm text-gray-500 uppercase tracking-wider">Estatísticas</p>
            <p className="text-3xl font-poppins font-semibold mt-1 text-[#4b7bb5]">95%</p>
            <p className="text-sm text-gray-600 mt-2">Taxa de retenção de clientes</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-medium mb-4">Estados dos Cards</h3>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Estado Padrão</h4>
                <p className="text-sm text-gray-600">Aparência normal do card sem interações.</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg shadow-md">
                <h4 className="font-medium text-gray-800 mb-2">Estado Hover</h4>
                <p className="text-sm text-gray-600">Aparência quando o cursor está sobre o card.</p>
              </div>
              <div className="p-4 border border-[#4b7bb5] rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Estado Selecionado</h4>
                <p className="text-sm text-gray-600">Aparência quando o card está selecionado.</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <h4 className="font-medium text-gray-400 mb-2">Estado Desabilitado</h4>
                <p className="text-sm text-gray-400">Aparência quando o card está desabilitado.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-medium mb-4">Diretrizes de Uso</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Use cards para agrupar informações relacionadas</li>
              <li>Mantenha a consistência no tamanho e espaçamento dos cards</li>
              <li>Utilize sombras sutis para criar hierarquia visual</li>
              <li>Adicione interatividade quando o card for clicável</li>
              <li>Garanta que o conteúdo dentro do card seja bem organizado</li>
              <li>Mantenha o contraste adequado entre o conteúdo e o fundo</li>
              <li>Evite sobrecarregar os cards com informações excessivas</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
