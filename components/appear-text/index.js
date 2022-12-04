import { useMediaQuery } from '@studio-freight/hamo'
import cn from 'clsx'
import { SplitText } from 'gsap/dist/SplitText'
import { useRef } from 'react'
import { useDebounce, useWindowSize } from 'react-use'
import s from './appear-text.module.scss'

export function AppearText({ children, visible = true, className }) {
  const el = useRef()
  const { width } = useWindowSize()
  const isMobile = useMediaQuery('(max-width: 800px)')

  useDebounce(
    () => {
      if (isMobile === false) {
        const splitted = new SplitText(el.current, {
          type: 'lines',
          lineThreshold: 0.3,
          tag: 'span',
        })

        splitted.lines.forEach((line, i) => {
          const text = line.textContent
          line.textContent = ''
          const content = document.createElement('span')
          content.textContent = text
          content.classList.add(s.text)
          line.appendChild(content)

          line.style.setProperty('--i', i)
          const mask = document.createElement('span')
          mask.classList.add(s.mask)
          line.appendChild(mask)
        })

        return () => {
          splitted.revert()
        }
      }
    },
    500,
    [width, isMobile]
  )

  return (
    <div
      ref={(node) => {
        el.current = node
      }}
      className={cn(s.title, visible && s.visible, className)}
    >
      {children}
    </div>
  )
}
