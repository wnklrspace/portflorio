import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme';
import layout from './styles.module.scss';

interface Props {
	children?: any;
	hasTop?: boolean;
	hasBottom?: boolean;
	firstOfPage?: boolean;
	hasBorderBottom?: boolean;
}

export const Section: React.FunctionComponent<Props> = ({
	children,
	hasTop = false,
	firstOfPage = false,
	hasBottom = true,
	hasBorderBottom = false,
}) => {
	const { theme } = useContext(ThemeContext);
	const sectionClass = classNames(layout.section, {
		[layout['section--t']]: hasTop,
		[layout['section--first']]: firstOfPage,
		[layout['section--nb']]: !hasBottom,
		[layout['section--bb']]: hasBorderBottom,
		[layout['section--bb--dark']]: theme === 'dark',
		[layout['section--bb--light']]: theme === 'light',
	});

	return <section className={sectionClass}>{children}</section>;
};
