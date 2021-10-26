import styles from './styles.module.scss'

interface Props {
  children: Object,
}

export const Pill:  React.FunctionComponent<Props> = (props) => {

  const { children } = props;

  return (
    <div className={ styles.pill }>
      { children }
    </div>
  )
}
