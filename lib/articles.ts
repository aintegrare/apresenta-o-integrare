import type { Article } from "@/types/article"

// Simulação de um banco de dados de artigos
// Em um ambiente real, isso seria substituído por chamadas a uma API ou banco de dados
const articlesDatabase: Article[] = [
  {
    slug: "panorama-mercado-digital",
    title: "Panorama do Mercado Digital e Agências de Marketing",
    subtitle: "Análise Aprofundada, Tendências e Modelos de Negócio",
    abstract:
      "Este estudo apresenta uma análise abrangente do mercado digital brasileiro e das agências de marketing, explorando o panorama atual, tendências emergentes, principais players, serviços oferecidos, modelos de negócio e alternativas.",
    content: `
      <div class="latex-section text-integrare-blue">1. Panorama Atual do Mercado Digital Brasileiro</div>
      <div class="latex-paragraph">
        O mercado digital brasileiro apresenta um crescimento significativo nos últimos anos, com números que comprovam
        sua expansão contínua. De acordo com o relatório Digital Brazil 2024, o país conta com 187,9 milhões de
        brasileiros utilizando a internet, representando 86,6% da população.
        Somente em 2024, houve um acréscimo de 6,1 milhões de novos usuários da internet, um crescimento de 3,3% em
        relação ao ano anterior.
      </div>
      
      <div class="latex-section text-integrare-blue">2. Principais Tendências do Marketing Digital para 2025</div>
      <div class="latex-paragraph">
        A Inteligência Artificial está revolucionando o marketing digital, transformando a maneira como as empresas
        interagem com os consumidores, analisam dados e otimizam suas estratégias. A IA generativa surge como uma
        tendência dominante para 2025, sendo aplicada na criação de conteúdos personalizados e no reposicionamento de
        marcas.
      </div>
      
      <!-- Conteúdo completo do artigo seria inserido aqui -->
    `,
    author: {
      name: "Ana Silva",
      bio: "Especialista em Marketing Digital com mais de 10 anos de experiência no mercado.",
      avatar: "/placeholder.svg?height=60&width=60&text=AS",
    },
    publishedAt: "2024-04-15",
    categories: ["Marketing Digital", "Tendências", "Agências"],
    keywords: [
      "marketing digital",
      "agências digitais",
      "tendências de marketing",
      "modelos de negócio",
      "inteligência artificial",
      "transformação digital",
    ],
    pageCount: 25,
    tableOfContents: [
      { number: "1.", title: "Panorama Atual do Mercado Digital Brasileiro", page: 1 },
      { number: "2.", title: "Principais Tendências do Marketing Digital para 2025", page: 4 },
      { number: "3.", title: "Principais Players do Mercado de Agências Digitais", page: 8 },
      { number: "4.", title: "Serviços Oferecidos pelas Agências de Marketing Digital", page: 11 },
      { number: "5.", title: "Modelos de Negócio das Agências de Marketing Digital", page: 14 },
      { number: "6.", title: "Alternativas ao Modelo Tradicional de Agências", page: 17 },
      { number: "7.", title: "O Futuro das Agências de Marketing Digital", page: 19 },
      { number: "8.", title: "Conclusão: Panorama e Perspectivas", page: 22 },
    ],
  },
  {
    slug: "terceirizacao-condominios",
    title: "Terceirização em Condomínios",
    subtitle: "Análise do Mercado, Vantagens e Aspectos Jurídicos",
    abstract:
      "Este artigo apresenta uma análise completa sobre a terceirização em condomínios no Brasil, abordando o panorama do mercado, vantagens, aspectos jurídicos e estratégias de marketing digital para empresas do setor.",
    content: `
      <div class="latex-section text-integrare-blue">1. Panorama do Mercado de Terceirização no Brasil</div>
      <div class="latex-paragraph">
        O mercado de terceirização no Brasil apresenta números expressivos, com 4,3 milhões de profissionais terceirizados, 
        representando 25% dos trabalhadores formais. O setor de serviços representa 70% do mercado de terceirização, 
        tendo apresentado um crescimento de 8,8% em 2020, mesmo durante a pandemia.
      </div>
      
      <div class="latex-section text-integrare-blue">2. Vantagens da Terceirização em Condomínios</div>
      <div class="latex-paragraph">
        A terceirização oferece diversas vantagens para os condomínios, desde a redução de custos até o acesso a
        profissionais especializados, contribuindo para uma gestão mais eficiente e profissional.
      </div>
      
      <!-- Conteúdo completo do artigo seria inserido aqui -->
    `,
    author: {
      name: "Carlos Mendes",
      bio: "Consultor em gestão condominial e especialista em terceirização de serviços.",
      avatar: "/placeholder.svg?height=60&width=60&text=CM",
    },
    publishedAt: "2024-03-22",
    categories: ["Condomínios", "Terceirização", "Gestão"],
    keywords: [
      "terceirização",
      "condomínios",
      "gestão condominial",
      "aspectos jurídicos",
      "marketing digital",
      "serviços terceirizados",
    ],
    pageCount: 18,
    tableOfContents: [
      { number: "1.", title: "Panorama do Mercado de Terceirização no Brasil", page: 1 },
      { number: "2.", title: "Vantagens da Terceirização em Condomínios", page: 3 },
      { number: "3.", title: "Aspectos Jurídicos e Regulamentações", page: 6 },
      { number: "4.", title: "Principais Serviços Terceirizados", page: 9 },
      { number: "5.", title: "Dados para SEO e Marketing Digital", page: 12 },
      { number: "6.", title: "Desafios e Oportunidades no Mercado", page: 15 },
      { number: "7.", title: "Conclusão", page: 17 },
    ],
  },
  {
    slug: "inteligencia-artificial-marketing",
    title: "Inteligência Artificial no Marketing",
    subtitle: "Transformando Estratégias e Resultados",
    abstract:
      "Uma análise profunda sobre como a inteligência artificial está revolucionando o marketing digital, com casos de uso, implementações práticas e previsões para o futuro.",
    content: `
      <div class="latex-section text-integrare-blue">1. Introdução à IA no Marketing</div>
      <div class="latex-paragraph">
        A inteligência artificial está transformando fundamentalmente como as empresas abordam o marketing digital,
        permitindo níveis de personalização, automação e análise de dados sem precedentes.
      </div>
      
      <div class="latex-section text-integrare-blue">2. Principais Aplicações da IA</div>
      <div class="latex-paragraph">
        Desde chatbots inteligentes até sistemas de recomendação avançados, a IA está sendo aplicada em diversas
        áreas do marketing digital, revolucionando a experiência do cliente e otimizando resultados.
      </div>
      
      <!-- Conteúdo completo do artigo seria inserido aqui -->
    `,
    author: {
      name: "Mariana Costa",
      bio: "Pesquisadora e consultora em Inteligência Artificial aplicada ao marketing.",
      avatar: "/placeholder.svg?height=60&width=60&text=MC",
    },
    publishedAt: "2024-04-05",
    categories: ["Inteligência Artificial", "Marketing Digital", "Tecnologia"],
    keywords: [
      "inteligência artificial",
      "IA generativa",
      "marketing digital",
      "automação",
      "personalização",
      "análise preditiva",
    ],
    pageCount: 20,
    tableOfContents: [
      { number: "1.", title: "Introdução à IA no Marketing", page: 1 },
      { number: "2.", title: "Principais Aplicações da IA", page: 3 },
      { number: "3.", title: "IA Generativa e Criação de Conteúdo", page: 7 },
      { number: "4.", title: "Personalização em Escala", page: 10 },
      { number: "5.", title: "Análise Preditiva e Insights", page: 13 },
      { number: "6.", title: "Desafios Éticos e Limitações", page: 16 },
      { number: "7.", title: "O Futuro da IA no Marketing", page: 18 },
    ],
  },
]

export async function getAllArticles(): Promise<Article[]> {
  // Simulando uma chamada assíncrona
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(articlesDatabase)
    }, 500)
  })
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  // Simulando uma chamada assíncrona
  return new Promise((resolve) => {
    setTimeout(() => {
      const article = articlesDatabase.find((article) => article.slug === slug) || null
      resolve(article)
    }, 500)
  })
}

export async function getRelatedArticles(slug: string, limit = 3): Promise<Article[]> {
  // Simulando uma chamada assíncrona
  return new Promise((resolve) => {
    setTimeout(() => {
      const currentArticle = articlesDatabase.find((article) => article.slug === slug)

      if (!currentArticle) {
        resolve([])
        return
      }

      // Encontrar artigos relacionados com base nas categorias
      const related = articlesDatabase
        .filter(
          (article) =>
            article.slug !== slug && article.categories.some((cat) => currentArticle.categories.includes(cat)),
        )
        .slice(0, limit)

      resolve(related)
    }, 500)
  })
}
