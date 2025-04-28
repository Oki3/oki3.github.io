<template>
  <div class="home">
    <section class="hero">
      <h1 :class="['animate-fade-in', { 'animate-reset': shouldAnimate }]">{{ $t('home.hero.title') }}</h1>
      <p :class="['animate-fade-in-delay', { 'animate-reset': shouldAnimate }]">{{ $t('home.hero.subtitle') }}</p>
    </section>
    
    <section class="featured-posts">
      <div class="section-header">
        <h2 :class="['animate-slide-up', { 'animate-reset': shouldAnimate }]">{{ $t('home.featured.title') }}</h2>
        <router-link to="/posts" class="view-all">View All ></router-link>
      </div>
      <div class="posts-grid">
        <article 
          v-for="(post, index) in featuredPosts" 
          :key="post.slug" 
          :class="['post-card', 'animate-slide-up', { 'animate-reset': shouldAnimate }]"
          :style="{ animationDelay: `${index * 0.2}s` }"
          @click="viewPost(post)"
        >
          <img :src="post.image" :alt="post.title" class="post-image">
          <div class="post-content">
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
            <div class="post-meta">
              <span class="date">{{ post.date }}</span>
              <span class="category">{{ post.category }}</span>
            </div>
          </div>
        </article>
      </div>
    </section>
    
    <section class="featured-projects">
      <div class="section-header">
        <h2 :class="['animate-slide-up', { 'animate-reset': shouldAnimate }]">Featured Projects</h2>
        <router-link to="/projects" class="view-all">View All ></router-link>
      </div>
      <div class="projects-grid">
        <article 
          v-for="(project, index) in featuredProjects" 
          :key="project.slug" 
          :class="['project-card', 'animate-slide-up', { 'animate-reset': shouldAnimate }]"
          :style="{ animationDelay: `${index * 0.2}s` }"
          @click="viewProject(project)"
        >
          <img :src="project.image" :alt="project.title" class="project-image">
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.excerpt }}</p>
            <div class="project-meta">
              <span class="date">{{ project.date }}</span>
              <span class="category">{{ project.category }}</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useAnimation } from '@/composables/useAnimation'
import { getAllPosts, Post } from '@/utils/posts'
import '@/assets/styles/animations.css'

interface Project {
  title: string
  date: string
  category: string
  image: string
  excerpt: string
  slug: string
}

export default defineComponent({
  name: 'Home',
  setup() {
    const { t } = useI18n()
    const router = useRouter()
    const { shouldAnimate } = useAnimation()
    const featuredPosts = ref<Post[]>([])
    const featuredProjects = ref<Project[]>([])
    
    const viewPost = (post: Post) => {
      router.push({ name: 'post-details', params: { slug: post.slug } });
    };

    const viewProject = (project: Project) => {
      router.push({ name: 'project-details', params: { slug: project.slug } });
    };

    const fetchProjects = async () => {
      try {
        // TODO: Replace with actual API call
        const response = await fetch('/api/projects')
        const allProjects = await response.json()
        featuredProjects.value = allProjects.slice(0, 3)
      } catch (error) {
        console.error('Error fetching projects:', error)
      }
    };

    onMounted(async () => {
      const allPosts = await getAllPosts();
      featuredPosts.value = allPosts.slice(0, 3);
      fetchProjects();
    });

    return { 
      t, 
      shouldAnimate, 
      viewPost,
      viewProject,
      featuredPosts,
      featuredProjects
    }
  }
})
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  color: white;
  border-radius: 8px;
  margin-bottom: 3rem;
  overflow: hidden;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
}

.hero p {
  font-size: 1.2rem;
  opacity: 0;
  transform: translateY(20px);
}

.animate-fade-in {
  animation: fadeIn 0.8s ease forwards;
}

.animate-fade-in-delay {
  animation: fadeIn 0.8s ease forwards;
  animation-delay: 0.3s;
}

.animate-slide-up {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.6s ease forwards;
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

.featured-posts,
.featured-projects {
  padding: 2rem 0;
}

.featured-posts h2,
.featured-projects h2 {
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #2c3e50;
}

.posts-grid,
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.post-card,
.project-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  cursor: pointer;
}

.post-card:hover,
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.post-image,
.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.post-card:hover .post-image,
.project-card:hover .project-image {
  transform: scale(1.05);
}

.post-content,
.project-content {
  padding: 1.5rem;
}

.post-content h3,
.project-content h3 {
  margin: 0 0 1rem 0;
  color: #2c3e50;
}

.post-content p,
.project-content p {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.post-meta,
.project-meta {
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 0.9rem;
}

.category {
  color: #3498db;
  font-weight: 500;
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

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.view-all {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.view-all:hover {
  transform: translateX(5px);
}
</style> 