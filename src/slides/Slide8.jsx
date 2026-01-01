import { motion } from 'framer-motion'
import { ChromaGrid } from '../reactbits/Layout/ChromaGrid'
import Threads from '../reactbits/Backgrounds/Threads'

const stats = [
  { value: '200+', label: 'members' },
  { value: '30', label: 'builders' },
  { value: '$30k', label: 'sponsorships' },
]

export default function Slide8({ active }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-background px-8 relative overflow-hidden">
      {/* Threads background */}
      <Threads 
        color={[1, 1, 1]} 
        amplitude={1} 
        distance={0} 
        style={{ opacity: 0.3 }}
      />
      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-light mb-6">
            <a
              href="https://claudebuildersneu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted-blue transition-colors"
            >
              Claude Builders Club
            </a>
          </h2>
        </motion.div>

        <ChromaGrid>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: active ? 1 : 0, y: active ? 0 : 10 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-gray-900/50 rounded-lg p-6 border border-gray-800"
              >
                <div className="font-mono text-3xl font-medium mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                animate={{ opacity: active ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.6 + item * 0.1 }}
                className="h-48 bg-gray-800 rounded-lg flex items-center justify-center"
              >
                <p className="text-gray-500 text-xs">Workshop/hackathon/whiteboard image {item}</p>
              </motion.div>
            ))}
          </div>
        </ChromaGrid>
      </div>
    </div>
  )
}

