import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export function useLoadMore(fn: () => void) {
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) fn()
  }, [inView, fn])

  return ref
}
