import React, { FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

interface ButtonProps {
	link?: string;
	name?: string;
	targetBlank?: boolean;
}

export const Button: FC<ButtonProps> = ({
	link,
	name,
	targetBlank = false,
}) => {
	const target = targetBlank ? '_blank' : '_self';
	return (
		<Link href={link || '#'}>
			<a target={target}>{name}</a>
		</Link>
	);
};
