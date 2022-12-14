import * as Accordion from '@radix-ui/react-accordion'
import { useLayoutEffect } from '@studio-freight/hamo'
import cn from 'clsx'

import { Button } from 'components/button'
import { Hubspot } from 'components/hubspot'
import { ScrollableBox } from 'components/scrollable-box'
import { renderer } from 'contentful/renderer'
import { slugify } from 'lib/slugify'
import { useStore } from 'lib/store'
import dynamic from 'next/dynamic'
import shallow from 'zustand/shallow'
import s from './contact-form.module.scss'

const SeparatorSmall = dynamic(() => import('icons/separator-small.svg'), {
  ssr: false,
})

export function ContactForm({ data }) {
  const [contactIsOpen, setContactIsOpen] = useStore(
    (state) => [state.contactIsOpen, state.setContactIsOpen],
    shallow
  )

  useLayoutEffect(() => {
    const escFunction = (event) => {
      if (event.keyCode === 27) {
        setContactIsOpen(false)
      }
    }

    document.addEventListener('keydown', escFunction, false)
    return () => document.removeEventListener('keydown', escFunction, false)
  }, [])

  return (
    <div className={cn(s.container, contactIsOpen && s.open)}>
      <div className={cn(s.wrapper, contactIsOpen && s.open)}>
        <div className={s.heading}>
          <Button className={s.cta} onClick={() => setContactIsOpen(false)}>
            close
          </Button>
          <SeparatorSmall className={s.separator} />
        </div>
        <ScrollableBox className={s.scrollable} shadow={false}>
          <div className={s.content}>{renderer(data.description)}</div>
          <Hubspot {...data.form} className={s.form}>
            {({ ...helpers }) => (
              <Hubspot.Form className={s.form} {...helpers}>
                {helpers.form.message && (
                  <p className={cn('p-xs', s.thanks)}>{helpers.form.message}</p>
                )}
              </Hubspot.Form>
            )}
          </Hubspot>
          <div className={s.accordion}>
            <p className="p text-uppercase text-bold text-muted">FAQ</p>
            <Accordion.Root type="single" className={s['accordion-root']}>
              {data.faqsCollection.items.map((faq, i) => (
                <Accordion.Item
                  value={slugify(faq.title)}
                  key={i}
                  className={s.item}
                >
                  <Accordion.Header>
                    <Accordion.Trigger className={s.trigger}>
                      {faq.title}
                      <svg
                        className={s.icon}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 1H1V11" stroke="#00FF6A" />
                        <path d="M15 1H25V11" stroke="#00FF6A" />
                        <path d="M15 25L25 25L25 15" stroke="#00FF6A" />
                        <path d="M11 25L1 25L1 15" stroke="#00FF6A" />
                        <g className={s.x}>
                          <path
                            d="M8.75684 8.75745L17.2421 17.2427"
                            stroke="#00FF6A"
                          />
                          <path
                            d="M17.2422 8.75745L8.75691 17.2427"
                            stroke="#00FF6A"
                          />
                        </g>
                      </svg>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className={s.content}>
                    {renderer(faq.content)}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </ScrollableBox>
      </div>
    </div>
  )
}
