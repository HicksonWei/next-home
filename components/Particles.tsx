import React from 'react'
import Particle from './Particle'
import ErrorHandler from './ErrorHandler'

interface IProp {
  amount: number
  colors: string[]
  size: ParticleSize
  speed: SpeedRange
  blur: number
}

type ParticleSize = 'small' | 'medium' | 'large'
type SpeedRange = 'slow' | 'medium' | 'fast'

const Particles = ({ amount, colors, size, speed, blur }: IProp) => {
  try {
    if (!Number.isInteger(amount) || amount <= 0) {
      throw new Error('Particles amount must be a positive integer.')
    }
    if (amount > 100) {
      throw new Error('Particles amount must be less than 100.')
    }
    if (!Number.isInteger(blur) || blur < 0 || blur > 5) {
      throw new Error('Particles blur must be an integer between 0 and 5.')
    }

    const sizeMap = {
      small: 1,
      medium: 10,
      large: 25
    }

    const speedMap = {
      slow: 60,
      medium: 30,
      fast: 10
    }

    const arr = Array.from({ length: amount }, (_, i) => ({
      key: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: sizeMap[size] * Math.floor(Math.random() * 10) || sizeMap[size],
      speed: speedMap[speed],
      blur: blur
    }))

    return (
      <>
        {arr.map(item => (
          <Particle {...item} key={item.key} />
        ))}
      </>
    )
  } catch (err: unknown) {
    return <ErrorHandler error={err} />
  }
}

const defaultProps = {
  amount: 50,
  colors: ['red'],
  size: 'large',
  speed: 'medium',
  blur: 1
} as IProp

Particles.defaultProps = defaultProps

export default Particles
