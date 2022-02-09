import { FC, ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const AppContainer: FC<Props> = ({ children }) => {
  return <div className="relative flex flex-col">{children}</div>
}

export default AppContainer
