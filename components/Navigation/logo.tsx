import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface LogoProps {
	inverted: boolean;
}

export const Logo: FC<LogoProps> = ({ inverted }) => {
	const logoClass = classNames(styles.logo, {
		[styles['logo--inverted']]: inverted,
	});
	return (
		<div className={logoClass}>
			<div className={styles.image}>
				<Image
					src='/logo_pb.png'
					alt='logo'
					layout='fill'
					placeholder='blur'
					blurDataURL='/logo_pb.png'
				/>
			</div>
			<Link href='/'>
				<a>FW</a>
			</Link>
		</div>
	);
};
