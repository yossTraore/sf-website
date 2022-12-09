import cn from 'clsx'
import { Button } from 'components/button'
import { Link } from 'components/link'
import { Marquee } from 'components/marquee'
import { usePageAppear } from 'hooks/use-page-appear'
import { pad } from 'lib/maths'
import dynamic from 'next/dynamic'
import s from './header.module.scss'

const Separator = dynamic(() => import('icons/separator.svg'), { ssr: false })

const SFDR = dynamic(() => import('icons/sfdr.svg'), { ssr: false })
const Stard = dynamic(() => import('icons/stard.svg'), { ssr: false })
const Monogram = dynamic(() => import('icons/sf-monogram.svg'), { ssr: false })
const StarDuotone = dynamic(() => import('icons/star-duotone.svg'), {
  ssr: false,
})

export const Header = ({ title, principles = [] }) => {
  const visible = usePageAppear()
  return (
    <header className={cn(s.container, 'layout-block')}>
      <div className={cn(s.top, 'layout-grid')}>
        <div className={s.eggs}>
          <Link
            className={s.egg}
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            <SFDR />
          </Link>
          <Link
            className={s.egg}
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            <Stard />
          </Link>
          <Link
            className={s.egg}
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            <Monogram />
          </Link>
          <Link
            className={s.egg}
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            <StarDuotone />
          </Link>
        </div>
        <Marquee className={s.marquee} duration={20}>
          {principles.map((principle, i) => (
            <p key={i} className={cn('p', s.principle)}>
              &nbsp;<span>{pad(i + 1)}</span>
              &nbsp;{principle}&nbsp;//
            </p>
          ))}
        </Marquee>
        <Button className={s.cta}>Contact</Button>
      </div>
      <Separator />
      <div className={cn(s.header, visible && s.show, 'layout-grid')}>
        <h1 className={cn('h1', s.title)}>{title}</h1>
      </div>
      <Separator />
    </header>
  )
}
