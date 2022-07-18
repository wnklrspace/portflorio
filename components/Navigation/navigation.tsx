import type { NextPage } from 'next';
import { FC, useContext } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { Text } from '../Text';
import { Container } from '../Layout';
import { ThemeContext } from '../../context/theme';
import { Logo } from './logo';
import styles from './styles.module.scss';

interface NavigationProps {
	fontColor: 'light' | 'dark';
}

export const Navigation: FC<NavigationProps> = ({ fontColor }) => {
	const { route } = useRouter();
	const { theme, setTheme } = useContext(ThemeContext);
	const [showNav, setShowNav] = useState(false);
	const navClass = classNames(styles.nav, {
		[styles['nav--active']]: showNav,
	});
	const burgerClass = classNames(styles.burger, {
		[styles['burger--active']]: showNav,
		[styles['burger--light']]: theme === 'light',
		[styles['burger--dark']]: theme === 'dark',
	});
	const backgroundClass = classNames(styles['nav-background'], {
		[styles['nav-background--active']]: showNav,
	});
	const themeSwitchStyling = classNames(styles['theme-switch'], {
		[styles['theme-switch--light']]: theme === 'light',
		[styles['theme-switch--dark']]: theme === 'dark',
	});

	function handleThemeSwitch() {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
	}

	return (
		<>
			<Logo inverted={showNav} />
			<div className={themeSwitchStyling} onClick={() => handleThemeSwitch()}>
				{theme === 'dark' ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='44'
						height='44'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='#fff'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<circle cx='12' cy='12' r='4' />
						<path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' />
					</svg>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='44'
						height='44'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='#2c3e50'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<line x1='3' y1='3' x2='21' y2='21' />
						<path d='M16 12a4 4 0 0 0 -4 -4m-2.834 1.177a4 4 0 0 0 5.66 5.654' />
						<path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' />
					</svg>
				)}
			</div>
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
									<Link href='../playground'>
										<a
											className={`${route === '/playground' && styles.active}`}
											onClick={() => setShowNav(false)}>
											Playground
										</a>
									</Link>
								</li>
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
										<a
											className={`${route === '/imprint' && styles.active}`}
											onClick={() => setShowNav(false)}>
											Imprint
										</a>
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
