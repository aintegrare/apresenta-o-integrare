import type React from "react"

interface LatexExampleProps {
  children: React.ReactNode
  title: string
  number?: number
}

export default function LatexExample({ children, title, number }: LatexExampleProps) {
  return (
    <div className="my-6 p-4 bg-blue-50 border-l-4 border-integrare-blue">
      <p className="font-bold mb-2 text-integrare-blue">
        Exemplo {number}: {title}
      </p>
      <div className="text-gray-700">{children}</div>
    </div>
  )
}
