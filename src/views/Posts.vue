<template>
  <div class="posts">
    <section class="posts-header">
      <h1 :class="['animate-fade-in', { 'animate-reset': shouldAnimate }]">{{ $t('posts.title') }}</h1>
      <p :class="['animate-fade-in-delay', { 'animate-reset': shouldAnimate }]">{{ $t('posts.subtitle') }}</p>
    </section>

    <section class="posts-content">
      <div class="filters">
        <button
          v-for="category in categories"
          :key="category"
          :class="['filter-btn', { active: selectedCategory === category || selectedCategory === 'All' }]"
          @click="setCategory(category)"
        >
          {{ category }}
        </button>
      </div>

      <div class="posts-grid">
        <article 
          v-for="(post, index) in filteredPosts" 
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
import { defineComponent, computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useAnimation } from '@/composables/useAnimation'
import '@/assets/styles/animations.css'
import { allPosts } from '@/data/posts'
import { Post } from '@/types/post'

export default defineComponent({
  name: 'Posts',
  setup() {
    const { t } = useI18n()
    const router = useRouter()
    const { shouldAnimate } = useAnimation()
    
    const selectedCategory = ref('All');
    
    const categories = computed(() => {
      const allCategories = allPosts.map(post => t(post.categoryKey));
      return ['All', ...new Set(allCategories)];
    });
    
    const filteredPosts = computed(() => {
      if (selectedCategory.value === 'All') {
        return allPosts;
      }
      return allPosts.filter(post => 
        t(post.categoryKey) === selectedCategory.value
      );
    });
    
    const setCategory = (category: string) => {
      selectedCategory.value = category;
    };
    
    const viewPost = (post: Post) => {
      router.push({ name: 'post-details', params: { slug: post.slug } });
    };

    return {
      categories,
      selectedCategory,
      filteredPosts,
      setCategory,
      viewPost,
      shouldAnimate
    };
  }
})
</script>

<style scoped>
.posts {
  max-width: 1200px;
  margin: 0 auto;
}

.posts-header {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  color: white;
  border-radius: 8px;
  margin-bottom: 3rem;
  overflow: hidden;
}

.posts-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
}

.posts-header p {
  font-size: 1.2rem;
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

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.post-card {
  background: var(--card-bg-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
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
  color: var(--text-color);
}

.post-content p {
  color: var(--text-color);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  color: var(--text-color);
  font-size: 0.9rem;
}

.category {
  color: var(--accent-color);
  font-weight: 500;
}
</style> 