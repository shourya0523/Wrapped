import { motion } from 'framer-motion'
import { useState } from 'react'

const people = [
  { name: 'Sohum Balsara', descriptor: 'late-night builds', offset: 0, linkedin: 'https://www.linkedin.com/in/sohum-balsara/' },
  { name: 'Mehr Anand', descriptor: 'built alongside me', offset: 8, linkedin: 'https://www.linkedin.com/in/mehr-anand/' },
  { name: 'Simran Sethi', descriptor: 'pushed me forward', offset: -6, linkedin: 'https://www.linkedin.com/in/simran-sethi-17a36632a/' },
]

export default function Slide11({ active }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-background px-8 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl w-full relative z-10">
        {/* Left side - Headline and subtext */}
        <div className="mb-12 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: active ? 1 : 0, x: active ? 0 : -20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 dark:text-gray-300 leading-tight">
              I didn't do this alone.
            </h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: active ? 1 : 0, x: active ? 0 : -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 dark:text-gray-500 font-light max-w-md"
            >
              Most of what I learned came from building next to other people.
            </motion.p>
          </motion.div>
        </div>

        {/* Right side - Names arranged organically */}
        <div className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-1/2">
          <div className="relative h-72 md:h-96">
            {people.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: active ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                className="absolute"
                style={{
                  top: `${25 + index * 35}%`,
                  left: `${50 + person.offset}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="px-8 py-4 rounded-full bg-gray-900/30 border border-gray-800/30 transition-all duration-200 hover:border-gray-700/40 hover:bg-gray-900/40 cursor-default whitespace-nowrap">
                  <span className="text-xl md:text-2xl text-gray-700 dark:text-gray-400 font-light">
                    {person.name}
                  </span>
                </div>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 3 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-4 py-3 rounded-lg bg-gray-900/95 border border-gray-800/50 shadow-xl min-w-[200px] z-50"
                  >
                    <p className="text-xs text-gray-400 font-light mb-2">
                      {person.descriptor}
                    </p>
                    {person.linkedin && (
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-gray-300 font-light underline underline-offset-2 transition-colors flex items-center gap-1.5"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        View profile
                      </a>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile fallback - centered layout */}
        <div className="md:hidden mt-8">
          <div className="flex flex-col gap-5 items-center">
            {people.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: active ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="px-8 py-4 rounded-full bg-gray-900/30 border border-gray-800/30 transition-colors hover:border-gray-700/40 cursor-default">
                  <span className="text-xl text-gray-400 font-light">
                    {person.name}
                  </span>
                </div>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 3 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-4 py-3 rounded-lg bg-gray-900/95 border border-gray-800/50 shadow-xl min-w-[200px] z-50"
                  >
                    <p className="text-xs text-gray-400 font-light mb-2">
                      {person.descriptor}
                    </p>
                    {person.linkedin && (
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-gray-300 font-light underline underline-offset-2 transition-colors flex items-center gap-1.5"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        View profile
                      </a>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
