import { Header } from '../Layout/';
import { Footer } from './footer';
import { LightSwitch } from '../Buttons';
import styles from './styles.module.scss';

interface Props {
	children: object;
	backgroundColor?: string;
	fontColor?: 'white' | 'black';
}

export const Layout: React.FunctionComponent<Props> = (props) => {
	const { children, backgroundColor, fontColor = 'white' } = props;

	return (
		<>
			<Header backgroundColor={backgroundColor} fontColor={fontColor} />
			<main
				style={{ backgroundColor: backgroundColor, color: fontColor }}
				className={styles.main}>
				{children}
			</main>
			<Footer backgroundColor={backgroundColor} fontColor={fontColor} />
		</>
	);
};
