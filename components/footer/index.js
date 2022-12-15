import { useMediaQuery } from '@studio-freight/hamo'
import cn from 'clsx'
import { Link } from 'components/link'
import { Separator } from 'components/separator'
import s from './footer.module.scss'

export function Footer({ className, style, links, studioInfo }) {
  const isMobile = useMediaQuery('(max-width: 800px)')

  return (
    <footer className={cn(s.container, 'layout-block')}>
      <Separator />
      <div className={cn(s.footer, 'layout-grid', className)} style={style}>
        <p className={cn(s.column, 'p-s text-muted')}>Built on Principle</p>
        <ul className={s.column}>
          {links.slice(0, 2).map((link, i) => (
            <li key={i}>
              <Link className="p-s decorate" href={link.url}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={s.column}>
          {links.slice(2, 4).map((link, i) => (
            <li key={i}>
              <Link className="p-s decorate" href={link.url}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={s.column}>
          {links.slice(4, 6).map((link, i) => (
            <li key={i}>
              <Link className="p-s decorate" href={link.url}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={s.column}>
          <li>
            <Link className="p-s decorate" href={`tel:${studioInfo.phone}`}>
              {isMobile === false && 'P:'} {studioInfo.phone}
            </Link>
          </li>
          <li>
            <Link className="p-s decorate" href={`mailto:${studioInfo.email}`}>
              {isMobile === false && 'E:'} {studioInfo.email}
            </Link>
          </li>
        </ul>
        <ul className={s.column}>
          <li className="p-s text-muted">&copy; {new Date().getFullYear()}</li>
        </ul>
      </div>
    </footer>
  )
}
