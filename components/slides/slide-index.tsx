import SlideLayout from "../slide-layout"

interface SlideIndexProps {
  slideNumber: number
  totalSlides: number
}

export default function SlideIndex({ slideNumber, totalSlides }: SlideIndexProps) {
  const sections = [
    {
      title: "Introdução",
      slides: [
        { title: "Capa", id: "cover" },
        { title: "Introdução ao Design System", id: "introduction" },
      ],
    },
    {
      title: "Fundamentos",
      slides: [
        { title: "Paleta de Cores", id: "color-palette" },
        { title: "Tipografia", id: "typography" },
      ],
    },
    {
      title: "Componentes",
      slides: [
        { title: "Botões", id: "buttons" },
        { title: "Cards", id: "cards" },
        { title: "Formulários", id: "forms" },
        { title: "Navegação", id: "navigation" },
      ],
    },
    {
      title: "Padrões",
      slides: [{ title: "Layouts e Grids", id: "layouts" }],
    },
  ]

  return (
    <SlideLayout title="Índice" section="Introdução" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-medium text-[#4b7bb5] mb-4">{section.title}</h3>
            <ul className="space-y-3">
              {section.slides.map((slide, slideIndex) => (
                <li key={slideIndex} className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#4b7bb5] bg-opacity-10 text-[#4b7bb5] flex items-center justify-center mr-3">
                    {slideIndex + 1}
                  </div>
                  <span className="text-gray-700">{slide.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
