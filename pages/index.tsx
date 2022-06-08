import { useContext, useState } from 'react';
import type { NextPage } from 'next';
import { Row, Col } from 'reactstrap';
import classNames from 'classnames';
import { Container, Layout, SeoMeta, Section } from '../components/Layout';
import { Project, ProjectListItem } from '../components/Projects';
import { Icon } from '../components/Icon/icon';
import projectData from '../project-data';
import { ListViewContext } from '../context/list-view';
import styles from '../styles/page/index.module.scss';

const Home: NextPage = () => {
	const { listView, setListView } = useContext(ListViewContext);
	return (
		<>
			<SeoMeta desc='• Front End Development' urlPath='./' />
			<Layout fontColor='light'>
				<Section firstOfPage hasTop>
					<Container>
						<h1 className={styles.title}>
							Front End <br /> Development
						</h1>
					</Container>
				</Section>

				<Section>
					<Container>
						<Row>
							<Col md={{ size: 4, offset: 8 }}>
								<div className={styles.layout}>
									<div
										className={`${styles.switch} ${
											listView === 'list' && styles['switch--active']
										}`}
										onClick={() => setListView('list')}>
										<Icon type='list' />
									</div>
									<div
										className={`${styles.switch} ${
											listView === 'grid' && styles['switch--active']
										}`}
										onClick={() => setListView('grid')}>
										<Icon type='grid' />
									</div>
								</div>
							</Col>
						</Row>
						<Row>
							{projectData.map((project: any, index: number) => {
								return listView === 'grid' ? (
									<Project
										key={index}
										title={project.title}
										size={index == 0 ? 'lg' : 'md'}
										year={project.year}
										link={`/project/${project.slug}`}
										src={project.hero_image}
										target='self'
									/>
								) : (
									<ProjectListItem
										key={index}
										title={project.title}
										year={project.year}
										link={`/project/${project.slug}`}
										mainColor={project.theme.mainColor}
										description={project.intro_text}
										jobs={project.role}
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
