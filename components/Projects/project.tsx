import styles from './styles.module.scss'

interface Props {
  children: Object,
}

export const Project:  React.FunctionComponent<Props> = ({
  children
}) => {
  return (
    <div className={ styles.project }>
      { children }
    </div>
  )
}
