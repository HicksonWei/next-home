import { motion } from 'framer-motion'
import React from 'react'

interface IProp {
  key: number
  color: string
  size: number
  speed: number
  blur: number
}

const Particle = ({ color, size, speed, blur }: IProp) => {
  return (
    <motion.span
      className="absolute block rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        boxShadow: `${size * 2 * (Math.random() > 0.5 ? -1 : 1)}px 0 ${
          blur * 10
        }px ${color}`
      }}
      initial={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        rotate: 0,
        originX: `${Math.random() * 50 - 25}vw`,
        originY: `${Math.random() * 50 - 25}vh`
      }}
      animate={{
        rotate: 360,
        transition: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear'
        }
      }}
    ></motion.span>
  )
}

export default Particle
