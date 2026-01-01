import { motion } from 'framer-motion'

export function Trophy({ className = '' }) {
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 0.5
      }}
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Gradients */}
        <defs>
          <linearGradient id="trophyGradient" x1="40" y1="10" x2="40" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="30%" stopColor="#FFA500" />
            <stop offset="60%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
          <linearGradient id="handleGradient" x1="15" y1="30" x2="25" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
          <linearGradient id="stemGradient" x1="40" y1="45" x2="40" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#CD853F" />
          </linearGradient>
          <linearGradient id="baseGradient" x1="40" y1="60" x2="40" y2="68" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#CD853F" />
            <stop offset="100%" stopColor="#8B6914" />
          </linearGradient>
          <linearGradient id="starGradient" x1="40" y1="28" x2="40" y2="40.5" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
          <linearGradient id="shineGradient" x1="32" y1="18" x2="48" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Trophy base */}
        <motion.rect
          x="30"
          y="60"
          width="20"
          height="8"
          rx="2"
          fill="url(#baseGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        />
        
        {/* Trophy stem */}
        <motion.rect
          x="36"
          y="45"
          width="8"
          height="15"
          rx="2"
          fill="url(#stemGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        />
        
        {/* Trophy cup - main body */}
        <motion.path
          d="M25 20 L25 45 L55 45 L55 20 C55 15 50 10 45 10 L35 10 C30 10 25 15 25 20 Z"
          fill="url(#trophyGradient)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        
        {/* Trophy handles */}
        <motion.path
          d="M25 30 C20 30 15 35 15 40 L15 42 C15 42 20 40 25 38"
          stroke="url(#handleGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.path
          d="M55 30 C60 30 65 35 65 40 L65 42 C65 42 60 40 55 38"
          stroke="url(#handleGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        
        {/* Star on trophy */}
        <motion.path
          d="M40 28 L41.5 32 L46 33 L42.5 36 L43.5 40.5 L40 38 L36.5 40.5 L37.5 36 L34 33 L38.5 32 Z"
          fill="url(#starGradient)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: 'spring',
            stiffness: 300,
            damping: 15,
            delay: 0.9
          }}
        />
        
        {/* Shine effect */}
        <motion.ellipse
          cx="40"
          cy="25"
          rx="8"
          ry="12"
          fill="url(#shineGradient)"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            delay: 1
          }}
        />
      </svg>
    </motion.div>
  )
}

