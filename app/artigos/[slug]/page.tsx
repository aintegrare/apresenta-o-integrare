"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Download, ArrowLeft } from "lucide-react"
import LatexHeader from "@/components/latex-header"
import LatexFooter from "@/components/latex-footer"
import Image from "next/image"
import { getArticleBySlug } from "@/lib/articles"
import type { Article } from "@/types/article"

export default function ArtigoPage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadArticle() {
      try {
        const articleData = await getArticleBySlug(params.slug)
        setArticle(articleData)
      } catch (error) {
        console.error("Erro ao carregar artigo:", error)
      } finally {
        setLoading(false)
      }
    }

    loadArticle()
  }, [params.slug])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-integrare-blue"></div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
        <Link href="/artigos" className="text-integrare-blue hover:underline">
          Voltar para a lista de artigos
        </Link>
      </div>
    )
  }

  return (
    <div className="latex-container">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <Link href="/artigos" className="flex items-center text-sm text-gray-500 hover:text-integrare-blue mr-3">
            <ArrowLeft size={16} className="mr-1" /> Voltar
          </Link>
          <Link href="/" className="flex items-center">
            <Image src="/images/logo-integrare.png" alt="Integrare" width={30} height={30} className="rounded-full" />
          </Link>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-integrare-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          <Download size={16} /> Salvar como PDF
        </button>
      </div>

      <LatexHeader />

      <div className="latex-title text-integrare-blue">{article.title}</div>
      <div className="text-xl text-center mb-6 text-gray-600">{article.subtitle}</div>

      <div className="flex justify-center mb-8">
        <Image
          src={article.coverImage || "/placeholder.svg?height=80&width=200&text=Agência Integrare"}
          alt={article.title}
          width={200}
          height={80}
          className="h-20 w-auto"
        />
      </div>

      <div className="latex-abstract">
        <strong>Resumo:</strong> {article.abstract}
      </div>

      <div className="mt-6 mb-8">
        <p className="text-center italic text-sm">
          <strong>Palavras-chave:</strong> {article.keywords.join(", ")}
        </p>
      </div>

      {article.tableOfContents && (
        <div className="latex-table-of-contents">
          <div className="latex-toc-title text-integrare-blue">Sumário</div>
          {article.tableOfContents.map((item, index) => (
            <div key={index} className="latex-toc-item">
              <div className="latex-toc-number">{item.number}</div>
              <div>{item.title}</div>
              <div className="latex-toc-dots"></div>
              <div className="latex-toc-page">{item.page}</div>
            </div>
          ))}
        </div>
      )}

      {/* Renderização dinâmica do conteúdo do artigo */}
      <div dangerouslySetInnerHTML={{ __html: article.content }} />

      <div className="mt-12 p-6 bg-amber-50 rounded-lg border border-integrare-blue">
        <h3 className="text-xl font-bold text-integrare-blue mb-4 text-center">Sobre o Autor</h3>
        <div className="flex items-center space-x-4">
          <Image
            src={article.author.avatar || "/placeholder.svg?height=60&width=60&text=Avatar"}
            alt={article.author.name}
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <p className="font-bold">{article.author.name}</p>
            <p className="text-sm text-gray-600">{article.author.bio}</p>
          </div>
        </div>
      </div>

      <LatexFooter pageNumber={article.pageCount} />
    </div>
  )
}
