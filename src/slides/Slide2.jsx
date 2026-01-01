import { motion } from 'framer-motion'
import { BeamsBackground } from '../reactbits/Backgrounds/Beams'
import { useState, useEffect } from 'react'

export default function Slide2({ active }) {
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    if (!active) return
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [active])

  return (
    <div className="w-full h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <motion.div
        animate={{ x: active ? [0, 20, 0] : 0 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 opacity-20 blur-sm"
      >
        <BeamsBackground />
      </motion.div>
      
      <div className="absolute bottom-32 right-32 opacity-10">
        <span className="font-mono text-2xl">
          $ <span className={cursorVisible ? 'opacity-100' : 'opacity-0'}>_</span>
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 max-w-4xl px-8"
      >
        <h2 className="text-5xl md:text-7xl font-light mb-6">
          Something felt incomplete.
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 font-light">
          I wanted to see things run, not just explain why they might.
        </p>
      </motion.div>
    </div>
  )
}

