import * as RadixAccordion from '@radix-ui/react-accordion'
import cn from 'clsx'
import { ComposableImage } from 'components/composable-image'
import { Link } from 'components/link'
import { ScrollableBox } from 'components/scrollable-box'
import Slider from 'components/slider'
import { slugify } from 'lib/slugify'
import dynamic from 'next/dynamic'
import s from './project-accordion.module.scss'

const Arrow = dynamic(() => import('icons/arrow.svg'), { ssr: false })

export const ProjectAccordion = ({ data }) => {
  return (
    <div className={s.accordion}>
      <p className="p text-bold text-uppercase text-muted">Projects</p>
      <ScrollableBox className={s.scrollable} shadow={false}>
        <RadixAccordion.Root
          type="multiple"
          className={s['accordion-root']}
          collapsible
        >
          {data.map((item, i) => (
            <RadixAccordion.Item
              value={slugify(item.name)}
              key={i}
              className={s.item}
            >
              <RadixAccordion.Header>
                <RadixAccordion.Trigger className={s.trigger}>
                  <p>{item.name}</p>
                  <span className="p-s">{item.industry}</span>
                  <svg
                    className={s.icon}
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 1H1V11" stroke="var(--green)" />
                    <path d="M15 1H25V11" stroke="var(--green)" />
                    <path d="M15 25L25 25L25 15" stroke="var(--green)" />
                    <path d="M11 25L1 25L1 15" stroke="var(--green)" />
                    <g className={s.x}>
                      <path
                        d="M8.75684 8.75745L17.2421 17.2427"
                        stroke="var(--green)"
                      />
                      <path
                        d="M17.2422 8.75745L8.75691 17.2427"
                        stroke="var(--green)"
                      />
                    </g>
                  </svg>
                </RadixAccordion.Trigger>
              </RadixAccordion.Header>
              <RadixAccordion.Content className={s['accordion-content']}>
                <Slider className={s.slides}>
                  {item.assetsCollection.items.map((asset, i) => (
                    <ComposableImage
                      sources={asset.imagesCollection}
                      key={i}
                      width={404}
                      height={238}
                    />
                  ))}
                </Slider>
                <Link href={item?.link} className={cn('p-s', s.external)}>
                  site
                  <Arrow className={s.arrow} />
                </Link>
                {item.description && (
                  <p className={cn(s.description, 'p')}>{item.description}</p>
                )}
                {item.testimonial && (
                  <div className={s.testimonial}>
                    <p
                      className={cn(
                        s.title,
                        'p text-muted text-uppercase text-bold'
                      )}
                    >
                      Testimonial
                    </p>
                    <p className="p">{item.testimonial}</p>
                  </div>
                )}

                <div className={s.info}>
                  {item?.services?.length > 0 && (
                    <div className={s.services}>
                      <p
                        className={cn(
                          s.title,
                          'p text-muted text-uppercase text-bold'
                        )}
                      >
                        Services
                      </p>
                      <p className="p-s text-uppercase">
                        {item?.services?.map((service, i) =>
                          i === item.services.length - 1
                            ? service
                            : `${service}, `
                        )}
                      </p>
                    </div>
                  )}
                  {item?.stack?.length > 0 && (
                    <div className={s.stack}>
                      <p
                        className={cn(
                          s.title,
                          'p text-muted text-uppercase text-bold'
                        )}
                      >
                        Stack
                      </p>
                      <p className="p-s text-uppercase">
                        {item?.stack?.map((stack, i) =>
                          i === item.stack.length - 1 ? stack : `${stack}, `
                        )}
                      </p>
                    </div>
                  )}
                </div>
              </RadixAccordion.Content>
            </RadixAccordion.Item>
          ))}
        </RadixAccordion.Root>
      </ScrollableBox>
    </div>
  )
}
