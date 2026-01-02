import { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Slide0 from './slides/Slide0'
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'
import Slide4 from './slides/Slide4'
import Slide5 from './slides/Slide5'
import Slide6 from './slides/Slide6'
import Slide7 from './slides/Slide7'
import Slide7_5 from './slides/Slide7_5'
import Slide8 from './slides/Slide8'
import Slide9 from './slides/Slide9'
import Slide10 from './slides/Slide10'
import Slide11 from './slides/Slide11'
import Slide12 from './slides/Slide12'
import Slide13 from './slides/Slide13'
import Slide14 from './slides/Slide14'
import { AnimatedThemeToggler } from './registry/magicui/animated-theme-toggler'
import SkipButton from './components/SkipButton'

const TOTAL_SLIDES = 16

// Slide titles mapping (matches slides array indices)
const slideTitles = [
  'Shourya Yadav',                    // slides[0] = Slide0
  'Thinking in Models',               // slides[1] = Slide1
  'Something Felt Incomplete',        // slides[2] = Slide2
  'January: A Hackathon',             // slides[3] = Slide3
  'Projects That Had to Work',        // slides[4] = Slide4
  'Changed My Major',                 // slides[5] = Slide5
  'Research Stopped Being Abstract',  // slides[6] = Slide6
  'I Started Caring About Things Breaking',  // slides[7] = Slide7
  'I Wanted to Build Alongside People',      // slides[8] = Slide7_5
  'I Wanted to Build Alongside People',      // slides[9] = Slide8
  'The Work Started Leaving Campus',         // slides[10] = Slide9
  'I Built More Consistently',               // slides[11] = Slide10
  'Collaboration',                           // slides[12] = Slide11
  'I Like Building Systems',                 // slides[13] = Slide12
  'In 2026, I Want to Go Deeper',           // slides[14] = Slide13
  'Summary',                                 // slides[15] = Slide14
]

// Memoized slide wrapper to prevent unnecessary re-renders and lazy load distant slides
const SlideWrapper = memo(({ SlideComponent, index, currentSlide, onNavigateToSlide }) => {
  const isActive = index === currentSlide
  const distance = Math.abs(index - currentSlide)
  const isNearby = distance <= 1
  const shouldRender = distance <= 1 // Only render current and adjacent slides
  const opacity = isNearby ? 1 : 0

  return (
    <div
      className="w-full h-screen snap-start snap-always relative"
      style={{ willChange: isNearby ? 'opacity' : 'auto' }}
    >
      {shouldRender ? (
        <motion.div
          initial={false}
          animate={{ opacity }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <SlideComponent active={isActive} onNavigateToSlide={onNavigateToSlide} />
        </motion.div>
      ) : (
        // Placeholder div to maintain scroll position, but don't render the component
        <div className="w-full h-full" aria-hidden="true" />
      )}
    </div>
  )
})

SlideWrapper.displayName = 'SlideWrapper'

// Gooey Sidebar Component
const GooeySidebar = memo(({ slides, currentSlide, slideTitles, onSlideClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <>
      {/* SVG filter for gooey effect */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <filter id="gooey-blob" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2 items-end">
        <div className="flex flex-col gap-2">
          {slides.map((_, index) => {
            const isActive = index === currentSlide
            const isHovered = hoveredIndex === index

            return (
              <div
                key={index}
                className="relative flex items-center group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.button
                  onClick={() => onSlideClick(index)}
                  className="relative flex items-center justify-center"
                  aria-label={`Go to slide ${index + 1}: ${slideTitles[index]}`}
                  whileTap={{ scale: 0.9 }}
                  style={{ filter: isHovered ? 'url(#gooey-blob)' : 'none' }}
                >
                  {/* Gooey blob that stretches on hover */}
                  <motion.div
                    className="absolute rounded-full"
                    style={{
                      backgroundColor: isActive
                        ? 'rgba(74, 111, 165, 1)'
                        : isHovered
                        ? 'rgba(255, 255, 255, 0.5)'
                        : 'rgba(255, 255, 255, 0.3)',
                    }}
                    animate={{
                      width: isHovered ? 80 : 6,
                      height: isHovered ? 36 : 32,
                      borderRadius: isHovered ? '18px' : '3px',
                      x: isHovered ? -37 : 0,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 28,
                    }}
                  />

                  {/* Base indicator - shrinks when hovered */}
                  <motion.div
                    className="relative z-10 rounded-full"
                    style={{
                      width: 6,
                      height: 32,
                      backgroundColor: isActive
                        ? 'rgba(74, 111, 165, 1)'
                        : 'rgba(255, 255, 255, 0.3)',
                    }}
                    animate={{
                      opacity: isHovered ? 0 : 1,
                      scale: isHovered ? 0.8 : 1,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 28,
                    }}
                  />
                </motion.button>

                {/* Title tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: -8, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -8, scale: 0.95 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 25,
                      }}
                      className="absolute right-full mr-4 whitespace-nowrap pointer-events-none z-20"
                    >
                      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-3 py-2 rounded-lg shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                        <span className="text-xs font-medium text-gray-900 dark:text-white">
                          {slideTitles[index]}
                        </span>
                      </div>
                      {/* Arrow pointing to the blob */}
                      <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0">
                        <div className="border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-200/50 dark:border-l-gray-700/50" />
                        <div className="absolute -ml-[1px] top-1/2 -translate-y-1/2 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[5px] border-l-white/95 dark:border-l-gray-900/95" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
})

GooeySidebar.displayName = 'GooeySidebar'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef(null)
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef(null)
  const currentSlideRef = useRef(0)

  const slides = useMemo(() => [
    Slide0,
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Slide7_5,
    Slide8,
    Slide9,
    Slide10,
    Slide11,
    Slide12,
    Slide13,
    Slide14,
  ], [])

  // Update ref whenever currentSlide changes
  useEffect(() => {
    currentSlideRef.current = currentSlide
  }, [currentSlide])

  // Scroll to a specific slide
  const scrollToSlide = useCallback((index) => {
    if (containerRef.current && index >= 0 && index < TOTAL_SLIDES) {
      isScrollingRef.current = true
      setCurrentSlide(index)
      currentSlideRef.current = index
      
      const slideHeight = window.innerHeight
      const targetScroll = index * slideHeight
      
      containerRef.current.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      })
      
      // Reset scrolling flag after animation completes
      clearTimeout(scrollTimeoutRef.current)
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false
      }, 600)
    }
  }, [])

  // Skip to summary (last slide)
  const skipToSummary = useCallback(() => {
    scrollToSlide(TOTAL_SLIDES - 1)
  }, [scrollToSlide])

  // Update current slide based on scroll position
  useEffect(() => {
    let rafId = null
    const handleScroll = () => {
      if (!containerRef.current || isScrollingRef.current) return

      if (rafId) cancelAnimationFrame(rafId)
      
      rafId = requestAnimationFrame(() => {
        const container = containerRef.current
        if (!container) return
        
        const scrollTop = container.scrollTop
        const slideHeight = window.innerHeight
        
        // Calculate which slide is currently in view
        const newCurrentSlide = Math.round(scrollTop / slideHeight)
        const clampedSlide = Math.max(0, Math.min(newCurrentSlide, TOTAL_SLIDES - 1))
        
        // Update state only if it changed and it's a manual scroll
        if (clampedSlide !== currentSlideRef.current) {
          currentSlideRef.current = clampedSlide
          setCurrentSlide(clampedSlide)
        }
      })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        container.removeEventListener('scroll', handleScroll)
        if (rafId) cancelAnimationFrame(rafId)
      }
    }
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isScrollingRef.current) return

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault()
        const nextSlide = Math.min(currentSlide + 1, TOTAL_SLIDES - 1)
        scrollToSlide(nextSlide)
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        const prevSlide = Math.max(currentSlide - 1, 0)
        scrollToSlide(prevSlide)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide, scrollToSlide])

  // Set initial scroll position
  useEffect(() => {
    if (containerRef.current) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        scrollToSlide(0)
      }, 100)
    }
  }, [scrollToSlide])

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', willChange: 'scroll-position' }}
    >
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      {/* Theme toggler */}
      <div className="fixed top-8 left-8 z-50">
        <AnimatedThemeToggler />
      </div>

      {/* Skip button - only show if not on summary page */}
      {currentSlide < TOTAL_SLIDES - 1 && (
        <SkipButton onSkip={skipToSummary} />
      )}
      
      {slides.map((SlideComponent, index) => (
        <SlideWrapper
          key={index}
          SlideComponent={SlideComponent}
          index={index}
          currentSlide={currentSlide}
          onNavigateToSlide={scrollToSlide}
        />
      ))}
      
      {/* Gooey Sidebar Navigation */}
      <GooeySidebar
        slides={slides}
        currentSlide={currentSlide}
        slideTitles={slideTitles}
        onSlideClick={scrollToSlide}
      />
    </div>
  )
}

export default App
