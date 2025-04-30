"use client"

import { useState } from "react"

export default function Animations() {
  const [isHovering1, setIsHovering1] = useState(false)
  const [isHovering2, setIsHovering2] = useState(false)
  const [isHovering3, setIsHovering3] = useState(false)
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Transições de Hover</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-lg cursor-pointer"
            onMouseEnter={() => setIsHovering1(true)}
            onMouseLeave={() => setIsHovering1(false)}
          >
            <h4 className="font-medium text-gray-900 mb-2">Transição de Sombra</h4>
            <p className="text-sm text-gray-600 mb-4">
              Esta transição adiciona uma sombra suave ao passar o mouse, criando um efeito de elevação.
            </p>
            <div className="text-xs text-gray-500">{isHovering1 ? "Estado: Hover" : "Estado: Normal"}</div>
          </div>

          <div
            className="border border-gray-200 rounded-lg p-6 cursor-pointer"
            onMouseEnter={() => setIsHovering2(true)}
            onMouseLeave={() => setIsHovering2(false)}
          >
            <h4 className="font-medium text-gray-900 mb-2">Transição de Cor</h4>
            <div
              className={`h-20 rounded-md transition-colors duration-300 ${
                isHovering2 ? "bg-integrare-blue" : "bg-gray-200"
              }`}
            ></div>
            <p className="text-sm text-gray-600 mt-4">
              Esta transição altera suavemente a cor de fundo ao passar o mouse.
            </p>
          </div>

          <div
            className="border border-gray-200 rounded-lg p-6 cursor-pointer overflow-hidden"
            onMouseEnter={() => setIsHovering3(true)}
            onMouseLeave={() => setIsHovering3(false)}
          >
            <h4 className="font-medium text-gray-900 mb-2">Transição de Escala</h4>
            <div className="h-20 bg-gray-200 rounded-md overflow-hidden">
              <div
                className={`h-full w-full bg-[#FFF8E1] transition-transform duration-300 ${
                  isHovering3 ? "scale-110" : "scale-100"
                }`}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Esta transição aumenta suavemente o tamanho do elemento ao passar o mouse.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Animações de Estado</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Animação de Carregamento</h4>
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 rounded-full border-4 border-gray-200 border-t-integrare-blue animate-spin"></div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-integrare-blue rounded-full animate-pulse" style={{ width: "60%" }}></div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Animações de carregamento fornecem feedback visual enquanto o conteúdo está sendo carregado.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Animação de Transição de Estado</h4>
            <div className="flex flex-col items-center">
              <button
                onClick={() => setIsActive(!isActive)}
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  isActive ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                {isActive ? "Ativo" : "Inativo"}
              </button>
              <div
                className={`mt-4 h-20 w-full rounded-md transition-all duration-500 ease-in-out ${
                  isActive ? "bg-green-100 scale-100" : "bg-gray-100 scale-95 opacity-70"
                }`}
              >
                <div className="h-full w-full flex items-center justify-center">
                  <span className={`transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}>
                    Conteúdo visível quando ativo
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Animações de transição de estado ajudam a visualizar mudanças de estado em componentes interativos.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Diretrizes de Animação</h3>
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Princípios Gerais</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                <li>Use animações com propósito, não apenas por estética</li>
                <li>Mantenha as animações sutis e não intrusivas</li>
                <li>Garanta que as animações não causem distração</li>
                <li>Use timing apropriado: 200-300ms para transições rápidas, 300-500ms para transições médias</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Acessibilidade</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                <li>Respeite as preferências do usuário para movimento reduzido (prefers-reduced-motion)</li>
                <li>Evite animações que pisquem mais de três vezes por segundo</li>
                <li>Não dependa apenas de animações para transmitir informações importantes</li>
                <li>Garanta que as animações não impeçam a interação do usuário</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-[#FFF8E1] rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Código de Exemplo</h4>
            <pre className="text-xs bg-white p-3 rounded border border-gray-200 overflow-x-auto">
              {`.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.hover\\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
