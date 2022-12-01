import cn from 'clsx'
import s from './clock.module.scss'

export const Clock = () => {
  const time = new Date()

  const h = time
    .getHours()
    .toLocaleString('en-US', { timeZone: 'America/New_York' })
  const m = time
    .getMinutes()
    .toLocaleString('en-US', { timeZone: 'America/New_York' })

  return (
    <time className={cn('p', s.clock)}>
      {h === 12 ? 12 : h % 12}
      <span className={s.separator}>:</span>
      {m < 10 ? '0' + m : m} {h < 12 ? 'am' : 'pm'}
    </time>
  )
}
