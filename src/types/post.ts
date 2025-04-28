export interface Post {
  id: number
  titleKey: string
  excerptKey: string
  image: string
  date: string
  categoryKey: string
  slug: string
  tags?: string[]
} 