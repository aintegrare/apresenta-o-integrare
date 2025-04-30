export interface TableOfContentsItem {
  number: string
  title: string
  page: number
}

export interface Author {
  name: string
  bio: string
  avatar?: string
}

export interface Article {
  slug: string
  title: string
  subtitle: string
  abstract: string
  content: string
  coverImage?: string
  author: Author
  publishedAt: string
  updatedAt?: string
  categories: string[]
  keywords: string[]
  pageCount: number
  tableOfContents?: TableOfContentsItem[]
}
