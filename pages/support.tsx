import type { NextPage } from 'next';
import Head from 'next/head';
import { Row, Col } from 'reactstrap';
import { Text } from '../components/Text';
import { Layout, SeoMeta, Section, Container } from '../components/Layout';
import { ListOrganization } from '../components/List';

const Support: NextPage = () => {
	return (
		<>
			<SeoMeta title='• About' desc='Lorem Ipsum about about' urlPath='about' />
			<Layout>
				<Section hasTop>
					<Container>
						<Row>
							<Col>
								<Text type='h1' size='xl'>
									Support
								</Text>
							</Col>
						</Row>
					</Container>
				</Section>
				<Section>
					<Container>
						<Row>
							<Col md={8}>
								<p>
									Being a white male working in the tech industry I have
									benefited from a privileges in my life. Including a
									financially secure family background that has given me the
									freedom to not have to worry about money. Having that
									background, it is very important to me to support
									organizations that do good. And to think about ways to do good
									within the spectrum of my work. Below you will find
									organizations that do great work.
								</p>
							</Col>
							<Col md={8}>
								<p>
									Currently I am thinking about ways to implement features in
									software and design that people can pay for (if they want)
									that will be 100% donated to a beneficial organization. If you
									have ideas and thoughts around that topic, I would be more
									than curious to exchange ideas with you.
								</p>
							</Col>
						</Row>
					</Container>
				</Section>
				<Section>
					<Container>
						<Row>
							<Col md={6}>
								<ListOrganization
									title='Bildungsinitiative Ferhatunvar'
									description='Lorem ipsum dolores and so one and on'
									link='https://www.bildungsinitiative-ferhatunvar.de/'
								/>
							</Col>
							<Col md={6}>
								<ListOrganization
									title='Sea Watch'
									description='Lorem ipsum dolores and so one and on'
									link='#'
								/>
							</Col>
							<Col md={6}>
								<ListOrganization
									title='Deutsche Depressionshilfe'
									description='Lorem ipsum dolores and so one and on'
									link='https://www.deutsche-depressionshilfe.de/start'
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
