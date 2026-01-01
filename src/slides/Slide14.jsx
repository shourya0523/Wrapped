import { motion } from 'framer-motion'
import Threads from '../reactbits/Backgrounds/Threads'
import FireworksBackgroundDemo from '../components/animate-ui/components/backgrounds/FireworksBackgroundDemo'

const summaryHighlights = [
  {
    title: 'Started the year',
    description: 'Thinking in models, data science, and economics',
  },
  {
    title: 'First hackathon win',
    description: 'Best AI Hack at FinHacks 2025 with Spendr',
  },
  {
    title: 'Changed majors',
    description: 'Multiple times, finally settling on CS and AI/Physics',
  },
  {
    title: 'Research',
    description: 'Worked with 150k+ patents, 500k+ clinical trials at SNAP Life Sciences',
  },
  {
    title: 'Leadership',
    description: 'Led 8-developer team at Forge Software Product Lab',
  },
  {
    title: 'Community',
    description: 'Started Claude Builders Club — 200+ members, 30 builders',
  },
  {
    title: 'Growth',
    description: '337 GitHub contributions, building systems consistently',
  },
  {
    title: 'Collaboration',
    description: 'Built alongside amazing people who pushed me forward',
  },
  {
    title: '2026',
    description: 'Going deeper into CS and building, fewer pivots',
  },
]

const buttons = [
  { label: 'GitHub', href: 'https://github.com/shourya0523' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shouryadav/' },
  { label: 'Claude Builders', href: 'https://claudebuildersneu.com/' },
  { label: 'Devpost', href: 'https://devpost.com/software/spendr' },
]

export default function Slide14({ active }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-background dark:bg-background-dark px-8 relative overflow-hidden">
      {/* Threads background */}
      <Threads 
        color={[1, 1, 1]} 
        amplitude={1} 
        distance={0} 
        style={{ opacity: 0.2 }}
      />
      {/* Fireworks background */}
      <FireworksBackgroundDemo population={3} />
      
      <div className="max-w-6xl w-full relative z-10 overflow-y-auto max-h-full py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-light mb-4 text-gray-900 dark:text-white">
            Summary
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
            A year of building and discovery
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {summaryHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: active ? 1 : 0, y: active ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                {highlight.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-6 flex-wrap"
        >
          {buttons.map((button, index) => (
            <motion.a
              key={button.label}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: active ? 1 : 0, y: active ? 0 : 10 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:border-muted-blue hover:text-muted-blue transition-colors"
            >
              {button.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

