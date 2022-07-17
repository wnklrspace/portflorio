import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme';
import { Space } from '../Space/space';
import { Text } from '../Text';
import styles from './styles.module.scss';

interface Props {
	title?: string;
	year?: string;
	description?: string;
	link: string;
	jobs: Array<string>;
	mainColor?: string;
	target?: 'blank' | 'self';
	onClick?: () => void;
}

export const ProjectListItem: React.FunctionComponent<Props> = ({
	title,
	year,
	description,
	link,
	jobs,
	mainColor = '#fff',
	target = 'self',
	onClick,
}) => {
	const { theme } = useContext(ThemeContext);
	const projectListItem = classNames(styles['project-list-item'], {
		[styles['project-list-item--dark']]: theme === 'dark',
		[styles['project-list-item--light']]: theme === 'light',
	});

	return (
		<div className={projectListItem} onClick={onClick}>
			<div className={styles.ball} style={{ backgroundColor: mainColor }} />

			<div className={styles.title}>
				<Text type='h3' size='m' weight='light'>
					{title} • {year} •{' '}
					{jobs.length > 1 ? (
						jobs.map((job, index) => (
							<>
								<>{`${job}`}</>
								<>{jobs.length !== index + 1 && ', '}</>
							</>
						))
					) : (
						<>{jobs}</>
					)}
				</Text>

				<Space size='xxs' />
				<Text type='p' size='xl'>
					{description}
				</Text>
			</div>
		</div>
	);
};
