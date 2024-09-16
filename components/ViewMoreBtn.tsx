import { CaretDownIcon } from '@radix-ui/react-icons'
import { Button, ButtonProps } from 'components/ui/button'

interface Props extends ButtonProps {
}

export default function ViewMoreBtn({ children, ...props }: Props) {
  return (
    <Button variant="ghost" {...props}>
      {children || <>View more <CaretDownIcon/></>}
    </Button>
  )
}
