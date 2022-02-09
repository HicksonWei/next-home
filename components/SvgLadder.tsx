// 未使用
import { useState, useEffect } from 'react'

const SvgLadder = ({ len }: { len: number }) => {
  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(pathGenerator())
  }, [])

  const pathGenerator = (): string => {
    const arrX = Array.from({ length: len }, (_, i) => (1440 / len) * (i + 1))
    const arrY = Array.from({ length: len }, () => {
      const randomNum = Math.floor(Math.random() * 16) * 20
      return randomNum ? randomNum : 20
    })
    const arrXY = arrX.map((item, i) => [arrY[i], arrX[i]])

    const arr: string[] = []

    for (let i = 0; i < arrXY.length; i++) {
      const str = arrXY[i].join('L')

      arr.push(str)
      arr.push(str)
    }

    const path = `M0,0L0,${arr.join()},320L0,320L0,320Z`

    return path
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#0099ff" fillOpacity="1" d={path}></path>
    </svg>
  )
}

export default SvgLadder
