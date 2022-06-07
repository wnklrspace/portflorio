import { imageConfigDefault } from 'next/dist/server/image-config';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { Text } from '../Text';
import styles from './styles.module.scss';

interface Props {
	title?: string;
	year?: string;
	role?: string;
	link: string;
	mainColor?: string;
	target?: 'blank' | 'self';
}

export const ProjectListItem: React.FunctionComponent<Props> = ({
	title,
	year,
	role,
	link,
	mainColor = '#fff',
	target = 'self',
}) => {
	const projectListItem = classNames(styles['project-list-item'], {});

	return (
		<Link href={link}>
			<a target={target}>
				<div className={projectListItem}>
					<div className={styles.ball} style={{ backgroundColor: mainColor }} />

					<div className={styles.title}>
						<Text type='h3' size='m' weight='light'>
							{title} • {year}
						</Text>
						<Text type='p' size='l'>
							{role}
						</Text>
					</div>
				</div>
			</a>
		</Link>
	);
};
