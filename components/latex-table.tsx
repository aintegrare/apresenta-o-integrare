import type React from "react"

interface LatexTableProps {
  children: React.ReactNode
  caption: string
  label?: string
}

export default function LatexTable({ children, caption, label }: LatexTableProps) {
  return (
    <div className="my-8">
      <div className="overflow-x-auto border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">{children}</table>
      </div>
      <div className="mt-2 text-sm text-center">
        <span className="font-semibold text-integrare-blue">Tabela {label}: </span>
        {caption}
      </div>
    </div>
  )
}
