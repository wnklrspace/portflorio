import { Header } from '../Layout/'
import { Footer } from './footer'
import { LightSwitch } from '../Buttons'
import styles from './styles.module.scss'

interface Props {
  children: object,
  backgroundColor?: string,
}

export const Layout: React.FunctionComponent<Props> = (props) => {

  const {
    children,
    backgroundColor
  } = props;

  return (
    <>
      <Header backgroundColor= { backgroundColor } />
      <LightSwitch />
        <main className={ styles.main }>
          { children }
        </main>
      <Footer backgroundColor= { backgroundColor } />
    </>
  )
}
