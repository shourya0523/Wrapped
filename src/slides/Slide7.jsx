import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Threads from '../reactbits/Backgrounds/Threads'

export default function Slide7({ active }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => {
        setProgress(100)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [active])

  const bullets = [
    'Led an 8 developer team',
    'Owned PRDs, APIs, CI/CD',
    'Shipped weeks faster through system design',
  ]

  // Placeholder for Forge images - replace with actual image imports when available
  const forgeImages = [
    // { image: forgeImage1, alt: 'Forge Image 1' },
    // { image: forgeImage2, alt: 'Forge Image 2' },
    // { image: forgeImage3, alt: 'Forge Image 3' },
  ]

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-background px-8 relative overflow-hidden">
      {/* Threads background */}
      <Threads 
        color={[1, 1, 1]} 
        amplitude={1} 
        distance={0} 
        style={{ opacity: 0.3 }}
      />
      <div className="max-w-6xl w-full relative z-10 overflow-y-auto max-h-full py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h2 className="text-5xl md:text-7xl font-light mb-6 text-gray-900 dark:text-white">
            I started caring about things breaking.
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light mb-2">
            Forge — Software Product Lab Lead
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            {bullets.map((bullet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: active ? 1 : 0, x: active ? 0 : -20 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-muted-blue mt-1">•</span>
                <span className="text-gray-700 dark:text-gray-300">{bullet}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="bg-white/80 dark:bg-gray-900/50 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
              <div className="space-y-4">
                <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-full bg-muted-blue"
                  />
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-500 font-mono">
                  System components locked into place
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image section for Forge */}
        {forgeImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="grid md:grid-cols-3 gap-4">
              {forgeImages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: active ? 1 : 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="h-48 rounded-lg overflow-hidden"
                >
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Placeholder space for images when no images are provided */}
        {forgeImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid md:grid-cols-3 gap-4"
          >
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: active ? 0.3 : 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gray-100/50 dark:bg-gray-800/50 flex items-center justify-center"
              >
                <span className="text-gray-400 dark:text-gray-600 text-sm">Forge Image {index}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

