import type React from "react"

interface LatexFootnoteProps {
  children: React.ReactNode
  number: number
}

export default function LatexFootnote({ children, number }: LatexFootnoteProps) {
  return (
    <span className="relative">
      <sup className="text-xs text-blue-700" id={`footnote-ref-${number}`}>
        {number}
      </sup>
      <span className="hidden">
        <span id={`footnote-${number}`}>{children}</span>
      </span>
    </span>
  )
}
