import styles from '../styles/MainContainer.module.css'

import { Header } from './header'
import { Footer } from './footer'

function Main({ children }: any) {
  return (
    <div>
      <Header />
        <div className={styles.Container}>
          { children }
        </div>
      <Footer />
    </div>
  )
}

export default Main
