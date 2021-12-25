import type { NextPage } from 'next'
import Link from 'next/link'
import styles from './styles.module.scss'

export const Navigation = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link href='./'>
            <a>Start</a>
          </Link>
        </li>
        <li>
          <Link href='./about'>
            <a>CV</a>
          </Link>
        </li>
        <li>
          <Link href='./projects'>
            <a>Projekte</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
