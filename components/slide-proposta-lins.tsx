import SlideLayout from "./slide-layout"
import { CheckCircle, ArrowRight, Camera } from "lucide-react"

export default function SlidePropostaLins() {
  return (
    <SlideLayout title="5. Nossa Proposta">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-integrare-blue">Soluções Personalizadas</h3>
            <p className="text-sm text-gray-600">
              Após análise preliminar, identificamos oportunidades para fortalecer a presença digital da Instituição
              Lins Vasconcellos e ampliar seu impacto na comunidade. Nossa proposta inclui:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-integrare-blue mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">Redesenho do site institucional</p>
                  <p className="text-sm text-gray-500">
                    Criação de um portal moderno, acessível e otimizado para divulgar os projetos, captar recursos e
                    atrair voluntários.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-integrare-blue mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">Estratégia de conteúdo</p>
                  <p className="text-sm text-gray-500">
                    Desenvolvimento de conteúdo relevante e engajador para blog e redes sociais, destacando o impacto
                    social dos projetos da instituição.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-integrare-blue mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">Gestão de redes sociais</p>
                  <p className="text-sm text-gray-500">
                    Planejamento, criação e publicação de conteúdo nas principais plataformas, com foco em engajamento e
                    ampliação da comunidade.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-integrare-blue mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">Campanhas de divulgação</p>
                  <p className="text-sm text-gray-500">
                    Desenvolvimento de campanhas específicas para datas importantes, projetos especiais e captação de
                    recursos.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Camera className="w-5 h-5 text-integrare-blue mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">Sessões Fotográficas Periódicas</p>
                  <p className="text-sm text-gray-500">
                    Documentação visual profissional trimestral do espaço físico, equipe e atividades para uso em todos
                    os canais de comunicação.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-medium text-integrare-blue">Benefícios Esperados</h3>
            <div className="bg-blue-50 p-5 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-integrare-blue mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <span className="font-medium">Aumento da visibilidade:</span> Ampliação do alcance da instituição na
                    comunidade e entre potenciais apoiadores.
                  </p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-integrare-blue mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <span className="font-medium">Engajamento qualificado:</span> Construção de relacionamento com
                    públicos estratégicos e fortalecimento da comunidade.
                  </p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-integrare-blue mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <span className="font-medium">Captação de recursos:</span> Otimização dos canais digitais para
                    facilitar e aumentar doações e apoios.
                  </p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-integrare-blue mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <span className="font-medium">Atração de voluntários:</span> Estratégias específicas para atrair e
                    engajar novos voluntários para os projetos.
                  </p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-integrare-blue mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <span className="font-medium">Fortalecimento da marca:</span> Consolidação da imagem institucional e
                    ampliação do reconhecimento da causa.
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-700 mb-2">Nossa Abordagem</h4>
              <p className="text-sm text-gray-600">
                Trabalhamos com transparência e colaboração constante, mantendo a instituição informada e envolvida em
                cada etapa do processo. Todos os materiais e estratégias são desenvolvidos respeitando a missão, visão e
                valores da Instituição Lins Vasconcellos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
