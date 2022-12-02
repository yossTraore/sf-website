import { useMediaQuery, useRect } from '@studio-freight/hamo'
import cn from 'clsx'
import { Image } from 'components/image'
import { Link } from 'components/link'

import { fetchCmsQuery } from 'contentful/api'
import { homePageQuery } from 'contentful/queries/home.graphql'
import { Layout } from 'layouts/default'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import s from './home.module.scss'

const Arrow = dynamic(() => import('icons/arrow.svg'), { ssr: false })
const Slider = dynamic(() => import('components/slider'), { ssr: false })

export default function Home({ data }) {
  const isMobile = useMediaQuery('(max-width: 800px)')
  const [portrait, setPortrait] = useState(false)
  const [selectedProject, setSelectedProject] = useState(0)
  const [setRef, rect] = useRect()
  let timer = 0
  const TIMEOUT = 500

  const mouseEnter = (projectId) => {
    timer = setTimeout(() => {
      setSelectedProject(projectId)
    }, TIMEOUT)
  }

  const mouseLeave = () => {
    clearTimeout(timer)
  }

  useEffect(() => {
    setPortrait(rect.width < 800)
  }, [rect])

  return (
    <Layout theme="dark" data={data}>
      {isMobile === true ? (
        <section className={s.sliders}>
          {data.projects.items.map((project, i) => (
            <div key={i} className={s['slider__wrapper']}>
              <Slider>
                {project.imgs.items.map((img, idx) => {
                  return (
                    <div className={s['slide']} key={`slide-item-${idx}`}>
                      <div className={s['slide-inner']}>
                        <Image
                          className={s['slide-image']}
                          src={img.url}
                          alt=""
                          priority={i === 0}
                          height={294}
                          width={165}
                          sizes="(max-width: 800px) 50vw"
                        />
                      </div>
                    </div>
                  )
                })}
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
            {data.projects.items
              .slice(0, data.projects.items.length / 2)
              .map((project, i) => (
                <li
                  className={cn('p-l', selectedProject === i && s.active)}
                  key={i}
                  onPointerEnter={() => mouseEnter(i)}
                  onPointerLeave={() => mouseLeave()}
                >
                  <p className={s.title}>{project.title}</p>
                  <Link className={cn(s.link, 'decorate')} href={project.url}>
                    Visit Site <Arrow />
                  </Link>
                </li>
              ))}
          </ul>
          <ul className={s.list}>
            {data.projects.items
              .slice(-(data.projects.items.length / 2))
              .map((project, i) => (
                <li
                  className={cn('p-l', selectedProject === i + 4 && s.active)}
                  key={i}
                  onPointerEnter={() => mouseEnter(i + 4)}
                  onPointerLeave={() => mouseLeave()}
                >
                  <p className={s.title}>{project.title}</p>
                  <Link className={cn(s.link, 'decorate')} href={project.url}>
                    Visit Site <Arrow />
                  </Link>
                </li>
              ))}
          </ul>
          <div
            className={s.wrapper}
            ref={(node) => {
              setRef(node)
            }}
          />
          <div className={cn(s.image, portrait && s.portrait)}>
            {data.projects.items.map((project, i) => (
              <iframe
                loading={i !== 0 || isMobile === true ? 'lazy' : 'eager'}
                key={i}
                src={project.url}
                allowFullScreen
                frameBorder="0"
                className={cn(selectedProject === i && s.visible)}
              />
            ))}
          </div>
        </section>
      )}
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const [{ studioFreightHome }] = await Promise.all([
    fetchCmsQuery(homePageQuery, {
      preview,
      id: '5pTuQpYGzcynKXxq5QOn0F',
    }),
  ])

  return {
    props: {
      id: 'home',
      data: studioFreightHome,
    }, // will be passed to the page component as props
  }
}
