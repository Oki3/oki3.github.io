import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { copyFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'copy-404-html',
      closeBundle() {
        // Copy 404.html to dist directory
        copyFileSync('404.html', path.resolve(__dirname, 'dist/404.html'))
        console.log('404.html copied to dist directory')
      }
    }
  ],
  base: '/', // Replace with your repository name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router', 'pinia']
        }
      }
    }
  }
}) 