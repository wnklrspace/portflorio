import { imageConfigDefault } from 'next/dist/server/image-config'
import Image from 'next/image'
import { Row, Col } from 'reactstrap'
import { Container } from '../Layout'
import styles from './styles.module.scss'

interface Props {
  projects?: any,
}

export const LiveProjects:  React.FunctionComponent<Props> = ({
  projects
}) => {
  return (
    <div
      className={ styles['projects-live'] }
    >
      <Row>
        <Col md={ 4 }>
          <h2>
            Live
          </h2>
          <p>
            Projects and websites that are deployed and currently live.
          </p>
        </Col>
        <Col md={{
          size: 6,
          offset: 2
        }}>
          <div className={ styles['projects-live__project'] }>
            <h3 className={ styles['projects-live__project__title'] }>
              Testtitle
            </h3>
            <p className={ styles['projects-live__project__description'] }>
              Description
            </p>
            <p className={ styles['projects-live__project__year'] }>
              Year
            </p>
          </div>
          <div className={ styles['projects-live__project'] }>
            <h3 className={ styles['projects-live__project__title'] }>
              Testtitle
            </h3>
            <p className={ styles['projects-live__project__description'] }>
              Description
            </p>
            <p className={ styles['projects-live__project__year'] }>
              Year
            </p>
          </div>
          <div className={ styles['projects-live__project'] }>
            <h3 className={ styles['projects-live__project__title'] }>
              Testtitle
            </h3>
            <p className={ styles['projects-live__project__description'] }>
              Description
            </p>
            <p className={ styles['projects-live__project__year'] }>
              Year
            </p>
          </div>
        </Col>
      </Row>
    </div>
  )
}
