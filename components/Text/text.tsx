import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './text.module.scss';

interface TextProps {
	type: 'h1' | 'h2' | 'h3' | 'p' | 'span';
	size: 'xxl' | 'xl' | 'l' | 'm' | 's';
	weight?: 'bold' | 'regular' | 'light';
	transform?: 'lowercase' | 'uppercase';
	alignText?: 'left' | 'center' | 'right';
	marginBottom?: boolean;
	underline?: boolean;
	italic?: boolean;
	children: React.ReactNode;
}

export const Text: FC<TextProps> = ({
	transform,
	type,
	size,
	weight = 'regular',
	alignText,
	underline = false,
	italic = false,
	marginBottom = false,
	children,
}) => {
	const textStylings = classNames({
		// size
		[styles['xxl']]: size === 'xxl',
		[styles['xl']]: size === 'xl',
		[styles['l']]: size === 'l',
		[styles['m']]: size === 'm',
		[styles['s']]: size === 's',
		// weight
		[styles['bold']]: weight === 'bold',
		[styles['regular']]: weight === 'regular',
		[styles['light']]: weight === 'light',
		// transform
		[styles['uppercase']]: transform === 'uppercase',
		[styles['lowercase']]: transform === 'lowercase',
		[styles['underline']]: underline,
		[styles['italic']]: italic,
		// align text
		[styles['left']]: alignText === 'left',
		[styles['right']]: alignText === 'right',
		[styles['center']]: alignText === 'center',
		// space
		[styles['mb']]: marginBottom,
	});

	return (
		<>
			{type === 'h1' && <h1 className={textStylings}>{children}</h1>}
			{type === 'h2' && <h2 className={textStylings}>{children}</h2>}
			{type === 'h3' && <h3 className={textStylings}>{children}</h3>}
			{type === 'p' && <p className={textStylings}>{children}</p>}
			{type === 'span' && <span className={textStylings}>{children}</span>}
		</>
	);
};
