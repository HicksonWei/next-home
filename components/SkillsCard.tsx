import { motion } from 'framer-motion'

interface IProp {
  description: string
}

const skillCardVariants = {
  hidden: {
    opacity: 0,
    x: 100
  },
  visible: {
    opacity: 1,
    x: 0
  }
}

const SkillsCard = ({ description }: IProp) => {
  return (
    <motion.div
      variants={skillCardVariants}
      className="z-5 before:opacity-1 relative m-4 flex items-center overflow-hidden rounded p-4 text-xl font-bold before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-profile-pattern before:opacity-60 before:content-['']"
    >
      <i className="fa-solid fa-circle-check z-1 relative mr-3 text-green-600"></i>
      <p className="z-1 relative">{description}</p>
    </motion.div>
  )
}

export default SkillsCard
