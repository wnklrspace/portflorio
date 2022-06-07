import styles from './styles.module.scss';

interface Props {
	// children: Object;
	name?: string;
}

export const Pill: React.FunctionComponent<Props> = ({ name }) => {
	return <div className={styles.pill}>{name}</div>;
};
