import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Vercel serves from root, so base should be '/'
// For GitHub Pages, change this to '/Wrapped/'
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.jpeg', '**/*.JPEG'],
})

