import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import { isEmpty } from 'lodash';
import { Space } from '../../components/Space/space';
import { Layout, SeoMeta, Section, Container } from '../../components/Layout';
import { Pill } from '../../components/Pills';
import { ProjectListItem } from '../../components/Projects';
import { Text } from '../../components/Text';
import { Button } from '../../components/Buttons';
import { slugify } from '../../helper';
import projectData from '../../project-data';
import styles from '../../styles/page/project.module.scss';

interface ProjectProps {
	data?: any;
}

const Project: NextPage<ProjectProps> = ({ data }) => {
	return (
		<>
			<SeoMeta
				title={`• ${data.title}`}
				desc={data.intro_text}
				urlPath={data.hero_image}
			/>
			<Layout backgroundColor='black' fontColor={data.theme.textColor}>
				<Section firstOfPage hasBottom={false}>
					<Container>
						<Row>
							<Col xl={{ size: 8, offset: 0 }}>
								<div className={styles.title}>
									<div
										className={styles.ball}
										style={{ backgroundColor: `${data.theme.mainColor}` }}
									/>
									<Text type='h1' size='xl' weight='bold'>
										<span style={{ color: `${data.theme.mainColor}` }}>
											{data.title}
										</span>
									</Text>
								</div>
							</Col>
						</Row>
						<Space size='md' />
						<Row>
							<Col xl={{ size: 8, offset: 0 }}>
								<Text type='p' size='l' weight='bold'>
									{data.intro_text}
								</Text>
							</Col>
						</Row>
					</Container>
				</Section>
				<Section hasTop>
					<Container>
						<Row>
							<Col md={{ size: 5, offset: 0 }} xl={{ size: 4, offset: 0 }}>
								{!isEmpty(data.partner) && (
									<>
										<Text type='h3' size='m'>
											Partner
										</Text>

										<Space size='xs' />

										{data.partner.map((partner: any, index: number) => {
											return (
												<Text key={index} type='p' size='m' underline>
													<Link href={partner.link}>
														<a target='_blank'>{partner.name}</a>
													</Link>
												</Text>
											);
										})}
										<hr
											style={{
												margin: '30px 0',
											}}
										/>
									</>
								)}
								<Text type='h3' size='m'>
									{data.role.length > 1 ? 'Jobs' : 'Job'}
								</Text>
								<Space size='xs' />
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
								<Space size='xs' />
								{data.stack.map((pill: string, index: number) => {
									return <Pill key={index} name={pill} />;
								})}
								<hr
									style={{
										margin: '30px 0',
									}}
								/>
								<Button name='Launch website' link={data.link} targetBlank />
								<Space size='lg' />
							</Col>
							<Col md={{ size: 5, offset: 2 }} xl={{ size: 5, offset: 2 }}>
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
												<Text type='p' size='m' weight='bold'>
													{description.key}
												</Text>
											</div>
											<Space size='xs' />
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
				<Section>
					<Container>
						<Row>
							<Col>
								<Text type='h2' size='l'>
									Other Projects
								</Text>
							</Col>
						</Row>
						{projectData.map((project: any, index: number) => {
							return (
								project.title !== data.title &&
								index <= 3 && (
									<ProjectListItem
										key={index}
										title={project.title}
										year={project.year}
										link={`/project/${project.slug}`}
										target='self'
										mainColor={project.theme.mainColor}
										role={project.intro_text}
									/>
								)
							);
						})}
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
