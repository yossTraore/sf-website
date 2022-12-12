// import { useFrame, useRect } from '@studio-freight/hamo'
import { useFrame } from '@studio-freight/hamo'
import Lenis from '@studio-freight/lenis'
import cn from 'clsx'
import { useEffect, useRef, useState } from 'react'
import s from './scrollable-box.module.scss'

export function ScrollableBox({ children, className, infinite }) {
  const [lenis, setLenis] = useState()
  const wrapperRef = useRef()
  const contentRef = useRef()
  // const [setRef, rect] = useRect()

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
      infinite,
      // infinite: true,
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

  // useEffect(() => {
  //   console.log(rect)
  // }, [rect])

  return (
    <div
      className={cn(s.hi, className)}
      ref={(node) => {
        // setRef(node)
        wrapperRef.current = node
      }}
      style={{ '--max-height': '100px' }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  )
}
