import { motion } from 'framer-motion'
import Threads from '../reactbits/Backgrounds/Threads'

export default function Slide12({ active }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-background px-8 relative overflow-hidden">
      {/* Threads background */}
      <Threads 
        color={[1, 1, 1]} 
        amplitude={1} 
        distance={0} 
        style={{ opacity: 0.3 }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="max-w-4xl text-center relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-light mb-6 text-gray-900 dark:text-white">
          I like building systems.
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
          Software. Products. Teams.
        </p>
      </motion.div>
    </div>
  )
}
