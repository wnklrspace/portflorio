import { FC } from 'react';
import styles from './icon.module.scss';

interface IconProps {
	type: string;
}

export const Icon: FC<IconProps> = ({ type }) => {
	switch (type) {
		case 'list':
			return (
				<div className={styles.icon}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'>
						<path d='M24 3h-24v-2h24v2zm0 3h-24v2h24v-2zm0 5h-24v2h24v-2zm0 5h-24v2h24v-2zm0 5h-24v2h24v-2z' />
					</svg>
				</div>
			);

		case 'grid':
			return (
				<div className={styles.icon}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'>
						<path d='M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z' />
					</svg>
				</div>
			);

		case 'arrowLeft':
			return (
				<div className={styles.icon}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='44'
						height='44'
						viewBox='0 0 24 24'
						fill='none'>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<line x1='10' y1='12' x2='20' y2='12' />
						<line x1='10' y1='12' x2='14' y2='16' />
						<line x1='10' y1='12' x2='14' y2='8' />
						<line x1='4' y1='4' x2='4' y2='20' />
					</svg>
				</div>
			);

		case 'arrowRight':
			return (
				<div className={styles.icon}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='44'
						height='44'
						viewBox='0 0 24 24'
						fill='none'>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<line x1='14' y1='12' x2='4' y2='12' />
						<line x1='14' y1='12' x2='10' y2='16' />
						<line x1='14' y1='12' x2='10' y2='8' />
						<line x1='20' y1='4' x2='20' y2='20' />
					</svg>
				</div>
			);

		default:
			return <p>No Icon selected</p>;
	}
};
