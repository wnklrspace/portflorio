import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout, SeoMeta, Section, Container } from '../components/Layout';
import { FeaturedProject, Project } from '../components/Projects';
import { Row, Col } from 'reactstrap';
import styles from '../styles/Home.module.scss';

const Projects: NextPage = () => {
	return (
		<>
			<SeoMeta
				title='• Projects'
				desc='Lorem Ipsum about projects'
				urlPath='projects'
			/>

			<Layout>
				<Section hasTop>
					<Container>
						<Row>
							<Col>
								<h1 className={styles.title}>Projects</h1>
							</Col>
						</Row>
					</Container>
				</Section>
				<Section>
					<Container>
						<Row>
							<Col>
								<FeaturedProject
									title='Muse Case Labs'
									description='Lorem Upsum Dolores abotu ein familienunternehmen, das Vitalcenter Gerstberger'
									year={2022}
									backgroundColor='#336095'
									image={{
										src: '/bg.jpg',
										alt: 'Background color',
									}}
								/>
							</Col>
						</Row>
					</Container>
				</Section>
				<Section>
					<Container>
						<Row>
							<Project
								size='lg'
								title='Stadt, Land, Mehr'
								description='Lorem Upsum Dolores abotu ein familienunternehmen, das Vitalcenter Gerstberger'
								year={2022}
								image={{
									src: '/hero-02.jpg',
									alt: 'Background color',
								}}
							/>
							<Project
								title='Stadt, Land, Mehr'
								description='Lorem Upsum Dolores abotu ein familienunternehmen, das Vitalcenter Gerstberger'
								year={2022}
								image={{
									src: '/bg.jpg',
									alt: 'Background color',
								}}
							/>
							<Project
								title='Stadt, Land, Mehr'
								description='Lorem Upsum Dolores abotu ein familienunternehmen, das Vitalcenter Gerstberger'
								year={2022}
								image={{
									src: '/bg.jpg',
									alt: 'Background color',
								}}
							/>
							<Project
								title='Stadt, Land, Mehr'
								description='Lorem Upsum Dolores abotu ein familienunternehmen, das Vitalcenter Gerstberger'
								year={2022}
								image={{
									src: '/bg.jpg',
									alt: 'Background color',
								}}
							/>
							<Project
								title='Stadt, Land, Mehr'
								description='Lorem Upsum Dolores abotu ein familienunternehmen, das Vitalcenter Gerstberger'
								year={2022}
								image={{
									src: '/bg.jpg',
									alt: 'Background color',
								}}
							/>
							<Project
								title='Stadt, Land, Mehr'
								description='Lorem Upsum Dolores abotu ein familienunternehmen, das Vitalcenter Gerstberger'
								year={2022}
								image={{
									src: '/bg.jpg',
									alt: 'Background color',
								}}
							/>
							<Project
								size='lg'
								title='Stadt, Land, Mehr'
								description='Lorem Upsum Dolores abotu ein familienunternehmen, das Vitalcenter Gerstberger'
								year={2022}
								image={{
									src: '/bg.jpg',
									alt: 'Background color',
								}}
							/>
						</Row>
					</Container>
				</Section>
			</Layout>
		</>
	);
};

export default Projects;
