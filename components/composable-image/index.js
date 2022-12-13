import { Image } from 'components/image'
import s from './composable-image.module.scss'

export function ComposableImage({ sources }) {
  const amount = sources.items.length
  return (
    <div className={s.images}>
      {sources.items.map((source) => (
        <Image
          key={source.url}
          src={source.url}
          alt={source.title}
          width={684 / amount}
          height={449}
          className={s.image}
        />
      ))}
    </div>
  )
}
