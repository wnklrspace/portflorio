import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Row, Col } from 'reactstrap'
import { Layout, SeoMeta } from '../components/Layout'
import { Pill } from '../components/Pills'
import styles from '../styles/Home.module.scss'

const About: NextPage = () => {
  return (
    <>
      <SeoMeta
        title='• About'
        desc='Lorem Ipsum about about'
        urlPath='about'
      />
      <Layout>
        <h1 className={styles.title}>
          About
        </h1>
        <Container fluid>
          <Row>
            <Col md={ 6 }>
              <h2>
                The way I talk to machines
              </h2>
              <Pill>
                Javascript
              </Pill>
              <Pill>
                React
              </Pill>
              <Pill>
                Next.JS
              </Pill>
              <Pill>
                Next.JS
              </Pill>
            </Col>
            <Col md={ 6 }>
              <p>
                Lorem ipsum dolor sit.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sint commodi iusto architecto nobis quo quia ipsa est
                molestias! Dolorum, blanditiis.
              </p>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default About
