import layout from './styles.module.scss'

interface Props {
  children?: any,
}

export const Container: React.FunctionComponent<Props> = ({
  children
}) => {

  return (
    <div className={ layout.container }>
      { children }
    </div>
  )
}
