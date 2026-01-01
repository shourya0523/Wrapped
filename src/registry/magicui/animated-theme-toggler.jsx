import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState, useRef } from 'react'

export function AnimatedThemeToggler() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 })
  const [newTheme, setNewTheme] = useState(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === 'dark'

  const handleToggle = (e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2
      setCirclePosition({ x, y })
    }
    
    const targetTheme = isDark ? 'light' : 'dark'
    setNewTheme(targetTheme)
    setIsAnimating(true)
    
    // Change theme immediately to trigger the reveal
    setTheme(targetTheme)
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false)
      setNewTheme(null)
    }, 600)
  }

  // Calculate the maximum distance from center to corner for full coverage
  const maxRadius = typeof window !== 'undefined' 
    ? Math.sqrt(
        Math.pow(Math.max(circlePosition.x, window.innerWidth - circlePosition.x), 2) +
        Math.pow(Math.max(circlePosition.y, window.innerHeight - circlePosition.y), 2)
      )
    : 2000

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-muted-blue focus:ring-offset-2 dark:focus:ring-offset-background focus:ring-offset-gray-50 z-50"
        aria-label="Toggle theme"
        style={{
          transition: 'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <motion.div
          className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center"
          initial={false}
          animate={{
            x: isDark ? 24 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isDark ? 'moon' : 'sun'}
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              className="w-full h-full flex items-center justify-center"
            >
              {isDark ? (
                <svg
                  className="w-4 h-4 text-gray-800"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-yellow-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </button>

      {/* Expanding circle overlay */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            className="fixed pointer-events-none z-[9998]"
            style={{
              left: circlePosition.x,
              top: circlePosition.y,
              transform: 'translate(-50%, -50%)',
              width: maxRadius * 2,
              height: maxRadius * 2,
            }}
            initial={{
              scale: 0,
              borderRadius: '50%',
            }}
            animate={{
              scale: 1,
              borderRadius: '50%',
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1], // easeOutExpo
            }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                backgroundColor: newTheme === 'dark' ? '#0B0E14' : '#F8F9FA',
                mixBlendMode: 'normal',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
