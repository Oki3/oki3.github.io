import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export function useAnimation() {
  const { locale } = useI18n()
  const shouldAnimate = ref(false)

  // Watch for language changes
  watch(() => locale.value, () => {
    shouldAnimate.value = true
    setTimeout(() => {
      shouldAnimate.value = false
    }, 50)
  })

  return {
    shouldAnimate
  }
} 