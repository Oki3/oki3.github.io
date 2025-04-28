export interface ProjectLink {
  type: string
  text: string
  url: string
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  links: ProjectLink[]
} 