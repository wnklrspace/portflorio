import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Row, Col } from 'reactstrap'
import { Layout, SeoMeta, Section } from '../components/Layout'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <SeoMeta
        desc='Lorem Ipsum about projects'
        urlPath='./'
      />
      <Layout>
        <Section>
          <Container>
            <h1 className={styles.title}>
              Software <br />
              Development <br />
              Design
            </h1>
          </Container>
        </Section>
      </Layout>
    </>
  )
}

export default Home
