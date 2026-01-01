import { motion } from 'framer-motion'
import { SpotlightCard } from '../reactbits/Components/SpotlightCard'
import FaultyTerminal from '../reactbits/Backgrounds/FaultyTerminal'

export default function Slide3({ active }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-background px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <FaultyTerminal />
      </div>
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-light mb-4">
            January.
          </h2>
          <h2 className="text-5xl md:text-7xl font-light mb-6">
            A hackathon.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-4">
            My first time building something end to end.
          </p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: active ? 1 : 0, y: active ? 0 : 10 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-blue font-light"
          >
            We won Best AI Hack.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <a
            href="https://devpost.com/software/spendr"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <SpotlightCard>
              <div className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center group hover:bg-gray-750 transition-colors cursor-pointer">
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2 group-hover:text-muted-blue transition-colors">FinHacks 2025</p>
                  <p className="text-gray-500 text-xs">Spendr — Best AI Hack</p>
                </div>
              </div>
            </SpotlightCard>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

