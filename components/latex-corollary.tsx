import type React from "react"

interface LatexCorollaryProps {
  children: React.ReactNode
  title: string
  number?: number
}

export default function LatexCorollary({ children, title, number }: LatexCorollaryProps) {
  return (
    <div className="my-6 p-4 bg-purple-50 border-l-4 border-purple-600">
      <p className="font-bold mb-2">
        Corolário {number}: {title}
      </p>
      <div className="italic">{children}</div>
    </div>
  )
}
