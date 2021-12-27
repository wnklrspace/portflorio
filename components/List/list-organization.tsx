import Link from 'next/link'
import Image from 'next/image'
import { Row, Col } from 'reactstrap'
import { Container } from '../Layout'
import list from './styles.module.scss'

interface Props {
  title?: string,
  description?: string,
  link?: string,
}

export const ListOrganization:  React.FunctionComponent<Props> = ({
  title,
  description,
  link
}) => {
  return (
      <div className={ list['list--organization'] } >
        <h2 className={ list['list--organization__title'] } >
          { title }
        </h2>
        <p className={ list['list--organization__description'] } >
          { description }
        </p>
        <div className={ list['list--organization__ctas'] }>
          <Link href={ link || '' }>
            <a>
              Go to website
            </a>
          </Link>
          <div className={ list['list--organization__donate'] } >
            Make donation
          </div>
        </div>
      </div>
  )
}
