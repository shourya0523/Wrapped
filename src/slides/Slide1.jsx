import { motion } from 'framer-motion'
import { BeamsBackground } from '../reactbits/Backgrounds/Beams'

export default function Slide1({ active }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-background relative overflow-hidden">
      <motion.div
        animate={{ x: active ? [0, 20, 0] : 0 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 opacity-30 blur-sm"
      >
        <BeamsBackground />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl px-8"
      >
        <h2 className="text-5xl md:text-7xl font-light mb-6">
          I started the year thinking in models.
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 font-light">
          Data science. Economics. Forecasts.
        </p>
      </motion.div>
    </div>
  )
}

