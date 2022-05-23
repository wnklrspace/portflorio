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
						<h2 className={styles.title} style={{ textAlign: 'right' }}>
							UI-Design <br />
							UX-Design
						</h2>
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
							<Project
								title='amplify'
								size='lg'
								year={2021}
								link='https://xd.adobe.com/view/eb762da1-b929-4d52-ae7f-b8e4501158cf-be25/screen/19cd5799-7e34-45a2-b4ae-a21a26d27e36/?fullscreen'
								src='/logo_animation.gif'
							/>
							<Project
								title='about tomorrow'
								size='md'
								year={2021}
								link='https://about-tomorrow.de'
							/>
							<Project
								title='blinkist analyses'
								size='md'
								year={2021}
								link='./MID_FlorianWinkler_Blinkist.pdf'
							/>
						</Row>
					</Container>
				</Section>
			</Layout>
		</>
	);
};

export default Home;
