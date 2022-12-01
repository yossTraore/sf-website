import { useMediaQuery } from '@studio-freight/hamo'
import cn from 'clsx'
import { Clock } from 'components/clock'
import { Link } from 'components/link'
import { Marquee } from 'components/marquee'
import s from './footer.module.scss'

export function Footer() {
  const isMobile = useMediaQuery('(max-width: 800px)')

  return (
    <footer className={cn(s.footer, 'layout-grid')}>
      <Marquee className={s.column}>
        <p className="p">Built on Principle — ANTI-AGENCY &nbsp;</p>
      </Marquee>
      <ul className={s.column}>
        <li>
          <Link
            className="p decorate"
            href="https://www.instagram.com/studio.freight/"
          >
            Instagram
          </Link>
        </li>
        <li>
          <Link className="p decorate" href="https://twitter.com/studiofreight">
            Twitter
          </Link>
        </li>
      </ul>
      <ul className={s.column}>
        <li>
          <Link className="p decorate" href="https://vimeo.com/studiofreight">
            Vimeo
          </Link>
        </li>
        <li>
          <Link
            className="p decorate"
            href="https://www.awwwards.com/studiofreight/"
          >
            Awwwards
          </Link>
        </li>
      </ul>
      <ul className={s.column}>
        <li>
          <Link className="p decorate" href="https://lenis.studiofreight.com">
            Lenis
          </Link>
        </li>
        <li>
          <Link
            className="p decorate"
            href="https://www.linkedin.com/company/studio-freight/"
          >
            LinkedIn
          </Link>
        </li>
      </ul>
      <ul className={s.column}>
        <li>
          <Link className="p decorate" href="tel:+13802389363">
            {isMobile === false && 'P:'} +1.380.238.9363
          </Link>
        </li>
        <li>
          <Link className="p decorate" href="mailto:hello@studiofreight.com">
            {isMobile === false && 'E:'} HELLO@STUDIOFREIGHT.COM
          </Link>
        </li>
      </ul>
      <ul className={s.column}>
        <li>
          <Clock />
        </li>
        <li className="p">&copy; {new Date().getFullYear()}</li>
      </ul>
    </footer>
  )
}
