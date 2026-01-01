import { motion } from 'framer-motion'
import Threads from '../reactbits/Backgrounds/Threads'

const panels = [
  { title: 'AWS NYC', description: 'Event participation' },
  { title: 'AI ethics policy', description: 'D\'Amore-McKim' },
  { title: 'Anthropic ambassador', description: 'Community role' },
]

export default function Slide9({ active }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-background px-8 relative overflow-hidden">
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
            The work started leaving campus.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {panels.map((panel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: active ? 1 : 0, x: active ? 0 : (index % 2 === 0 ? -50 : 50) }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-gray-900/50 rounded-lg p-6 border border-gray-800"
            >
              <h3 className="text-xl font-medium mb-2">{panel.title}</h3>
              <p className="text-gray-400 text-sm">{panel.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

