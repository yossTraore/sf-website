import { useIsTouchDevice } from '@studio-freight/hamo'
import cn from 'clsx'
import { Cursor } from 'components/cursor'
import { CustomHead } from 'components/custom-head'
import { Footer } from 'components/footer'
import { Header } from 'components/header'
import s from './layout.module.scss'

export function Layout({
  seo = {
    title: 'Studio Freight - Built on Principle',
    description:
      'A design studio built on principle. We grow brands by making them easy to understand and impossible to ignore. Our creative experts support with branding, art direction, strategy, web design, web development, packaging, copywriting, lettering, illustration, photography, murals, signage, video, and beyond.',
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
  theme = 'light',
  className,
  data,
}) {
  const isTouchDevice = useIsTouchDevice()

  return (
    <>
      <CustomHead {...seo} />
      <div className={cn(`theme-${theme}`, s.layout, className)}>
        {isTouchDevice === false && <Cursor />}
        <Header title={data.title} description={data.heroDescription} />
        <main className={s.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}
