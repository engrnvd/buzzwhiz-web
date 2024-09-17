import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { Button, ButtonProps } from 'components/ui/button'
import useScrollX from 'lib/hooks/useScrollX'
import { cn } from 'lib/utils'
import { RefObject } from 'react'

interface Props extends ButtonProps {
  parentRef: RefObject<HTMLElement>
}

export default function ScrollBtn({ parentRef, ...props }: Props) {
  const { scroll, scrollLeft, scrollRight } = useScrollX(parentRef)

  return (
    <Button
      {...props}
      onClick={scroll === 0 ? scrollRight : scrollLeft} variant="outline" size="icon"
      className={cn(
        'absolute top-1/2 -translate-y-1/2 rounded-full',
        scroll === 0 ? 'right-0' : 'left-0'
      )}>
      {scroll === 0 ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
    </Button>
  )
}
