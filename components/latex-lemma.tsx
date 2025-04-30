import type React from "react"

interface LatexLemmaProps {
  children: React.ReactNode
  title: string
  number?: number
}

export default function LatexLemma({ children, title, number }: LatexLemmaProps) {
  return (
    <div className="my-6 p-4 bg-green-50 border-l-4 border-green-600">
      <p className="font-bold mb-2">
        Lema {number}: {title}
      </p>
      <div className="italic">{children}</div>
    </div>
  )
}
