import Head from 'next/head'

interface Props {
  title?: string,
  desc?: string,
  urlPath?: string,
  socialImage?: string,
}

export const SeoMeta: React.FunctionComponent<Props> = (props) => {

  const {
    title,
    desc,
    urlPath,
    socialImage
  } = props;

  const mainUrl = 'https://portflorio.com/';
  const mainTitle = 'Florian Winkler ';
  const author = 'Florian Winkler';

  return (
    <>
    <Head>
      <title>{ mainTitle }{ title }</title>
      <meta
        name='description'
        content={ desc }
      />
      <link
        rel='canonical'
        href={ `${ mainUrl }${ urlPath }`  }
      />
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='initial-scale=1.0, width=device-width'
      />
      <meta
        name='author'
        content={ author }
      />
      <link
        rel='icon'
        href='/favicon.ico'
      />
      <link
        rel='icon'
        type='image/png'
        href='/favicon.ico'
      />
      <link
        rel='apple-touch-icon'
        href='/favicon.ico'
      />

      {/* og */}
      <meta
        property='og:type'
        content='website'
      />
      <meta
        name='og:title'
        property='og:title'
        content={ `${ mainTitle }${ title }`  }
      />
      <meta
        name='og:description'
        property='og:description'
        content={ desc }
      />
      <meta
        property='og:site_name'
        content=''
      />
      <meta
        property='og:url'
        content={ `${ mainUrl }${ urlPath }` }
      />
      <meta
        property='og:image'
        content={ socialImage }
      />

      {/* twitter */}
      <meta
        name='twitter:card'
        content='summary'
      />
      <meta
        name='twitter:title'
        content={ `${ mainTitle }${ title }`  }
      />
      <meta
        name='twitter:description'
        content={ desc }
      />
      <meta
        name='twitter:site'
        content=''
      />
      <meta
        name='twitter:creator'
        content={ author }
      />
      <meta
        name='twitter:image'
        content={ socialImage }
      />
    </Head>
    </>
  )
}
