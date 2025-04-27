<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-brand">Casual & Code</div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">{{ $t('nav.home') }}</router-link>
        <router-link to="/about" class="nav-link">{{ $t('nav.about') }}</router-link>
        <router-link to="/toolkits" class="nav-link">{{ $t('nav.toolkits') }}</router-link>
        <router-link to="/projects" class="nav-link">{{ $t('nav.projects') }}</router-link>
        <router-link to="/contact" class="nav-link">{{ $t('nav.contact') }}</router-link>
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </nav>
    <main class="main-content">
      <router-view></router-view>
    </main>
    <footer class="footer">
      <p>&copy; 2024 My Blog. All rights reserved.</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import ThemeToggle from './components/ThemeToggle.vue'

export default defineComponent({
  name: 'App',
  components: {
    LanguageSwitcher,
    ThemeToggle
  }
})
</script>

<style>
:root {
  /* Light theme (default) */
  --bg-color: #f9f9f9;
  --text-color: #333;
  --card-bg-color: rgba(255, 255, 255, 0.9);
  --card-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  --nav-bg-color: #2c3e50;
  --nav-text-color: white;
  --nav-hover-bg: #34495e;
  --footer-bg-color: #2c3e50;
  --footer-text-color: white;
  --accent-color: #3498db;
  --accent-secondary: #2ecc71;
  --border-color: rgba(52, 152, 219, 0.1);
  --hover-border-color: rgba(52, 152, 219, 0.3);
}

[data-theme="dark"] {
  --bg-color: #121212;
  --text-color: #e0e0e0;
  --card-bg-color: rgba(30, 30, 30, 0.9);
  --card-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  --nav-bg-color: #1a1a1a;
  --nav-text-color: #e0e0e0;
  --nav-hover-bg: #2a2a2a;
  --footer-bg-color: #1a1a1a;
  --footer-text-color: #e0e0e0;
  --accent-color: #64b5f6;
  --accent-secondary: #4caf50;
  --border-color: rgba(100, 181, 246, 0.1);
  --hover-border-color: rgba(100, 181, 246, 0.3);
}

html {
  background-color: var(--bg-color);
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  margin: 0;
  font-family: 'Roboto', Arial, sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
  min-height: 100vh;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
}

.navbar {
  background-color: var(--nav-bg-color);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.nav-brand {
  color: var(--nav-text-color);
  font-size: 1.8rem;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  background: linear-gradient(45deg, var(--nav-text-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  position: relative;
  padding: 0.5rem 1rem;
  transition: transform 0.3s ease;
}

.nav-brand::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-brand:hover {
  transform: translateY(-2px);
}

.nav-brand:hover::after {
  transform: scaleX(1);
}

.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-link {
  color: var(--nav-text-color);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.nav-link:hover {
  background-color: var(--nav-hover-bg);
}

.nav-link.router-link-active {
  background-color: var(--accent-color);
}

.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.footer {
  background-color: var(--footer-bg-color);
  color: var(--footer-text-color);
  text-align: center;
  padding: 1rem;
  margin-top: auto;
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style> 