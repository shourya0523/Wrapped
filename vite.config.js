import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// IMPORTANT: Change this to match your GitHub repository name
// If your repo is at github.com/username/repo-name, set this to '/repo-name/'
// If it's a user/organization page (username.github.io), set this to '/'
const REPO_NAME = 'Wrapped' // Change this to your actual repository name

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.jpeg', '**/*.JPEG'],
})

