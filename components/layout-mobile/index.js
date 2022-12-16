import cn from 'clsx'
import { Image } from 'components/image'
import { ProjectAccordion } from 'components/project-accordion'
import { renderer } from 'contentful/renderer'
import s from './layout-mobile.module.scss'

const LayoutMobile = ({ projects, studioFreight }) => {
  return (
    <div className={s.content}>
      <section className={s['hero-image']}>
        <Image
          src={'/mobile-temp-images/tetsuo.jpg'}
          alt={'tetsuo placeholder face'}
          width={375}
          height={340}
        />
      </section>
      <section className={cn(s.projects, 'layout-block')}>
        <ProjectAccordion data={projects.items} />
      </section>
      <section className={s.image}>
        <Image
          src={'/mobile-temp-images/sf-game-boy.png'}
          alt={'tetsuo placeholder face'}
          width={375}
          height={340}
        />
      </section>
      <section className={cn(s.about, 'layout-block')}>
        <p className={cn(s.title, 'p text-bold text-uppercase text-muted')}>
          About
        </p>
        <div className={s.description}>{renderer(studioFreight.about)}</div>
      </section>
    </div>
  )
}

export { LayoutMobile }
