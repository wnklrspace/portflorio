import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Row, Col } from 'reactstrap'
import { Layout, SeoMeta } from '../components/Layout'
import styles from '../styles/Home.module.css'

const About: NextPage = () => {
  return (
    <>
      <SeoMeta 
        title='• About'
        desc='Lorem Ipsum about about'
        urlPath='about'
      />
      <Layout>
        <Container>
          <Row>
            <Col md={ 6 }>
              <h1 className={styles.title}>
                About 
              </h1>
            </Col>
            <Col md={ 6 }>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eos deserunt sunt ullam. Quod, quaerat a voluptatem perspiciatis perferendis maiores.
              </p>
            </Col>  
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default About
