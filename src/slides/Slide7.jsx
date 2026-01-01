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

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-background px-8 relative overflow-hidden">
      {/* Threads background */}
      <Threads 
        color={[1, 1, 1]} 
        amplitude={1} 
        distance={0} 
        style={{ opacity: 0.3 }}
      />
      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-light mb-6">
            I started caring about things breaking.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-2">
            Forge — Software Product Lab Lead
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
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
                <span className="text-gray-300">{bullet}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <div className="space-y-4">
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-full bg-muted-blue"
                  />
                </div>
                <div className="text-xs text-gray-500 font-mono">
                  System components locked into place
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

