import { motion } from 'framer-motion'
import { TiltedCard } from '../reactbits/Components/TiltedCard'
import LetterGlitch from '../reactbits/Effects/LetterGlitch'

const projects = [
  { title: 'Club management app', description: 'System for organizing and managing club activities' },
  { title: 'NLP text comparison tool', description: 'Tool for comparing and analyzing text documents' },
  { title: 'Research tooling', description: 'Infrastructure for research workflows' },
]

export default function Slide4({ active }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-background px-8 relative overflow-hidden">
      {/* LetterGlitch background effect */}
      <div className="absolute inset-0 opacity-30">
        <LetterGlitch
          glitchColors={['#4A6FA5', '#6B5B95', '#8B9DC3']}
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-light mb-6">
            I kept choosing projects that had to work.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            Less theory. More systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: active ? 1 : 0, y: active ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <TiltedCard tilt={2}>
                <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800 h-full">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
              </TiltedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

