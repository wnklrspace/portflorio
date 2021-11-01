import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Row, Col } from 'reactstrap'
import { Layout, SeoMeta } from '../components/Layout'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <SeoMeta
        desc='Lorem Ipsum about projects'
        urlPath='./'
      />
      <Layout>
        <Container>
          <h1 className={styles.title}>
            Hi, <br />
            I am Flo. I do mainly code with a strong focus on design.
          </h1>
        </Container>
      </Layout>
    </>
  )
}

export default Home
