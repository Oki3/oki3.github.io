import { Project } from '@/types/project'

export const allProjects: Project[] = [
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with Vue.js and TypeScript',
    image: 'https://picsum.photos/600/403',
    tags: ['Vue.js', 'TypeScript'],
    links: [
      { type: 'github', text: 'View Code', url: 'https://github.com/example/portfolio' },
      { type: 'demo', text: 'Live Demo', url: 'https://portfolio-demo.com' }
    ]
  },
  {
    id: 3,
    title: 'ML Image Classifier',
    description: 'Machine learning model for image classification using Python',
    image: 'https://picsum.photos/600/402',
    tags: ['Python', 'Machine Learning', 'TensorFlow'],
    links: [
      { type: 'github', text: 'View Code', url: 'https://github.com/example/ml-classifier' }
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
    description: 'A full-stack e-commerce platform with Vue.js and Node.js',
    image: 'https://picsum.photos/600/400',
    tags: ['Vue.js', 'Node.js', 'TypeScript'],
    links: [
      { type: 'github', text: 'View Code', url: 'https://github.com/example/ecommerce' },
      { type: 'demo', text: 'Live Demo', url: 'https://ecommerce-demo.com' }
    ]
  }
]

export const allTags = ['Vue.js', 'TypeScript', 'Node.js', 'React', 'Python', 'Machine Learning'] 