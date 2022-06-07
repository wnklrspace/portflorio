import { createContext } from 'react';

export type ListViewProps = {
	listView: string;
	setListView: (arg: string) => void;
};

export const ListViewContext = createContext<ListViewProps>({
	listView: 'grid',
	setListView: () => {
		'grid';
	},
});
