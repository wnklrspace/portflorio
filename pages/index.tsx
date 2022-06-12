import { useContext, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { Row, Col } from 'reactstrap';
import { Container, Layout, SeoMeta, Section } from '../components/Layout';
import { Project, ProjectListItem } from '../components/Projects';
import { Icon } from '../components/Icon/icon';
import { Modal } from '../components/Modal/modal';
import { Text } from '../components/Text';
import projectData from '../project-data';
import { ListViewContext } from '../context/list-view';
import styles from '../styles/page/index.module.scss';

const Home: NextPage = () => {
	const [modalContent, setModalContent] = useState<{
		title: string;
		jobs: Array<string>;
		github: string;
		liveSite: string;
		stack: Array<string>;
		partner: Array<{ name: string; link: string }>;
		year: string;
		description: string;
	}>({
		title: '',
		jobs: [''],
		github: '',
		liveSite: '',
		year: '',
		description: '',
		stack: [''],
		partner: [{ name: '', link: '' }],
	});

	const [showModal, setShowModal] = useState<boolean>(false);
	const { listView, setListView } = useContext(ListViewContext);

	useEffect(() => {
		showModal
			? document.body.classList.add('modal-open')
			: document.body.classList.remove('modal-open');
	}, [showModal]);

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
									<Col xs={6} md={index == 0 ? 8 : 4}>
										<div
											key={index}
											onClick={() => {
												setModalContent({
													title: project.title,
													jobs: project.role,
													github: project.github,
													liveSite: project.link,
													stack: project.stack,
													year: project.year,
													partner: project.partner,
													description: project.intro_text,
												});
												setShowModal(true);
											}}>
											<Project
												key={index}
												title={project.title}
												size={index == 0 ? 'lg' : 'md'}
												year={project.year}
												link={`/project/${project.slug}`}
												src={project.hero_image}
												target='self'
											/>
										</div>
									</Col>
								) : (
									<div
										key={index}
										onClick={() => {
											setModalContent({
												title: project.title,
												jobs: project.role,
												github: project.github,
												liveSite: project.link,
												stack: project.stack,
												year: project.year,
												partner: project.partner,
												description: project.intro_text,
											});
											setShowModal(true);
										}}>
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
									</div>
								);
							})}
						</Row>
					</Container>
				</Section>
			</Layout>
			{showModal && (
				<Modal
					partner={modalContent.partner}
					title={modalContent.title}
					jobs={modalContent.jobs}
					github={modalContent.github}
					liveSite={modalContent.liveSite}
					stack={modalContent.stack}
					year={modalContent.year}
					description={modalContent.description}
					showModal={showModal}
					setShowModal={setShowModal}
				/>
			)}
		</>
	);
};

export default Home;
