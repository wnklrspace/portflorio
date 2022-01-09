import { imageConfigDefault } from 'next/dist/server/image-config'
import Image from 'next/image'
import { Row, Col } from 'reactstrap'
import classNames from 'classnames'
import { Container } from '../Layout'
import styles from './styles.module.scss'

interface Props {
  title?: string,
  description?: string,
  year?: number,
  size?: string,
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
  image,
  size='md'
}) => {

  const imageContainerClass = classNames(styles['project__img-container'], {
    [styles['project__img-container--lg']]: size === 'lg',
  });

  return (
    <Col
      xs={ 6 }
      md={ size === 'md' ? 4 : 8 }
    >
      <div className={ styles['project'] }>
        <div className={ imageContainerClass }>
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
          <p className={ styles['project__year'] }>
            { year }
          </p>
          <h2 className={ styles['project__title'] }>
            { title }
          </h2>
          {/* <p className={ styles['project__description'] }>
            { description }
          </p> */}
        </div>
      </div>
    </Col>
  )
}
