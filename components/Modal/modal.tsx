import { FC, useEffect } from 'react';
import Link from 'next/link';
import { isEmpty } from 'lodash';
import { Text } from '../Text';
import { Slider } from '../Slider/slider';
import { Pill } from '../Pills';
import { Space } from '../Space/space';
import { Icon } from '../Icon/icon';
import styles from './modal.module.scss';

interface ModalProps {
	title: string;
	jobs: Array<string>;
	stack: Array<string>;
	partner: Array<{ name: string; link: string }>;
	github: string;
	liveSite: string;
	year: number;
	description: string;
	images: Array<any>;
	showModal: boolean;
	setShowModal: Function;
}

export const Modal: FC<ModalProps> = ({
	title,
	jobs,
	stack,
	github,
	liveSite,
	setShowModal,
	showModal,
	year,
	images,
	description,
	partner,
}) => {
	return (
		<div className={styles['container']}>
			<div className={styles.modal}>
				<div className={styles['modal__head']}>
					<Text type='h3' size='l'>
						{title}
					</Text>
				</div>
				<div className={styles['modal__body']}>
					{images.length != 0 && (
						<>
							<div>
								<Slider images={images} />
							</div>
							<Space size='sm' />
						</>
					)}
					<div style={{ opacity: 0.5, marginBottom: '10px' }}>
						<Text type='p' size='s' transform='uppercase'>
							Tech stack
						</Text>
					</div>

					{stack.map((item, index) => {
						return <Pill key={index} name={item} />;
					})}
					<Space size='xs' />
					<div style={{ opacity: 0.5, marginBottom: '10px' }}>
						<Text type='p' size='s' transform='uppercase'>
							Year
						</Text>
					</div>
					<Text type='p' size='m'>
						{year}
					</Text>
					{partner.length > 0 && (
						<>
							<Space size='xs' />
							<div style={{ opacity: 0.5, marginBottom: '10px' }}>
								<Text type='p' size='s' transform='uppercase'>
									Partner
								</Text>
							</div>
							<Text type='p' size='m' underline>
								<Link href={partner[0].link}>
									<a target='_blank' rel='noopener'>
										{partner[0].name}
									</a>
								</Link>
							</Text>
						</>
					)}
					<Space size='xs' />
					<div style={{ opacity: 0.5, marginBottom: '10px' }}>
						<Text type='p' size='s' transform='uppercase'>
							Jobs
						</Text>
					</div>

					{jobs.length > 1 ? (
						<Text type='p' size='m'>
							{jobs.map((job, index) => {
								return (
									<>
										{job} {index != jobs.length - 1 && ', '}
									</>
								);
							})}
						</Text>
					) : (
						<Text type='p' size='m'>
							{jobs}
						</Text>
					)}
					<Space size='xs' />
					<div style={{ opacity: 0.5, marginBottom: '10px' }}>
						<Text type='p' size='s' transform='uppercase'>
							Description
						</Text>
					</div>

					<Text type='p' size='m'>
						{description}.
					</Text>

					<Space size='xs' />
				</div>

				<div className={styles['modal__footer']}>
					<div onClick={() => setShowModal(false)}>
						<div>
							<Text type='p' size='s'>
								Close
							</Text>
						</div>
					</div>
					{github != '' && (
						<div>
							<Link href={github}>
								<a target='_blank' rel='noopener'>
									Github
								</a>
							</Link>
						</div>
					)}
					{liveSite != '' && (
						<div>
							<Link href={liveSite}>
								<a target='_blank' rel='noopener'>
									Launch
								</a>
							</Link>
						</div>
					)}
				</div>
			</div>
			<div className={styles.arrowLeft}>
				<Icon type='arrowLeft' />
			</div>
			<div className={styles.arrowRight}>
				<Icon type='arrowRight' />
			</div>
			<div className={styles.background} onClick={() => setShowModal(false)} />
		</div>
	);
};
