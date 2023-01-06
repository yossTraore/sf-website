import { NextSeo } from 'next-seo'
import NextHead from 'next/head'

export function CustomHead({ title = '', description, keywords }) {
  return (
    <>
      <NextHead>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <meta
          name="robots"
          content={
            process.env.NODE_ENV !== 'development'
              ? 'index,follow'
              : 'noindex,nofollow'
          }
        />
        <meta
          name="googlebot"
          content={
            process.env.NODE_ENV !== 'development'
              ? 'index,follow'
              : 'noindex,nofollow'
          }
        />

        <meta
          name="keywords"
          content={keywords && keywords.length ? keywords.join(',') : keywords}
        />
        <meta name="author" content="Studio Freight" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
        <meta httpEquiv="Window-Target" content="_value" />
        <meta name="geo.region" content="US" />

        {/* START FAVICON */}
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00FF6A" />
        <meta name="msapplication-TileColor" content="#00FF6A" />
        <meta name="theme-color" content="#00FF6A" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:image" content="https://studiofreight.com/og.jpg" />

        {/* END FAVICON */}

        <title>{title}</title>
      </NextHead>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: 'website',
          locale: 'en_US',
          images: [
            {
              url: 'https://studiofreight.com/og.jpg',
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          site_name: '',
        }}
        twitter={{
          handle: '@studiofreight',
          cardType: 'summary_large_image',
        }}
      />
    </>
  )
}
