import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout, SeoMeta } from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <SeoMeta 
        desc='Lorem Ipsum about projects'
        urlPath='./'
      />
      <Layout>
        <h1 className={styles.title}>
          Welcome to my Portflorio!
        </h1>
      </Layout>
    </>
  )
}

export default Home
