import SlideLayout from "../slide-layout"

interface SlideFormsProps {
  slideNumber: number
  totalSlides: number
}

export default function SlideForms({ slideNumber, totalSlides }: SlideFormsProps) {
  return (
    <SlideLayout title="Formulários" section="Componentes" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-medium mb-4">Campos de Entrada</h3>

          <div className="space-y-6 bg-white rounded-lg p-6 border border-gray-200">
            <div className="space-y-2">
              <label htmlFor="default" className="block text-sm font-medium text-gray-700">
                Campo Padrão
              </label>
              <input
                type="text"
                id="default"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4b7bb5] focus:border-[#4b7bb5]"
                placeholder="Digite aqui"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="disabled" className="block text-sm font-medium text-gray-700">
                Campo Desabilitado
              </label>
              <input
                type="text"
                id="disabled"
                disabled
                className="mt-1 block w-full px-3 py-2 border border-gray-200 bg-gray-100 rounded-md shadow-sm text-gray-500"
                placeholder="Campo desabilitado"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="error" className="block text-sm font-medium text-red-700">
                Campo com Erro
              </label>
              <input
                type="text"
                id="error"
                className="mt-1 block w-full px-3 py-2 border border-red-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                placeholder="Digite aqui"
              />
              <p className="mt-1 text-sm text-red-600">Este campo é obrigatório</p>
            </div>

            <div className="space-y-2">
              <label htmlFor="success" className="block text-sm font-medium text-green-700">
                Campo com Sucesso
              </label>
              <input
                type="text"
                id="success"
                className="mt-1 block w-full px-3 py-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Digite aqui"
                value="Valor válido"
                readOnly
              />
              <p className="mt-1 text-sm text-green-600">Campo validado com sucesso</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">Seletores</h3>

          <div className="space-y-6 bg-white rounded-lg p-6 border border-gray-200">
            <div className="space-y-2">
              <label htmlFor="select" className="block text-sm font-medium text-gray-700">
                Select
              </label>
              <select
                id="select"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4b7bb5] focus:border-[#4b7bb5]"
              >
                <option>Opção 1</option>
                <option>Opção 2</option>
                <option>Opção 3</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Checkbox</label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    id="checkbox-1"
                    type="checkbox"
                    className="h-4 w-4 text-[#4b7bb5] focus:ring-[#4b7bb5] border-gray-300 rounded"
                  />
                  <label htmlFor="checkbox-1" className="ml-2 block text-sm text-gray-700">
                    Opção 1
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="checkbox-2"
                    type="checkbox"
                    className="h-4 w-4 text-[#4b7bb5] focus:ring-[#4b7bb5] border-gray-300 rounded"
                  />
                  <label htmlFor="checkbox-2" className="ml-2 block text-sm text-gray-700">
                    Opção 2
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Radio</label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    id="radio-1"
                    name="radio-group"
                    type="radio"
                    className="h-4 w-4 text-[#4b7bb5] focus:ring-[#4b7bb5] border-gray-300"
                  />
                  <label htmlFor="radio-1" className="ml-2 block text-sm text-gray-700">
                    Opção 1
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="radio-2"
                    name="radio-group"
                    type="radio"
                    className="h-4 w-4 text-[#4b7bb5] focus:ring-[#4b7bb5] border-gray-300"
                  />
                  <label htmlFor="radio-2" className="ml-2 block text-sm text-gray-700">
                    Opção 2
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="textarea" className="block text-sm font-medium text-gray-700">
                Textarea
              </label>
              <textarea
                id="textarea"
                rows={3}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4b7bb5] focus:border-[#4b7bb5]"
                placeholder="Digite seu texto aqui"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="col-span-2 bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-medium mb-4">Diretrizes de Acessibilidade</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Estrutura e Rotulagem</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Use elementos label associados a cada campo de formulário</li>
                <li>Forneça instruções claras e mensagens de erro descritivas</li>
                <li>Agrupe campos relacionados com fieldset e legend</li>
                <li>Indique claramente quais campos são obrigatórios</li>
                <li>Mantenha uma ordem de tabulação lógica</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Feedback e Validação</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Forneça feedback imediato sobre erros de validação</li>
                <li>Use cores e ícones para reforçar mensagens, mas não dependa apenas deles</li>
                <li>Permita que os usuários corrijam erros facilmente</li>
                <li>Mantenha os dados inseridos mesmo após erros de validação</li>
                <li>Forneça mensagens de sucesso claras após o envio bem-sucedido</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
