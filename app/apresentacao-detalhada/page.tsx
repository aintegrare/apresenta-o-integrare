"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronDown, ChevronUp, Download, ExternalLink } from "lucide-react"

export default function ApresentacaoDetalhada() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null)
    } else {
      setActiveSection(section)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header fixo com efeito de transparência */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft size={20} className="text-[#4b7bb5]" />
            <span className="font-medium text-[#4b7bb5]">Voltar</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Image
              src="/images/logo-integrare.png"
              alt="Agência Integrare"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className={`font-medium ${scrollY > 50 ? "text-[#4b7bb5]" : "text-white"}`}>Integrare</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#4b7bb5] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4072b0] to-[#3d649e] opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Agência Integrare</h1>
            <p className="text-xl md:text-2xl mb-8">Marketing baseado em evidências e resultados mensuráveis</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-white text-[#4b7bb5] px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center justify-center">
                <Download size={18} className="mr-2" />
                Baixar Apresentação
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-all">
                Agendar Reunião
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Sobre Nós */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#4b7bb5] mb-6">Sobre Nós</h2>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <p className="text-gray-700 mb-6">
                Fundada em 2020, a Integrare nasceu com a missão de levar Marketing de Qualidade, baseado em evidências
                científicas e casos práticos de sucesso. Começamos oferecendo serviços simples de gestão de social media
                e hoje oferecemos um ecossistema completo de serviços de marketing, que inclui todos os aspectos dos
                negócios digitais das empresas.
              </p>
              <p className="text-gray-700 mb-6">
                Tratamos os negócios dos nossos clientes como se fossem o nosso, trabalhamos lado a lado, porque nosso
                compromisso é com os resultados que entregamos. Marketing não é sobre vender mais, é sobre ter propósito
                e mostrar isso para o mundo. É uma ferramenta de reafirmação do porquê viemos e para que estamos aqui.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#4b7bb5]">
                  <h3 className="font-bold text-gray-800 mb-2">Nossa Missão</h3>
                  <p className="text-gray-600 text-sm">
                    Democratizar o acesso ao marketing de qualidade baseado em evidências e resultados mensuráveis.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#4b7bb5]">
                  <h3 className="font-bold text-gray-800 mb-2">Nossa Visão</h3>
                  <p className="text-gray-600 text-sm">
                    Ser referência em marketing estratégico e gerar confiança para clientes e ansiedade para
                    concorrentes.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#4b7bb5]">
                  <h3 className="font-bold text-gray-800 mb-2">Nossos Valores</h3>
                  <p className="text-gray-600 text-sm">
                    Transparência, compromisso com resultados, inovação constante e parceria genuína.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Serviços */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#4b7bb5] mb-6">Nossos Serviços</h2>

            {/* Branding */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <button className="w-full flex items-center justify-between" onClick={() => toggleSection("branding")}>
                <h3 className="text-xl font-bold text-gray-800">Branding e Identidade Visual</h3>
                {activeSection === "branding" ? (
                  <ChevronUp className="text-[#4b7bb5]" />
                ) : (
                  <ChevronDown className="text-[#4b7bb5]" />
                )}
              </button>

              {activeSection === "branding" && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 mb-4">
                    Desenvolvemos identidades visuais completas que comunicam a essência da sua marca e conectam com seu
                    público-alvo.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                    <li>Criação de logotipos e sistemas de identidade visual</li>
                    <li>Desenvolvimento de manual de marca</li>
                    <li>Design de papelaria e materiais institucionais</li>
                    <li>Estratégia de posicionamento de marca</li>
                    <li>Naming e arquitetura de marca</li>
                  </ul>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Metodologia</h4>
                    <ol className="list-decimal list-inside text-gray-600 space-y-1">
                      <li>Imersão e pesquisa de mercado</li>
                      <li>Definição de posicionamento e valores</li>
                      <li>Desenvolvimento de conceitos visuais</li>
                      <li>Refinamento e finalização</li>
                      <li>Aplicação e implementação</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>

            {/* Marketing Digital */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <button className="w-full flex items-center justify-between" onClick={() => toggleSection("marketing")}>
                <h3 className="text-xl font-bold text-gray-800">Marketing Digital</h3>
                {activeSection === "marketing" ? (
                  <ChevronUp className="text-[#4b7bb5]" />
                ) : (
                  <ChevronDown className="text-[#4b7bb5]" />
                )}
              </button>

              {activeSection === "marketing" && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 mb-4">
                    Estratégias completas de marketing digital com foco em resultados mensuráveis e ROI positivo.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                    <li>Gestão de mídias sociais</li>
                    <li>Marketing de conteúdo</li>
                    <li>SEO (Otimização para motores de busca)</li>
                    <li>Email marketing</li>
                    <li>Campanhas de mídia paga (Google Ads, Meta Ads)</li>
                  </ul>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Diferenciais</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Relatórios detalhados de performance</li>
                      <li>Otimização contínua baseada em dados</li>
                      <li>Estratégias personalizadas por segmento</li>
                      <li>Integração entre canais online e offline</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Desenvolvimento Web */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <button className="w-full flex items-center justify-between" onClick={() => toggleSection("web")}>
                <h3 className="text-xl font-bold text-gray-800">Desenvolvimento Web</h3>
                {activeSection === "web" ? (
                  <ChevronUp className="text-[#4b7bb5]" />
                ) : (
                  <ChevronDown className="text-[#4b7bb5]" />
                )}
              </button>

              {activeSection === "web" && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 mb-4">
                    Criamos websites e plataformas digitais otimizadas para conversão e experiência do usuário.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                    <li>Websites institucionais</li>
                    <li>Landing pages de alta conversão</li>
                    <li>E-commerces</li>
                    <li>Blogs e portais de conteúdo</li>
                    <li>Sistemas web personalizados</li>
                  </ul>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Tecnologias</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#4b7bb5] bg-opacity-10 text-[#4b7bb5] rounded-full text-xs">
                        React
                      </span>
                      <span className="px-3 py-1 bg-[#4b7bb5] bg-opacity-10 text-[#4b7bb5] rounded-full text-xs">
                        Next.js
                      </span>
                      <span className="px-3 py-1 bg-[#4b7bb5] bg-opacity-10 text-[#4b7bb5] rounded-full text-xs">
                        WordPress
                      </span>
                      <span className="px-3 py-1 bg-[#4b7bb5] bg-opacity-10 text-[#4b7bb5] rounded-full text-xs">
                        WooCommerce
                      </span>
                      <span className="px-3 py-1 bg-[#4b7bb5] bg-opacity-10 text-[#4b7bb5] rounded-full text-xs">
                        Shopify
                      </span>
                      <span className="px-3 py-1 bg-[#4b7bb5] bg-opacity-10 text-[#4b7bb5] rounded-full text-xs">
                        Tailwind CSS
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Produção de Conteúdo */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <button className="w-full flex items-center justify-between" onClick={() => toggleSection("conteudo")}>
                <h3 className="text-xl font-bold text-gray-800">Produção de Conteúdo</h3>
                {activeSection === "conteudo" ? (
                  <ChevronUp className="text-[#4b7bb5]" />
                ) : (
                  <ChevronDown className="text-[#4b7bb5]" />
                )}
              </button>

              {activeSection === "conteudo" && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 mb-4">
                    Conteúdo estratégico que educa, engaja e converte seu público em diferentes formatos e canais.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                    <li>Fotografia profissional</li>
                    <li>Produção de vídeos</li>
                    <li>Copywriting</li>
                    <li>Design para redes sociais</li>
                    <li>Infográficos e materiais educativos</li>
                  </ul>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Processo de Criação</h4>
                    <ol className="list-decimal list-inside text-gray-600 space-y-1">
                      <li>Briefing e definição de objetivos</li>
                      <li>Pesquisa de referências e tendências</li>
                      <li>Desenvolvimento de conceito criativo</li>
                      <li>Produção e edição</li>
                      <li>Otimização para diferentes canais</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Metodologia */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#4b7bb5] mb-6">Nossa Metodologia</h2>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="relative">
                {/* Linha do tempo vertical */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#4b7bb5] bg-opacity-20"></div>

                {/* Etapas */}
                <div className="space-y-12">
                  {/* Etapa 1 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-[#4b7bb5] flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Diagnóstico</h3>
                    <p className="text-gray-600 mb-4">
                      Análise completa do seu negócio, mercado, concorrência e público-alvo para identificar
                      oportunidades e desafios.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Entregáveis:</h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                        <li>Análise SWOT</li>
                        <li>Benchmark de concorrentes</li>
                        <li>Mapeamento de buyer personas</li>
                        <li>Auditoria de presença digital</li>
                      </ul>
                    </div>
                  </div>

                  {/* Etapa 2 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-[#4b7bb5] flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Planejamento Estratégico</h3>
                    <p className="text-gray-600 mb-4">
                      Desenvolvimento de estratégias personalizadas com base nos insights do diagnóstico e alinhadas aos
                      seus objetivos de negócio.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Entregáveis:</h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                        <li>Plano de marketing digital</li>
                        <li>Calendário editorial</li>
                        <li>Estratégia de canais</li>
                        <li>Definição de KPIs e metas</li>
                      </ul>
                    </div>
                  </div>

                  {/* Etapa 3 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-[#4b7bb5] flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Execução</h3>
                    <p className="text-gray-600 mb-4">
                      Implementação das estratégias definidas com foco em qualidade, consistência e alinhamento com a
                      identidade da marca.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Entregáveis:</h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                        <li>Produção de conteúdo</li>
                        <li>Gestão de campanhas</li>
                        <li>Desenvolvimento de ativos digitais</li>
                        <li>Implementação técnica</li>
                      </ul>
                    </div>
                  </div>

                  {/* Etapa 4 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-[#4b7bb5] flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Monitoramento e Otimização</h3>
                    <p className="text-gray-600 mb-4">
                      Acompanhamento contínuo de resultados com análises detalhadas e ajustes estratégicos para
                      maximizar o desempenho.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Entregáveis:</h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                        <li>Relatórios de performance</li>
                        <li>Análise de métricas e KPIs</li>
                        <li>Recomendações de otimização</li>
                        <li>Reuniões de alinhamento</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Casos de Sucesso */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#4b7bb5] mb-6">Casos de Sucesso</h2>

            {/* Caso 1 */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                    <Image
                      src="/images/logo_conexao_digital.png"
                      alt="Conexão Digital"
                      width={180}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Conexão Digital</h3>
                  <p className="text-gray-600 mb-4">
                    Reposicionamento de marca e estratégia digital para empresa de tecnologia.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-[#4b7bb5] bg-opacity-5 p-4 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Aumento em tráfego orgânico</p>
                      <p className="text-2xl font-bold text-[#4b7bb5]">+187%</p>
                    </div>
                    <div className="bg-[#4b7bb5] bg-opacity-5 p-4 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Leads qualificados</p>
                      <p className="text-2xl font-bold text-[#4b7bb5]">+94%</p>
                    </div>
                  </div>

                  <div className="flex items-center text-[#4b7bb5] font-medium cursor-pointer">
                    Ver estudo de caso completo
                    <ExternalLink size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Caso 2 */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                    <Image
                      src="/images/logo_medeiros.png"
                      alt="Medeiros"
                      width={180}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Medeiros Contabilidade</h3>
                  <p className="text-gray-600 mb-4">
                    Estratégia de marketing de conteúdo e campanhas de geração de leads.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-[#4b7bb5] bg-opacity-5 p-4 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Conversões de leads</p>
                      <p className="text-2xl font-bold text-[#4b7bb5]">+156%</p>
                    </div>
                    <div className="bg-[#4b7bb5] bg-opacity-5 p-4 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">ROI de campanhas</p>
                      <p className="text-2xl font-bold text-[#4b7bb5]">412%</p>
                    </div>
                  </div>

                  <div className="flex items-center text-[#4b7bb5] font-medium cursor-pointer">
                    Ver estudo de caso completo
                    <ExternalLink size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Caso 3 */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                    <Image
                      src="/images/logo_eee_new.png"
                      alt="EEE"
                      width={180}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">EEE Engenharia</h3>
                  <p className="text-gray-600 mb-4">Rebranding completo e estratégia de posicionamento digital.</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-[#4b7bb5] bg-opacity-5 p-4 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Reconhecimento de marca</p>
                      <p className="text-2xl font-bold text-[#4b7bb5]">+210%</p>
                    </div>
                    <div className="bg-[#4b7bb5] bg-opacity-5 p-4 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Novos projetos</p>
                      <p className="text-2xl font-bold text-[#4b7bb5]">+45%</p>
                    </div>
                  </div>

                  <div className="flex items-center text-[#4b7bb5] font-medium cursor-pointer">
                    Ver estudo de caso completo
                    <ExternalLink size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Equipe */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#4b7bb5] mb-6">Nossa Equipe</h2>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <p className="text-gray-700 mb-8">
                Contamos com profissionais especializados em diferentes áreas do marketing digital, design e tecnologia,
                formando um time multidisciplinar capaz de atender às diversas necessidades do seu negócio.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Especialidades */}
                <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#4b7bb5]">
                  <h3 className="font-bold text-gray-800 mb-3">Estratégia Digital</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#4b7bb5] mr-2"></div>
                      <span>Especialistas em SEO</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#4b7bb5] mr-2"></div>
                      <span>Analistas de Performance</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#4b7bb5] mr-2"></div>
                      <span>Consultores de Marketing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#4b7bb5]">
                  <h3 className="font-bold text-gray-800 mb-3">Criação e Design</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#4b7bb5] mr-2"></div>
                      <span>Diretores de Arte</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#4b7bb5] mr-2"></div>
                      <span>Designers Gráficos</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#4b7bb5] mr-2"></div>
                      <span>UI/UX Designers</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#4b7bb5]">
                  <h3 className="font-bold text-gray-800 mb-3">Desenvolvimento</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#4b7bb5] mr-2"></div>
                      <span>Desenvolvedores Front-end</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#4b7bb5] mr-2"></div>
                      <span>Desenvolvedores Back-end</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#4b7bb5] mr-2"></div>
                      <span>Especialistas WordPress</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#4b7bb5]">
                  <h3 className="font-bold text-gray-800 mb-3">Conteúdo</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#4b7bb5] mr-2"></div>
                      <span>Redatores</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#4b7bb5] mr-2"></div>
                      <span>Copywriters</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#4b7bb5] mr-2"></div>
                      <span>Produtores de Vídeo</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#4b7bb5]">
                  <h3 className="font-bold text-gray-800 mb-3">Mídia</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#4b7bb5] mr-2"></div>
                      <span>Gestores de Tráfego</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#4b7bb5] mr-2"></div>
                      <span>Especialistas em Google Ads</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#4b7bb5] mr-2"></div>
                      <span>Especialistas em Meta Ads</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#4b7bb5]">
                  <h3 className="font-bold text-gray-800 mb-3">Gestão de Projetos</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#4b7bb5] mr-2"></div>
                      <span>Gerentes de Projetos</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#4b7bb5] mr-2"></div>
                      <span>Analistas de Negócios</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#4b7bb5] mr-2"></div>
                      <span>Customer Success</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contato */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#4b7bb5] mb-6">Entre em Contato</h2>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Vamos conversar sobre o seu projeto</h3>
                  <p className="text-gray-600 mb-6">
                    Estamos prontos para entender suas necessidades e desenvolver soluções personalizadas que
                    impulsionem o crescimento do seu negócio.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#4b7bb5] bg-opacity-10 flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-[#4b7bb5]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Email</p>
                        <p className="text-gray-600">contato@aintegrare.com.br</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#4b7bb5] bg-opacity-10 flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-[#4b7bb5]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Telefone</p>
                        <p className="text-gray-600">(44) 9999-8765</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#4b7bb5] bg-opacity-10 flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-[#4b7bb5]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Endereço</p>
                        <p className="text-gray-600">Av. Principal, 1234 - Centro</p>
                        <p className="text-gray-600">Campo Mourão - PR</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4b7bb5] focus:border-[#4b7bb5] outline-none"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4b7bb5] focus:border-[#4b7bb5] outline-none"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4b7bb5] focus:border-[#4b7bb5] outline-none"
                        placeholder="(00) 00000-0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4b7bb5] focus:border-[#4b7bb5] outline-none"
                        placeholder="Descreva seu projeto ou necessidade"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#4b7bb5] text-white py-2 px-4 rounded-md hover:bg-[#3d649e] transition-colors"
                    >
                      Enviar Mensagem
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-[#4b7bb5] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo-integrare.png"
                  alt="Agência Integrare"
                  width={40}
                  height={40}
                  className="rounded-full mr-2"
                />
                <span className="font-bold text-xl">Integrare</span>
              </div>
              <p className="text-white text-opacity-80 mb-4">
                Marketing baseado em evidências e resultados mensuráveis para impulsionar o crescimento do seu negócio.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white text-opacity-80 hover:text-opacity-100">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/apresentacao" className="text-white text-opacity-80 hover:text-opacity-100">
                    Apresentação
                  </Link>
                </li>
                <li>
                  <Link href="/artigos" className="text-white text-opacity-80 hover:text-opacity-100">
                    Artigos
                  </Link>
                </li>
                <li>
                  <Link href="/apresentacoes" className="text-white text-opacity-80 hover:text-opacity-100">
                    Apresentações
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-white text-opacity-80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-white text-opacity-80">contato@aintegrare.com.br</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-white text-opacity-80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-white text-opacity-80">(44) 9999-8765</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
            <p className="text-white text-opacity-80">© 2025 Agência Integrare. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
