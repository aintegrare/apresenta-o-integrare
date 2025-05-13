import { DownloadPdfButton } from "./download-pdf-button"
import Link from "next/link"

export function SlideCapa() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="mb-8">
          <Link href="/windows95" className="no-underline">
            <img src="/images/logo_integrare_full.png" alt="Agência Integrare" className="h-32 mx-auto" />
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-[#4b7bb5]">Agência Integrare</h1>
        <h2 className="text-2xl mb-8 text-gray-700">Marketing Digital & Estratégias de Negócios</h2>

        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-lg mb-4">
            Fundada em 2020, a Integrare nasceu com a missão de levar Marketing de Qualidade, baseado em evidências
            científicas e casos práticos de sucesso.
          </p>
          <p className="text-lg">
            Tratamos os negócios dos nossos clientes como se fossem o nosso, trabalhamos lado a lado, porque nosso
            compromisso é com os resultados que entregamos.
          </p>
        </div>

        <div className="mb-8">
          <DownloadPdfButton />
        </div>
      </div>

      <footer className="p-4 bg-gray-100 text-center">
        <p className="text-sm text-gray-600">© 2023 Agência Integrare. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
