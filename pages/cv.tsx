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
								</p>
							</Col>

							<Col lg={4} md={6}>
								<p style={{ fontStyle: 'italic' }}>Expertise</p>
								<Pill name='Front End Development' />
								<Pill name='UX/UI Design' />
								<Pill name='App Development' />
								<Pill name='Accessibility' />
								<Pill name='Design Systems' />
								<Pill name='Component Design' />
								<br />
								<br />
								<p style={{ fontStyle: 'italic' }}>
									The way I talk to machines
								</p>
								<Pill name='HTML' />
								<Pill name='SCSS' />
								<Pill name='JavaScript' />
								<Pill name='TypeScript' />
								<Pill name='React' />
								<Pill name='Next.JS' />
								{/* <Pill name='Framer Motion' /> */}
								<Pill name='Swift (basics)' />
								<Pill name='PHP (basics)' />
								<Pill name='Java (basics)' />
								<br />
								<br />
								<p style={{ fontStyle: 'italic' }}>How I handle content</p>
								<Pill name='Sanity' />
								<Pill name='Prismic' />
								<Pill name='Kirby' />
								<Pill name='Wordpress' />
								<br />
								<br />
								<p style={{ fontStyle: 'italic' }}>Workflow & Tools</p>
								<p>Code</p>
								<Pill name='Github/Gitlab' />
								<Pill name='Vercel' />
								<p>Design</p>
								<Pill name='Figma' />
								<Pill name='Adobe CC' />
								<p>Project Management</p>
								<Pill name='Notion' />
								<Pill name='Miro' />
							</Col>
						</Row>
					</Container>
				</Section>
			</Layout>
		</>
	);
};

export default About;
