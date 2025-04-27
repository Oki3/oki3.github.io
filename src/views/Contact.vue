<template>
  <div class="contact">
    <section class="contact-header">
      <h1>Get in Touch</h1>
      <p class="subtitle">Feel free to reach out for collaborations or just a friendly hello</p>
    </section>

    <section class="contact-content">
      <div class="contact-grid">
        <div class="contact-info">
          <h2>Contact Information</h2>
          <div class="info-items">
            <div class="info-item">
              <span class="info-icon">📧</span>
              <div class="info-content">
                <h3>Email</h3>
                <p>hello@example.com</p>
              </div>
            </div>
            <div class="info-item">
              <span class="info-icon">📍</span>
              <div class="info-content">
                <h3>Location</h3>
                <p>San Francisco, CA</p>
              </div>
            </div>
            <div class="info-item">
              <span class="info-icon">💼</span>
              <div class="info-content">
                <h3>Work</h3>
                <p>Available for freelance projects</p>
              </div>
            </div>
          </div>

          <div class="social-links">
            <h3>Connect with me</h3>
            <div class="social-icons">
              <a href="#" class="social-icon" target="_blank">
                <span class="icon">📱</span>
                <span class="label">GitHub</span>
              </a>
              <a href="#" class="social-icon" target="_blank">
                <span class="icon">💼</span>
                <span class="label">LinkedIn</span>
              </a>
              <a href="#" class="social-icon" target="_blank">
                <span class="icon">🐦</span>
                <span class="label">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h2>Send a Message</h2>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                placeholder="Your name"
              >
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                placeholder="Your email"
              >
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                required
                placeholder="Message subject"
              >
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                placeholder="Your message"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export default defineComponent({
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      } as ContactForm,
      isSubmitting: false
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true
      try {
        // Here you would typically make an API call to your backend
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
        alert('Message sent successfully!')
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
      } catch (error) {
        alert('Failed to send message. Please try again.')
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