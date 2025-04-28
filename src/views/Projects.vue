<template>
  <div class="projects">
    <section class="projects-header">
      <h1 :class="['animate-fade-in', { 'animate-reset': shouldAnimate }]">{{ t('projects.title') }}</h1>
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
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :class="['project-card', 'animate-slide-up', { 'animate-reset': shouldAnimate }]"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <img :src="project.image" :alt="project.title" class="project-image" />
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <div class="project-links">
              <a
                v-for="link in project.links"
                :key="link.type"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="link-button"
              >
                {{ link.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAnimation } from '@/composables/useAnimation'
import '@/assets/styles/animations.css'
import { allProjects, allTags } from '@/data/projects'
import type { Project } from '@/types/project'

export default defineComponent({
  name: 'Projects',
  setup() {
    const { t } = useI18n()
    const { shouldAnimate } = useAnimation()
    const selectedTags = ref<string[]>([])
    const tags = ref<string[]>(allTags)
    const projects = ref<Project[]>(allProjects)

    const filteredProjects = computed(() => {
      if (selectedTags.value.length === 0) {
        return projects.value
      }
      return projects.value.filter((project: Project) =>
        project.tags.some((tag: string) => selectedTags.value.includes(tag))
      )
    })

    const toggleTag = (tag: string) => {
      const index = selectedTags.value.indexOf(tag)
      if (index === -1) {
        selectedTags.value.push(tag)
      } else {
        selectedTags.value.splice(index, 1)
      }
    }

    return {
      t,
      shouldAnimate,
      selectedTags,
      tags,
      projects,
      filteredProjects,
      toggleTag
    }
  }
})
</script>

<style scoped>
.projects {
  max-width: 1200px;
  margin: 0 auto;
}

.projects-header {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  color: white;
  border-radius: 8px;
  margin-bottom: 3rem;
  overflow: hidden;
}

.projects-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.filter-btn {
  background-color: transparent;
  border: 1px solid var(--accent-color);
  color: var(--text-color);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background-color: rgba(52, 152, 219, 0.1);
}

.filter-btn.active {
  background-color: var(--accent-color);
  color: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--card-bg-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
  opacity: 0;
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

.project-content h3 {
  margin: 0 0 1rem 0;
  color: var(--text-color);
}

.project-content p {
  color: var(--text-color);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: rgba(52, 152, 219, 0.1);
  border: 1px solid var(--accent-color);
  border-radius: 15px;
  font-size: 0.875rem;
  color: var(--accent-color);
  font-weight: 500;
  transition: all 0.3s ease;
}

.tag:hover {
  background: var(--accent-color);
  color: white;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.link-button {
  padding: 0.5rem 1rem;
  background: var(--accent-color);
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s ease;
}

.link-button:hover {
  background: var(--accent-color-dark);
}
</style> 