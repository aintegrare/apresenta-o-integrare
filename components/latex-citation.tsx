import type React from "react"
import Link from "next/link"

interface LatexCitationProps {
  children: React.ReactNode
  source: string
}

export default function LatexCitation({ children, source }: LatexCitationProps) {
  return (
    <span className="relative">
      {children}
      <Link href={`#ref${source}`} className="no-underline">
        <sup className="text-xs text-integrare-blue hover:text-blue-900 ml-0.5">[{source}]</sup>
      </Link>
    </span>
  )
}
