import type { NextPage } from 'next';
import Head from 'next/head';
import { Row, Col } from 'reactstrap';
import { Container, Layout, SeoMeta, Section } from '../components/Layout';
import { LiveProjects, Project } from '../components/Projects';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
	return (
		<>
			<SeoMeta desc='• Software Development & Design' urlPath='./' />
			<Layout>
				<Section hasTop>
					<Container>
						<h1 className={styles.title}>
							Software <br />
							Development <br />
							&& UX/UI Design
						</h1>
					</Container>
				</Section>
				<Section>
					<Container>
						<LiveProjects />
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

export default Home;
