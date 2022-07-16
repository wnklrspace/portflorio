import { useState } from 'react';
import type { AppProps } from 'next/app';
import { ListViewContext } from '../context/list-view';
import { PageShadow } from '../components/PageShadow/pageShadow';

// bootstrap grid styles
import '../node_modules/bootstrap/scss/bootstrap-grid.scss';

// swiper styles
import '../node_modules/swiper/swiper.scss';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
	const [listView, setListView] = useState<string>('list');
	return (
		<ListViewContext.Provider
			value={{
				listView,
				setListView: setListView,
			}}>
			<PageShadow />
			<Component {...pageProps} />
		</ListViewContext.Provider>
	);
}
export default MyApp;
