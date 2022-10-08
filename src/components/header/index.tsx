import Link from 'next/link'

import styles from '../../styles/NavBar.module.css'

export const Header = () => {
    return (
        <ul className={styles.Container}> 
            <li>
                <Link href='/purchase'>
                    <a>Purchase</a>
                </Link>
            </li>
            <li>
                <Link href='/about'>
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </li>
        </ul>
    )
}