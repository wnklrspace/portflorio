import type { NextPage } from 'next';
import Head from 'next/head';
import { Row, Col } from 'reactstrap';
import { Layout, SeoMeta, Section, Container } from '../components/Layout';
import { ListOrganization } from '../components/List';
import styles from '../styles/Home.module.scss';

const Support: NextPage = () => {
	return (
		<>
			<SeoMeta title='• About' desc='Lorem Ipsum about about' urlPath='about' />
			<Layout>
				<Section hasTop>
					<Container>
						<Row>
							<Col>
								<h1 className={styles.title}>Support</h1>
							</Col>
						</Row>
					</Container>
				</Section>
				<Section>
					<Container>
						<Row>
							<Col md={6}>
								<p>
									Being a white male working in the tech industry I have
									benefited from a privileges in my life. Including having a
									financially secure family background that has given me the
									freedom to not have to worry about money. Having that
									background, it is very important to me to support people and
									organizations and try to do good with the things I have and
									can do. With that being said I have listed some organizations
									that I regularly support with small donations.
								</p>
							</Col>
							<Col md={6}>
								<p>
									I am currently about to think about ways to implement features
									in my software and design that people can pay for and will be
									100% donated to a beneficial organization. If you have ideas
									and thoughts around that topic, I would be more than curious
									to exchange them with you.
								</p>
							</Col>
						</Row>
					</Container>
				</Section>
				<Section>
					<Container>
						<Row>
							<Col md={12}>
								<ListOrganization
									title='Bildungsinitiative Ferhatunvar'
									description='Serpil möchte mit der Gründung der Bildungsinitiative allen Kindern, Jugendlichen, jungen Erwachsenen und deren Eltern, die rassistische Erfahrungen im Alltag oder in der Schule machen, eine Anlaufstelle bieten. Mit dieser Arbeit möchte Serpil das Gedenken an ihren Sohn Ferhat aufrechterhalten. Die Bildungsinitiative wird von der Familie Unvar, Jugendlichen, engagierten Erwachsenen, sowie Freund:innen von Ferhat getragen.'
									link='https://www.bildungsinitiative-ferhatunvar.de/'
								/>
							</Col>
							<Col md={12}>
								<ListOrganization
									title='Sea Watch'
									description='Lorem ipsum dolores and so one and on'
									link='#'
								/>
							</Col>
							<Col md={12}>
								<ListOrganization
									title='Deutsche Depressionshilfe'
									description='Lorem ipsum dolores and so one and on'
									link='https://www.deutsche-depressionshilfe.de/start'
								/>
							</Col>
							<Col md={12}>
								<ListOrganization
									title='Weißer Ring'
									description='Lorem ipsum dolores and so one and on'
									link='#'
								/>
							</Col>
						</Row>
					</Container>
				</Section>
			</Layout>
		</>
	);
};

export default Support;
