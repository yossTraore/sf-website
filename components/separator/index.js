import cn from 'clsx'
import dynamic from 'next/dynamic'
import s from './separator.module.scss'

const Plus = dynamic(() => import('icons/plus.svg'), { ssr: false })

export function Separator({ className }) {
  return (
    <div className={cn(s.separator, className)}>
      <Plus className={s.icon} />
      <span className={s.line} />
      <Plus className={s.icon} />
    </div>
  )
}
