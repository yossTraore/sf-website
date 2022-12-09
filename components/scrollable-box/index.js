import { useFrame } from '@studio-freight/hamo'
import Lenis from '@studio-freight/lenis'
import cn from 'clsx'
import { useEffect, useRef, useState } from 'react'
import s from './scrollable-box.module.scss'

export function ScrollableBox({ children, className }) {
  const [lenis, setLenis] = useState()
  const wrapperRef = useRef()
  const contentRef = useRef()

  useEffect(() => {
    // window.scrollTo(0, 0)
    const lenis = new Lenis({
      wrapper: wrapperRef.current, // element which has overflow
      content: contentRef.current, // usually wrapper's direct child
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
    })

    lenis.start()
    setLenis(lenis)

    return () => {
      lenis.destroy()
    }
  }, [])

  useFrame((time) => {
    lenis?.raf(time)
  }, [])

  useEffect(() => {
    if (!lenis) return
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      console.log({ scroll, limit, velocity, direction, progress })
    })
  }, [lenis])

  return (
    <div className={cn(s.hi, className)} ref={wrapperRef}>
      <div ref={contentRef}>{children}</div>
    </div>
  )
}
