import { useMediaQuery } from '@studio-freight/hamo'
import cn from 'clsx'
import { Button } from 'components/button'
import { Link } from 'components/link'
import { Marquee } from 'components/marquee'
import { useStore } from 'lib/store'
// import { usePageAppear } from 'hooks/use-page-appear'
import { ContactForm } from 'components/header/contact-form'
import { Separator } from 'components/separator'
import { pad } from 'lib/maths'
import dynamic from 'next/dynamic'
import shallow from 'zustand/shallow'
import s from './header.module.scss'

// const Separator = dynamic(() => import('icons/separator.svg'), { ssr: false })

const SFDR = dynamic(() => import('icons/sfdr.svg'), { ssr: false })
const Stard = dynamic(() => import('icons/stard.svg'), { ssr: false })
const Monogram = dynamic(() => import('icons/sf-monogram.svg'), { ssr: false })
const StarDuotone = dynamic(() => import('icons/star-duotone.svg'), {
  ssr: false,
})

export const Header = ({ title, principles = [], contact }) => {
  const isMobile = useMediaQuery('(max-width: 800px)')
  // const visible = usePageAppear()
  const [contactIsOpen, setContactIsOpen] = useStore(
    (state) => [state.contactIsOpen, state.setContactIsOpen],
    shallow
  )

  return (
    <header className={cn(s.container, 'layout-block')}>
      <div className={cn(s.top, 'layout-grid')}>
        <div className={s.eggs}>
          <Link
            name="darkroom website"
            className={s.egg}
            href="https://darkroom.studiofreight.com"
          >
            <SFDR />
          </Link>
          <Link
            name="easter egg links"
            className={s.egg}
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            <Stard />
          </Link>
          <Link
            name="easter egg links"
            className={s.egg}
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            <Monogram />
          </Link>
          <Link
            name="easter egg links"
            className={s.egg}
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            <StarDuotone />
          </Link>
        </div>
        {isMobile === false && (
          <Marquee className={s.marquee} duration={20}>
            {principles.map((principle, i) => (
              <p key={i} className={cn('p', s.principle)}>
                &nbsp;<span>{pad(i + 1)}</span>
                &nbsp;{principle}&nbsp;//
              </p>
            ))}
          </Marquee>
        )}
        <Button
          className={s.cta}
          onClick={() => {
            setContactIsOpen(!contactIsOpen)
          }}
        >
          Contact
        </Button>
      </div>
      <Separator />
      <div className={cn(s.header, 'layout-grid')}>
        <h1 className={cn('h1', s.title)}>{title}</h1>
      </div>
      <Separator />

      {isMobile === true && (
        <Marquee className={s.marquee} duration={20}>
          {principles.map((principle, i) => (
            <p key={i} className={cn('p', s.principle)}>
              &nbsp;<span>{pad(i + 1)}</span>
              &nbsp;{principle}&nbsp;//
            </p>
          ))}
        </Marquee>
      )}
      <ContactForm data={contact} />
    </header>
  )
}
