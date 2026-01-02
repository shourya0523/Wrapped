import { motion } from 'framer-motion'
import Threads from '../reactbits/Backgrounds/Threads'
import FireworksBackgroundDemo from '../components/animate-ui/components/backgrounds/FireworksBackgroundDemo'
import MagicBento from '../components/MagicBento/MagicBento'

// Theme color palette for glow effects - keeping colors varied for border glows and particles
const colorPalette = [
  { glow: '74, 111, 165' }, // muted-blue
  { glow: '107, 91, 149' }, // muted-purple
  { glow: '58, 95, 143' }, // darker blue
  { glow: '91, 75, 133' }, // darker purple
  { glow: '74, 111, 165' }, // muted-blue
  { glow: '107, 91, 149' }, // muted-purple
  { glow: '90, 127, 184' }, // lighter blue
  { glow: '139, 157, 195' }, // light blue-gray
  { glow: '74, 111, 165' }, // muted-blue
]

const summaryHighlights = [
  {
    title: 'Started the year',
    description: 'Thinking in models, data science, and economics',
    label: 'Beginning',
    slideIndex: 1, // Slide1 - Thinking in Models
  },
  {
    title: 'First hackathon win',
    description: 'Best AI Hack at FinHacks 2025 with Spendr',
    label: 'Achievement',
    slideIndex: 3, // Slide3 - January: A Hackathon
  },
  {
    title: 'Changed majors',
    description: 'Multiple times, finally settling on CS and AI/Physics',
    label: 'Evolution',
    slideIndex: 5, // Slide5 - Changed My Major
  },
  {
    title: 'Research',
    description: 'Worked with 150k+ patents, 500k+ clinical trials at SNAP Life Sciences',
    label: 'Discovery',
    slideIndex: 6, // Slide6 - Research Stopped Being Abstract
  },
  {
    title: 'Leadership',
    description: 'Led 8-developer team at Forge Software Product Lab',
    label: 'Growth',
    slideIndex: 7, // Slide7 - I Started Caring About Things Breaking
  },
  {
    title: 'Community',
    description: 'Started Claude Builders Club — 200+ members, 30 builders',
    label: 'Impact',
    slideIndex: 8, // Slide8 - I Wanted to Build Alongside People
  },
  {
    title: 'Growth',
    description: '337 GitHub contributions, building systems consistently',
    label: 'Progress',
    slideIndex: 10, // Slide10 - I Built More Consistently
  },
  {
    title: 'Collaboration',
    description: 'Built alongside amazing people who pushed me forward',
    label: 'Together',
    slideIndex: 11, // Slide11 - Collaboration
  },
  {
    title: '2026',
    description: 'Going deeper into CS and building, fewer pivots',
    label: 'Forward',
    slideIndex: 13, // Slide13 - In 2026, I Want to Go Deeper
  },
]

const createBentoCards = (onCardClick) => {
  return summaryHighlights.map((highlight, index) => {
    const colors = colorPalette[index % colorPalette.length]
    return {
      title: highlight.title,
      description: highlight.description,
      label: highlight.label,
      glowColor: colors.glow,
      slideIndex: highlight.slideIndex,
      onClick: onCardClick ? () => onCardClick(highlight.slideIndex) : undefined,
    }
  })
}

const buttons = [
  { label: 'GitHub', href: 'https://github.com/shourya0523' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shouryadav/' },
  { label: 'Claude Builders', href: 'https://claudebuildersneu.com/' },
  { label: 'Devpost', href: 'https://devpost.com/software/spendr' },
]

export default function Slide14({ active, onNavigateToSlide }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-background px-8 relative overflow-hidden">
      {/* Threads background */}
      <Threads 
        color={[1, 1, 1]} 
        amplitude={1} 
        distance={0} 
        style={{ opacity: 0.2 }}
      />
      {/* Fireworks background */}
      <FireworksBackgroundDemo population={2} active={active} />
      
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 w-full"
        >
          <MagicBento
            cards={createBentoCards(onNavigateToSlide)}
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="74, 111, 165"
          />
        </motion.div>

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

