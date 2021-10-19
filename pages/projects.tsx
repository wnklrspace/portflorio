import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout, SeoMeta } from '../components/Layout'
import styles from '../styles/Home.module.css'

const Projects: NextPage = () => {
  return (
    <>
      <SeoMeta 
        title='• Projects'
        desc='Lorem Ipsum about projects'
        urlPath='projects'
      />

      <Layout>
        <h1 className={styles.title}>
          Projects 
        </h1>
      </Layout>
    </>
  )
}

export default Projects
