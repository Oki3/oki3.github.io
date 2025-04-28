<template>
  <div class="projects">
    <section class="projects-header">
      <h1 :class="['animate-fade-in', { 'animate-reset': shouldAnimate }]">{{ $t('projects.title') }}</h1>
      <p :class="['animate-fade-in-delay', { 'animate-reset': shouldAnimate }]">{{ $t('projects.subtitle') }}</p>
    </section>

    <section class="projects-content">
      <div class="filters">
        <button
          v-for="tag in tags"
          :key="tag"
          :class="['filter-btn', { active: selectedTags.includes(tag) }]"
          @click="toggleTag(tag)"
        >
          {{ tag }}
        </button>
      </div>

      <div class="projects-grid">
        <article 
          v-for="(project, index) in filteredProjects" 
          :key="project.id"
          :class="['project-card', 'animate-slide-up', { 'animate-reset': shouldAnimate }]"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <img :src="project.image" :alt="project.title" class="project-image">
          <div class="project-content">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <div class="project-tags">
              <span 
                v-for="(tag, tagIndex) in project.tags" 
                :key="tagIndex"
                class="tag"
              >
                {{ tag }}
              </span>
            </div>
            <div class="project-links">
              <a 
                v-for="(link, linkIndex) in project.links" 
                :key="linkIndex"
                :href="link.url"
                :class="['project-link', link.type]"
                target="_blank"
              >
                {{ link.text }}
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAnimation } from '@/composables/useAnimation'
import '@/assets/styles/animations.css'

interface ProjectLink {
  type: string
  text: string
  url: string
}

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  links: ProjectLink[]
}

export default defineComponent({
  name: 'Projects',
  setup() {
    const { t } = useI18n()
    const { shouldAnimate } = useAnimation()

    return { t, shouldAnimate }
  },
  data() {
    return {
      selectedTags: [] as string[],
      tags: ['Vue.js', 'TypeScript', 'Node.js', 'React', 'Python', 'Machine Learning'],
      projects: [
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
          id: 4,
          title: 'Portfolio Website',
          description: 'Personal portfolio website built with Vue.js and TypeScript',
          image: 'https://picsum.photos/600/403',
          tags: ['Vue.js', 'TypeScript'],
          links: [
            { type: 'github', text: 'View Code', url: 'https://github.com/example/portfolio' },
            { type: 'demo', text: 'Live Demo', url: 'https://portfolio-demo.com' }
          ]
        }
      ] as Project[]
    }
  },
  computed: {
    filteredProjects(): Project[] {
      if (this.selectedTags.length === 0) {
        return this.projects
      }
      return this.projects.filter(project =>
        project.tags.some(tag => this.selectedTags.includes(tag))
      )
    }
  },
  methods: {
    toggleTag(tag: string) {
      const index = this.selectedTags.indexOf(tag)
      if (index === -1) {
        this.selectedTags.push(tag)
      } else {
        this.selectedTags.splice(index, 1)
      }
    }
  }
})
</script>

<style scoped>
.projects {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.projects-header {
  text-align: center;
  margin-bottom: 4rem;
}

.projects-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
}

.projects-header p {
  font-size: 1.2rem;
  color: #666;
  opacity: 0;
  transform: translateY(20px);
}

.filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1.5rem;
  border: 2px solid #3498db;
  border-radius: 20px;
  background: none;
  color: #3498db;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background-color: #3498db;
  color: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-content {
  padding: 1.5rem;
}

.project-content h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.project-content p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background: #f0f2f5;
  color: #2c3e50;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.project-link.github {
  background: #2c3e50;
  color: white;
}

.project-link.demo {
  background: #3498db;
  color: white;
}

.project-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.animate-fade-in {
  animation: fadeIn 0.8s ease forwards;
}

.animate-fade-in-delay {
  animation: fadeIn 0.8s ease forwards;
  animation-delay: 0.3s;
}

.animate-slide-up {
  animation: slideUp 0.6s ease forwards;
}

.animate-reset {
  animation: none !important;
  opacity: 0;
  transform: translateY(20px);
}

.animate-reset.animate-fade-in-delay {
  transform: translateY(20px);
}

.animate-reset.animate-slide-up {
  transform: translateY(30px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style> 