interface LatexEquationProps {
  equation: string
  label?: string
}

export default function LatexEquation({ equation, label }: LatexEquationProps) {
  return (
    <div className="my-6 flex justify-center items-center">
      <div className="flex-1"></div>
      <div className="text-center font-mono bg-gray-50 py-3 px-6 rounded">{equation}</div>
      <div className="flex-1 text-right text-sm text-gray-500">{label && `(${label})`}</div>
    </div>
  )
}
