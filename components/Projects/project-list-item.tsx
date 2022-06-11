import classNames from 'classnames';
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
}

export const ProjectListItem: React.FunctionComponent<Props> = ({
	title,
	year,
	description,
	link,
	jobs,
	mainColor = '#fff',
	target = 'self',
}) => {
	const projectListItem = classNames(styles['project-list-item'], {});

	return (
		// <Link href={link}>
		// 	<a target={`_${target}`}>
		<div className={projectListItem}>
			<div className={styles.ball} style={{ backgroundColor: mainColor }} />

			<div className={styles.title}>
				<div style={{ width: '80%' }}>
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
				</div>
				<Space size='xs' />
				<Text type='p' size='l'>
					{description}
				</Text>
			</div>
		</div>
		// 	</a>
		// </Link>
	);
};
