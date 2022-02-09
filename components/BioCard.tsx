import { motion } from 'framer-motion'

interface IProp {
  name: string
  title: string
  year: string
  description: string
}

const bioCardVariants = {
  hidden: {
    opacity: 0,
    x: 100
  },
  visible: {
    opacity: 1,
    x: 0
    // transition: {
    //   duration: 0.5,
    //   type: 'easeInOut'
    // }
  }
}

const BioCard = ({ name, title, year, description }: IProp) => {
  return (
    <motion.div
      variants={bioCardVariants}
      className="before:opacity-1 z-5 relative m-3 overflow-hidden rounded p-5 before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-profile-pattern before:opacity-60 before:content-['']"
    >
      <h3 className="z-1 relative text-xl font-bold">{name}</h3>
      <p className="z-1 relative font-bold text-red-500">{title}</p>
      <p className="z-1 relative font-semibold">{year}</p>
      <p className="z-1 relative">{description}</p>
    </motion.div>
  )
}

export default BioCard
