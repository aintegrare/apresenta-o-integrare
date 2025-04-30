import Image from "next/image"

interface LatexFigureProps {
  src: string
  alt: string
  caption: string
  width: number
  height: number
  label?: string
}

export default function LatexFigure({ src, alt, caption, width, height, label }: LatexFigureProps) {
  return (
    <div className="my-8 flex flex-col items-center">
      <div className="border border-gray-200 p-4 bg-white">
        <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className="max-w-full h-auto" />
      </div>
      <div className="mt-2 text-sm text-center max-w-md">
        <span className="font-semibold">Figura {label}: </span>
        {caption}
      </div>
    </div>
  )
}
