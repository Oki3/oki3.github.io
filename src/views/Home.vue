<template>
  <div class="home">
    <section class="hero">
      <h1 :class="['animate-fade-in', { 'animate-reset': shouldAnimate }]">{{ $t('home.hero.title') }}</h1>
      <p :class="['animate-fade-in-delay', { 'animate-reset': shouldAnimate }]">{{ $t('home.hero.subtitle') }}</p>
    </section>
    
    <section class="featured-posts">
      <h2 :class="['animate-slide-up', { 'animate-reset': shouldAnimate }]">{{ $t('home.featured.title') }}</h2>
      <div class="posts-grid">
        <article 
          v-for="(post, index) in featuredPosts" 
          :key="post.id" 
          :class="['post-card', 'animate-slide-up', { 'animate-reset': shouldAnimate }]"
          :style="{ animationDelay: `${index * 0.2}s` }"
          @click="viewPost(post)"
        >
          <img :src="post.image" :alt="$t(post.titleKey)" class="post-image">
          <div class="post-content">
            <h3>{{ $t(post.titleKey) }}</h3>
            <p>{{ $t(post.excerptKey) }}</p>
            <div class="post-meta">
              <span class="date">{{ post.date }}</span>
              <span class="category">{{ $t(post.categoryKey) }}</span>
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
import { useRouter } from 'vue-router'
import { useAnimation } from '@/composables/useAnimation'
import '@/assets/styles/animations.css'
import { allPosts } from '@/data/posts'
import { Post } from '@/types/post'

export default defineComponent({
  name: 'Home',
  setup() {
    const { t } = useI18n()
    const router = useRouter()
    const { shouldAnimate } = useAnimation()
    
    const featuredPosts = allPosts.slice(0, 3);
    
    const viewPost = (post: Post) => {
      router.push({ name: 'post-details', params: { slug: post.slug } });
    };

    return { t, shouldAnimate, viewPost, featuredPosts }
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

.featured-posts {
  padding: 2rem 0;
}

.featured-posts h2 {
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #2c3e50;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.post-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  cursor: pointer;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.post-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.post-card:hover .post-image {
  transform: scale(1.05);
}

.post-content {
  padding: 1.5rem;
}

.post-content h3 {
  margin: 0 0 1rem 0;
  color: #2c3e50;
}

.post-content p {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.post-meta {
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
</style> 