<template>
  <div class="language-switcher">
    <div class="language-picker" @click.prevent="toggleDropdown" ref="pickerRef" tabindex="-1">
      <div class="selected-language">
        <span class="language-flag">{{ getLanguageFlag(currentLang) }}</span>
        <span class="language-name">{{ getLanguageName(currentLang) }}</span>
        <span class="dropdown-arrow">▼</span>
      </div>
      <div class="language-dropdown" v-if="isOpen">
        <div 
          v-for="lang in availableLanguages" 
          :key="lang.code"
          :class="['language-option', { active: currentLang === lang.code }]"
          @click="changeLanguage(lang.code)"
          tabindex="-1"
        >
          <span class="language-flag">{{ getLanguageFlag(lang.code) }}</span>
          <span class="language-name">{{ lang.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isOpen = ref(false)
const pickerRef = ref<HTMLElement | null>(null)

const availableLanguages = [
  { code: 'en', name: 'English' },
  { code: 'zh-CN', name: '简体中文' }
]

const currentLang = computed(() => locale.value)

const getLanguageFlag = (code: string) => {
  const flags: Record<string, string> = {
    'en': '🇺🇸',
    'zh-CN': '🇨🇳'
  }
  return flags[code] || '🌐'
}

const getLanguageName = (code: string) => {
  const lang = availableLanguages.find(l => l.code === code)
  return lang ? lang.name : code
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const changeLanguage = (lang: string) => {
  locale.value = lang
  isOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  if (pickerRef.value && !pickerRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.language-switcher {
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.language-picker {
  position: relative;
  cursor: pointer;
}

.selected-language {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--accent-color);
  border-radius: 20px;
  background: none;
  color: var(--nav-text-color);
  transition: all 0.3s ease;
  font-size: 0.9rem;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  outline: none;
}

.selected-language:hover {
  background-color: var(--nav-hover-bg);
  transform: translateY(-2px);
}

.language-flag {
  font-size: 1.2rem;
}

.dropdown-arrow {
  font-size: 0.8rem;
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.language-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: var(--card-bg-color);
  border-radius: 10px;
  box-shadow: var(--card-shadow);
  overflow: hidden;
  z-index: 1000;
  min-width: 150px;
  animation: dropdownFadeIn 0.2s ease;
}

@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.language-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  color: var(--text-color);
  transition: all 0.3s ease;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.language-option:hover {
  background-color: var(--nav-hover-bg);
}

.language-option.active {
  background-color: rgba(52, 152, 219, 0.2);
  color: var(--accent-color);
  font-weight: 500;
}
</style> 