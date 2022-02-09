import BioCard from './BioCard'
import SkillsCard from './SkillsCard'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { getBioItems, getSkillItems } from '../services'

interface IBioCard {
  id: string
  name: string
  title: string
  year: string
  description: string
}
interface ISkillCard {
  id: string
  description: string
}

const blockVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
}

const PartContent = () => {
  const bioControls = useAnimation()
  const skillsControls = useAnimation()

  const [refBio, bioInView] = useInView({
    threshold: 0.1,
    rootMargin: '100px 0px'
  })
  const [refSkills, skillsInView] = useInView({
    threshold: 0.1,
    rootMargin: '100px 0px'
  })

  const [bioArr, setBioArr] = useState([])
  const [skillArr, setSkillArr] = useState([])

  useEffect(() => {
    getBioItems().then(result => {
      setBioArr(result)
    })
    getSkillItems().then(result => {
      setSkillArr(result)
    })
  }, [])

  useEffect(() => {
    if (bioInView) {
      bioControls.start('visible')
    }
    if (skillsInView) {
      skillsControls.start('visible')
    }
  }, [bioControls, skillsControls, bioInView, skillsInView])

  return (
    <div className=" mt-[100px] flex flex-[2] flex-col md:mt-0 md:pb-20">
      <div className="relative mb-8">
        <h2
          className={`sticky top-[100px] text-center text-[140px] font-extrabold text-[#f8f6e7]/[.95] drop-shadow-lg lg:text-[200px]`}
        >
          Bio
        </h2>
        <motion.div
          ref={refBio}
          variants={blockVariants}
          initial="hidden"
          animate={bioControls}
          className="flex flex-col overflow-hidden"
        >
          {bioArr.map((company: IBioCard) => (
            <BioCard
              key={company.id}
              name={company.name}
              title={company.title}
              year={company.year}
              description={company.description}
            />
          ))}
        </motion.div>
      </div>
      <div className="relative mb-[160px]">
        <h2
          className={`sticky top-[100px] text-center text-[140px] font-extrabold text-[#f8f6e7]/[.95] drop-shadow-lg lg:text-[200px]`}
        >
          Skills
        </h2>
        <motion.div
          className="relative overflow-hidden"
          ref={refSkills}
          variants={blockVariants}
          initial="hidden"
          animate={skillsControls}
        >
          {skillArr.map((skill: ISkillCard) => (
            <SkillsCard key={skill.id} description={skill.description} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default PartContent
