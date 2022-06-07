import type { NextPage } from 'next';
import { Row, Col } from 'reactstrap';
import { Container, Layout, SeoMeta, Section } from '../components/Layout';
import { LiveProjects, Project, ProjectListItem } from '../components/Projects';
import projectData from './project/project-data';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
	return (
		<>
			<SeoMeta desc='• Front End Development' urlPath='./' />
			<Layout fontColor='light'>
				<Section firstOfPage hasTop>
					<Container>
						<h1 className={styles.title}>
							Front End <br /> Development
						</h1>
						<h2 className={styles.title} style={{ textAlign: 'right' }}>
							UI-Design <br />
							UX-Design
						</h2>
					</Container>
				</Section>

				<Section>
					<Container>
						<Row>
							{projectData.map((project: any, index: number) => {
								return (
									<Project
										key={index}
										title={project.title}
										size={index == 0 ? 'lg' : 'md'}
										year={project.year}
										link={`/project/${project.slug}`}
										src={project.hero_image}
										target='self'
									/>
								);
							})}
						</Row>
					</Container>
				</Section>
			</Layout>
		</>
	);
};

export default Home;
