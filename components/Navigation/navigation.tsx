import type { NextPage } from 'next'
import Link from 'next/link'
import styles from './styles.module.scss'

export const Navigation = () => {

  return (
  <>
    <div className={ styles.logo }>
      Fw
    </div>
    <div className={ styles.burger } />
    <nav className={ styles.nav }>
      <ul>
        <li>
          <Link href='./'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='./about'>
            <a>CV</a>
          </Link>
        </li>
        <li>
          <Link href='./projects'>
            <a>Projects</a>
          </Link>
        </li>
      </ul>
    </nav>
  </>
  )
}
