<template>
  <div class="about">
    <section class="about-header">
      <h1>{{ $t('about.title') }}</h1>
      <p class="subtitle">{{ $t('about.subtitle') }}</p>
    </section>

    <section class="about-content">
      <div class="profile-section">
        <img src="https://picsum.photos/300/300" alt="Profile" class="profile-image">
        <div class="profile-info">
          <h2>{{ $t('about.author.name') }}</h2>
          <p class="title">{{ $t('about.profile.title') }}</p>
          <div class="social-links">
            <a href="https://github.com/Oki3" target="_blank" rel="noopener" class="social-link">{{ $t('about.profile.github') }}</a>
            <a href="https://www.linkedin.com/in/weicheng-h-15b84121b/" target="_blank" rel="noopener" class="social-link">{{ $t('about.profile.linkedin') }}</a>
            <a href="#" class="social-link">{{ $t('about.profile.twitter') }}</a>
          </div>
        </div>
      </div>

      <div class="bio-section">
        <h3>{{ $t('about.story.title') }}</h3>
        <p>{{ $t('about.story.paragraph1') }}</p>
        <p>{{ $t('about.story.paragraph2') }}</p>
        <p>{{ $t('about.story.paragraph3') }}</p>
      </div>

      <div class="skills-section">
        <h3>{{ $t('about.skills.title') }}</h3>
        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.name" class="skill-card">
            <h4>{{ skill.name }}</h4>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>

      <div class="timeline-section">
        <h3>{{ $t('about.journey.title') }}</h3>
        <div class="timeline">
          <div v-for="(entry, index) in timelineEntries" 
               :key="index" 
               class="timeline-entry"
               :class="{ 'right': index % 2 === 0, 'current': index === 0 }"
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
import { defineComponent, computed } from 'vue'
import { useI18n } from 'vue-i18n'

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
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      skills: [
        {
          name: 'Frontend Development',
          description: 'Vue.js, React(Native), TypeScript'
        },
        {
          name: 'Backend Development',
          description: 'Python, Java(Spring, MyBatis, Kafka, Redis), PostgreSQL, MongoDB'
        },
        {
          name: 'DevOps',
          description: 'Docker, CI/CD, AWS, Agile',
        },
      ] as Skill[],
      selectedEntry: null as TimelineEntry | null
    }
  },
  computed: {
    timelineEntries(): TimelineEntry[] {
      return [
        {
          title: this.$t('about.journey.master.title'),
          date: this.$t('about.journey.master.date'),
          shortDescription: this.$t('about.journey.master.shortDescription'),
          fullDescription: `
            <p>${this.$t('about.journey.master.description')}</p>
            <p>${this.$t('about.journey.master.focus')}</p>
            <ul>
              <li>${this.$t('about.journey.master.focus1')}</li>
              <li>${this.$t('about.journey.master.focus2')}</li>
              <li>${this.$t('about.journey.master.focus3')}</li>
            </ul>
          `
        },
        {
          title: this.$t('about.journey.bachelor.title'),
          date: this.$t('about.journey.bachelor.date'),
          shortDescription: this.$t('about.journey.bachelor.shortDescription'),
          fullDescription: `
            <p>${this.$t('about.journey.bachelor.description')}</p>
            <p>${this.$t('about.journey.bachelor.achievements')}</p>
            <ul>
              <li>${this.$t('about.journey.bachelor.achievement1')}</li>
              <li>${this.$t('about.journey.bachelor.achievement2')}</li>
              <li>${this.$t('about.journey.bachelor.achievement3')}</li>
            </ul>
          `
        },
        {
          title: this.$t('about.journey.start.title'),
          date: this.$t('about.journey.start.date'),
          shortDescription: this.$t('about.journey.start.shortDescription'),
          fullDescription: `
            <p>${this.$t('about.journey.start.description')}</p>
            <p>${this.$t('about.journey.start.milestones')}</p>
            <ul>
              <li>${this.$t('about.journey.start.milestone1')}</li>
              <li>${this.$t('about.journey.start.milestone2')}</li>
              <li>${this.$t('about.journey.start.milestone3')}</li>
            </ul>
          `
        }
      ]
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
  background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary));
  border-radius: 2px;
}

.about-header h1 {
  font-size: 3rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--text-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.subtitle {
  font-size: 1.3rem;
  color: var(--text-color);
  font-style: italic;
  letter-spacing: 1px;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;
  background: var(--card-bg-color);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: var(--card-shadow);
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
  border: 5px solid var(--card-bg-color);
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

.profile-info h2 {
  font-size: 2.5rem;
  background: linear-gradient(45deg, var(--text-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.title {
  color: var(--text-color);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: var(--accent-color);
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border: 2px solid var(--accent-color);
  border-radius: 25px;
  transition: all 0.3s ease;
  font-weight: 500;
  letter-spacing: 1px;
}

.social-link:hover {
  background: linear-gradient(45deg, var(--accent-color), var(--accent-secondary));
  color: white;
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
}

.bio-section {
  margin-bottom: 4rem;
  background: var(--card-bg-color);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: var(--card-shadow);
}

.bio-section h3 {
  font-size: 1.8rem;
  color: var(--text-color);
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
  background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary));
  border-radius: 2px;
}

.bio-section p {
  color: var(--text-color);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.skills-section h3 {
  font-size: 1.8rem;
  color: var(--text-color);
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
  background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary));
  border-radius: 2px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: var(--card-bg-color);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  border-color: var(--hover-border-color);
}

.skill-card h4 {
  color: var(--text-color);
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
  background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary));
  border-radius: 2px;
}

.skill-card p {
  color: var(--text-color);
  line-height: 1.6;
  font-size: 1rem;
}

.timeline-section {
  margin: 4rem 0;
  position: relative;
}

.timeline-section h3 {
  font-size: 1.8rem;
  color: var(--text-color);
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
  background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary));
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
  background: linear-gradient(to bottom, var(--accent-color), var(--accent-secondary));
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

.timeline-entry.current {
  transform: scale(1.05);
}

.timeline-entry.current .timeline-content {
  background: linear-gradient(135deg, var(--card-bg-color), rgba(52, 152, 219, 0.1));
  border: 2px solid var(--accent-color);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  animation: glowPulse 2s infinite;
}

@keyframes glowPulse {
  0% {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-color: var(--accent-color);
  }
  50% {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4),
                0 0 20px rgba(0, 0, 0, 0.4),
                0 0 30px rgba(0, 0, 0, 0.2);
    border-color: var(--accent-secondary);
  }
  100% {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-color: var(--accent-color);
  }
}

.timeline-entry.current .timeline-dot {
  width: 25px;
  height: 25px;
  background: linear-gradient(45deg, var(--accent-color), var(--accent-secondary));
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  animation: dotPulse 2s infinite;
}

@keyframes dotPulse {
  0% {
    transform: translateY(-50%) scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4);
  }
  50% {
    transform: translateY(-50%) scale(1.2);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  100% {
    transform: translateY(-50%) scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

.timeline-entry.current .timeline-date {
  color: var(--accent-color);
  font-weight: bold;
  font-size: 1.1rem;
  animation: textGlow 2s infinite;
}

@keyframes textGlow {
  0% {
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
  50% {
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.4),
                 0 0 20px rgba(0, 0, 0, 0.2);
  }
  100% {
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
}

.timeline-entry.current h4 {
  background: linear-gradient(45deg, var(--text-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.4rem;
  animation: titleGlow 2s infinite;
}

@keyframes titleGlow {
  0% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.2) drop-shadow(0 0 8px rgba(var(--accent-color), 0.4));
  }
  100% {
    filter: brightness(1);
  }
}

.timeline-dot {
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, var(--accent-color), var(--accent-secondary));
  border-radius: 50%;
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 0 10px rgba(var(--accent-color), 0.5);
  transition: all 0.3s ease;
}

.timeline-entry:hover .timeline-dot {
  transform: translateY(-50%) scale(1.2);
  box-shadow: 0 0 20px rgba(var(--accent-color), 0.8);
}

.timeline-entry.right .timeline-dot {
  left: -10px;
}

.timeline-content {
  background: var(--card-bg-color);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  border-color: var(--hover-border-color);
}

.timeline-content h4 {
  color: var(--text-color);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.timeline-date {
  color: var(--accent-color);
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.timeline-description {
  color: var(--text-color);
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
  background: var(--card-bg-color);
  padding: 2.5rem;
  border-radius: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: var(--card-shadow);
  border: 1px solid var(--border-color);
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
  color: var(--text-color);
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
  color: var(--text-color);
  transform: rotate(90deg);
}

.modal-date {
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  font-weight: 500;
}

.modal-description {
  color: var(--text-color);
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
  color: var(--accent-color);
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .about {
    padding: 1rem;
  }

  .about-header {
    margin-bottom: 2rem;
    padding: 1rem 0;
  }

  .about-header h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .profile-section {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .profile-image {
    width: 150px;
    height: 150px;
  }

  .profile-info h2 {
    font-size: 1.8rem;
  }

  .title {
    font-size: 1rem;
  }

  .social-links {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .social-link {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .bio-section {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }

  .bio-section h3 {
    font-size: 1.5rem;
  }

  .bio-section p {
    font-size: 1rem;
    line-height: 1.6;
  }

  .skills-section h3 {
    font-size: 1.5rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .skill-card {
    padding: 1.5rem;
  }

  .skill-card h4 {
    font-size: 1.2rem;
  }

  .skill-card p {
    font-size: 0.9rem;
  }

  .timeline-section {
    margin: 2rem 0;
  }

  .timeline-section h3 {
    font-size: 1.5rem;
  }

  .timeline {
    padding: 1rem 0;
  }

  .timeline::before {
    left: 0;
  }

  .timeline-entry {
    width: 100%;
    padding-left: 2rem;
    margin-bottom: 2rem;
  }

  .timeline-entry.right {
    left: 0;
  }

  .timeline-dot {
    left: -10px;
  }

  .timeline-content {
    padding: 1.5rem;
  }

  .timeline-content h4 {
    font-size: 1.2rem;
  }

  .timeline-date {
    font-size: 0.9rem;
  }

  .timeline-description {
    font-size: 0.9rem;
  }

  .modal-content {
    padding: 1.5rem;
    width: 95%;
    max-height: 90vh;
  }

  .modal-content h3 {
    font-size: 1.5rem;
  }

  .modal-date {
    font-size: 1rem;
  }

  .modal-description {
    font-size: 1rem;
  }

  .modal-description ul {
    padding-left: 1rem;
  }

  .modal-description li {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  /* Adjust animations for mobile */
  .timeline-entry.current {
    transform: scale(1.02);
  }

  .timeline-entry.current .timeline-content {
    animation: glowPulse 3s infinite;
  }

  @keyframes glowPulse {
    0% {
      box-shadow: 0 10px 25px rgba(var(--accent-color), 0.2);
      border-color: var(--accent-color);
    }
    50% {
      box-shadow: 0 10px 25px rgba(var(--accent-color), 0.3),
                  0 0 15px rgba(var(--accent-color), 0.3),
                  0 0 20px rgba(var(--accent-color), 0.2);
      border-color: var(--accent-secondary);
    }
    100% {
      box-shadow: 0 10px 25px rgba(var(--accent-color), 0.2);
      border-color: var(--accent-color);
    }
  }

  .timeline-entry.current .timeline-dot {
    animation: dotPulse 3s infinite;
  }

  @keyframes dotPulse {
    0% {
      transform: translateY(-50%) scale(1);
      box-shadow: 0 0 0 0 rgba(var(--accent-color), 0.3);
    }
    50% {
      transform: translateY(-50%) scale(1.1);
      box-shadow: 0 0 0 8px rgba(var(--accent-color), 0);
    }
    100% {
      transform: translateY(-50%) scale(1);
      box-shadow: 0 0 0 0 rgba(var(--accent-color), 0);
    }
  }
}

/* Additional breakpoint for very small screens */
@media (max-width: 480px) {
  .about-header h1 {
    font-size: 1.8rem;
  }

  .profile-image {
    width: 120px;
    height: 120px;
  }

  .profile-info h2 {
    font-size: 1.5rem;
  }

  .social-link {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }

  .timeline-content {
    padding: 1rem;
  }

  .modal-content {
    padding: 1rem;
  }
}
</style> 