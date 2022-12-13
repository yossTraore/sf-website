import cn from 'clsx'
import { Button } from 'components/button'
import { Hubspot } from 'components/hubspot'
import { renderer } from 'contentful/renderer'
import { useStore } from 'lib/store'
import dynamic from 'next/dynamic'
import shallow from 'zustand/shallow'
import s from './contact-form.module.scss'

const Separator = dynamic(() => import('icons/separator.svg'), { ssr: false })

export function ContactForm({ data }) {
  const [contactIsOpen, setContactIsOpen] = useStore(
    (state) => [state.contactIsOpen, state.setContactIsOpen],
    shallow
  )

  return (
    <div className={cn(s.wrapper, contactIsOpen && s.open)}>
      <div className={s.heading}>
        <Button className={s.cta} onClick={() => setContactIsOpen(false)}>
          close
        </Button>
        <Separator />
      </div>
      <div className={s.content}>{renderer(data.description)}</div>
      <Hubspot {...data.form}>
        {({ ...helpers }) => (
          <Hubspot.Form className={s.form} {...helpers}>
            {helpers.form.message && (
              <p className={cn('p-xs', s.thanks)}>{helpers.form.message}</p>
            )}
          </Hubspot.Form>
        )}
      </Hubspot>
    </div>
  )
}
