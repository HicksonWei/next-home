import { MouseEvent } from 'react'
import { useEffect, useState } from 'react'

const TopButton = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollY])

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
    <a
      href="#home"
      className={`fixed bottom-10 right-10 z-20 block text-orange-500 ${
        scrollY < 200 ? 'hidden' : ''
      }`}
      onClick={handleClick}
    >
      <i className="fa-solid fa-circle-up fa-2xl pointer-events-none"></i>
    </a>
  )
}

export default TopButton
