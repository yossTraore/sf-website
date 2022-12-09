import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import cn from 'clsx'
import { Link } from 'components/link'
import s from './renderer.module.scss'

export const renderer = ({ json }) => {
  const document = json

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: function p(node, children) {
        return (
          <h2 className={cn('p text-uppercase text-muted text-bold', s.row)}>
            {children}
          </h2>
        )
      },
      [BLOCKS.PARAGRAPH]: function p(node, children) {
        return <p className={cn('p', s.row)}>{children}</p>
      },
      [INLINES.HYPERLINK]: function hyperlink(node, children) {
        return (
          <Link href={node.data.uri} className={cn(s.link, 'link')}>
            {children}
          </Link>
        )
      },
    },
  }

  return documentToReactComponents(document, options)
}
