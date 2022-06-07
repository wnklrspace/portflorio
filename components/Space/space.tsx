import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './space.module.scss';

interface SpaceProps {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Space: FC<SpaceProps> = ({ size }) => {
	const spaceStyling = classNames(styles.space, {
		[styles['space--xs']]: size === 'xs',
		[styles['space--sm']]: size === 'sm',
		[styles['space--md']]: size === 'md',
		[styles['space--lg']]: size === 'lg',
		[styles['space--xl']]: size === 'xl',
	});

	return <div className={spaceStyling}></div>;
};
