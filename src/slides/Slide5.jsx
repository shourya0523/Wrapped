import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Threads from '../reactbits/Backgrounds/Threads'

const timeline = [
  { label: 'Computer Science and FinTech' },
  { label: 'AI and Physics alongside' },
]

export default function Slide5({ active }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (!active) {
      setStep(0)
      return
    }
    const timer1 = setTimeout(() => {
      setStep(1)
    }, 2000)
    const timer2 = setTimeout(() => {
      setStep(2)
    }, 4000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [active])

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-background px-8 relative overflow-hidden">
      {/* Threads background */}
      <Threads 
        color={[1, 1, 1]} 
        amplitude={1} 
        distance={0} 
        style={{ opacity: 0.3 }}
      />
      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-light mb-4 text-gray-900 dark:text-white">
            I changed my major.
          </h2>
          <AnimatePresence mode="wait">
            {step >= 1 && (
              <motion.h2
                key="again"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl font-light mb-4 text-gray-900 dark:text-white"
              >
                Then again.
              </motion.h2>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {step >= 2 && (
              <motion.h2
                key="real"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl font-light mb-6 text-gray-900 dark:text-white"
              >
                Then for real.
              </motion.h2>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="space-y-2">
          {step >= 1 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light"
            >
              {timeline[0]?.label}
            </motion.p>
          )}
          {step >= 2 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light"
            >
              {timeline[1]?.label}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  )
}

