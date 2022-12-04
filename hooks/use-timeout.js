import { useEffect, useState } from 'react'

export function useTimeout({ delay = 0, condition = true } = {}) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!condition) return
    const timeout = setTimeout(() => {
      setReady(true)
    }, delay)

    return () => {
      clearTimeout(timeout)
    }
  }, [delay, condition])

  return ready
}
