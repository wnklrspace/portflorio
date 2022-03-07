import type { NextPage } from 'next';
import { Layout, SeoMeta, Section, Container } from '../components/Layout';
import { Row, Col } from 'reactstrap';
import styles from '../styles/Home.module.scss';

const Projects: NextPage = () => {
	return (
		<>
			<SeoMeta
				title='• Services'
				desc='Lorem Ipsum about services'
				urlPath='services'
			/>

			<Layout>
				<Section hasTop>
					<Container>
						<Row>
							<Col>
								<h1 className={styles.title}>Services</h1>
							</Col>
						</Row>
					</Container>
				</Section>
			</Layout>
		</>
	);
};

export default Projects;
