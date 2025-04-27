import { ref, onMounted, watch } from 'vue'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  AUTO = 'auto'
}

export function useTheme() {
  const currentTheme = ref<Theme>(Theme.AUTO)
  const isAutoMode = ref(true)

  // Function to determine theme based on current time
  const determineThemeByTime = (): Theme => {
    const currentHour = new Date().getHours()
    // Dark mode after 22:00 (10 PM) and before 8:00 AM
    return (currentHour >= 22 || currentHour < 8) ? Theme.DARK : Theme.LIGHT
  }

  // Apply theme to the document
  const applyTheme = (theme: Theme) => {
    let appliedTheme = theme
    
    // If auto mode, determine theme by time
    if (theme === Theme.AUTO) {
      appliedTheme = determineThemeByTime()
    }
    
    document.documentElement.setAttribute('data-theme', appliedTheme)
    localStorage.setItem('theme-preference', theme)
  }

  // Set theme based on time if in auto mode
  const updateThemeByTime = () => {
    if (currentTheme.value === Theme.AUTO) {
      applyTheme(Theme.AUTO)
    }
  }
  
  // Toggle between light, dark, and auto modes
  const toggleTheme = () => {
    switch (currentTheme.value) {
      case Theme.LIGHT:
        currentTheme.value = Theme.DARK
        break
      case Theme.DARK:
        currentTheme.value = Theme.AUTO
        break
      case Theme.AUTO:
      default:
        currentTheme.value = Theme.LIGHT
        break
    }
    
    applyTheme(currentTheme.value)
  }

  // Watch for changes to current theme
  watch(currentTheme, (newTheme) => {
    applyTheme(newTheme)
  })

  // Initialize theme on component mount
  onMounted(() => {
    // Load saved preference if exists
    const savedTheme = localStorage.getItem('theme-preference')
    if (savedTheme && Object.values(Theme).includes(savedTheme as Theme)) {
      currentTheme.value = savedTheme as Theme
    }
    
    // Apply current theme
    applyTheme(currentTheme.value)
    
    // Check time every minute to update theme if in auto mode
    setInterval(updateThemeByTime, 60000)
  })

  return {
    currentTheme,
    toggleTheme
  }
} 