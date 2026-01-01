import { motion } from 'framer-motion'
import { useState } from 'react'

export function SpotlightCard({ children, ...props }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  return (
    <div
      {...props}
      className="relative overflow-hidden rounded-lg"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity pointer-events-none"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(74, 111, 165, 0.3), transparent 40%)`,
        }}
      />
      {children}
    </div>
  )
}

