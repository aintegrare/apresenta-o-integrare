"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Calendar, User } from "lucide-react"
import { getAllArticles } from "@/lib/articles"
import type { Article } from "@/types/article"

export default function ArtigosPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    async function loadArticles() {
      try {
        const articlesData = await getAllArticles()
        setArticles(articlesData)
      } catch (error) {
        console.error("Erro ao carregar artigos:", error)
      } finally {
        setLoading(false)
      }
    }

    loadArticles()
  }, [])

  // Extrair todas as categorias únicas dos artigos
  const categories = Array.from(new Set(articles.flatMap((article) => article.categories)))

  // Filtrar artigos com base na pesquisa e categoria selecionada
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      searchTerm === "" ||
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.abstract.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === null || article.categories.includes(selectedCategory)

    return matchesSearch && matchesCategory
  })

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-integrare-blue"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo-integrare.png" alt="Integrare" width={40} height={40} className="rounded-full" />
            <span className="font-medium text-integrare-blue">Integrare</span>
          </Link>
          <h1 className="text-2xl font-bold text-integrare-blue">Artigos</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Pesquisar artigos..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-integrare-blue"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              className={`px-3 py-1 text-sm rounded-full ${
                selectedCategory === null
                  ? "bg-integrare-blue text-white"
                  : "bg-amber-100 text-gray-700 hover:bg-amber-200"
              }`}
              onClick={() => setSelectedCategory(null)}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`px-3 py-1 text-sm rounded-full ${
                  selectedCategory === category
                    ? "bg-integrare-blue text-white"
                    : "bg-amber-100 text-gray-700 hover:bg-amber-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Nenhum artigo encontrado.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Link key={article.slug} href={`/artigos/${article.slug}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={article.coverImage || "/placeholder.svg?height=300&width=500&text=Artigo"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex-grow">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.categories.map((category) => (
                        <span key={category} className="bg-blue-100 text-integrare-blue text-xs px-2 py-1 rounded-full">
                          {category}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-gray-800">{article.title}</h2>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">{article.abstract}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center text-gray-500 text-xs">
                        <Calendar size={14} className="mr-1" />
                        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-xs">
                        <User size={14} className="mr-1" />
                        <span>{article.author.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
