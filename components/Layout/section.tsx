import classNames from 'classnames'
import layout from './styles.module.scss'

interface Props {
  children?: any,
  hasTop?: boolean,
  hasBottom?: boolean,
}

export const Section: React.FunctionComponent<Props> = ({
  children,
  hasTop = false,
  hasBottom = true,
}) => {

  const sectionClass = classNames(layout.section, {
    [layout['section--t']]: hasTop,
    [layout['section--nb']]: !hasBottom,
  });

  return (
    <section
      className={ sectionClass }
    >
      { children }
    </section>
  )
}
