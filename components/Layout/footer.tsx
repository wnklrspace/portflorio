import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
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
        <div className="section">
          <Container>
            <Row>
              <Col md={ 4 }>
                <p>
                  Florian Winkler
                  <br />
                  01517440550
                  <br />
                  flo@wnklr.art
                </p>
              </Col>
              <Col md={ 4 }>
                <p>
                  CV
                </p>
                <p>
                  Projects
                </p>
              </Col>
              <Col md={ 4 }>
                <p>
                  Projects
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  )
}
