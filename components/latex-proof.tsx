import type React from "react"

interface LatexProofProps {
  children: React.ReactNode
}

export default function LatexProof({ children }: LatexProofProps) {
  return (
    <div className="my-6 pl-4 border-l-2 border-gray-300">
      <p className="font-bold mb-2">Prova:</p>
      <div>{children}</div>
      <div className="text-right">□</div>
    </div>
  )
}
