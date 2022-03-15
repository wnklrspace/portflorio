import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Clock from 'react-live-clock';
import { Row, Col } from 'reactstrap';
import { Section, Container } from './';
import { Navigation } from '../Navigation';
import styles from './styles.module.scss';
interface Props {
	backgroundColor?: string;
}

export const Footer: React.FunctionComponent<Props> = (props) => {
	const { backgroundColor } = props;

	return (
		<>
			<footer className={styles.footer}>
				<Section>
					<Container>
						<hr />
						<Row>
							<Col md={3}>
								<p>
									Florian Winkler
									<br />
									Stuttgart, Germany
								</p>
								<p>
									<Clock format={'HH • mm • ss'} ticking={true} />
								</p>
								<p>
									<Link href='https://www.aktion-deutschland-hilft.de/'>
										<a target='_blank' rel='noopener'>
											Have you seen this?
										</a>
									</Link>
								</p>
							</Col>
							<Col md={3}>
								<p>
									<Link href='./'>
										<a>Home</a>
									</Link>
								</p>
								<p>
									<Link href='/cv'>
										<a>CV</a>
									</Link>
								</p>
								<p>
									<Link href='/projects'>
										<a>Projects</a>
									</Link>
								</p>
								<p>
									<Link href='/random'>
										<a>Random</a>
									</Link>
								</p>
								<p>
									<Link href='/support'>
										<a>Support</a>
									</Link>
								</p>
							</Col>
							<Col md={3}>
								<p>
									<Link href='https://github.com/wnklrspace'>
										<a target='_blank' rel='noopener'>
											Github
										</a>
									</Link>
								</p>
								<p>
									<Link href='https://www.linkedin.com/in/florian-winkler-384582198/'>
										<a target='_blank' rel='noopener'>
											LinkedIn
										</a>
									</Link>
								</p>
							</Col>
							<Col md={3}>
								<p>All rights reserved 2022</p>
							</Col>
						</Row>
					</Container>
				</Section>
				<Section>
					<Container>
						<Row>
							<Col md={3}>
								<p>
									<Link href='/imprint'>
										<a>Imprint</a>
									</Link>
								</p>
							</Col>
							<Col md={3}>
								<p></p>
							</Col>
							<Col md={3}></Col>
							<Col md={3}>
								<p>Code & Design with ♥️</p>
							</Col>
						</Row>
					</Container>
				</Section>
			</footer>
		</>
	);
};
