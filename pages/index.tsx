import type { NextPage } from 'next';
import Head from 'next/head';
import { Row, Col } from 'reactstrap';
import { Container, Layout, SeoMeta, Section } from '../components/Layout';
import { LiveProjects } from '../components/Projects';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
	return (
		<>
			<SeoMeta desc='• Software Development & Design' urlPath='./' />
			<Layout>
				<Section hasTop>
					<Container>
						<h1 className={styles.title}>
							Front End <br />
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
			</Layout>
		</>
	);
};

export default Home;
