import type { NextPage } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import classNames from 'classnames';
import { Container } from '../Layout';
import styles from './styles.module.scss';

export const Navigation = () => {
	const [showNav, setShowNav] = useState(false);
	const navClass = classNames(styles.nav, {
		[styles['nav--active']]: showNav,
	});
	const logoClass = classNames(styles.logo, {
		[styles['logo--inverted']]: showNav,
	});
	const burgerClass = classNames(styles.burger, {
		[styles['burger--active']]: showNav,
	});
	const backgroundClass = classNames(styles['nav-background'], {
		[styles['nav-background--active']]: showNav,
	});

	return (
		<>
			<Link href='./'>
				<a className={logoClass}>Fw</a>
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
									<Link href='./'>
										<a>Home</a>
									</Link>
								</li>
								<li>
									<Link href='./projects'>
										<a>Projects</a>
									</Link>
								</li>
								<li>
									<Link href='./cv'>
										<a>CV</a>
									</Link>
								</li>
							</ul>
							<ul>
								<li>
									<Link href='/random'>
										<a>Random</a>
									</Link>
								</li>
								<li>
									<Link href='/support'>
										<a>Support</a>
									</Link>
								</li>
								<li>
									<Link href='/imprint'>
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
