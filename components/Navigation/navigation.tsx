import type { NextPage } from 'next'
import { useState } from 'react';
import Link from 'next/link'
import { Row, Col } from 'reactstrap'
import classNames from 'classnames'
import { Container } from '../Layout'
import styles from './styles.module.scss'

export const Navigation = () => {

  const [showNav, setShowNav] = useState(false);
  const navClass = classNames(styles.nav, {
    [styles['nav--active']]: showNav,
  });

  return (
  <>
    <div className={ styles.logo }>
      Fw
    </div>
    <div
      className={ styles.burger }
      onClick={ () => setShowNav(!showNav) }
    >
      <div className={ styles.burger__meat }/>
      <div className={ styles.burger__meat }/>
    </div>
    <nav className={ navClass }>
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
                <Link href='./cv'>
                  <a>CV</a>
                </Link>
              </li>
              <li>
                <Link href='./projects'>
                  <a>Projects</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href='/random'>
                  <a>Random</a>
                </Link>
              </li>
              <li>
                <Link href='/support'>
                  <a>Support</a>
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
