import type React from "react"

interface LatexAlgorithmProps {
  children: React.ReactNode
  title: string
  number?: number
}

export default function LatexAlgorithm({ children, title, number }: LatexAlgorithmProps) {
  return (
    <div className="my-6">
      <p className="font-bold mb-2 text-center">
        Algoritmo {number}: {title}
      </p>
      <div className="bg-gray-50 p-4 border border-gray-300 font-mono text-sm whitespace-pre-wrap">{children}</div>
    </div>
  )
}
