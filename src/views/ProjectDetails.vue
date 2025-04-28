<template>
  <div class="project-details">
    <div class="container">
      <div class="project-header">
        <h1>{{ project.title }}</h1>
        <div class="project-meta">
          <span class="date">{{ formatDate(project.date) }}</span>
          <span class="category">{{ project.category }}</span>
        </div>
      </div>

      <div class="project-image" v-if="project.image">
        <img :src="project.image" :alt="project.title">
      </div>

      <div class="project-content" v-html="project.content"></div>

      <div class="project-tags" v-if="project.tags && project.tags.length">
        <h3>Tags</h3>
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>

      <div class="project-links" v-if="project.links && project.links.length">
        <h3>Links</h3>
        <div class="links">
          <a v-for="link in project.links" 
             :key="link.url" 
             :href="link.url" 
             target="_blank" 
             rel="noopener noreferrer"
             class="link">
            {{ link.text }}
          </a>
        </div>
      </div>

      <div class="navigation">
        <router-link 
          v-if="previousProject" 
          :to="{ name: 'project-details', params: { slug: previousProject.slug }}" 
          class="nav-link prev">
          ← {{ previousProject.title }}
        </router-link>
        <router-link 
          v-if="nextProject" 
          :to="{ name: 'project-details', params: { slug: nextProject.slug }}" 
          class="nav-link next">
          {{ nextProject.title }} →
        </router-link>
      </div>

      <div class="related-projects" v-if="relatedProjects.length">
        <h3>Related Projects</h3>
        <div class="projects-grid">
          <div v-for="related in relatedProjects" 
               :key="related.slug" 
               class="project-card"
               @click="navigateToProject(related.slug)">
            <img :src="related.image" :alt="related.title">
            <h4>{{ related.title }}</h4>
            <p>{{ related.excerpt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { formatDate } from '../utils/date'

interface Project {
  title: string
  date: string
  category: string
  image: string
  content: string
  tags: string[]
  links: { text: string; url: string }[]
  slug: string
  excerpt: string
}

const route = useRoute()
const router = useRouter()
const project = ref<Project>({} as Project)
const previousProject = ref<Project | null>(null)
const nextProject = ref<Project | null>(null)
const relatedProjects = ref<Project[]>([])

const fetchProject = async () => {
  try {
    // TODO: Replace with actual API call
    const response = await fetch(`/api/projects/${route.params.slug}`)
    project.value = await response.json()
  } catch (error) {
    console.error('Error fetching project:', error)
  }
}

const fetchRelatedProjects = async () => {
  try {
    // TODO: Replace with actual API call
    const response = await fetch(`/api/projects/${route.params.slug}/related`)
    relatedProjects.value = await response.json()
  } catch (error) {
    console.error('Error fetching related projects:', error)
  }
}

const navigateToProject = (slug: string) => {
  router.push({ name: 'project-details', params: { slug } })
}

onMounted(() => {
  fetchProject()
  fetchRelatedProjects()
})
</script>

<style scoped>
.project-details {
  padding: 2rem 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.project-header {
  margin-bottom: 2rem;
  text-align: center;
}

.project-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.project-meta {
  color: #666;
  font-size: 0.9rem;
}

.project-meta span {
  margin: 0 0.5rem;
}

.project-image {
  margin-bottom: 2rem;
}

.project-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.project-content {
  line-height: 1.6;
  margin-bottom: 2rem;
}

.project-tags,
.project-links {
  margin-bottom: 2rem;
}

.tags,
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.link {
  color: #007bff;
  text-decoration: none;
  margin-right: 1rem;
}

.link:hover {
  text-decoration: underline;
}

.navigation {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 1rem 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.nav-link {
  color: #007bff;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}

.related-projects {
  margin-top: 3rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.project-card {
  cursor: pointer;
  transition: transform 0.2s;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.project-card h4 {
  margin-bottom: 0.5rem;
}

.project-card p {
  color: #666;
  font-size: 0.9rem;
}
</style> 