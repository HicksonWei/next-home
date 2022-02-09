import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'

interface IProp {
  name: string
  img: { id: string; url: string }
  siteUrl: string
  duty: string[]
  description: string
  active: number
}

const workCardVariants = {
  hidden: {
    opacity: 0,
    translateX: -50
  },
  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.5,
      type: 'easeInOut'
    }
  },
  hover: {
    scale: 1.1,
    backgroundColor: '#c1d4e7',
    transition: { duration: 0.2 }
  }
}

const WorkCard = ({ name, img, siteUrl, duty, description, active }: IProp) => {
  const controls = useAnimation()

  const [ref, inView] = useInView({
    threshold: 0.5
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.a
      ref={ref}
      href={siteUrl}
      variants={workCardVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      className={`relative mx-auto mb-[40px] block w-[90%] overflow-hidden rounded-lg bg-slate-200 shadow-md hover:shadow-xl sm:mx-[2.5%] sm:w-[45%] lg:mx-[1.6%] lg:w-[30%] ${
        active === 1 ? 'cursor-pointer' : 'pointer-events-none'
      }`}
      target="_blank"
      rel="noreferrer"
    >
      {active === 0 && (
        <div className="absolute top-0 bottom-0 right-0 left-0 z-10 flex items-center justify-center bg-slate-500/[.6] text-xl font-bold text-white">
          專案已下線
        </div>
      )}
      {active === 2 && (
        <div className="absolute top-0 bottom-0 right-0 left-0 z-10 flex items-center justify-center bg-slate-500/[.6] text-xl font-bold text-white">
          維修中
        </div>
      )}
      <div className="overflow-hidden rounded-t-lg">
        <Image
          src={img.url}
          layout="responsive"
          width={300}
          height={150}
          alt={name}
          blurDataURL="/loader.svg"
          placeholder="blur"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-1 text-2xl font-bold">{name}</h3>
        {duty.length > 0 && (
          <p className="font-bold text-red-700">{`${duty
            .map(item => {
              switch (item) {
                case 'develop':
                  return '開發'
                case 'maintain':
                  return '維護'
                case 'layout':
                  return '切版'
                default:
                  return ''
              }
            })
            .join('、')}`}</p>
        )}
        <p>{description}</p>
      </div>
    </motion.a>
  )
}

export default WorkCard
