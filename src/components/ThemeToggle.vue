<template>
  <div class="theme-toggle" @click="toggleTheme" title="Toggle theme">
    <div class="theme-icon" aria-label="Toggle theme">
      <!-- Sun icon for light mode -->
      <svg v-if="currentTheme === 'light'" xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
      <!-- Moon icon for dark mode -->
      <svg v-else-if="currentTheme === 'dark'" xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      <!-- Auto icon -->
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a9.96 9.96 0 0 0-7.071 2.929 9.96 9.96 0 0 0 0 14.142 9.96 9.96 0 0 0 14.142 0 9.96 9.96 0 0 0 0-14.142A9.96 9.96 0 0 0 12 2z" />
        <path d="M12 2v20" />
        <path d="M2 12h20" />
        <path d="M12 6a6 6 0 0 0 0 12" />
      </svg>
      <span class="theme-name">{{ getThemeName() }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useTheme, Theme } from '../composables/useTheme'

export default defineComponent({
  name: 'ThemeToggle',
  setup() {
    const { currentTheme, toggleTheme } = useTheme()
    
    const getThemeName = () => {
      switch (currentTheme.value) {
        case 'light':
          return 'Light'
        case 'dark':
          return 'Dark'
        case 'auto':
        default:
          return 'Auto'
      }
    }
    
    return {
      currentTheme,
      toggleTheme,
      getThemeName
    }
  }
})
</script>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  cursor: pointer;
  background-color: transparent;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  height: 100%;
  transition: background-color 0.3s ease;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.theme-toggle:hover {
  background-color: var(--nav-hover-bg);
}

.theme-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--nav-text-color);
  pointer-events: none;
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
  stroke: var(--nav-text-color);
  pointer-events: none;
}

.theme-name {
  font-size: 0.7rem;
  margin-top: 0.2rem;
  color: var(--nav-text-color);
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  pointer-events: none;
}
</style> 