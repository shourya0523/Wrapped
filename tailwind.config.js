/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0E14',
        'muted-blue': '#4A6FA5',
        'muted-purple': '#6B5B95',
        'github-green': '#26A641',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'Satoshi', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}

