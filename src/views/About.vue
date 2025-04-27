<template>
  <div class="about">
    <section class="about-header">
      <h1>About Me</h1>
      <p class="subtitle">Passionate about technology and sharing knowledge</p>
    </section>

    <section class="about-content">
      <div class="profile-section">
        <img src="https://picsum.photos/300/300" alt="Profile" class="profile-image">
        <div class="profile-info">
          <h2>John Doe</h2>
          <p class="title">Full Stack Developer & Tech Enthusiast</p>
          <div class="social-links">
            <a href="#" class="social-link">GitHub</a>
            <a href="#" class="social-link">LinkedIn</a>
            <a href="#" class="social-link">Twitter</a>
          </div>
        </div>
      </div>

      <div class="bio-section">
        <h3>My Story</h3>
        <p>
          I'm a passionate developer with over 5 years of experience in web development.
          My journey in tech started with a curiosity about how things work on the internet,
          which led me to learn programming and eventually become a full-stack developer.
        </p>
        <p>
          I believe in writing clean, maintainable code and sharing knowledge with the
          developer community. This blog is my platform to share insights, tutorials,
          and experiences from my journey in tech.
        </p>
      </div>

      <div class="skills-section">
        <h3>Skills & Expertise</h3>
        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.name" class="skill-card">
            <h4>{{ skill.name }}</h4>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Skill {
  name: string
  description: string
}

export default defineComponent({
  name: 'About',
  data() {
    return {
      skills: [
        {
          name: 'Frontend Development',
          description: 'Vue.js, React, TypeScript, HTML5, CSS3'
        },
        {
          name: 'Backend Development',
          description: 'Node.js, Python, Java, SQL, NoSQL'
        },
        {
          name: 'DevOps',
          description: 'Docker, Kubernetes, CI/CD, AWS'
        },
        {
          name: 'UI/UX Design',
          description: 'Figma, Adobe XD, Responsive Design'
        }
      ] as Skill[]
    }
  }
})
</script>

<style scoped>
.about {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.about-header {
  text-align: center;
  margin-bottom: 4rem;
}

.about-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-info h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.title {
  color: #666;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: #3498db;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #3498db;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: #3498db;
  color: white;
}

.bio-section {
  margin-bottom: 4rem;
}

.bio-section h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.bio-section p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.skills-section h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.skill-card h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.skill-card p {
  color: #666;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
}
</style> 