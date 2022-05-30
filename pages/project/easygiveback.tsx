import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import { Layout, SeoMeta, Section, Container } from '../../components/Layout';
import { Pill } from '../../components/Pills';
import styles from '../styles/Home.module.scss';

const Easygiveback: NextPage = () => {
	return (
		<>
			<SeoMeta title='• About' desc='Lorem Ipsum about about' urlPath='about' />
			<Layout backgroundColor='#223c48' fontColor='white'>
				<Section hasBottom={false}>
					<Container>
						<Row>
							<Col>
								<h1>Easygiveback</h1>
							</Col>
						</Row>
					</Container>
				</Section>
				<Section>
					<Container>
						<Row>
							<Col md='4'>
								<h3>Job</h3>
								<Pill name='Front End Development' />
								<hr
									style={{
										background: 'rgba(255,255,255,.2)',
										margin: '30px 0',
									}}
								/>
								<h3>Tech Stack</h3>
								<Pill name='React' />
								<Pill name='Next.JS' />
								<Pill name='SCSS' />
								<Pill name='Prismic CMS' />
								<Pill name='Github' />
								<hr
									style={{
										background: 'rgba(255,255,255,.2)',
										margin: '30px 0',
									}}
								/>
							</Col>
							<Col md={{ size: 6, offset: 2 }}>
								<p>
									<strong>1. The case</strong> <br />
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
									mollitia? Omnis perspiciatis accusantium doloribus vero nam
									aut ab iste in.
								</p>
							</Col>
						</Row>
					</Container>
				</Section>
			</Layout>
		</>
	);
};

export default Easygiveback;
