export default function Forms() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Campos de Texto</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="default" className="block text-sm font-medium text-gray-700">
              Campo Padrão
            </label>
            <input
              type="text"
              id="default"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-integrare-blue focus:border-integrare-blue"
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
        <h3 className="text-lg font-semibold mb-3">Seletores</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="select" className="block text-sm font-medium text-gray-700">
              Select
            </label>
            <select
              id="select"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-integrare-blue focus:border-integrare-blue"
            >
              <option>Opção 1</option>
              <option>Opção 2</option>
              <option>Opção 3</option>
            </select>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Checkbox</label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  className="h-4 w-4 text-integrare-blue focus:ring-integrare-blue border-gray-300 rounded"
                />
                <label htmlFor="checkbox-1" className="ml-2 block text-sm text-gray-700">
                  Opção 1
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="checkbox-2"
                  type="checkbox"
                  className="h-4 w-4 text-integrare-blue focus:ring-integrare-blue border-gray-300 rounded"
                />
                <label htmlFor="checkbox-2" className="ml-2 block text-sm text-gray-700">
                  Opção 2
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Radio</label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  id="radio-1"
                  name="radio-group"
                  type="radio"
                  className="h-4 w-4 text-integrare-blue focus:ring-integrare-blue border-gray-300"
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
                  className="h-4 w-4 text-integrare-blue focus:ring-integrare-blue border-gray-300"
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
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-integrare-blue focus:border-integrare-blue"
              placeholder="Digite seu texto aqui"
            ></textarea>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Formulário Completo</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-integrare-blue focus:border-integrare-blue"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-integrare-blue focus:border-integrare-blue"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-integrare-blue focus:border-integrare-blue"
                placeholder="Assunto da mensagem"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={6}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-integrare-blue focus:border-integrare-blue"
                placeholder="Digite sua mensagem aqui"
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-integrare-blue focus:ring-integrare-blue border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                Concordo com os termos e condições
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="bg-integrare-blue hover:bg-[#0a4a7a] text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
