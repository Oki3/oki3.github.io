<template>
  <div class="contact">
    <section class="contact-header">
      <h1>{{ $t('contact.header.title') }}</h1>
      <p>{{ $t('contact.header.subtitle') }}</p>
    </section>

    <section class="contact-content">
      <div class="contact-grid">
        <div class="contact-info">
          <h2>{{ $t('contact.info.title') }}</h2>
          <div class="info-items">
            <div v-for="(item, index) in contactInfo" 
                 :key="item.title"
                 class="info-item"
            >
              <span class="info-icon">{{ item.icon }}</span>
              <div class="info-content">
                <h3>{{ $t(`contact.info.${item.key}.title`) }}</h3>
                <p>{{ $t(`contact.info.${item.key}.value`) }}</p>
              </div>
            </div>
          </div>

          <div class="social-links">
            <h3>{{ $t('contact.social.title') }}</h3>
            <div class="social-icons">
              <a v-for="(social, index) in socialLinks" 
                 :key="social.platform"
                 :href="social.url"
                 class="social-icon"
                 target="_blank"
              >
                <span class="icon">{{ social.icon }}</span>
                <span class="label">{{ $t(`contact.social.${social.platform}`) }}</span>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h2>{{ $t('contact.form.title') }}</h2>
          <form @submit.prevent="handleSubmit">
            <div v-for="(field, index) in formFields" 
                 :key="field.id"
                 class="form-group"
            >
              <label :for="field.id">{{ $t(`contact.form.${field.key}.label`) }}</label>
              <component 
                :is="field.type === 'textarea' ? 'textarea' : 'input'"
                :type="field.type"
                :id="field.id"
                v-model="form[field.key]"
                required
                :placeholder="$t(`contact.form.${field.key}.placeholder`)"
                :rows="field.type === 'textarea' ? 5 : undefined"
              >
              </component>
            </div>
            <button 
              type="submit" 
              class="submit-btn"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? $t('contact.form.submit.sending') : $t('contact.form.submit.default') }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAnimation } from '@/composables/useAnimation'
import '@/assets/styles/animations.css'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  [key: string]: string
}

export default defineComponent({
  name: 'Contact',
  setup() {
    const { t } = useI18n()
    const { } = useAnimation()

    return { t }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      } as ContactForm,
      isSubmitting: false,
      contactInfo: [
        { key: 'email', icon: '📧', title: 'Email' },
        { key: 'location', icon: '📍', title: 'Location' },
        { key: 'work', icon: '💼', title: 'Work' }
      ],
      socialLinks: [
        { platform: 'github', icon: '📱', url: '#' },
        { platform: 'linkedin', icon: '💼', url: '#' },
        { platform: 'twitter', icon: '🐦', url: '#' }
      ],
      formFields: [
        { id: 'name', key: 'name', type: 'text' },
        { id: 'email', key: 'email', type: 'email' },
        { id: 'subject', key: 'subject', type: 'text' },
        { id: 'message', key: 'message', type: 'textarea' }
      ]
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        alert(this.t('contact.form.success'))
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
      } catch (error) {
        alert(this.t('contact.form.error'))
      } finally {
        this.isSubmitting = false
      }
    }
  }
})
</script>

<style scoped>
.contact {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  user-select: none;
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
}

.contact-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h2,
.contact-form h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.info-icon {
  font-size: 1.5rem;
  background-color: #f0f2f5;
  padding: 1rem;
  border-radius: 50%;
}

.info-content h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.info-content p {
  color: #666;
}

.social-links h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #666;
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-5px);
}

.social-icon .icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.social-icon .label {
  font-size: 0.9rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  user-select: none;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3498db;
}

.submit-btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
}

.submit-btn:hover:not(:disabled) {
  background-color: #2980b9;
}

.submit-btn:disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .info-items {
    gap: 1.5rem;
  }

  .social-icons {
    justify-content: center;
  }
}
</style> 