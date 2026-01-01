import { motion } from 'framer-motion'
import { useState, useEffect, useRef, useMemo } from 'react'
import Threads from '../reactbits/Backgrounds/Threads'

export default function Slide10({ active }) {
  const [monthsVisible, setMonthsVisible] = useState(0)
  const [contributionCount, setContributionCount] = useState(0)
  const animationStartedRef = useRef(false)
  const rafRef = useRef(null)

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const contributions = 337

  useEffect(() => {
    if (active && !animationStartedRef.current) {
      animationStartedRef.current = true
      
      // Start month animation
      const timer = setTimeout(() => {
        setMonthsVisible(12)
      }, 500)
      
      // Start contribution counter animation
      const duration = 1500
      const startTime = performance.now()
      
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        setContributionCount(Math.floor(contributions * progress))
        
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate)
        } else {
          setContributionCount(contributions)
        }
      }
      
      rafRef.current = requestAnimationFrame(animate)
      
      return () => {
        clearTimeout(timer)
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
      setMonthsVisible(0)
      setContributionCount(0)
    }
  }, [active, contributions])
  
  // Memoize Threads props to prevent re-initialization
  const threadsProps = useMemo(() => ({
    color: [1, 1, 1],
    amplitude: 1,
    distance: 0,
    style: { opacity: 0.3 }
  }), [])

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-background px-8 relative overflow-hidden">
      {/* Threads background */}
      <Threads {...threadsProps} />
      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-light mb-6">
            I built more consistently than I realized.
          </h2>
        </motion.div>

        <div className="mb-6">
          <div className="font-mono text-4xl font-medium mb-4">
            {contributionCount} contributions
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          {months.map((month, index) => (
            <motion.div
              key={month}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: active && index < monthsVisible ? 1 : 0,
                x: active && index < monthsVisible ? 0 : -20,
              }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="space-y-1"
            >
              <div className="text-xs text-gray-500 font-mono mb-2">{month}</div>
              <div className="space-y-1">
                {[1, 2, 3, 4].map((week) => (
                  <motion.div
                    key={week}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: active && index < monthsVisible ? 1 : 0,
                      scale: active && index < monthsVisible ? 1 : 0,
                    }}
                    transition={{ duration: 0.2, delay: index * 0.05 + week * 0.02 }}
                    className="h-3 bg-github-green rounded-sm"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

