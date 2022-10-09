import styles from '../styles/MainContainer.module.css'

import { Header } from './header'
import { Footer } from './footer'
import { ReactNode } from 'react'

function Main({ children }: {children: ReactNode}) {
  return (
    <>
      <Header />
        <div className={styles.Container}>
          { children }
        </div>
      <Footer />
    </>
  )
}

export default Main
