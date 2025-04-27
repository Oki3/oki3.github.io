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

      <div class="timeline-section">
        <h3>My Journey</h3>
        <div class="timeline">
          <div v-for="(entry, index) in timelineEntries" 
               :key="index" 
               class="timeline-entry"
               :class="{ 'right': index % 2 === 0 }"
               @click="showTimelineDetails(entry)">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h4>{{ entry.title }}</h4>
              <p class="timeline-date">{{ entry.date }}</p>
              <p class="timeline-description">{{ entry.shortDescription }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline Details Modal -->
      <div v-if="selectedEntry" class="timeline-modal" @click.self="closeTimelineDetails">
        <div class="modal-content">
          <button class="close-button" @click="closeTimelineDetails">&times;</button>
          <h3>{{ selectedEntry.title }}</h3>
          <p class="modal-date">{{ selectedEntry.date }}</p>
          <div class="modal-description" v-html="selectedEntry.fullDescription"></div>
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

interface TimelineEntry {
  title: string
  date: string
  shortDescription: string
  fullDescription: string
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
      ] as Skill[],
      timelineEntries: [
        {
          title: 'Started Programming Journey',
          date: '2018',
          shortDescription: 'Began learning web development fundamentals',
          fullDescription: `
            <p>My journey in programming began with a deep curiosity about how websites work. 
            I started with HTML and CSS, gradually moving on to JavaScript and modern frameworks.</p>
            <p>Key milestones:</p>
            <ul>
              <li>Completed online courses in web development</li>
              <li>Built my first personal website</li>
              <li>Joined coding communities and forums</li>
            </ul>
          `
        },
        {
          title: 'First Developer Role',
          date: '2019',
          shortDescription: 'Junior Frontend Developer at Tech Corp',
          fullDescription: `
            <p>My first professional role as a developer where I worked on various client projects.</p>
            <p>Responsibilities:</p>
            <ul>
              <li>Developed responsive web applications</li>
              <li>Collaborated with design and backend teams</li>
              <li>Implemented modern frontend frameworks</li>
            </ul>
          `
        },
        {
          title: 'Advanced Studies',
          date: '2020',
          shortDescription: 'Completed Advanced Web Development Certification',
          fullDescription: `
            <p>Pursued advanced studies in web development to enhance my skills.</p>
            <p>Achievements:</p>
            <ul>
              <li>Mastered Vue.js and React</li>
              <li>Learned advanced TypeScript concepts</li>
              <li>Studied software architecture patterns</li>
            </ul>
          `
        }
      ] as TimelineEntry[],
      selectedEntry: null as TimelineEntry | null
    }
  },
  methods: {
    showTimelineDetails(entry: TimelineEntry) {
      this.selectedEntry = entry
    },
    closeTimelineDetails() {
      this.selectedEntry = null
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

.timeline-section {
  margin: 4rem 0;
}

.timeline-section h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 2px;
  background: #3498db;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.timeline-entry {
  position: relative;
  margin-bottom: 2rem;
  width: 50%;
  padding: 0 2rem;
  cursor: pointer;
}

.timeline-entry.right {
  left: 50%;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  background: #3498db;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.timeline-entry.right .timeline-dot {
  left: 0;
}

.timeline-content {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
}

.timeline-content h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.timeline-date {
  color: #3498db;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.timeline-description {
  color: #666;
  font-size: 0.9rem;
}

.timeline-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
}

.modal-date {
  color: #3498db;
  margin-bottom: 1rem;
}

.modal-description {
  color: #666;
  line-height: 1.6;
}

.modal-description ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
}

.modal-description li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .timeline::before {
    left: 0;
  }

  .timeline-entry {
    width: 100%;
    padding-left: 2rem;
  }

  .timeline-entry.right {
    left: 0;
  }

  .timeline-dot {
    left: -8px;
  }
}
</style> 