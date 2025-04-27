<template>
  <div class="home">
    <section class="hero">
      <h1>Welcome to My Blog</h1>
      <p>Exploring technology, development, and creative ideas</p>
    </section>
    
    <section class="featured-posts">
      <h2>Featured Posts</h2>
      <div class="posts-grid">
        <article v-for="post in featuredPosts" :key="post.id" class="post-card">
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Post {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  category: string
}

export default defineComponent({
  name: 'Home',
  data() {
    return {
      featuredPosts: [
        {
          id: 1,
          title: 'Getting Started with Vue 3',
          excerpt: 'Learn the basics of Vue 3 and its composition API',
          image: 'https://picsum.photos/400/250',
          date: 'April 27, 2024',
          category: 'Development'
        },
        {
          id: 2,
          title: 'TypeScript Best Practices',
          excerpt: 'Essential TypeScript patterns for better code quality',
          image: 'https://picsum.photos/400/251',
          date: 'April 26, 2024',
          category: 'TypeScript'
        },
        {
          id: 3,
          title: 'Modern Web Development',
          excerpt: 'Exploring the latest trends in web development',
          image: 'https://picsum.photos/400/252',
          date: 'April 25, 2024',
          category: 'Web Development'
        }
      ] as Post[]
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
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  opacity: 0.9;
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
  transition: transform 0.3s ease;
}

.post-card:hover {
  transform: translateY(-5px);
}

.post-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
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
</style> 