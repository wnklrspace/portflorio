import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import { Layout, SeoMeta, Section, Container } from '../components/Layout';
import styles from '../styles/Home.module.scss';

const Imprint: NextPage = () => {
	return (
		<>
			<SeoMeta title='• About' desc='Lorem Ipsum about about' urlPath='about' />
			<Layout>
				<Section hasTop>
					<Container>
						<Row>
							<Col md={{ size: 8, offset: 2 }}>
								<Link href='./'>
									<a>Back to Home</a>
								</Link>
								<h1 className={styles.title}>Imprint</h1>
							</Col>
						</Row>
					</Container>
				</Section>
				<Section>
					<Container>
						<Row>
							<Col md={{ size: 8, offset: 2 }}>
								<p>Angaben gemäß § 5 TMG</p>
								<p>
									Florian Winkler <br />
									Stuttgart
								</p>
								<p>Kontakt</p>
								<p>
									Auf Anfrage schicke ich Ihnen gerne meine Kontaktdaten und die
									ganze Adresse zu.
								</p>
								<p>
									Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
								</p>
								<p>
									Wir sind nicht bereit oder verpflichtet, an
									Streitbeilegungsverfahren vor einer
									Verbraucherschlichtungsstelle teilzunehmen.
								</p>
								<p>Haftung für Inhalte</p>
								<p>
									Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
									Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
									verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
									Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
									gespeicherte fremde Informationen zu überwachen oder nach
									Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
									hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
									Nutzung von Informationen nach den allgemeinen Gesetzen
									bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
									jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
									Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
									Rechtsverletzungen werden wir diese Inhalte umgehend
									entfernen.
								</p>
								<p>Haftung für Links</p>
								<p>
									Unser Angebot enthält Links zu externen Websites Dritter, auf
									deren Inhalte wir keinen Einfluss haben. Deshalb können wir
									für diese fremden Inhalte auch keine Gewähr übernehmen. Für
									die Inhalte der verlinkten Seiten ist stets der jeweilige
									Anbieter oder Betreiber der Seiten verantwortlich. Die
									verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
									mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
									zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
									inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
									konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
									Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
									Links umgehend entfernen.
								</p>
								<p>Urheberrecht</p>
								<p>
									Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
									diesen Seiten unterliegen dem deutschen Urheberrecht. Die
									Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
									Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
									der schriftlichen Zustimmung des jeweiligen Autors bzw.
									Erstellers. Downloads und Kopien dieser Seite sind nur für den
									privaten, nicht kommerziellen Gebrauch gestattet. Soweit die
									Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
									werden die Urheberrechte Dritter beachtet. Insbesondere werden
									Inhalte Dritter als solche gekennzeichnet. Sollten Sie
									trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
									bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
									von Rechtsverletzungen werden wir derartige Inhalte umgehend
									entfernen.
								</p>
							</Col>
						</Row>
					</Container>
				</Section>
			</Layout>
		</>
	);
};

export default Imprint;
