<template>
  <div class="projects">
    <section class="projects-header">
      <h1>My Projects</h1>
      <p class="subtitle">A collection of my development work and contributions</p>
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
        <div v-for="project in filteredProjects" :key="project.id" class="project-card">
          <div class="project-image">
            <img :src="project.image" :alt="project.title">
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <div class="project-links">
              <a v-if="project.github" :href="project.github" target="_blank" class="project-link">
                <span class="link-icon">📦</span> GitHub
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" class="project-link">
                <span class="link-icon">🚀</span> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
}

export default defineComponent({
  name: 'Projects',
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
          github: 'https://github.com/example/ecommerce',
          demo: 'https://ecommerce-demo.com'
        },
        {
          id: 2,
          title: 'Task Management App',
          description: 'A collaborative task management application with real-time updates',
          image: 'https://picsum.photos/600/401',
          tags: ['Vue.js', 'TypeScript', 'Firebase'],
          github: 'https://github.com/example/task-manager',
          demo: 'https://task-manager-demo.com'
        },
        {
          id: 3,
          title: 'ML Image Classifier',
          description: 'Machine learning model for image classification using Python',
          image: 'https://picsum.photos/600/402',
          tags: ['Python', 'Machine Learning', 'TensorFlow'],
          github: 'https://github.com/example/ml-classifier'
        },
        {
          id: 4,
          title: 'Portfolio Website',
          description: 'Personal portfolio website built with Vue.js and TypeScript',
          image: 'https://picsum.photos/600/403',
          tags: ['Vue.js', 'TypeScript'],
          github: 'https://github.com/example/portfolio',
          demo: 'https://portfolio-demo.com'
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
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
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
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.project-content p {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background-color: #f0f2f5;
  color: #666;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: #3498db;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border: 1px solid #3498db;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.project-link:hover {
  background-color: #3498db;
  color: white;
}

.link-icon {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .project-links {
    flex-direction: column;
  }

  .project-link {
    text-align: center;
    justify-content: center;
  }
}
</style> 