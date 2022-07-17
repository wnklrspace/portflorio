import classNames from 'classnames';
import { FC, useContext } from 'react';
import { ThemeContext } from '../../context/theme';
import styles from './pageShadow.module.scss';

export const PageShadow: FC = () => {
	const { theme } = useContext(ThemeContext);
	const pageshadowStyling = classNames(styles['pageshadow'], {
		[styles['pageshadow--dark']]: theme === 'dark',
		[styles['pageshadow--light']]: theme === 'light',
	});
	return <div className={pageshadowStyling} />;
};
