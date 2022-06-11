import type { NextPage } from 'next';
import { Row, Col } from 'reactstrap';
import { Text } from '../components/Text';
import { Layout, SeoMeta, Section, Container } from '../components/Layout';

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
								<Text type='h1' size='xl'>
									Services
								</Text>
							</Col>
						</Row>
					</Container>
				</Section>
			</Layout>
		</>
	);
};

export default Projects;
