import Warp from 'assets/warp.json'

import { useMediaQuery } from '@studio-freight/hamo'
import cn from 'clsx'
import { Link } from 'components/link'
import { Lottie } from 'components/lottie'
import { usePageAppear } from 'hooks/use-page-appear'
import s from './header.module.scss'

export const Header = ({ title, description }) => {
  const visible = usePageAppear()
  const isMobile = useMediaQuery('(max-width: 800px)')
  return (
    <header className={cn(s.header, visible && s.show, 'layout-grid')}>
      <h1 className={cn('h1', s.title)}>{title}</h1>
      <h2 className={cn('h2', s.description)}>
        {!isMobile ? (
          description
        ) : (
          <>
            <span className={s.spacer} />
            {description}
          </>
        )}
      </h2>
      <div className={s.gif_wrapper}>
        <Link href="https://darkroom.studiofreight.com" aria-label="Darkroom">
          <Lottie className={s.lottie} animation={Warp} speed={0.7} loop />
        </Link>
      </div>
    </header>
  )
}
