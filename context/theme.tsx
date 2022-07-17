import { createContext } from 'react';

export type ThemeContextProps = {
	theme: 'light' | 'dark';
	setTheme: (arg: 'light' | 'dark') => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
	theme: 'dark',
	setTheme: () => {
		'dark';
	},
});
