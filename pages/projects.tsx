import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout, SeoMeta, Section } from '../components/Layout'
import { FeaturedProject } from '../components/Projects'
import { Container, Row, Col } from 'reactstrap'
import styles from '../styles/Home.module.scss'

const Projects: NextPage = () => {
  return (
    <>
      <SeoMeta
        title='• Projects'
        desc='Lorem Ipsum about projects'
        urlPath='projects'
      />

      <Layout>
        <Section>
          <Container>
            <Row>
              <Col>
                <h1 className={styles.title}>
                  Projects
                </h1>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container>
            <Row>
              <Col>
                <FeaturedProject
                  title='Stadt, Land, Mehr'
                  description='Lorem Upsum Dolores abotu ein familienunternehmen, das Vitalcenter Gerstberger'
                  year={ 2022 }
                  backgroundColor='#336095'
                  image={{
                    src: '/bg.jpg',
                    alt: 'Background color',
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Section>
      </Layout>
    </>
  )
}

export default Projects
