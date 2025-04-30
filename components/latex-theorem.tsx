import type React from "react"

interface LatexTheoremProps {
  children: React.ReactNode
  title: string
  number?: number
}

export default function LatexTheorem({ children, title, number }: LatexTheoremProps) {
  return (
    <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-600">
      <p className="font-bold mb-2">
        Teorema {number}: {title}
      </p>
      <div className="italic">{children}</div>
    </div>
  )
}
