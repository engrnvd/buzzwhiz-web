import { CaretDownIcon } from '@radix-ui/react-icons'
import { Button, ButtonProps } from 'components/ui/button'

interface Props extends ButtonProps {
}

export default function ViewMoreBtn({ children, ...props }: Props) {
  return (
    <Button variant="ghost" {...props} className="w-full max-w-96 mx-auto flex items-center space-x-2">
      {children || <><span>View more</span> <CaretDownIcon/></>}
    </Button>
  )
}
