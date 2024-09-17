import { RefObject, useEffect, useState } from 'react'

export default function useScrollX(ref: RefObject<HTMLElement>) {
  const [scroll, setScroll] = useState(0)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setScroll(ref.current?.scrollLeft || 0)
    setWidth(ref.current?.offsetWidth || 0)
  }, [ref])

  const scrollRight = () => {
    if (ref.current) {
      ref.current.scrollLeft = width
      setScroll(width)
    }
  }

  const scrollLeft = () => {
    if (ref.current) {
      ref.current.scrollLeft = 0
      setScroll(0)
    }
  }

  return {
    scroll,
    width,
    scrollRight,
    scrollLeft,
  }
}
