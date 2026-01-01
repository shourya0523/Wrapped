import { motion } from 'framer-motion'
import PrismaticBurst from '../reactbits/Effects/PrismaticBurst'

export default function Slide0({ active = true }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* PrismaticBurst background effect */}
      <div className="absolute inset-0" style={{ opacity: 0.4 }}>
        <PrismaticBurst
          animationType="rotate3d"
          intensity={2}
          speed={0.5}
          distort={1.0}
          paused={!active}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={24}
          mixBlendMode="lighten"
          colors={['#4A6FA5', '#6B5B95', '#ffffff']}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="text-center relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-light mb-4 text-white"
        >
          Shourya Yadav
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-3xl md:text-5xl font-light text-gray-400 mb-8"
        >
          2025
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : 20 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-lg md:text-xl text-gray-500 font-light"
        >
          A year of figuring out what I actually like building.
        </motion.p>
      </motion.div>
    </div>
  )
}

