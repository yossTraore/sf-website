import cn from 'clsx'
import { Marquee } from 'components/marquee'
import { usePageAppear } from 'hooks/use-page-appear'
import { pad } from 'lib/maths'
import dynamic from 'next/dynamic'
import s from './header.module.scss'

const Separator = dynamic(() => import('icons/separator.svg'), { ssr: false })

export const Header = ({ title, principles = [] }) => {
  const visible = usePageAppear()
  return (
    <header className={cn(s.container, 'layout-block')}>
      <div className={cn(s.top, 'layout-grid')}>
        <Marquee className={s.marquee} duration={20}>
          {principles.map((principle, i) => (
            <p key={i} className={cn('p', s.principle)}>
              &nbsp;<span>{pad(i + 1)}</span>
              &nbsp;{principle}&nbsp;//
            </p>
          ))}
        </Marquee>
      </div>
      <Separator />
      <div className={cn(s.header, visible && s.show, 'layout-grid')}>
        <h1 className={cn('h1', s.title)}>{title}</h1>
      </div>
      <Separator />
    </header>
  )
}
