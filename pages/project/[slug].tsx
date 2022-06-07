import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import { Layout, SeoMeta, Section, Container } from '../../components/Layout';
import { Pill } from '../../components/Pills';
import { Text } from '../../components/Text';
import { Button } from '../../components/Buttons';
import { slugify } from '../../helper';
import { projectData } from './project-data';
import styles from '../../styles/page/project.module.scss';

interface ProjectProps {
	data?: any;
}

const Project: NextPage<ProjectProps> = ({ data }) => {
	console.log('data: ', data);
	return (
		<>
			<SeoMeta title='• About' desc='Lorem Ipsum about about' urlPath='about' />
			<Layout backgroundColor='black' fontColor={data.theme.textColor}>
				<Section firstOfPage hasBottom={false}>
					<Container>
						<Row>
							<Col xl={{ size: 8, offset: 0 }}>
								<Text type='h1' size='xl' weight='bold'>
									<span style={{ color: `${data.theme.mainColor}` }}>
										{data.title}
									</span>
								</Text>
							</Col>
						</Row>
						<Row>
							<Col xl={{ size: 8, offset: 0 }}>
								<Text type='p' size='l' weight='bold'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Aliquid, ipsum. Doloremque, libero maiores quis sed provident
									qui soluta, iste impedit similique eius nostrum. Libero
									quaerat suscipit dolorem voluptatem sapiente perspiciatis.
								</Text>
							</Col>
						</Row>
					</Container>
				</Section>
				<Section hasTop>
					<Container>
						<Row>
							<Col xl={{ size: 4, offset: 0 }}>
								<Text type='h3' size='m'>
									Partner
								</Text>
								<Text type='p' size='m' underline>
									<Link href='https://muse-case.com'>
										<a>muse case GmbH</a>
									</Link>
								</Text>
								<hr
									style={{
										margin: '30px 0',
									}}
								/>
								<Text type='h3' size='m'>
									Job
								</Text>
								{data.role.map((role: any, index: number) => {
									return <Pill key={index} name={role} />;
								})}
								<hr
									style={{
										margin: '30px 0',
									}}
								/>
								<Text type='h3' size='m'>
									Tech Stack
								</Text>
								{data.stack.map((pill: string, index: number) => {
									return <Pill key={index} name={pill} />;
								})}
								<hr
									style={{
										margin: '30px 0',
									}}
								/>
								<Button name='Launch website' link={data.link} targetBlank />
							</Col>
							<Col xl={{ size: 5, offset: 2 }}>
								{data.description.map((description: any, index: number) => {
									return (
										<div className={styles.block} key={index}>
											<div className={styles['block__head']}>
												<p
													className={styles['block__number']}
													style={{
														backgroundColor: `${data.theme.mainColor}`,
													}}>
													{index + 1}
												</p>
												<p>{description.key}</p>
											</div>
											<div>
												<p>{description.description}</p>
											</div>
										</div>
									);
								})}
							</Col>
						</Row>
					</Container>
				</Section>
			</Layout>
		</>
	);
};

export const getStaticPaths = async () => {
	const paths = projectData.map((project) => ({
		params: { slug: slugify(project.title) },
	}));

	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: any }) => {
	const data = projectData.filter(
		(project) => slugify(project.title) === params.slug
	)[0];
	return {
		props: { data },
	};
};

export default Project;
