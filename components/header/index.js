import { useMediaQuery } from '@studio-freight/hamo'
import cn from 'clsx'
import { Image } from 'components/image'
import { Link } from 'components/link'
import s from './header.module.scss'

export const Header = () => {
  const isMobile = useMediaQuery('(max-width: 800px)')
  return (
    <header className={cn(s.header, 'layout-grid')}>
      <h1 className={cn('h1', s.title)}>Studio Freight</h1>
      <h2 className={cn('h2', s.description)}>
        {isMobile === true && <span className={s.spacer} />}An independent
        branding and digital design studio {isMobile === false && <br />}
        BUILT ON PRINCIPLE in Columbus OH, AND NEW YORK, NY.
      </h2>
      <div className={s.gif_wrapper}>
        <Link href="https://darkroom.studiofreight.com" aria-label="Darkroom">
          <Image
            className={s.gif}
            src="/warp.gif"
            alt=""
            width={438}
            height={73}
          />
        </Link>
      </div>
    </header>
  )
}
