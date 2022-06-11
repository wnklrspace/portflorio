import Link from 'next/link';
import React from 'react';
import Clock from 'react-live-clock';
import { Row, Col } from 'reactstrap';
import { Text } from '../Text';
import { Space } from '../Space/space';
import { Section, Container } from './';
import styles from './styles.module.scss';
interface Props {
	backgroundColor?: string;
	fontColor: 'light' | 'dark';
}

export const Footer: React.FunctionComponent<Props> = (props) => {
	const { backgroundColor, fontColor } = props;

	return (
		<>
			<footer
				style={{ backgroundColor: backgroundColor, color: fontColor }}
				className={styles.footer}>
				<Section>
					<Container>
						<hr />
						<Row>
							<Col md={3}>
								<Text type='p' size='m'>
									Florian Winkler
									<br />
									Stuttgart, Germany
								</Text>
								<Space size='sm' />
								<Text type='p' size='m'>
									<Clock format={'HH | mm | ss'} ticking={true} />
								</Text>
								<Space size='xs' />
								<Text type='p' size='m'>
									Right about time for <br /> coffee and talk
								</Text>
							</Col>
							<Col md={3}>
								<Text type='p' size='m'>
									<Link href='/'>
										<a>Projects</a>
									</Link>
								</Text>
								<Text type='p' size='m'>
									<Link href='../cv'>
										<a>CV</a>
									</Link>
								</Text>
							</Col>
							<Col md={3}>
								<Text type='p' size='m'>
									<Link href='https://github.com/wnklrspace'>
										<a target='_blank' rel='noopener'>
											Github
										</a>
									</Link>
								</Text>
								<Text type='p' size='m'>
									<Link href='https://www.linkedin.com/in/florian-winkler-384582198/'>
										<a target='_blank' rel='noopener'>
											LinkedIn
										</a>
									</Link>
								</Text>
							</Col>
							<Col md={3}>
								<Text type='p' size='m'>
									All rights reserved 2022
								</Text>
								<Text type='p' size='m'>
									<Link href='https://www.aktion-deutschland-hilft.de/'>
										<a target='_blank' rel='noopener'>
											Have you seen this?
										</a>
									</Link>
								</Text>
							</Col>
						</Row>
					</Container>
				</Section>
				<Section>
					<Container>
						<Row>
							<Col md={3}>
								<Text type='p' size='m'>
									<Link href='../imprint'>
										<a>Imprint</a>
									</Link>
								</Text>
							</Col>
							<Col md={{ size: 3, offset: 6 }}>
								<Text type='p' size='m'>
									Code & Design with ♥️
								</Text>
							</Col>
						</Row>
					</Container>
				</Section>
			</footer>
		</>
	);
};
