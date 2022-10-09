import Link from 'next/link'

import styles from '../../styles/NavBar.module.css'

export const Header = () => {
    return (
        <div className={styles.Container}>
            <ul> 
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/purchase'>
                        <a>Comprar</a>
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        <a>Sobre</a>
                    </Link>
                </li>
                <li>
                    <Link href='/contact'>
                        <a>Contato</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}