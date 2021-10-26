import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout, SeoMeta } from '../components/Layout'
import styles from '../styles/Home.module.scss'

const ErrorPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <SeoMeta 
        title='• Error 404'
        desc='Lorem Ipsum about errorpage'
      />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Shoooot .... <br />
          Seems like you broke the internet! 
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default ErrorPage
