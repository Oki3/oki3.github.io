import { Project } from '@/types/project'

export const allProjects: Project[] = [
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with Vue.js and TypeScript',
    image: 'https://picsum.photos/600/403',
    tags: ['Vue.js', 'TypeScript'],
    links: [
      { type: 'github', text: 'View Code', url: 'https://github.com/Oki3/oki3.github.io' },
      { type: 'demo', text: 'Live Demo', url: 'https://oki3.github.io' }
    ]
  },
  {
    id: 3,
    title: 'VS Code Extension: Commit Message Generator using LLM',
    description: 'A VS Code plugin that generates commit messages using ollama',
    image: 'https://picsum.photos/600/402',
    tags: ['Python', 'Machine Learning'],
    links: [
      { type: 'github', text: 'View Code', url: 'https://github.com/Oki3/commit_message_generation_extension' }
    ]
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: 'https://picsum.photos/600/401',
    tags: ['Vue.js', 'TypeScript', 'Firebase'],
    links: [
      { type: 'github', text: 'View Code', url: 'https://github.com/example/task-manager' },
      { type: 'demo', text: 'Live Demo', url: 'https://task-manager-demo.com' }
    ]
  },
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A practice project of a full-stack e-commerce platform with Spring Boot and Vue.js',
    image: 'https://picsum.photos/600/400',
    tags: ['Vue.js', 'Java', 'TypeScript'],
    links: [
      { type: 'github', text: 'View Code', url: 'https://github.com/example/ecommerce' },
      { type: 'demo', text: 'Live Demo', url: 'https://ecommerce-demo.com' }
    ]
  }
]

export const allTags = ['Vue.js', 'TypeScript', 'Node.js', 'React', 'Python', 'Machine Learning'] 