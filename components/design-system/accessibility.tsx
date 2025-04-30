export default function Accessibility() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Contraste de Cores</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-4 bg-integrare-blue text-white">
              <div className="flex justify-between items-center">
                <span className="font-medium">Texto branco em fundo azul</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Aprovado WCAG AAA</span>
              </div>
              <p className="mt-2">Este texto tem contraste suficiente para leitura.</p>
            </div>
            <div className="p-4 bg-white">
              <div className="flex justify-between items-center">
                <span className="font-medium text-integrare-blue">Texto azul em fundo branco</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Aprovado WCAG AAA</span>
              </div>
              <p className="mt-2 text-integrare-blue">Este texto tem contraste suficiente para leitura.</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-4 bg-[#FFF8E1]">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">Texto escuro em fundo amarelo claro</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Aprovado WCAG AA</span>
              </div>
              <p className="mt-2 text-gray-800">Este texto tem contraste suficiente para leitura.</p>
            </div>
            <div className="p-4 bg-[#FFF8E1]">
              <div className="flex justify-between items-center">
                <span className="font-medium text-integrare-blue">Texto azul em fundo amarelo claro</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Aprovado WCAG AA</span>
              </div>
              <p className="mt-2 text-integrare-blue">Este texto tem contraste suficiente para leitura.</p>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Diretrizes de Contraste</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Mantenha uma proporção de contraste mínima de 4.5:1 para texto normal (WCAG AA)</li>
            <li>Para texto grande (18pt ou 14pt bold), mantenha uma proporção de contraste mínima de 3:1</li>
            <li>
              Para elementos não textuais importantes, como ícones, mantenha uma proporção de contraste mínima de 3:1
            </li>
            <li>Evite usar cores como único meio de transmitir informações</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Foco e Navegação por Teclado</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg overflow-hidden p-6">
            <h4 className="font-medium text-gray-900 mb-4">Indicadores de Foco</h4>
            <div className="space-y-4">
              <button className="bg-integrare-blue text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-integrare-blue">
                Botão com indicador de foco
              </button>
              <div>
                <label htmlFor="focus-example" className="block text-sm font-medium text-gray-700 mb-1">
                  Campo com indicador de foco
                </label>
                <input
                  type="text"
                  id="focus-example"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-integrare-blue focus:border-integrare-blue"
                />
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden p-6">
            <h4 className="font-medium text-gray-900 mb-4">Ordem de Tabulação</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                A ordem de tabulação deve seguir o fluxo natural de leitura, geralmente de cima para baixo e da esquerda
                para a direita.
              </p>
              <div className="flex flex-col space-y-2">
                <button className="bg-integrare-blue text-white px-4 py-2 rounded">1. Primeiro botão</button>
                <button className="bg-integrare-blue text-white px-4 py-2 rounded">2. Segundo botão</button>
                <button className="bg-integrare-blue text-white px-4 py-2 rounded">3. Terceiro botão</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Diretrizes de Navegação</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Todos os elementos interativos devem ser acessíveis via teclado</li>
            <li>O indicador de foco deve ser claramente visível</li>
            <li>A ordem de tabulação deve ser lógica e seguir o fluxo visual da página</li>
            <li>Evite armadilhas de foco que impeçam o usuário de navegar para fora de um elemento</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Texto Alternativo para Imagens</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="bg-gray-200 h-40 rounded-lg mb-2 flex items-center justify-center">
                <span className="text-gray-500">Imagem de exemplo</span>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <h5 className="text-green-800 font-medium text-sm">Bom exemplo de texto alternativo:</h5>
                <code className="text-sm bg-green-100 px-2 py-1 rounded">
                  alt="Equipe da Integrare reunida em uma sessão de brainstorming"
                </code>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 h-40 rounded-lg mb-2 flex items-center justify-center">
                <span className="text-gray-500">Imagem de exemplo</span>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <h5 className="text-red-800 font-medium text-sm">Mau exemplo de texto alternativo:</h5>
                <code className="text-sm bg-red-100 px-2 py-1 rounded">alt="Imagem" ou alt=""</code>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Diretrizes para Texto Alternativo</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Forneça texto alternativo descritivo para todas as imagens informativas</li>
            <li>Mantenha o texto alternativo conciso e relevante</li>
            <li>Para imagens decorativas, use alt="" para que leitores de tela as ignorem</li>
            <li>Para imagens complexas, forneça descrições mais detalhadas no contexto</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Formulários Acessíveis</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="name-accessible" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name-accessible"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-integrare-blue focus:border-integrare-blue"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="email-accessible" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email-accessible"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-integrare-blue focus:border-integrare-blue"
                aria-required="true"
                aria-describedby="email-hint"
              />
              <p id="email-hint" className="mt-1 text-sm text-gray-500">
                Nunca compartilharemos seu email com terceiros.
              </p>
            </div>
            <div>
              <fieldset>
                <legend className="text-sm font-medium text-gray-700 mb-1">Preferências de contato</legend>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="contact-email"
                      name="contact-method"
                      type="radio"
                      className="h-4 w-4 text-integrare-blue focus:ring-integrare-blue border-gray-300"
                    />
                    <label htmlFor="contact-email" className="ml-2 block text-sm text-gray-700">
                      Email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="contact-phone"
                      name="contact-method"
                      type="radio"
                      className="h-4 w-4 text-integrare-blue focus:ring-integrare-blue border-gray-300"
                    />
                    <label htmlFor="contact-phone" className="ml-2 block text-sm text-gray-700">
                      Telefone
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <div>
              <button
                type="submit"
                className="bg-integrare-blue text-white px-4 py-2 rounded hover:bg-[#0a4a7a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-integrare-blue"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="mt-4 bg-white p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Diretrizes para Formulários</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Use elementos label associados a cada campo de formulário</li>
            <li>Forneça instruções claras e mensagens de erro</li>
            <li>Use atributos ARIA quando necessário para melhorar a acessibilidade</li>
            <li>Agrupe campos relacionados com fieldset e legend</li>
            <li>Garanta que os formulários possam ser preenchidos usando apenas o teclado</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
