import { motion } from 'framer-motion'
import { useState, useEffect, useRef, useMemo } from 'react'
import Threads from '../reactbits/Backgrounds/Threads'

export default function Slide6({ active }) {
  const [counted, setCounted] = useState(false)
  const [displayValues, setDisplayValues] = useState([0, 0, 0])
  const animationStartedRef = useRef(false)
  const rafRef = useRef(null)

  useEffect(() => {
    if (active && !animationStartedRef.current) {
      animationStartedRef.current = true
      setCounted(true)
      // Animate counting up using requestAnimationFrame for smoother updates
      const duration = 1500
      const startTime = performance.now()
      
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        setDisplayValues([
          Math.floor(150000 * progress),
          Math.floor(500000 * progress),
          Math.floor(40 * progress),
        ])
        
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate)
        } else {
          setDisplayValues([150000, 500000, 40])
        }
      }
      
      rafRef.current = requestAnimationFrame(animate)
      
      return () => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current)
          rafRef.current = null
        }
        animationStartedRef.current = false
      }
    } else if (!active) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      animationStartedRef.current = false
      setCounted(false)
      setDisplayValues([0, 0, 0])
    }
  }, [active])
  
  // Memoize Threads props to prevent re-initialization
  const threadsProps = useMemo(() => ({
    color: [1, 1, 1],
    amplitude: 1,
    distance: 0,
    style: { opacity: 0.3 }
  }), [])

  const stats = [
    { value: 150000, label: 'patents', suffix: 'k' },
    { value: 500000, label: 'clinical trials', suffix: 'k' },
    { value: 40, label: 'of a production database', suffix: '%' },
  ]

  const formatNumber = (num, suffix) => {
    if (suffix === 'k') {
      return (num / 1000).toFixed(0) + 'k'
    }
    if (suffix === '%') {
      return num.toString() + '%'
    }
    return num.toString()
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-background px-8 relative overflow-hidden">
      {/* Threads background */}
      <Threads {...threadsProps} />
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-light mb-6">
            Research stopped being abstract.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-8">
            AI in life sciences.
          </p>
          <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 text-sm">SNAP Life Sciences or lab imagery placeholder</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: active ? 1 : 0, x: active ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: active ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              className="text-right"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: active ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
                className="font-mono text-4xl md:text-5xl font-medium mb-2"
              >
                {active && counted
                  ? formatNumber(displayValues[index], stat.suffix)
                  : formatNumber(0, stat.suffix)}
              </motion.div>
              <div className="text-gray-400 text-sm font-light">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

