import type { NextPage } from 'next';
import { FC } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import classNames from 'classnames';
import { Text } from '../Text';
import { Container } from '../Layout';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

interface NavigationProps {
	fontColor: 'light' | 'dark';
}

export const Navigation: FC<NavigationProps> = ({ fontColor }) => {
	const { route } = useRouter();
	const [showNav, setShowNav] = useState(false);
	const navClass = classNames(styles.nav, {
		[styles['nav--active']]: showNav,
	});
	const logoClass = classNames(styles.logo, {
		[styles['logo--inverted']]: showNav,
	});
	const burgerClass = classNames(styles.burger, {
		[styles['burger--active']]: showNav,
		[styles['burger--inverted']]: fontColor === 'light',
	});
	const backgroundClass = classNames(styles['nav-background'], {
		[styles['nav-background--active']]: showNav,
	});

	console.log('route: ', route);

	return (
		<>
			<Link href='/'>
				<a className={logoClass}>FW</a>
			</Link>
			<div className={burgerClass} onClick={() => setShowNav(!showNav)}>
				<div className={styles.burger__meat} />
				<div className={styles.burger__meat} />
			</div>
			<div onClick={() => setShowNav(false)} className={backgroundClass} />
			<nav className={navClass}>
				<Container>
					<Row>
						<Col md={6}>
							<ul>
								<li>
									<Link href='/'>
										<a
											className={`${route === '/' && styles.active}`}
											onClick={() => setShowNav(false)}>
											Projects
										</a>
									</Link>
								</li>
								<li>
									<Link href='../cv'>
										<a
											className={`${route === '/cv' && styles.active}`}
											onClick={() => setShowNav(false)}>
											CV
										</a>
									</Link>
								</li>
							</ul>
							<ul>
								<li>
									<Link href='https://github.com/wnklrspace'>
										<a
											onClick={() => setShowNav(false)}
											target='_blank'
											rel='noopener'>
											Github
										</a>
									</Link>
								</li>
								<li>
									<Link href='https://www.linkedin.com/in/florian-winkler-384582198/'>
										<a
											onClick={() => setShowNav(false)}
											target='_blank'
											rel='noopener'>
											Linked In
										</a>
									</Link>
								</li>
								<li>
									<Link href='../imprint'>
										<a onClick={() => setShowNav(false)}>Imprint</a>
									</Link>
								</li>
							</ul>
						</Col>
						<Col md={6}>
							<div className={styles.about}>
								<Text type='p' size='m'>
									Currently I am working as a Front End Developer at{' '}
									<Link href='https://muse-case.com'>
										<a>muse case GmbH</a>
									</Link>
								</Text>
							</div>
						</Col>
					</Row>
				</Container>
			</nav>
		</>
	);
};
