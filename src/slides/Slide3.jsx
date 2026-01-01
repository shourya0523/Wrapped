import { motion } from 'framer-motion'
import { SpotlightCard } from '../reactbits/Components/SpotlightCard'
import FaultyTerminal from '../reactbits/Backgrounds/FaultyTerminal'
import finhacksImage from '../images/Finhacks.JPG'

export default function Slide3({ active }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 dark:bg-background px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <FaultyTerminal />
      </div>
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-light mb-4 text-gray-900 dark:text-white">
            January.
          </h2>
          <h2 className="text-5xl md:text-7xl font-light mb-6 text-gray-900 dark:text-white">
            A hackathon.
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light mb-4">
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
              <div className="w-full h-96 rounded-lg overflow-hidden group cursor-pointer relative">
                <img 
                  src={finhacksImage} 
                  alt="FinHacks 2025 - Spendr Best AI Hack"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <div className="text-center w-full">
                    <p className="text-white text-sm mb-1 group-hover:text-muted-blue transition-colors font-medium">FinHacks 2025</p>
                    <p className="text-gray-300 text-xs">Spendr — Best AI Hack</p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

