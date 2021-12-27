import { imageConfigDefault } from 'next/dist/server/image-config'
import Image from 'next/image'
import { Container, Row, Col } from 'reactstrap'
import styles from './styles.module.scss'

interface Props {
  title?: string,
  description?: string,
  year?: number,
  backgroundColor?: any,
  image: {
    src?: string,
    alt?: string,
    width?: number,
    height?: number
  }
}

export const FeaturedProject:  React.FunctionComponent<Props> = ({
  title,
  description,
  year,
  backgroundColor,
  image
}) => {
  return (
    <div
      className={ styles['project--featured'] }
      style={{
        backgroundColor: backgroundColor
      }}
    >
      <Row>
        <Col md={ 6 }>
          <div className={ styles['project--featured__text'] }>
            <p>
              { year }
            </p>
            <h2 className={ styles['project--featured__title'] }>
              { title }
            </h2>
            <p className={ styles['project--featured__description'] }>
              { description }
            </p>
          </div>
        </Col>
        <Col md={ 6 }>
          <div className={ styles['project--featured__img-container'] }>
            <Image
              src={ image.src || '' }
              alt={ image.alt || 'Background' }
              layout='fill'
              objectFit='cover'
              placeholder='blur'
              blurDataURL={ image.src }
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}
