import SlideLayout from "./slide-layout"
import Image from "next/image"

export default function SlidePortfolioBrandingSaude() {
  return (
    <SlideLayout title="Portfolio de Branding - Área da Saúde">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Projeto Dr. Joel Darte */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Dr. Joel Darte</h3>
              <p className="text-sm text-gray-600">Identidade visual para psiquiatra</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-Dr-Joel-Darte-5.jpg-8mM68ONzXkSXWjJtr6ssQ2aoUES6CE.jpeg"
                    alt="Cartões de visita Dr. Joel Darte"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-Dr-Joel-Darte-7.jpg-Xcyn1U2jCde8dv7GDX9olCAmYLd8SK.jpeg"
                    alt="Papelaria Dr. Joel Darte"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-Dr-Joel-Darte-9.jpg-BfSigJ6AFnQ6BiMuO7UaX6neWTWQtR.jpeg"
                    alt="Post para redes sociais Dr. Joel Darte"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-Dr-Joel-Darte-12.jpg-2j7MVGuwoMJpnah0EwTCAGtvavlNvq.jpeg"
                    alt="Jaleco Dr. Joel Darte"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xs text-gray-600">
                  Identidade visual para médico psiquiatra, com símbolo que combina perfil humano e árvore cerebral.
                  Aplicações em cartões de visita, papelaria, redes sociais, ecobags e vestuário médico, utilizando
                  paleta de cores em tons de verde esmeralda que transmitem tranquilidade e bem-estar mental.
                </p>
              </div>
            </div>
          </div>

          {/* Projeto Dra. Vanessa Delmiro */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Dra. Vanessa Delmiro</h3>
              <p className="text-sm text-gray-600">Identidade visual para cardiologista</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-Vanessa-Delmiro-6.jpg-1TPvHMJZSMDmnZ2qbVSCnUDTJP3keW.jpeg"
                    alt="Cartões de visita Dra. Vanessa Delmiro"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-Vanessa-Delmiro-10.jpg-xm3Wud4JUXRwtlWFgrEefyJQ9BAezD.jpeg"
                    alt="Papelaria Dra. Vanessa Delmiro"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-Vanessa-Delmiro-12.jpg-QCTkyTwjSF7KGoAF2Kt2co7REmv2hJ.jpeg"
                    alt="Placa externa Dra. Vanessa Delmiro"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-Vanessa-Delmiro-13.jpg-R6J6gB7Tb2jDWoBG1VJ5DTrpaoMHn3.jpeg"
                    alt="Jaleco Dra. Vanessa Delmiro"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xs text-gray-600">
                  Criação de identidade visual para médica cardiologista, com símbolo que combina coração e
                  eletrocardiograma. Aplicações em cartões de visita, papelaria completa, sinalização externa, garrafa
                  térmica e vestuário médico, utilizando paleta de cores em tons de rosa e bordô que remetem ao coração
                  e transmitem cuidado e acolhimento.
                </p>
              </div>
            </div>
          </div>

          {/* Aplicações Adicionais */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden md:col-span-2">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-medium text-integrare-blue">Aplicações Especiais</h3>
              <p className="text-sm text-gray-600">Produtos promocionais e materiais complementares</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-4 gap-3">
                <div className="relative h-36 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-Dr-Joel-Darte-11.jpg-k04pJ6qVMPJ2nSbaxI5gKh9Dha06r1.jpeg"
                    alt="Garrafa d'água Dr. Joel Darte"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-36 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-Dr-Joel-Darte-10.jpg-ctPOaWAk9eTqpbbrEwAKzqtaY1bcTU.jpeg"
                    alt="Ecobag Dr. Joel Darte"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-36 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-Vanessa-Delmiro-9.jpg-6W4IoQsYae3Br93UhdmEY0IeLMBegd.jpeg"
                    alt="Garrafa térmica Dra. Vanessa Delmiro"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-36 rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case-Vanessa-Delmiro-8.jpg-PzlnwJRUXhVCOZUluVhPHK90K1PIoq.jpeg"
                    alt="Ecobag Dra. Vanessa Delmiro"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xs text-gray-600">
                  Desenvolvimento de produtos promocionais que reforçam a identidade visual e criam pontos de contato
                  adicionais com os pacientes. Itens como garrafas térmicas, ecobags e outros materiais promocionais
                  ajudam a fortalecer a marca e aumentar o reconhecimento dos profissionais em suas áreas de atuação.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Nossa experiência no desenvolvimento de identidades visuais para profissionais da saúde combina elementos
            que transmitem confiança e profissionalismo, com símbolos que representam suas especialidades e paletas de
            cores cuidadosamente selecionadas para criar conexão emocional com os pacientes.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
