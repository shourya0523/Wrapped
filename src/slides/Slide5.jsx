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
    // Show initial text immediately, then quickly transition
    const timer1 = setTimeout(() => {
      setStep(1)
    }, 800)
    const timer2 = setTimeout(() => {
      setStep(2)
    }, 1800)
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
        <div className="mb-12 min-h-[200px] md:min-h-[280px]">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.h2
                key="initial"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: active ? 1 : 0, y: active ? 0 : 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-light mb-4 text-gray-900 dark:text-white"
              >
                I changed my major.
              </motion.h2>
            )}
            {step === 1 && (
              <motion.h2
                key="again"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-light mb-4 text-gray-900 dark:text-white"
              >
                Then again.
              </motion.h2>
            )}
            {step === 2 && (
              <motion.h2
                key="real"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-light mb-6 text-gray-900 dark:text-white"
              >
                Then for real.
              </motion.h2>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-4">
          <AnimatePresence>
            {step >= 1 && (
              <motion.p
                key="timeline-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light"
              >
                {timeline[0]?.label}
              </motion.p>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {step >= 2 && (
              <motion.p
                key="timeline-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light"
              >
                {timeline[1]?.label}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

