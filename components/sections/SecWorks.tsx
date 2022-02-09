import { useState, useEffect } from 'react'
import { getWorkItems } from '../../services'
import WorkCard from '../WorkCard'

interface IWorkCards {
  id: string
  name: string
  img: { id: string; url: string }
  siteUrl: string
  duty: string[]
  description: string
  active: number
  category: number
}

const SecWorks = () => {
  const [worksArr, setWorksArr] = useState([])

  useEffect(() => {
    getWorkItems().then(result => {
      setWorksArr(result)
    })
  }, [])

  return (
    <section id="works" className="w-full bg-works-pattern px-[5%]">
      <h2 className="my-12 text-center text-4xl font-bold lg:text-6xl">
        Works
      </h2>
      <div className="mb-4 flex flex-wrap">
        {worksArr
          .filter((item: IWorkCards) => item.category === 1)
          .map((work: IWorkCards) => (
            <WorkCard key={work.id} {...work} />
          ))}
      </div>
      <h2 className="my-12 text-center text-4xl font-bold lg:text-6xl">
        Side Projects
      </h2>
      <div className="flex flex-wrap">
        {worksArr
          .filter((item: IWorkCards) => item.category === 2)
          .map((work: IWorkCards) => (
            <WorkCard key={work.id} {...work} />
          ))}
      </div>
    </section>
  )
}

export default SecWorks
