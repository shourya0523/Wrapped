import { motion } from 'framer-motion'

export default function SkipButton({ onSkip, className = '' }) {
  return (
    <motion.button
      onClick={onSkip}
      className={`fixed top-8 right-8 z-50 px-4 py-2 rounded-lg bg-gray-900/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-700 dark:border-gray-600 text-gray-300 dark:text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white dark:hover:text-white transition-colors text-sm font-light ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      Skip to Summary
    </motion.button>
  )
}

