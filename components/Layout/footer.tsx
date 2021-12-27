import Link from 'next/link'
import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import { Section, Container } from './'
import { Navigation } from '../Navigation'
import styles from './styles.module.scss'


interface Props {
  backgroundColor?: string,
}

export const Footer: React.FunctionComponent<Props> = (props) => {

  const {
    backgroundColor
  } = props

  return (
    <>
      <footer>
        <Section>
          <Container>
            <hr />
              <Row>
                <Col md={ 3 }>
                  <p>
                    Florian Winkler
                  </p>
                  <p>
                    01517440550
                  </p>
                  <p>
                    flo@wnklr.art
                  </p>
                </Col>
                <Col md={ 3 }>
                  <p>
                    <Link href='./'>
                      <a>Home</a>
                    </Link>
                  </p>
                  <p>
                    <Link href='/about'>
                      <a>CV</a>
                    </Link>
                  </p>
                  <p>
                    <Link href='/projects'>
                      <a>Projects</a>
                    </Link>
                  </p>
                  <p>
                    <Link href='/random'>
                      <a>Random</a>
                    </Link>
                  </p>
                  <p>
                    <Link href='/support'>
                      <a>Support</a>
                    </Link>
                  </p>
                </Col>
                <Col md={ 3 }>
                  <p>
                    Github
                  </p>
                  <p>
                    LinkedIn
                  </p>
                  <p>
                    Instagram
                  </p>
                </Col>
                <Col md={ 3 }>
                  <p>
                    All rights reserved 2022
                  </p>
                </Col>
              </Row>
          </Container>
        </Section>
        <Section>
          <Container>
            <Row>
              <Col md={ 3 }>
                <p>
                  <Link href='/imprint'>
                    <a>Imprint</a>
                  </Link>
                </p>
              </Col>
              <Col md={ 3 }>
                <p>

                </p>
              </Col>
              <Col md={ 3 }>
                <p>
                  Code & Design with ♥️
                </p>
              </Col>
              <Col md={ 3 }>
                <p style={{ textDecoration: 'line-through' }}>
                  Ulm, Germany
                </p>
                <p>
                  Stuttgart, Germany
                </p>
              </Col>
            </Row>
          </Container>
        </Section>
      </footer>
    </>
  )
}
