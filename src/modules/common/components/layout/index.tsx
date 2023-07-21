import { FC, Fragment, ReactElement } from 'react'
import { Header } from './header.component'

export const Layout: FC<{children: ReactElement | ReactElement[]}> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  )
}