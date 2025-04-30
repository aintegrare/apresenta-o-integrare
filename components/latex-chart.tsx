import type React from "react"

interface LatexChartProps {
  children: React.ReactNode
  caption: string
  label?: string
}

export default function LatexChart({ children, caption, label }: LatexChartProps) {
  return (
    <div className="my-8">
      <div className="border border-gray-200 p-4 bg-white">{children}</div>
      <div className="mt-2 text-sm text-center">
        <span className="font-semibold">Gráfico {label}: </span>
        {caption}
      </div>
    </div>
  )
}
