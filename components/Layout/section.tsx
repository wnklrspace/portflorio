import classNames from 'classnames'
import styles from './styles.module.scss'

interface Props {
  children?: any,
  id?: String,
  hasTop?: boolean,
  hasBottom?: boolean,
}

export const Section: React.FunctionComponent<Props> = ({
  children,
  id = '',
  hasTop = false,
  hasBottom = true,
}) => {

  const sectionClass = classNames(styles.section, {
    [styles['section--t']]: hasTop,
    [styles['section--nb']]: !hasBottom,
  });

  return (
    <section
      className={ sectionClass }
    >
      { children }
    </section>
  )
}
