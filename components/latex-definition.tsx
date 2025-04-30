import type React from "react"

interface LatexDefinitionProps {
  children: React.ReactNode
  term: string
  number?: number
}

export default function LatexDefinition({ children, term, number }: LatexDefinitionProps) {
  return (
    <div className="my-6 p-4 bg-blue-50 border-l-4 border-integrare-blue">
      <p className="font-bold mb-2 text-integrare-blue">
        Definição {number}: {term}
      </p>
      <p className="italic text-gray-700">{children}</p>
    </div>
  )
}
