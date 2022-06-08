import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import { Layout, SeoMeta, Section, Container } from '../components/Layout';
import { Text } from '../components/Text';
import { Space } from '../components/Space/space';
import { Pill } from '../components/Pills';
import styles from '../styles/Home.module.scss';

const About: NextPage = () => {
	return (
		<>
			<SeoMeta title='• About' desc='Lorem Ipsum about about' urlPath='about' />
			<Layout>
				<Section hasTop hasBottom={false}>
					<Container>
						<Row>
							<Col>
								<Text type='h1' size='xl'>
									CV
								</Text>
							</Col>
						</Row>
					</Container>
				</Section>
				<Space size='md' />
				<Section>
					<Container>
						<Row>
							<Col md={6} lg={{ size: 4 }}>
								<Text type='p' size='m' italic underline>
									Expertise
								</Text>
								<Space size='xs' />
								<Text type='p' size='m'>
									Primarily
								</Text>
								<Space size='xs' />
								<Pill name='Front End Development' />
								<Pill name='Web Development' />
								<Pill name='Design Systems' />
								<Space size='sm' />
								<Text type='p' size='m'>
									I am also interested in
								</Text>
								<Space size='xs' />
								<Pill name='UX/UI Design' />
								<Pill name='Accessibility' />
								<Pill name='User Testing' />
								<Pill name='Component Design' />
								<Space size='sm' />
								<Text type='p' size='m' italic underline>
									The way I talk to machines
								</Text>
								<Space size='xs' />
								<Text type='p' size='m'>
									Primarily
								</Text>
								<Space size='xs' />
								<Pill name='SCSS' />
								<Pill name='JavaScript' />
								<Pill name='TypeScript' />
								<Pill name='React' />
								<Pill name='Next.JS' />
								<Pill name='Framer Motion' />
								<Space size='xs' />
								<Text type='p' size='m'>
									I am also interested in
								</Text>
								<Space size='xs' />
								<Pill name='Swift' />
								<Pill name='PHP' />
								<Pill name='Java' />
								<Space size='sm' />
								<Text type='p' size='m' italic underline>
									How I handle content
								</Text>
								<Space size='xs' />
								<Pill name='Sanity' />
								<Pill name='Prismic' />
								<Pill name='Kirby' />
								<Pill name='Wordpress' />
								<Space size='sm' />
								<Text type='p' size='m' italic underline>
									Workflow & Tools
								</Text>
								<Space size='xs' />
								<Text type='p' size='m'>
									Code
								</Text>
								<Space size='xs' />
								<Pill name='Github/Gitlab' />
								<Pill name='Vercel' />
								<Space size='xs' />
								<Text type='p' size='m'>
									Design
								</Text>
								<Space size='xs' />
								<Pill name='Figma' />
								<Pill name='Adobe CC' />
								<Space size='xs' />
								<Text type='p' size='m'>
									Project Management
								</Text>
								<Space size='xs' />
								<Pill name='Notion' />
								<Pill name='Miro' />
							</Col>
							<Col md={6} lg={{ size: 3, offset: 2 }}>
								<Text type='p' size='m' italic underline>
									Experience
								</Text>
								<Space size='xs' />
								<Text type='p' size='m'>
									<Link href='https://www.muse-case.com/'>
										<a target='_blank' rel='noopener'>
											muse case GmbH, Stuttgart
										</a>
									</Link>
									<br />
									Front End Developer, working student <br />
									03.2022 - ongoing
								</Text>
								<Space size='xs' />
								<Text type='p' size='m'>
									<Link href='https://www.muse-case.com/'>
										<a target='_blank' rel='noopener'>
											muse case GmbH, Stuttgart
										</a>
									</Link>
									<br />
									Front End Developer <br />
									10.2021 - 03.2022
								</Text>
								<Space size='xs' />
								<Text type='p' size='m'>
									<Link href='https://www.muse-case.com/'>
										<a target='_blank' rel='noopener'>
											muse case GmbH, Stuttgart
										</a>
									</Link>
									<br />
									Front End Developer, working student <br />
									04.2021 - 10.2021
								</Text>
								<Space size='xs' />
								<Text type='p' size='m'>
									Vitalcenter Gerstberger, Memmingen <br />
									Web Developer, working student
									<br />
									01.2018 - 04.2021
								</Text>
								<Space size='xs' />
								<Text type='p' size='m'>
									Projektagentur, Ulm <br />
									Apprenticeship <br />
									Web Development, Web Design
									<br />
									10.2018 - 02.2020
								</Text>
								<Space size='sm' />
								<Text type='p' size='m' italic underline>
									Honorary
								</Text>
								<Space size='xs' />
								<Text type='p' size='m'>
									<Link href='https://www.awo-stuttgart.de/'>
										<a target='_blank' rel='noopener'>
											AWO, Stuttgart Ost
										</a>
									</Link>
									<br />
									Preparing and holding mind training courses for elderly people
									to help preventing Alzheimer&apos;s disease.
									<br />
									10.2021 - 03.2022
								</Text>
							</Col>
							<Col md={6} lg={{ size: 3, offset: 0 }}>
								<Text type='p' size='m' italic underline>
									Education
								</Text>
								<Space size='xs' />
								<Text type='p' size='m'>
									<Link href='https://www.hdm-stuttgart.de/'>
										<a target='_blank' rel='noopener'>
											Hochschule der Medien, Stuttgart
										</a>
									</Link>
									<br />
									Mobile Media B.Sc. <br />
									2020 - 2024
								</Text>
								<Space size='xs' />
								<Text type='p' size='m'>
									Ferdinand von Steinbeis Schule, Ulm <br />
									Vocational school for Media Design <br />
									2017 - 2020
								</Text>
								<Space size='sm' />
								<Text type='p' size='m' italic underline>
									Lanuages
								</Text>
								<Space size='xs' />
								<Text type='p' size='m'>
									German, native
									<br />
									English, fluent
								</Text>
							</Col>
						</Row>
					</Container>
				</Section>
			</Layout>
		</>
	);
};

export default About;
