import type { NextPage } from 'next'
import Head from 'next/head'
import { Row, Col } from 'reactstrap'
import { Layout, SeoMeta, Section, Container } from '../components/Layout'
import { ListOrganization } from '../components/List'
import styles from '../styles/Home.module.scss'

const Support: NextPage = () => {
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
                  Support, <br />
                  nothing but support
                </h1>
              </Col>
              <Col md={ 8 }>
                <p>
                  Being a white male working in tech and design and having benefited from a secure financial
                  family background, it is very important to me to think about my privileges and support
                  people and organizations that support minorities and humans that do not have the same privileges
                  as I do and did.
                </p>
              </Col>
              <Col md={ 8 }>
                <p>
                  Below I have listed some organizations that I regularly support with a small donation. I am currently
                  about to think about ways to implement features in my softwares and games (for instance I Knew I Know You)
                  that people can pay for that will be donated 100% to an organization of your choice.
                </p>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container>
            <Row>
              <Col md={ 12 }>
                <ListOrganization
                  title='Bildungsinitiative Ferhatunvar'
                  description='Serpil möchte mit der Gründung der Bildungsinitiative allen Kindern, Jugendlichen, jungen Erwachsenen und deren Eltern, die rassistische Erfahrungen im Alltag oder in der Schule machen, eine Anlaufstelle bieten. Mit dieser Arbeit möchte Serpil das Gedenken an ihren Sohn Ferhat aufrechterhalten. Die Bildungsinitiative wird von der Familie Unvar, Jugendlichen, engagierten Erwachsenen, sowie Freund:innen von Ferhat getragen.'
                  link='https://www.bildungsinitiative-ferhatunvar.de/'
                />
              </Col>
              <Col md={ 12 }>
                <ListOrganization
                  title='Sea Watch'
                  description='Lorem ipsum dolores and so one and on'
                  link='#'
                />
              </Col>
              <Col md={ 12 }>
                <ListOrganization
                  title='Deutsche Depressionshilfe'
                  description='Lorem ipsum dolores and so one and on'
                  link='https://www.deutsche-depressionshilfe.de/start'
                />
              </Col>
              <Col md={ 12 }>
                <ListOrganization
                  title='Weißer Ring'
                  description='Lorem ipsum dolores and so one and on'
                  link='#'
                />
              </Col>
            </Row>
          </Container>
        </Section>
      </Layout>
    </>
  )
}

export default Support
