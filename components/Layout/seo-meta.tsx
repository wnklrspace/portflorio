import Head from 'next/head';

interface Props {
	title?: string;
	desc?: string;
	urlPath?: string;
	socialImage?: string;
}

export const SeoMeta: React.FunctionComponent<Props> = (props) => {
	const { title, desc, urlPath, socialImage } = props;

	const mainUrl = 'https://portflorio.com/';
	const mainTitle = 'Florian Winkler ';
	const author = 'Florian Winkler';

	return (
		<Head>
			<title>
				{mainTitle}
				{title}
			</title>
			<meta name='description' content={desc} />
			<link rel='canonical' href={`${mainUrl}${urlPath}`} />
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<meta name='author' content={author} />
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/apple-touch-icon.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/favicon-16x16.png'
			/>
			<link rel='manifest' href='/site.webmanifest' />
			<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
			<meta name='msapplication-TileColor' content='#da532c' />
			<meta name='theme-color' content='#ffffff' />

			{/* og */}
			<meta property='og:type' content='website' />
			<meta
				name='og:title'
				property='og:title'
				content={`${mainTitle}${title}`}
			/>
			<meta name='og:description' property='og:description' content={desc} />
			<meta property='og:site_name' content='' />
			<meta property='og:url' content={`${mainUrl}${urlPath}`} />
			<meta property='og:image' content={socialImage} />

			{/* twitter */}
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:title' content={`${mainTitle}${title}`} />
			<meta name='twitter:description' content={desc} />
			<meta name='twitter:site' content='' />
			<meta name='twitter:creator' content={author} />
			<meta name='twitter:image' content={socialImage} />
		</Head>
	);
};
