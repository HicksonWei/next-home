import React, { ReactNode, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import avatar from '../public/avatar.jpg'

type Props = {
  children?: ReactNode
}

const PartAvatar: React.FC<Props> = () => {
  const controls = useAnimation()

  const [ref, inView] = useInView({
    threshold: 0.5,
    rootMargin: '200px'
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  let avatarVariants = {}
  const isMobile = window.innerWidth < 768
  if (!isMobile) {
    avatarVariants = {
      hidden: { opacity: 0, x: -300 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, type: 'easeInOut' }
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={avatarVariants}
      initial="hidden"
      animate={controls}
      className="top-0 flex h-screen flex-1 flex-col items-center p-4 md:sticky"
    >
      <div className="relative top-[100px] w-60 shadow-lg lg:w-72">
        <Image
          src={avatar}
          alt="avatar"
          layout="responsive"
          className="rounded"
        />
        <div className="z-5 absolute right-0 bottom-[20px] left-0">
          <span className="absolute left-[-10px] bottom-[45px] block rounded-r-lg bg-[#f8f6e7] p-2 text-4xl font-bold">
            危建翰
          </span>
          <p className="z-2 relative left-12 rounded-l-lg bg-[#f8f6e7] p-2 text-3xl font-extrabold text-black">
            Front End Dev
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default PartAvatar
