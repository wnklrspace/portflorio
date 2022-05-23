import { imageConfigDefault } from 'next/dist/server/image-config';
import Image from 'next/image';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import classNames from 'classnames';
import { Container } from '../Layout';
import styles from './styles.module.scss';

interface Props {
	title?: string;
	description?: string;
	year?: number;
	size?: string;
	link?: string;
	src?: string;
	alt?: string;
	width?: number;
	height?: number;
}

export const Project: React.FunctionComponent<Props> = ({
	title,
	description,
	link,
	year,
	src,
	alt,
	width,
	height,
	size = 'md',
}) => {
	const imageContainerClass = classNames(styles['project__img-container'], {
		[styles['project__img-container--lg']]: size === 'lg',
	});

	return (
		<Col xs={6} md={size === 'md' ? 4 : 8}>
			<Link href={link || ''}>
				<a target='_blank' rel='noopener'>
					<div className={styles['project']}>
						<div className={imageContainerClass}>
							{src && (
								<div className={styles.img}>
									<Image
										src={src || ''}
										alt={alt || 'Background'}
										layout='fill'
										objectFit='cover'
										placeholder='blur'
										blurDataURL={src || ''}
									/>
								</div>
							)}
						</div>
						<div className={styles['project__text']}>
							<p className={styles['project__year']}>{year}</p>
							<h2 className={styles['project__title']}>{title}</h2>
							{/* <p className={ styles['project__description'] }>
            { description }
          </p> */}
						</div>
					</div>
				</a>
			</Link>
		</Col>
	);
};
