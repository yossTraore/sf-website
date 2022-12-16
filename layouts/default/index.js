import cn from 'clsx'
// import { useIsTouchDevice } from '@studio-freight/hamo'
// import { Cursor } from 'components/cursor'
import { CustomHead } from 'components/custom-head'
import { Footer } from 'components/footer'
import { Header } from 'components/header'
import s from './layout.module.scss'

export function Layout({
  seo = {
    title: 'Studio Freight - Built on Principle',
    description:
      'Studio Freight is an independent creative studio built on principle.',
    image: { url: '/og.jpg' },
    keywords: [
      'freight',
      'studio',
      'UX',
      'UI',
      'userexperience',
      'webdesign',
      'webdeveloper',
      'design',
      'codedesign',
      'code',
      'hashtag',
      'development',
      'website',
      'websitedevelopment',
      'webservices',
      'art direction',
      'strategy',
      'web',
      'murals',
      'illustration',
      'photography',
      'signage',
      'video',
    ],
  },
  children,
  theme = 'dark',
  className,
  principles,
  footerLinks,
  studioInfo,
  contactData,
}) {
  // const isTouchDevice = useIsTouchDevice()
  return (
    <>
      <CustomHead {...seo} />
      <div className={cn(`theme-${theme}`, s.layout, className)}>
        {/* {isTouchDevice === false && <Cursor />} */}
        <Header
          title="STUDIO FREIGHT"
          principles={principles}
          contact={contactData}
        />
        <main className={s.main}>{children}</main>
        <Footer links={footerLinks} studioInfo={studioInfo} />
      </div>
    </>
  )
}
