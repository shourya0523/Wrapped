import { motion } from 'framer-motion'

export function TiltedCard({ children, tilt = 5, ...props }) {
  return (
    <motion.div
      whileHover={{ rotate: tilt }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

