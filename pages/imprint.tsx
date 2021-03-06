import type { NextPage } from 'next';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import { Text } from '../components/Text';
import { Layout, SeoMeta, Section, Container } from '../components/Layout';

const Imprint: NextPage = () => {
	return (
		<>
			<SeoMeta
				title='• Imprint'
				desc='Imprint of the portflorio'
				urlPath='imprint'
			/>
			<Layout>
				<Section hasTop>
					<Container>
						<Row>
							<Col>
								<Link href='./'>
									<a>Back to Home</a>
								</Link>
								<Text type='h1' size='l'>
									Imprint
								</Text>
							</Col>
						</Row>
					</Container>
				</Section>
				<Section>
					<Container>
						<Row>
							<Col md={8}>
								<Text type='p' size='m' marginBottom>
									Angaben gemäß § 5 TMG
									<br />
									Florian Winkler <br />
									Stuttgart
								</Text>
								<Text type='p' size='m' marginBottom>
									Kontakt
									<br />
									Auf Anfrage schicke ich Ihnen gerne meine Kontaktdaten und die
									ganze Adresse zu.
								</Text>
								<Text type='p' size='m' marginBottom>
									Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
									<br />
									Wir sind nicht bereit oder verpflichtet, an
									Streitbeilegungsverfahren vor einer
									Verbraucherschlichtungsstelle teilzunehmen.
								</Text>
								<Text type='p' size='m' marginBottom>
									Haftung für Inhalte
									<br />
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
								</Text>
								<Text type='p' size='m' marginBottom>
									Haftung für Links
									<br />
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
								</Text>
								<Text type='p' size='m' marginBottom>
									Urheberrecht
									<br />
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
								</Text>
							</Col>
						</Row>
					</Container>
				</Section>
			</Layout>
		</>
	);
};

export default Imprint;
