import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ListViewContext } from '../context/list-view';
import { PageShadow } from '../components/PageShadow/pageShadow';
import { ThemeContext } from '../context/theme';

// bootstrap grid styles
import '../node_modules/bootstrap/scss/bootstrap-grid.scss';

// swiper styles
import '../node_modules/swiper/swiper.scss';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
	const [listView, setListView] = useState<string>('list');
	const [theme, setTheme] = useState<'light' | 'dark'>('dark');

	useEffect(() => {
		if (theme === 'dark') {
			document.body.classList.remove('light-theme');
			document.body.classList.add('dark-theme');
		} else {
			document.body.classList.remove('dark-theme');
			document.body.classList.add('light-theme');
		}
	}, [theme, setTheme]);

	// useEffect(() => {
	// 	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

	// 	if (prefersDarkScheme.matches) {
	// 		document.body.classList.remove('light-theme');
	// 		document.body.classList.add('dark-theme');
	// 	} else {
	// 		document.body.classList.remove('dark-theme');
	// 		document.body.classList.add('light-theme');
	// 	}
	// }, []);

	return (
		<ListViewContext.Provider
			value={{
				listView,
				setListView: setListView,
			}}>
			<ThemeContext.Provider
				value={{
					theme,
					setTheme: setTheme,
				}}>
				<PageShadow />
				<Component {...pageProps} />
			</ThemeContext.Provider>
		</ListViewContext.Provider>
	);
}
export default MyApp;
