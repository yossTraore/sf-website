import { useDebug, useLayoutEffect } from '@studio-freight/hamo'
import { raf } from '@studio-freight/tempus'
import 'blaze-slider/dist/blaze.css'
import { PageTransition } from 'components/page-transition'
import { RealViewport } from 'components/real-viewport'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { GTM_ID } from 'lib/analytics'
import { useStore } from 'lib/store'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import { useEffect } from 'react'
import 'styles/global.scss'

gsap.registerPlugin(ScrollTrigger)

// merge rafs
gsap.ticker.lagSmoothing(0)
gsap.ticker.remove(gsap.updateRoot)
raf.add((time) => {
  gsap.updateRoot(time / 1000)
}, 0)

const Stats = dynamic(
  () => import('components/stats').then(({ Stats }) => Stats),
  { ssr: false }
)

const GridDebugger = dynamic(
  () =>
    import('components/grid-debugger').then(({ GridDebugger }) => GridDebugger),
  { ssr: false }
)

function MyApp({ Component, pageProps }) {
  const debug = useDebug()
  const lenis = useStore(({ lenis }) => lenis)
  const overflow = useStore(({ overflow }) => overflow)

  useEffect(() => {
    if (overflow) {
      lenis?.start()
      document.documentElement.style.removeProperty('overflow')
    } else {
      lenis?.stop()
      document.documentElement.style.setProperty('overflow', 'hidden')
    }
  }, [lenis, overflow])

  useLayoutEffect(() => {
    if (lenis) ScrollTrigger.refresh()
  }, [lenis])

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  ScrollTrigger.defaults({ markers: process.env.NODE_ENV === 'development' })

  return (
    <>
      {debug && (
        <>
          <GridDebugger />
          <Stats />
        </>
      )}
      {/* Google Tag Manager - Global base code */}
      {process.env.NODE_ENV !== 'development' && (
        <>
          <Script
            async
            strategy="worker"
            src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
          />
          <Script
            id="gtm-base"
            strategy="worker"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GTM_ID}');`,
            }}
          />
        </>
      )}

      {/* <!-- Hubspot script loader --> */}
      <Script
        strategy="worker"
        type="text/javascript"
        id="hs-forms-loader"
        src="//js.hsforms.net/forms/embed/v2.js"
      />
      <Script
        strategy="worker"
        type="text/javascript"
        id="hs-script-loader"
        src="//js.hs-scripts.com/4828818.js"
      />
      {/* <!-- End Hubspot script loader --> */}

      <PageTransition />
      <RealViewport />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
