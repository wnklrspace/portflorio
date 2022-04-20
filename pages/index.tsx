import type { NextPage } from 'next';
import { Row, Col } from 'reactstrap';
import { Container, Layout, SeoMeta, Section } from '../components/Layout';
import { LiveProjects, Project } from '../components/Projects';
import { Button } from '../components/Buttons';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
	return (
		<>
			<SeoMeta desc='• Front End Development' urlPath='./' />
			<Layout>
				<Section hasTop>
					<Container>
						<h1 className={styles.title}>
							Front End <br />
							Development <br />
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
						<Row>
							<Col>
								<Button name='See all projects' />
							</Col>
						</Row>
					</Container>
				</Section>
			</Layout>
		</>
	);
};

export default Home;
