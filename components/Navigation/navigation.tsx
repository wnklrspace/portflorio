import type { NextPage } from 'next'
import Link from 'next/link'
import { Row, Col } from 'reactstrap'
import { Container } from '../Layout'
import styles from './styles.module.scss'

export const Navigation = () => {

  return (
  <>
    <div className={ styles.logo }>
      Fw
    </div>
    <div className={ styles.burger }>
      <div className={ styles.burger__meat }/>
      <div className={ styles.burger__meat }/>
    </div>
    <nav className={ styles.nav }>
      <Container>
        <Row>
          <Col md={ 6 }>
            <ul>
              <li>
                <Link href='./'>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href='./about'>
                  <a>CV</a>
                </Link>
              </li>
              <li>
                <Link href='./projects'>
                  <a>Projects</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, quibusdam!
            </p>
          </Col>
        </Row>
      </Container>
    </nav>
  </>
  )
}
