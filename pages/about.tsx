import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Row, Col } from 'reactstrap'
import { Layout, SeoMeta } from '../components/Layout'
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
        <Container>
          <Row>
            <Col md={ 4 }>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sint commodi iusto architecto nobis quo quia ipsa est
                molestias! Dolorum, blanditiis.
              </p>
            </Col>
            <Col md={ 4 }>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sint commodi iusto architecto nobis quo quia ipsa est
                molestias! Dolorum, blanditiis.
              </p>
            </Col>
            <Col md={ 4 }>
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
