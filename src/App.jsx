import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
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
import { AnimatedCursor } from './reactbits/Effects/AnimatedCursor'
import { AnimatedThemeToggler } from './registry/magicui/animated-theme-toggler'
import SkipButton from './components/SkipButton'

const TOTAL_SLIDES = 16

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef(null)
  const slideRefs = useRef([])
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef(null)

  const slides = [
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
  ]

  // Scroll to a specific slide
  const scrollToSlide = useCallback((index) => {
    if (containerRef.current) {
      isScrollingRef.current = true
      setCurrentSlide(index) // Update state immediately for instant feedback
      
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
      }, 800)
    }
  }, [])

  // Update current slide based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const scrollTop = container.scrollTop
      const slideHeight = window.innerHeight
      
      // Calculate which slide is currently in view
      const newCurrentSlide = Math.round(scrollTop / slideHeight)
      const clampedSlide = Math.max(0, Math.min(newCurrentSlide, TOTAL_SLIDES - 1))
      
      // Update state only if it's a manual scroll (not programmatic)
      if (!isScrollingRef.current && clampedSlide !== currentSlide) {
        setCurrentSlide(clampedSlide)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true })
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [currentSlide])

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
    if (containerRef.current && slideRefs.current[0]) {
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
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <AnimatedCursor />
      
      {/* Theme toggler */}
      <div className="fixed top-8 left-8 z-50">
        <AnimatedThemeToggler />
      </div>

      {/* Skip button - only show if not on summary page */}
      {currentSlide < TOTAL_SLIDES - 1 && (
        <SkipButton onSkip={skipToSummary} />
      )}
      
      {slides.map((SlideComponent, index) => (
        <div
          key={index}
          ref={(el) => (slideRefs.current[index] = el)}
          className="w-full h-screen snap-start snap-always relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: Math.abs(index - currentSlide) <= 1 ? 1 : 0.3,
            }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <SlideComponent active={index === currentSlide} />
          </motion.div>
        </div>
      ))}
      
      {/* Slide indicator */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-1.5 h-8 transition-opacity ${
              index === currentSlide ? 'opacity-100 bg-muted-blue' : 'opacity-30 bg-white dark:bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default App
