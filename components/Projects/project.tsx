import { imageConfigDefault } from 'next/dist/server/image-config'
import Image from 'next/image'
import { Row, Col } from 'reactstrap'
import { Container } from '../Layout'
import styles from './styles.module.scss'

interface Props {
  title?: string,
  description?: string,
  year?: number,
  image: {
    src?: string,
    alt?: string,
    width?: number,
    height?: number
  }
}

export const Project:  React.FunctionComponent<Props> = ({
  title,
  description,
  year,
  image
}) => {
  return (
    <div
      className={ styles['project'] }
    >
      <div className={ styles['project__img-container'] }>
        {/* <Image
          src={ image.src || '' }
          alt={ image.alt || 'Background' }
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL={ image.src }
        /> */}
      </div>
      <div className={ styles['project__text'] }>
        <p>
          { year }
        </p>
        <h2 className={ styles['project__title'] }>
          { title }
        </h2>
        <p className={ styles['project__description'] }>
          { description }
        </p>
      </div>
    </div>
  )
}
