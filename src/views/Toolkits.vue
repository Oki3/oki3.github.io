<template>
  <div class="toolkits">
    <section class="toolkits-header">
      <h1>Development Toolkits</h1>
      <p class="subtitle">Essential tools and resources for developers</p>
    </section>

    <section class="toolkits-content">
      <div class="categories">
        <button
          v-for="category in categories"
          :key="category"
          :class="['category-btn', { active: selectedCategory === category }]"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="tools-grid">
        <div v-for="tool in filteredTools" :key="tool.id" class="tool-card">
          <div class="tool-icon">
            <img :src="tool.icon" :alt="tool.name">
          </div>
          <div class="tool-info">
            <h3>{{ tool.name }}</h3>
            <p>{{ tool.description }}</p>
            <div class="tool-links">
              <a :href="tool.documentation" target="_blank" class="tool-link">Documentation</a>
              <a :href="tool.github" target="_blank" class="tool-link">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Tool {
  id: number
  name: string
  description: string
  category: string
  icon: string
  documentation: string
  github: string
}

export default defineComponent({
  name: 'Toolkits',
  data() {
    return {
      selectedCategory: 'All',
      categories: ['All', 'Frontend', 'Backend', 'DevOps', 'Testing'],
      tools: [
        {
          id: 1,
          name: 'Vue.js',
          description: 'Progressive JavaScript framework for building user interfaces',
          category: 'Frontend',
          icon: 'https://vuejs.org/images/logo.png',
          documentation: 'https://vuejs.org/guide/introduction.html',
          github: 'https://github.com/vuejs/vue'
        },
        {
          id: 2,
          name: 'TypeScript',
          description: 'Typed superset of JavaScript that compiles to plain JavaScript',
          category: 'Frontend',
          icon: 'https://www.typescriptlang.org/assets/images/ts-logo-512.png',
          documentation: 'https://www.typescriptlang.org/docs/',
          github: 'https://github.com/microsoft/TypeScript'
        },
        {
          id: 3,
          name: 'Node.js',
          description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
          category: 'Backend',
          icon: 'https://nodejs.org/static/images/logo.svg',
          documentation: 'https://nodejs.org/en/docs/',
          github: 'https://github.com/nodejs/node'
        },
        {
          id: 4,
          name: 'Docker',
          description: 'Platform for developing, shipping, and running applications',
          category: 'DevOps',
          icon: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
          documentation: 'https://docs.docker.com/',
          github: 'https://github.com/docker/docker-ce'
        },
        {
          id: 5,
          name: 'Jest',
          description: 'Delightful JavaScript Testing Framework with a focus on simplicity',
          category: 'Testing',
          icon: 'https://jestjs.io/img/jest.png',
          documentation: 'https://jestjs.io/docs/getting-started',
          github: 'https://github.com/facebook/jest'
        }
      ] as Tool[]
    }
  },
  computed: {
    filteredTools(): Tool[] {
      if (this.selectedCategory === 'All') {
        return this.tools
      }
      return this.tools.filter(tool => tool.category === this.selectedCategory)
    }
  }
})
</script>

<style scoped>
.toolkits {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.toolkits-header {
  text-align: center;
  margin-bottom: 4rem;
}

.toolkits-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
}

.categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.category-btn {
  padding: 0.5rem 1.5rem;
  border: 2px solid #3498db;
  border-radius: 20px;
  background: none;
  color: #3498db;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover,
.category-btn.active {
  background-color: #3498db;
  color: white;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.tool-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 1.5rem;
  transition: transform 0.3s ease;
}

.tool-card:hover {
  transform: translateY(-5px);
}

.tool-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tool-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.tool-info {
  flex: 1;
}

.tool-info h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.tool-info p {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.tool-links {
  display: flex;
  gap: 1rem;
}

.tool-link {
  color: #3498db;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid #3498db;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.tool-link:hover {
  background-color: #3498db;
  color: white;
}

@media (max-width: 768px) {
  .tool-card {
    flex-direction: column;
    text-align: center;
  }

  .tool-icon {
    margin: 0 auto;
  }

  .tool-links {
    justify-content: center;
  }
}
</style> 