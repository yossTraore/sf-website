import { useDocumentReadyState } from '@studio-freight/hamo'
import { useMemo } from 'react'
import { useTimeout } from './use-timeout'

export function usePageAppear({ delay = 100, condition = true } = {}) {
  const documentReady = useDocumentReadyState()

  const delayed = useTimeout({ delay, condition })

  const appear = useMemo(
    () => delayed && ['interactive', 'complete'].includes(documentReady),
    [documentReady, delayed]
  )

  return appear
}
