export default function Spacing() {
  const spacingSizes = [
    { name: "xs", value: "0.25rem (4px)", class: "p-1" },
    { name: "sm", value: "0.5rem (8px)", class: "p-2" },
    { name: "md", value: "1rem (16px)", class: "p-4" },
    { name: "lg", value: "1.5rem (24px)", class: "p-6" },
    { name: "xl", value: "2rem (32px)", class: "p-8" },
    { name: "2xl", value: "3rem (48px)", class: "p-12" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Sistema de Espaçamento</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {spacingSizes.map((size) => (
            <div key={size.name} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className={`bg-integrare-blue ${size.class}`}>
                <div className="bg-white rounded h-8"></div>
              </div>
              <div className="p-3">
                <p className="font-medium">{size.name}</p>
                <p className="text-sm text-gray-500">{size.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Sistema de Grid</h3>
        <div className="border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-4">
            O sistema utiliza o grid flexível do Tailwind CSS, com 12 colunas como base.
          </p>
          <div className="grid grid-cols-12 gap-2 mb-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-8 bg-integrare-blue bg-opacity-20 rounded"></div>
            ))}
          </div>
          <div className="grid grid-cols-6 gap-2 mb-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-8 bg-integrare-blue bg-opacity-30 rounded"></div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-2 mb-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-8 bg-integrare-blue bg-opacity-40 rounded"></div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 mb-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-8 bg-integrare-blue bg-opacity-50 rounded"></div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="h-8 bg-integrare-blue bg-opacity-60 rounded"></div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="h-8 bg-integrare-blue bg-opacity-70 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
