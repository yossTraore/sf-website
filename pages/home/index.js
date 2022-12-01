import { useMediaQuery } from '@studio-freight/hamo'
import cn from 'clsx'
import { Image } from 'components/image'
import { Link } from 'components/link'
import { Slider } from 'components/slider'
import { Layout } from 'layouts/default'
import { projects } from 'lib/data'
import dynamic from 'next/dynamic'
import s from './home.module.scss'

const Arrow = dynamic(() => import('icons/arrow.svg'), { ssr: false })

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 800px)')

  return (
    <Layout theme="dark">
      {isMobile === true ? (
        <section className={s.sliders}>
          {projects.map((project, i) => (
            <div key={i} className={s['slider__wrapper']}>
              <Slider
                emblaApi={{
                  autoplay: {
                    delay: 2000 * (i + 1.2),
                  },
                }}
              >
                {({ emblaRef }) => {
                  return (
                    <Slider.Slides className={s.slider} ref={emblaRef}>
                      {project.imgs.map((img, idx) => {
                        const aux = img.split('/')
                        aux[aux.length - 1] = `mobile-${aux[aux.length - 1]}`
                        const source = aux.join('/')

                        return (
                          <div className={s['slide']} key={`slide-item-${idx}`}>
                            <div className={s['slide-inner']}>
                              <Image
                                className={s['slide-image']}
                                src={source}
                                alt=""
                                layout="fill"
                                priority
                                sizes="(min-width: 75em) 33vw,
                                    (min-width: 48em) 50vw,
                                    100vw"
                              />
                            </div>
                          </div>
                        )
                      })}
                    </Slider.Slides>
                  )
                }}
              </Slider>
              <Link href={project.url}>
                <h2 className={cn('p-l', s.title)}>{project.title}</h2>
                <h3 className={cn('p-l', s.link)}>
                  Visit Site <Arrow />
                </h3>
              </Link>
            </div>
          ))}
        </section>
      ) : (
        <section className={cn(s.content, 'layout-grid')}>
          <ul className={s.list}>
            <li className="p-l">
              <p className={s.title}>Fresh Prince</p>
              <Link
                className={cn(s.link, 'decorate')}
                href="https://lenis.studiofreight.com"
              >
                Visit Site <Arrow />
              </Link>
            </li>
            <li className="p-l">
              <p className={s.title}>Fresh Prince</p>
              <Link
                className={cn(s.link, 'decorate')}
                href="https://lenis.studiofreight.com"
              >
                Visit Site <Arrow />
              </Link>
            </li>
            <li className="p-l">
              <p className={s.title}>Fresh Prince</p>
              <Link
                className={cn(s.link, 'decorate')}
                href="https://lenis.studiofreight.com"
              >
                Visit Site <Arrow />
              </Link>
            </li>
            <li className="p-l">
              <p className={s.title}>Fresh Prince</p>
              <Link
                className={cn(s.link, 'decorate')}
                href="https://lenis.studiofreight.com"
              >
                Visit Site <Arrow />
              </Link>
            </li>
          </ul>
          <ul className={s.list}>
            <li className="p-l">
              <p className={s.title}>Fresh Prince</p>
              <Link
                className={cn(s.link, 'decorate')}
                href="https://lenis.studiofreight.com"
              >
                Visit Site <Arrow />
              </Link>
            </li>
            <li className="p-l">
              <p className={s.title}>Fresh Prince</p>
              <Link
                className={cn(s.link, 'decorate')}
                href="https://lenis.studiofreight.com"
              >
                Visit Site <Arrow />
              </Link>
            </li>
            <li className="p-l">
              <p className={s.title}>Fresh Prince</p>
              <Link
                className={cn(s.link, 'decorate')}
                href="https://lenis.studiofreight.com"
              >
                Visit Site <Arrow />
              </Link>
            </li>
            <li className="p-l">
              <p className={s.title}>Fresh Prince</p>
              <Link
                className={cn(s.link, 'decorate')}
                href="https://lenis.studiofreight.com"
              >
                Visit Site <Arrow />
              </Link>
            </li>
          </ul>
          <div className={s.image}>
            <Image src="/img/bad-boys/1.jpg" layout="fill" alt="BBoys" />
          </div>
        </section>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      id: 'home',
    }, // will be passed to the page component as props
  }
}
