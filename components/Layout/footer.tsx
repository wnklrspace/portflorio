import Link from 'next/link';
import React, { useContext } from 'react';
import Clock from 'react-live-clock';
import { Row, Col } from 'reactstrap';
import classNames from 'classnames';
import { Text } from '../Text';
import { Space } from '../Space/space';
import { Section, Container } from './';
import { ThemeContext } from '../../context/theme';
import styles from './styles.module.scss';
interface Props {
	backgroundColor?: string;
	fontColor: 'light' | 'dark';
}

export const Footer: React.FunctionComponent<Props> = (props) => {
	const { backgroundColor, fontColor } = props;
	const { theme } = useContext(ThemeContext);
	const footerStyling = classNames(styles.footer, {
		[styles['footer--dark']]: theme === 'dark',
		[styles['footer--light']]: theme === 'light',
	});
	return (
		<>
			<footer
				style={{ backgroundColor: backgroundColor, color: fontColor }}
				className={footerStyling}>
				<Section>
					<Container>
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

							<Col md={3}>
								<Text type='p' size='m'>
									<span style={{ opacity: '0.25' }}>Nice to</span> me
									<span style={{ opacity: '0.25' }}>et you</span> in 10 seconds
								</Text>
								<Text type='p' size='m'>
									🛹 Currently skating around Stuttgart | 👨‍💻 while studying
									Mobile Media B.Sc.
									<br /> 📚 I love reading | 🎥 and know probably more about
									movies and movie culture than having actually seen every
									important one
									<br /> 🎧 Besides I love strolling around, exploring new
									places | 🌝 and enjoy bad puns a lot
								</Text>
							</Col>
						</Row>
					</Container>
				</Section>
				<div className={styles['footer__details']}>
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
				</div>
			</footer>
		</>
	);
};
