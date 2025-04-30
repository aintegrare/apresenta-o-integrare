"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CodeSnippetProps {
  title: string
  language: string
  code: string
  description?: string
}

const CodeSnippet = ({ title, language, code, description }: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex justify-between items-center">
        <div>
          <span className="font-medium text-gray-900">{title}</span>
          <span className="ml-2 text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">{language}</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="text-gray-500 hover:text-integrare-blue focus:outline-none"
          aria-label="Copiar código"
        >
          {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
        </button>
      </div>
      <pre className="bg-white p-4 overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
      {description && (
        <div className="bg-gray-50 border-t border-gray-200 px-4 py-3 text-sm text-gray-600">{description}</div>
      )}
    </div>
  )
}

export default function CodeSnippets() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Componentes React</h3>
        <div className="space-y-6">
          <CodeSnippet
            title="Botão Primário"
            language="React/TSX"
            code={`import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ 
  children, 
  onClick, 
  disabled = false, 
  type = 'button' 
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="bg-[#0F5B94] hover:bg-[#0a4a7a] text-white font-medium py-2 px-4 rounded transition-colors disabled:opacity-70"
    >
      {children}
    </button>
  );
};`}
            description="Componente de botão primário com suporte para diferentes tipos, estados desabilitados e manipuladores de clique."
          />

          <CodeSnippet
            title="Card"
            language="React/TSX"
            code={`import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card = ({ title, children, footer }: CardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium text-lg text-gray-900">{title}</h3>
      </div>
      <div className="p-4">
        {children}
      </div>
      {footer && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};`}
            description="Componente de card com cabeçalho, conteúdo e rodapé opcional."
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Utilitários</h3>
        <div className="space-y-6">
          <CodeSnippet
            title="Formatação de Data"
            language="TypeScript"
            code={`/**
 * Formata uma data no padrão brasileiro (DD/MM/YYYY)
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  return d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

/**
 * Formata uma data com hora no padrão brasileiro (DD/MM/YYYY HH:MM)
 */
export function formatDateTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  return d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}`}
            description="Funções utilitárias para formatação de datas no padrão brasileiro."
          />

          <CodeSnippet
            title="Validação de Formulário"
            language="TypeScript"
            code={`/**
 * Valida um endereço de email
 */
export function isValidEmail(email: string): boolean {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

/**
 * Valida um número de telefone brasileiro
 */
export function isValidPhone(phone: string): boolean {
  // Remove caracteres não numéricos
  const digits = phone.replace(/\\D/g, '');
  
  // Verifica se tem entre 10 e 11 dígitos (com ou sem DDD)
  return digits.length >= 10 && digits.length <= 11;
}

/**
 * Valida um CPF
 */
export function isValidCPF(cpf: string): boolean {
  // Remove caracteres não numéricos
  const digits = cpf.replace(/\\D/g, '');
  
  // Verifica se tem 11 dígitos
  if (digits.length !== 11) return false;
  
  // Verifica se todos os dígitos são iguais
  if (/^(\\d)\\1+$/.test(digits)) return false;
  
  // Validação do dígito verificador
  let sum = 0;
  let remainder;
  
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(digits.substring(i - 1, i)) * (11 - i);
  }
  
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(digits.substring(9, 10))) return false;
  
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(digits.substring(i - 1, i)) * (12 - i);
  }
  
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(digits.substring(10, 11))) return false;
  
  return true;
}`}
            description="Funções utilitárias para validação de dados comuns em formulários brasileiros."
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Configuração do Tailwind</h3>
        <div className="space-y-6">
          <CodeSnippet
            title="Configuração de Cores Personalizadas"
            language="JavaScript"
            code={`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'integrare-blue': '#0F5B94',
        'integrare-blue-light': '#4b7bb5',
        'integrare-blue-dark': '#3d649e',
        'integrare-blue-mid': '#4072b0',
        'integrare-blue-pale': '#6b91c1',
        'integrare-accent': '#FFF8E1',
        'integrare-neutral': '#f2f1ef',
      },
    },
  },
  plugins: [],
}`}
            description="Configuração do Tailwind CSS com as cores personalizadas da Integrare."
          />

          <CodeSnippet
            title="Configuração de Fontes Personalizadas"
            language="JavaScript"
            code={`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}`}
            description="Configuração do Tailwind CSS com as fontes personalizadas da Integrare."
          />
        </div>
      </div>
    </div>
  )
}
