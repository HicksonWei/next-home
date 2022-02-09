import { useState, useEffect } from 'react'
import { MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { getLinkItems } from '../services'

const asideVariants = {
  hidden: {
    opacity: 0,
    x: -50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: 'easeInOut'
    }
  }
}

const Header = () => {
  const [scrollY, setScrollY] = useState(0)
  const [asideOpen, setAsideOpen] = useState(false)
  const [linksArr, setLinksArr] = useState([])

  useEffect(() => {
    getLinkItems().then(result => {
      setLinksArr(result)
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = e.target as HTMLInputElement
    const target = el.getAttribute('href') as string
    const location = (document.querySelector(target) as HTMLInputElement)
      .offsetTop

    window.scrollTo({
      left: 0,
      top: location - 60,
      behavior: 'smooth'
    })
  }

  return (
    <header className="fixed z-30 w-full">
      <motion.nav
        className={`flex items-center px-4 transition duration-300 ease-in-out ${
          scrollY > 100 ? 'bg-black text-white' : 'bg-opacity-0'
        }`}
      >
        <h1 className="mr-auto h-[60px] text-xl font-bold leading-[60px]">
          <a
            href="#home"
            className="block h-[60px] px-3 leading-[60px]"
            onClick={handleClick}
          >{`<DevHank />`}</a>
        </h1>
        <ul className="hidden font-bold md:flex">
          {linksArr.map(({ id, name, href }) => (
            <li key={id}>
              <a
                href={href}
                className={`block h-[60px] px-3 text-lg capitalize leading-[60px]   ${
                  scrollY > 100
                    ? 'hover:bg-slate-600'
                    : 'hover:bg-slate-100/[.2]'
                }`}
                onClick={handleClick}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
        <span
          className="block p-1 text-2xl md:hidden"
          onClick={() => setAsideOpen(true)}
        >
          <i className="fas fa-bars"></i>
        </span>
      </motion.nav>
      {asideOpen && (
        <div className="absolute top-0 right-0 left-0 bottom-0 flex h-screen w-full">
          <div
            className="w-full bg-slate-900 opacity-50"
            onClick={() => setAsideOpen(false)}
          ></div>
          <motion.aside
            className="absolute right-0 h-screen w-[250px] bg-slate-300"
            variants={asideVariants}
            initial="hidden"
            animate="visible"
          >
            <div
              className="h-[60px] cursor-pointer px-8 text-lg leading-[60px]"
              onClick={() => setAsideOpen(false)}
            >
              <i className="fa-solid fa-xmark fa-2xl"></i>
            </div>
            <ul>
              {linksArr.map(({ id, name, href }) => (
                <li key={id}>
                  <a
                    href={href}
                    className="block h-[60px] px-8 text-xl font-bold capitalize leading-[60px] focus:ring "
                    onClick={e => {
                      setAsideOpen(false)
                      handleClick(e)
                    }}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      )}
    </header>
  )
}

export default Header
