import { FC, ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const MainContainer: FC<Props> = ({ children }) => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      {children}
    </main>
  )
}

export default MainContainer
