import { motion } from 'framer-motion'
import Threads from '../reactbits/Backgrounds/Threads'
import FireworksBackgroundDemo from '../components/animate-ui/components/backgrounds/FireworksBackgroundDemo'

const buttons = [
  { label: 'GitHub', href: 'https://github.com/shourya0523' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shouryadav/' },
  { label: 'Claude Builders', href: 'https://claudebuildersneu.com/' },
  { label: 'Devpost', href: 'https://devpost.com/software/spendr' },
]

export default function Slide13({ active }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-background px-8 relative overflow-hidden">
      {/* Threads background */}
      <Threads 
        color={[1, 1, 1]} 
        amplitude={1} 
        distance={0} 
        style={{ opacity: 0.3 }}
      />
      {/* Fireworks background */}
      <FireworksBackgroundDemo population={2} active={active} />
      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-light mb-6 text-gray-900 dark:text-white">
            In 2026, I want to go deeper.
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
            More CS. More building. Fewer pivots.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
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
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:border-muted-blue hover:text-muted-blue transition-colors text-sm md:text-base"
            >
              {button.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

