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
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.about-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  padding: 2rem 0;
}

.about-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 2px;
}

.about-header h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #2c3e50, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.subtitle {
  font-size: 1.3rem;
  color: #666;
  font-style: italic;
  letter-spacing: 1px;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.profile-section:hover {
  transform: translateY(-5px);
}

.profile-image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #fff;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

.profile-info h2 {
  font-size: 2.5rem;
  background: linear-gradient(45deg, #2c3e50, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.title {
  color: #666;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: #3498db;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border: 2px solid #3498db;
  border-radius: 25px;
  transition: all 0.3s ease;
  font-weight: 500;
  letter-spacing: 1px;
}

.social-link:hover {
  background: linear-gradient(45deg, #3498db, #2ecc71);
  color: white;
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
}

.bio-section {
  margin-bottom: 4rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.bio-section h3 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.bio-section h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 2px;
}

.bio-section p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.skills-section h3 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  padding-bottom: 0.5rem;
}

.skills-section h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 2px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(52, 152, 219, 0.1);
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  border-color: rgba(52, 152, 219, 0.3);
}

.skill-card h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.skill-card h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 2px;
}

.skill-card p {
  color: #666;
  line-height: 1.6;
  font-size: 1rem;
}

.timeline-section {
  margin: 4rem 0;
  position: relative;
}

.timeline-section h3 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  padding-bottom: 0.5rem;
}

.timeline-section h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 2px;
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
  width: 3px;
  background: linear-gradient(to bottom, #3498db, #2ecc71);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1.5px;
  border-radius: 3px;
}

.timeline-entry {
  position: relative;
  margin-bottom: 3rem;
  width: 50%;
  padding: 0 2rem;
  cursor: pointer;
}

.timeline-entry.right {
  left: 50%;
}

.timeline-dot {
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #3498db, #2ecc71);
  border-radius: 50%;
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 0 10px rgba(52, 152, 219, 0.5);
  transition: all 0.3s ease;
}

.timeline-entry:hover .timeline-dot {
  transform: translateY(-50%) scale(1.2);
  box-shadow: 0 0 20px rgba(52, 152, 219, 0.8);
}

.timeline-entry.right .timeline-dot {
  left: -10px;
}

.timeline-content {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(52, 152, 219, 0.1);
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  border-color: rgba(52, 152, 219, 0.3);
}

.timeline-content h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.timeline-date {
  color: #3498db;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.timeline-description {
  color: #666;
  line-height: 1.6;
  font-size: 1rem;
}

.timeline-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: rgba(255, 255, 255, 0.95);
  padding: 2.5rem;
  border-radius: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  border: 1px solid rgba(52, 152, 219, 0.2);
  animation: modalFadeIn 0.3s ease;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #666;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-button:hover {
  background: rgba(0,0,0,0.1);
  color: #2c3e50;
  transform: rotate(90deg);
}

.modal-date {
  color: #3498db;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  font-weight: 500;
}

.modal-description {
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
}

.modal-description ul {
  margin-top: 1.5rem;
  padding-left: 1.5rem;
}

.modal-description li {
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.5rem;
}

.modal-description li::before {
  content: '•';
  color: #3498db;
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
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
    left: -10px;
  }

  .about-header h1 {
    font-size: 2.5rem;
  }

  .profile-image {
    width: 200px;
    height: 200px;
  }
}
</style> 