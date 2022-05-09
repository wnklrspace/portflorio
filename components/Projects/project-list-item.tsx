import { imageConfigDefault } from 'next/dist/server/image-config';
import Image from 'next/image';
import { Row, Col } from 'reactstrap';
import classNames from 'classnames';
import { Container } from '../Layout';
import styles from './styles.module.scss';

interface Props {
	title?: string;
	year?: string;
	area?: string;
}

export const ProjectListItem: React.FunctionComponent<Props> = ({
	title,
	year,
	area,
}) => {
	const projectListItem = classNames(styles['project-list-item'], {});

	return (
		<div className={projectListItem}>
			<h2 className={styles['project-list-item__title']}>{title}</h2>
			<p className={styles['project-list-item__text']}>{area}</p>
			<p className={styles['project-list-item__year']}>{year}</p>
		</div>
	);
};
