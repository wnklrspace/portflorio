import type { NextPage } from 'next';
import { Row, Col } from 'reactstrap';
import { Container, Layout, SeoMeta, Section } from '../components/Layout';
import { LiveProjects, Project, ProjectListItem } from '../components/Projects';
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
							Front End <br /> Development
						</h1>
					</Container>
				</Section>

				<Section>
					<Container>
						<Row>
							<Project
								title='easygiveback'
								size='lg'
								year={2022}
								link='https://stage.easygiveback.org/'
							/>
							<Project
								title='muse case labs'
								size='md'
								year={2021}
								link='https://www.muse-case-labs.com/'
							/>
							<Project
								title='16 fifth'
								size='md'
								year={2020}
								link='https://16fifth.vercel.app/'
							/>
							<Project
								title='Uhland Realschule'
								size='md'
								year={2021}
								link='https://uhland-realschule.de/'
							/>
							<Project
								title='gerstberger'
								size='md'
								year={2020}
								link='https://jobs.gerstberger.com/'
							/>
							<Project
								title='astoria west nyc'
								size='md'
								year={2021}
								link='https://www.astoriawestnyc.com/'
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
