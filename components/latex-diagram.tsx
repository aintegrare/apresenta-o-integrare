import type React from "react"

interface LatexDiagramProps {
  children: React.ReactNode
  caption: string
  label?: string
}

export default function LatexDiagram({ children, caption, label }: LatexDiagramProps) {
  return (
    <div className="my-8">
      <div className="border border-gray-200 p-4 bg-white">{children}</div>
      <div className="mt-2 text-sm text-center">
        <span className="font-semibold text-integrare-blue">Diagrama {label}: </span>
        {caption}
      </div>
    </div>
  )
}
