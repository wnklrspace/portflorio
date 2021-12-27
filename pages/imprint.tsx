import type { NextPage } from 'next'
import Head from 'next/head'
import { Row, Col } from 'reactstrap'
import { Layout, SeoMeta, Section, Container } from '../components/Layout'
import styles from '../styles/Home.module.scss'

const Imprint: NextPage = () => {
  return (
    <>
      <SeoMeta
        title='• About'
        desc='Lorem Ipsum about about'
        urlPath='about'
      />
      <Layout>
        <Section hasTop>
          <Container>
            <Row>
              <Col>
                <h1 className={styles.title}>
                  Imprint
                </h1>
              </Col>
            </Row>
          </Container>
        </Section>
      </Layout>
    </>
  )
}

export default Imprint
