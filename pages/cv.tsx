import type { NextPage } from 'next';
import Head from 'next/head';
import { Row, Col } from 'reactstrap';
import { Layout, SeoMeta, Section, Container } from '../components/Layout';
import { Pill } from '../components/Pills';
import styles from '../styles/Home.module.scss';

const About: NextPage = () => {
	return (
		<>
			<SeoMeta title='• About' desc='Lorem Ipsum about about' urlPath='about' />
			<Layout>
				<Section hasTop>
					<Container>
						<Row>
							<Col>
								<h1 className={styles.title}>CV</h1>
							</Col>
						</Row>
					</Container>
				</Section>
				<Section>
					<Container>
						<Row>
							<Col lg={4} md={6}>
								<p style={{ fontStyle: 'italic' }}>Experience</p>
								<p>
									muse case GmbH, Stuttgart <br />
									Front End Developer, working student <br />
									03.2022 - ongoing
								</p>
								<p>
									muse case GmbH, Stuttgart <br />
									Front End Developer <br />
									10.2021 - 03.2022
								</p>
								<p>
									muse case GmbH, Stuttgart <br />
									Front End Developer, working student <br />
									04.2021 - 10.2021
								</p>
								<p>
									Vitalcenter Gerstberger, Memmingen <br />
									Web Developer, working student
									<br />
									01.2018 - 04.2021
								</p>
								<p>
									Projektagentur, Ulm <br />
									Apprenticeship <br />
									Web Development, Web Design
									<br />
									10.2018 - 02.2020
								</p>
							</Col>
							<Col lg={4} md={6}>
								<p style={{ fontStyle: 'italic' }}>Education</p>
								<p>
									Hochschule der Medien, Stuttgart <br />
									Mobile Media B.Sc. <br />
									2020 - 2024
								</p>
								<p>
									Ferdinand von Steinbeis Schule, Ulm <br />
									Vocational school for Media Design <br />
									2017 - 2020
								</p>
								<br />
								<p style={{ fontStyle: 'italic' }}>Lanuages</p>
								<p>
									German, native
									<br />
									English, fluent
									<br />
									Spanish, fluent
								</p>
							</Col>

							<Col lg={4} md={6}>
								<p style={{ fontStyle: 'italic' }}>
									The way I talk to machines
								</p>
								<Pill>HTML</Pill>
								<Pill>SCSS</Pill>
								<Pill>Javascript</Pill>
								<Pill>React</Pill>
								<Pill>Next.JS</Pill>
								<Pill>Framer Motion</Pill>
								<Pill>PHP</Pill>
								<br />
								<br />
								<p style={{ fontStyle: 'italic' }}>How I handle content</p>
								<Pill>Sanity</Pill>
								<Pill>Prismic</Pill>
								<Pill>Kirby</Pill>
								<Pill>Wordpress</Pill>
								<br />
								<br />
								<p style={{ fontStyle: 'italic' }}>Workflow & Tools</p>
								<Pill>Github</Pill>
								<Pill>Notion</Pill>
								<Pill>Slack</Pill>
							</Col>
						</Row>
					</Container>
				</Section>
			</Layout>
		</>
	);
};

export default About;
