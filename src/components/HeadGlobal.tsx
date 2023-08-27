import Head from 'next/head'
import { app } from 'appConfig'
import { useTheme } from 'next-themes'

export default function HeadGlobal() {
  const { resolvedTheme } = useTheme()
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta content="The Fry Heads NFT are perpetual charitable NFTs." name="description" />
      <meta content="The Fry Heads NFTs" property="og:title" />
      <meta content="The Fry Heads NFT are perpetual charitable NFTs." property="og:description" />
      <meta content="The Fry Heads NFTs" property="twitter:title" />
      <meta content="The Fry Heads NFT are perpetual charitable NFTs." property="twitter:description" />

      <meta name="apple-mobile-web-app-title" content={app.name} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="application-name" content={app.name} />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content={resolvedTheme === 'dark' ? app.themeColorDark : app.themeColor} />

      <link rel="apple-touch-icon" href={app.image} />
      <link rel="icon" type="image/png" sizes="512x512" href={app.image} />

      <link rel="icon" href={app.favicon} />

      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />

      <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" defer />
      <script src="/js/main.js" defer />

      {/* <script async>WebFont.load({  google: {    families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic","Inter:300,regular,500,600,800:cyrillic,latin"]  }});</script> */}
      {/* <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
          <script type="text/javascript">WebFont.load({  google: {    families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic","Inter:300,regular,500,600,800:cyrillic,latin"]  }});</script>
          <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
      */}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={app.title} />
      <meta property="og:description" content={app.description} />
      <meta property="og:site_name" content={app.name} />
      <meta property="og:url" content={app.url} />
      <meta property="og:image" content={app.image} />

      <meta name="description" content={app.description} />
      <meta name="keywords" content={app.keywords} />
      <title>{app.title}</title>
    </Head>
  )
}
