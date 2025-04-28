<template>
  <div class="post-details" v-if="post">
    <section class="post-header" :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${post.image})` }">
      <div class="container">
        <h1 :class="['animate-fade-in', { 'animate-reset': shouldAnimate }]">{{ post.title }}</h1>
        <div class="post-meta" :class="['animate-fade-in-delay', { 'animate-reset': shouldAnimate }]">
          <span class="date">{{ post.date }}</span>
          <span class="category">{{ post.category }}</span>
        </div>
      </div>
    </section>
    
    <section class="post-content-wrapper">
      <article class="post-content" :class="['animate-slide-up', { 'animate-reset': shouldAnimate }]">
        <div class="post-body" v-html="post.html"></div>
        
        <div class="post-tags">
          <span class="tag-label">Tags:</span>
          <div class="tags">
            <span v-for="(tag, index) in post.tags" :key="index" class="tag">{{ tag }}</span>
          </div>
        </div>
        
        <div class="post-navigation">
          <router-link v-if="prevPost" :to="`/posts/${prevPost.slug}`" class="nav-link prev">
            <span class="nav-direction">← Previous</span>
            <span class="nav-title">{{ prevPost.title }}</span>
          </router-link>
          <div v-else class="nav-link empty"></div>
          
          <router-link v-if="nextPost" :to="`/posts/${nextPost.slug}`" class="nav-link next">
            <span class="nav-direction">Next →</span>
            <span class="nav-title">{{ nextPost.title }}</span>
          </router-link>
          <div v-else class="nav-link empty"></div>
        </div>
      </article>
      
      <aside class="sidebar" :class="['animate-slide-up', { 'animate-reset': shouldAnimate }]">
        <div class="related-posts">
          <h3>Related Posts</h3>
          <div class="related-post" v-for="relatedPost in relatedPosts" :key="relatedPost.slug" @click="navigateToPost(relatedPost.slug)">
            <img :src="relatedPost.image" :alt="relatedPost.title" class="related-image">
            <div class="related-content">
              <h4>{{ relatedPost.title }}</h4>
              <span class="related-date">{{ relatedPost.date }}</span>
            </div>
          </div>
        </div>
      </aside>
    </section>
  </div>
  <div v-else class="not-found">
    <h1>Post Not Found</h1>
    <p>The post you're looking for doesn't exist or has been removed.</p>
    <router-link to="/posts" class="back-link">Back to Posts</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAnimation } from '@/composables/useAnimation'
import { getPostBySlug, getRelatedPosts, getAllPosts, Post } from '@/utils/posts'
import '@/assets/styles/animations.css'

export default defineComponent({
  name: 'PostDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { t } = useI18n()
    const { shouldAnimate } = useAnimation()
    
    const post = ref<Post | null>(null)
    const relatedPosts = ref<Post[]>([])
    const allPosts = ref<Post[]>([])
    
    const currentIndex = computed(() => {
      if (!post.value) return -1;
      return allPosts.value.findIndex(p => p.slug === post.value?.slug);
    });
    
    const prevPost = computed(() => {
      if (currentIndex.value <= 0) return null;
      return allPosts.value[currentIndex.value - 1];
    });
    
    const nextPost = computed(() => {
      if (currentIndex.value === -1 || currentIndex.value >= allPosts.value.length - 1) return null;
      return allPosts.value[currentIndex.value + 1];
    });
    
    const navigateToPost = (slug: string) => {
      router.push({ name: 'post-details', params: { slug } });
    };
    
    onMounted(async () => {
      const slug = route.params.slug as string;
      post.value = await getPostBySlug(slug);
      
      if (post.value) {
        relatedPosts.value = await getRelatedPosts(post.value);
        allPosts.value = await getAllPosts();
      }
      
      window.scrollTo(0, 0);
    });
    
    return {
      post,
      relatedPosts,
      prevPost,
      nextPost,
      navigateToPost,
      shouldAnimate
    };
  }
})
</script>

<style scoped>
.post-details {
  max-width: 1200px;
  margin: 0 auto;
}

.post-header {
  color: white;
  padding: 6rem 2rem;
  margin-bottom: 3rem;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  position: relative;
}

.container {
  position: relative;
  z-index: 2;
  text-align: center;
}

.post-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
}

.post-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  opacity: 0;
  transform: translateY(20px);
}

.date, .category {
  font-size: 1.1rem;
  opacity: 0.8;
}

.category {
  color: var(--accent-color);
  font-weight: 500;
}

.post-content-wrapper {
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 2rem;
  padding: 0 1rem;
}

.post-content {
  background: var(--card-bg-color);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(30px);
}

.post-body {
  margin-bottom: 2rem;
}

.paragraph {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: var(--text-color);
}

.post-tags {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-label {
  font-weight: bold;
  color: var(--text-color);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: rgba(52, 152, 219, 0.1);
  color: var(--accent-color);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
}

.post-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.nav-link {
  display: flex;
  flex-direction: column;
  max-width: 45%;
  text-decoration: none;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  color: var(--text-color);
}

.nav-link:hover {
  background-color: rgba(52, 152, 219, 0.1);
  transform: translateY(-3px);
}

.nav-direction {
  color: var(--accent-color);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.nav-title {
  font-weight: 500;
}

.prev {
  text-align: left;
}

.next {
  text-align: right;
}

.empty {
  width: 45%;
}

.sidebar {
  opacity: 0;
  transform: translateY(30px);
}

.related-posts {
  background: var(--card-bg-color);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: var(--card-shadow);
}

.related-posts h3 {
  margin-bottom: 1.5rem;
  color: var(--text-color);
  font-size: 1.3rem;
}

.related-post {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.related-post:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.related-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.related-content {
  padding: 0 1rem;
  flex: 1;
}

.related-content h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: var(--text-color);
}

.related-date {
  font-size: 0.8rem;
  color: var(--text-color);
}

.not-found {
  text-align: center;
  padding: 5rem 2rem;
}

.back-link {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background-color: var(--accent-color);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.back-link:hover {
  background-color: #2980b9;
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .post-content-wrapper {
    grid-template-columns: 1fr;
  }
  
  .post-navigation {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-link {
    max-width: 100%;
  }
  
  .empty {
    display: none;
  }
}
</style> 