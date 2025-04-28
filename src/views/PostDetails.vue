<template>
  <div class="post-details" v-if="post">
    <section class="post-header" :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${post.image})` }">
      <div class="container">
        <h1 :class="['animate-fade-in', { 'animate-reset': shouldAnimate }]">{{ $t(post.titleKey) }}</h1>
        <div class="post-meta" :class="['animate-fade-in-delay', { 'animate-reset': shouldAnimate }]">
          <span class="date">{{ post.date }}</span>
          <span class="category">{{ $t(post.categoryKey) }}</span>
        </div>
      </div>
    </section>
    
    <section class="post-content-wrapper">
      <article class="post-content" :class="['animate-slide-up', { 'animate-reset': shouldAnimate }]">
        <div class="post-body">
          <p v-for="(paragraph, index) in postContent" :key="index" class="paragraph">{{ paragraph }}</p>
        </div>
        
        <div class="post-tags">
          <span class="tag-label">Tags:</span>
          <div class="tags">
            <span v-for="(tag, index) in post.tags" :key="index" class="tag">{{ tag }}</span>
          </div>
        </div>
        
        <div class="post-navigation">
          <router-link v-if="prevPost" :to="`/posts/${prevPost.slug}`" class="nav-link prev">
            <span class="nav-direction">← Previous</span>
            <span class="nav-title">{{ $t(prevPost.titleKey) }}</span>
          </router-link>
          <div v-else class="nav-link empty"></div>
          
          <router-link v-if="nextPost" :to="`/posts/${nextPost.slug}`" class="nav-link next">
            <span class="nav-direction">Next →</span>
            <span class="nav-title">{{ $t(nextPost.titleKey) }}</span>
          </router-link>
          <div v-else class="nav-link empty"></div>
        </div>
      </article>
      
      <aside class="sidebar" :class="['animate-slide-up', { 'animate-reset': shouldAnimate }]">
        <div class="related-posts">
          <h3>Related Posts</h3>
          <div class="related-post" v-for="relatedPost in relatedPosts" :key="relatedPost.id" @click="navigateToPost(relatedPost.slug)">
            <img :src="relatedPost.image" :alt="$t(relatedPost.titleKey)" class="related-image">
            <div class="related-content">
              <h4>{{ $t(relatedPost.titleKey) }}</h4>
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
import '@/assets/styles/animations.css'

interface Post {
  id: number
  titleKey: string
  excerptKey: string
  image: string
  date: string
  categoryKey: string
  slug: string
  tags?: string[]
}

export default defineComponent({
  name: 'PostDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { t } = useI18n()
    const { shouldAnimate } = useAnimation()
    
    // Simulate a posts database
    const allPosts = ref<Post[]>([
      {
        id: 1,
        titleKey: 'home.featured.posts.vue.title',
        excerptKey: 'home.featured.posts.vue.excerpt',
        image: 'https://picsum.photos/1200/600',
        date: 'April 27, 2024',
        categoryKey: 'home.featured.posts.vue.category',
        slug: 'getting-started-with-vue-3',
        tags: ['Vue', 'Frontend', 'JavaScript']
      },
      {
        id: 2,
        titleKey: 'home.featured.posts.typescript.title',
        excerptKey: 'home.featured.posts.typescript.excerpt',
        image: 'https://picsum.photos/1200/601',
        date: 'April 26, 2024',
        categoryKey: 'home.featured.posts.typescript.category',
        slug: 'typescript-best-practices',
        tags: ['TypeScript', 'JavaScript', 'Development']
      },
      {
        id: 3,
        titleKey: 'home.featured.posts.webdev.title',
        excerptKey: 'home.featured.posts.webdev.excerpt',
        image: 'https://picsum.photos/1200/602',
        date: 'April 25, 2024',
        categoryKey: 'home.featured.posts.webdev.category',
        slug: 'modern-web-development',
        tags: ['Web Development', 'Frontend', 'Design']
      },
      {
        id: 4,
        titleKey: 'posts.react.title',
        excerptKey: 'posts.react.excerpt',
        image: 'https://picsum.photos/1200/603',
        date: 'April 24, 2024',
        categoryKey: 'posts.react.category',
        slug: 'react-hooks-advanced-guide',
        tags: ['React', 'Frontend', 'JavaScript']
      },
      {
        id: 5,
        titleKey: 'posts.css.title',
        excerptKey: 'posts.css.excerpt',
        image: 'https://picsum.photos/1200/604',
        date: 'April 23, 2024',
        categoryKey: 'posts.css.category',
        slug: 'css-grid-and-flexbox-mastery',
        tags: ['CSS', 'Frontend', 'Design']
      }
    ]);
    
    const post = computed(() => {
      return allPosts.value.find(p => p.slug === route.params.slug);
    });
    
    const currentIndex = computed(() => {
      if (!post.value) return -1;
      return allPosts.value.findIndex(p => p.id === post.value?.id);
    });
    
    const prevPost = computed(() => {
      if (currentIndex.value <= 0) return null;
      return allPosts.value[currentIndex.value - 1];
    });
    
    const nextPost = computed(() => {
      if (currentIndex.value === -1 || currentIndex.value >= allPosts.value.length - 1) return null;
      return allPosts.value[currentIndex.value + 1];
    });
    
    const relatedPosts = computed(() => {
      if (!post.value) return [];
      
      // Get posts with similar tags
      return allPosts.value
        .filter(p => p.id !== post.value?.id && p.tags?.some(tag => post.value?.tags?.includes(tag)))
        .slice(0, 3);
    });
    
    // Simulate content paragraphs
    const postContent = ref([
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl ac ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Nullam auctor, nisl ac ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
      "Suspendisse potenti. Etiam euismod, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Nullam auctor, nisl ac ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
      "Phasellus euismod, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Nullam auctor, nisl ac ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
      "Maecenas euismod, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Nullam auctor, nisl ac ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
      "Curabitur euismod, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Nullam auctor, nisl ac ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl."
    ]);
    
    const navigateToPost = (slug: string) => {
      router.push({ name: 'post-details', params: { slug } });
    };
    
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    
    return {
      post,
      postContent,
      prevPost,
      nextPost,
      relatedPosts,
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