export interface Post {
  id: number
  titleKey: string
  excerptKey: string
  image: string
  date: string
  categoryKey: string
  slug: string
  tags?: string[]
  content: PostContentBlock[]
}

export interface PostContentBlock {
  type: 'text' | 'image'
  content: string
  caption?: string
  alt?: string
} 