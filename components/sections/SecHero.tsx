import React from 'react'
import ConditionallyRender from '../ConditionallyRender'
import Particles from '../Particles'
import { motion } from 'framer-motion'
import Logo from '../Logo'

const bgVariants = {
  animate: {
    backgroundPositionX: ['0%', '100%'],
    backgroundPositionY: '50%',
    transition: {
      backgroundPositionX: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 10
      }
    }
  }
}

const SecHero = () => {
  return (
    <motion.section
      id="home"
      variants={bgVariants}
      animate="animate"
      className="relative h-screen w-full overflow-hidden bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-50 bg-s400 md:h-[150vh]"
    >
      <div className="absolute z-10 h-screen w-full bg-gradient-to-b from-transparent to-[#f8f6e7] md:h-[150vh]"></div>
      <ConditionallyRender client>
        <Particles
          amount={50}
          colors={['#7d0ae9', '#0004ff', '#f8f6e7']}
          size={'medium'}
          speed={'medium'}
          blur={2}
        />
      </ConditionallyRender>
      <div className="relative h-screen">
        <Logo />
      </div>
    </motion.section>
  )
}

export default SecHero
