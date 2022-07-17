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
import { ThemeContext } from '../context/theme';
import styles from '../styles/page/index.module.scss';

const Home: NextPage = () => {
	const [modalContent, setModalContent] = useState<{
		id: number;
		title: string;
		jobs: Array<string>;
		github: string;
		liveSite: string;
		stack: Array<string>;
		partner: Array<{ name: string; link: string }>;
		year: number;
		images: Array<any>;
		description: string;
	}>({
		id: 0,
		title: '',
		jobs: [''],
		github: '',
		liveSite: '',
		year: 0,
		description: '',
		stack: [''],
		images: [''],
		partner: [{ name: '', link: '' }],
	});

	const { theme } = useContext(ThemeContext);
	const [showModal, setShowModal] = useState<boolean>(false);
	const { listView, setListView } = useContext(ListViewContext);

	useEffect(() => {
		showModal
			? document.body.classList.add('modal-open')
			: document.body.classList.remove('modal-open');
	}, [showModal]);

	useEffect(() => {
		window.addEventListener('keydown', handleUserKeyPress);

		return () => {
			window.removeEventListener('keydown', handleUserKeyPress);
		};
	});

	function handleUserKeyPress(e: KeyboardEvent) {
		// When user presses the right arrow key and nextProject is not
		// undefined, user is getting redirected to the next project
		if (showModal && e.key === 'ArrowRight') {
			if (modalContent.id == projectData[projectData.length - 1].id) {
				setModalContent({
					id: projectData[0].id,
					title: projectData[0].title,
					jobs: projectData[0].role,
					github: projectData[0].github,
					liveSite: projectData[0].link,
					stack: projectData[0].stack,
					year: projectData[0].year,
					images: projectData[0].images,
					partner: projectData[0].partner,
					description: projectData[0].intro_text,
				});
				return;
			}

			setModalContent({
				id: projectData[modalContent.id + 1].id,
				title: projectData[modalContent.id + 1].title,
				jobs: projectData[modalContent.id + 1].role,
				github: projectData[modalContent.id + 1].github,
				liveSite: projectData[modalContent.id + 1].link,
				stack: projectData[modalContent.id + 1].stack,
				year: projectData[modalContent.id + 1].year,
				images: projectData[modalContent.id + 1].images,
				partner: projectData[modalContent.id + 1].partner,
				description: projectData[modalContent.id + 1].intro_text,
			});
		}

		// When user presses the left arrow key and prevProject is not
		// undefined, user is getting redirected to the previous project
		if (showModal && e.key === 'ArrowLeft') {
			if (modalContent.id == 0) {
				setModalContent({
					id: projectData[projectData.length - 1].id,
					title: projectData[projectData.length - 1].title,
					jobs: projectData[projectData.length - 1].role,
					github: projectData[projectData.length - 1].github,
					liveSite: projectData[projectData.length - 1].link,
					stack: projectData[projectData.length - 1].stack,
					year: projectData[projectData.length - 1].year,
					images: projectData[projectData.length - 1].images,
					partner: projectData[projectData.length - 1].partner,
					description: projectData[projectData.length - 1].intro_text,
				});
				return;
			}

			setModalContent({
				id: projectData[modalContent.id - 1].id,
				title: projectData[modalContent.id - 1].title,
				jobs: projectData[modalContent.id - 1].role,
				github: projectData[modalContent.id - 1].github,
				liveSite: projectData[modalContent.id - 1].link,
				stack: projectData[modalContent.id - 1].stack,
				year: projectData[modalContent.id - 1].year,
				images: projectData[modalContent.id - 1].images,
				partner: projectData[modalContent.id - 1].partner,
				description: projectData[modalContent.id - 1].intro_text,
			});
		}

		// ESC
		if (showModal && e.key === 'Escape') {
			setShowModal(false);
		}
	}

	return (
		<>
			<SeoMeta
				title={'• Front End Development'}
				desc='Florian Winkler, Front End Developer from Stuttgart. Currently Studying Mobile Medien B.Sc. at Hochschule der Medien'
				urlPath='./'
			/>
			<Layout fontColor='light'>
				<Section firstOfPage hasTop hasBorderBottom>
					<Container>
						<Row>
							<Col md={11}>
								<Text type='h1' size='xxl'>
									Front End Developer focused on{' '}
									<span
										style={{
											color: '#5353ff',
										}}>
										complex UX &amp; UI{' '}
									</span>
								</Text>
							</Col>
						</Row>
					</Container>
				</Section>

				<Section hasTop>
					<Container>
						<Row>
							<Col md={{ size: 4, offset: 8 }}>
								<div className={styles.layout}>
									<div
										className={`${styles.switch} ${
											listView === 'list' && styles['switch--active']
										} ${theme === 'light' && styles['switch--light']} ${
											theme === 'dark' && styles['switch--dark']
										}`}
										onClick={() => setListView('list')}>
										<Icon type='list' />
									</div>
									<div
										className={`${styles.switch} ${
											listView === 'grid' && styles['switch--active']
										} ${theme === 'light' && styles['switch--light']} ${
											theme === 'dark' && styles['switch--dark']
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
													id: project.id,
													title: project.title,
													jobs: project.role,
													github: project.github,
													liveSite: project.link,
													stack: project.stack,
													year: project.year,
													images: project.images,
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
									<ProjectListItem
										key={index}
										title={project.title}
										year={project.year}
										link={`/project/${project.slug}`}
										mainColor={project.theme.mainColor}
										description={project.intro_text}
										jobs={project.role}
										target='self'
										onClick={() => {
											setModalContent({
												id: project.id,
												title: project.title,
												jobs: project.role,
												github: project.github,
												liveSite: project.link,
												stack: project.stack,
												year: project.year,
												images: project.images,
												partner: project.partner,
												description: project.intro_text,
											});
											setShowModal(true);
										}}
									/>
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
					images={modalContent.images}
					setShowModal={setShowModal}
				/>
			)}
		</>
	);
};

export default Home;
