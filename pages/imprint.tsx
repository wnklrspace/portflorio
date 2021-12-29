import type { NextPage } from 'next'
import Head from 'next/head'
import { Row, Col } from 'reactstrap'
import { Layout, SeoMeta, Section, Container } from '../components/Layout'
import styles from '../styles/Home.module.scss'

const Imprint: NextPage = () => {
  return (
    <>
      <SeoMeta
        title='• About'
        desc='Lorem Ipsum about about'
        urlPath='about'
      />
      <Layout>
        <Section hasTop>
          <Container>
            <Row>
              <Col>
                <h1 className={styles.title}>
                  Imprint
                </h1>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container>
            <Row>
              <Col>
                <h2>
                  Angaben gemäß § 5 TMG
                </h2>
                <p>
                  Florian Winkler <br />
                  Gartenstraße 48 <br />
                  70563 Stuttgart
                </p>
                <h2>
                  Kontakt
                </h2>
                <p>
                  Telefon: 015174405250 <br />
                  E-Mail: flo@wnklr.art
                </p>
                <h2>
                  Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
                </h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
                <h2>
                  Haftung für Inhalte
                </h2>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
                <h2>
                  Haftung für Links
                </h2>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
                <h2>
                  Urheberrecht
                </h2>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </Col>
            </Row>
          </Container>
        </Section>
      </Layout>
    </>
  )
}

export default Imprint
