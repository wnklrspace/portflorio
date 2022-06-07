import React, { useState } from 'react';
import { Navigation } from '../Navigation/';
import styles from './styles.module.scss';

interface Props {
	backgroundColor?: string;
	fontColor: 'light' | 'dark';
}

export const Header: React.FunctionComponent<Props> = (props) => {
	const { backgroundColor, fontColor } = props;

	return (
		<>
			<header
				style={{ backgroundColor: backgroundColor, color: fontColor }}
				className={styles.header}>
				<Navigation fontColor={fontColor} />
			</header>
		</>
	);
};
