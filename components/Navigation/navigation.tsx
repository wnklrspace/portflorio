import type { NextPage } from 'next';
import { FC } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import classNames from 'classnames';
import { Container } from '../Layout';
import styles from './styles.module.scss';

interface NavigationProps {
	fontColor: 'light' | 'dark';
}

export const Navigation: FC<NavigationProps> = ({ fontColor }) => {
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

	return (
		<>
			<Link href='/'>
				<a className={logoClass}>F W</a>
			</Link>
			<div className={burgerClass} onClick={() => setShowNav(!showNav)}>
				<div className={styles.burger__meat} />
				<div className={styles.burger__meat} />
			</div>
			<div className={backgroundClass} />
			<nav className={navClass}>
				<Container>
					<Row>
						<Col md={6}>
							<ul>
								<li>
									<Link href='/'>
										<a>Projects</a>
									</Link>
								</li>
								<li>
									<Link href='../cv'>
										<a>CV</a>
									</Link>
								</li>
							</ul>
							<ul>
								<li>
									<Link href='https://github.com/wnklrspace'>
										<a target='_blank' rel='noopener'>
											Github
										</a>
									</Link>
								</li>
								<li>
									<Link href='https://www.linkedin.com/in/florian-winkler-384582198/'>
										<a target='_blank' rel='noopener'>
											Linked In
										</a>
									</Link>
								</li>
								<li>
									<Link href='../imprint'>
										<a>Imprint</a>
									</Link>
								</li>
							</ul>
						</Col>
						<Col>
							<p className={styles.nav__about}>
								Currently I am working as a working student in the field of
								Front End Development at
								<Link href='https://muse-case.com'>
									<a>muse case design & technology studio</a>
								</Link>
							</p>
						</Col>
					</Row>
				</Container>
			</nav>
		</>
	);
};
