import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import { Layout, SeoMeta, Section, Container } from '../../components/Layout';
import { Pill } from '../../components/Pills';
import styles from '../styles/Home.module.scss';

const Astoria: NextPage = () => {
	return (
		<>
			<SeoMeta title='• About' desc='Lorem Ipsum about about' urlPath='about' />
			<Layout backgroundColor='#ffb2a3' fontColor='black'>
				<Section firstOfPage hasBottom={false}>
					<Container>
						<Row>
							<Col md={{ size: 8, offset: 1 }}>
								<h1>Astoria West NYC</h1>
							</Col>
						</Row>
					</Container>
				</Section>
				<Section>
					<Container>
						<Row>
							<Col md={{ size: 4, offset: 1 }}>
								<h3>Partner</h3>
								<Link href='https://muse-case.com'>
									<a>muse case GmbH</a>
								</Link>
								<hr
									style={{ background: 'rgba(0,0,0,.2)', margin: '30px 0' }}
								/>
								<h3>Job</h3>
								<Pill name='Front End Development' />
								<hr
									style={{ background: 'rgba(0,0,0,.2)', margin: '30px 0' }}
								/>
								<h3>Tech Stack</h3>
								<Pill name='React' />
								<Pill name='Next.JS' />
								<Pill name='SCSS' />
								<Pill name='Prismic CMS' />
								<Pill name='Github' />
								<hr
									style={{ background: 'rgba(0,0,0,.2)', margin: '30px 0' }}
								/>
								<Link href='https://muse-case.com'>
									<a>Launch website</a>
								</Link>
							</Col>
							<Col md={{ size: 5, offset: 1 }}>
								<p>
									<strong>1. The case</strong> <br />
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
									mollitia? Omnis perspiciatis accusantium doloribus vero nam
									aut ab iste in.
								</p>
								<p>
									<strong>2. The challenge</strong> <br />
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

export default Astoria;
