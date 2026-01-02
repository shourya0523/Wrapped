import { motion } from 'framer-motion'
import Threads from '../reactbits/Backgrounds/Threads'

const panels = [
  { title: 'AWS NYC', description: 'Event participation' },
  { title: 'AI ethics policy', description: 'D\'Amore-McKim', url: 'https://damore-mckim.northeastern.edu/resources/ai-statement-of-mutual-understanding/', isSpecial: true },
  { title: 'Anthropic ambassador', description: 'Community role', disclaimer: 'Had to quit for immigration reasons' },
]

export default function Slide9({ active }) {
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
          <h2 className="text-5xl md:text-7xl font-light mb-6 text-gray-900 dark:text-white">
            The work started leaving campus.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {panels.map((panel, index) => {
            const PanelContent = (
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: active ? 1 : 0, x: active ? 0 : (index % 2 === 0 ? -50 : 50) }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`bg-white/80 dark:bg-gray-900/50 rounded-lg p-6 border border-gray-200 dark:border-gray-800 ${panel.url ? 'hover:border-muted-blue transition-colors cursor-pointer' : ''} ${panel.isSpecial ? 'damore-mckim-button' : ''}`}
              >
                <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">{panel.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{panel.description}</p>
                {panel.disclaimer && (
                  <p className="text-gray-600 dark:text-gray-500 text-xs italic mt-2">{panel.disclaimer}</p>
                )}
              </motion.div>
            )

            return panel.url ? (
              <a
                key={index}
                href={panel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {PanelContent}
              </a>
            ) : (
              <div key={index}>
                {PanelContent}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

