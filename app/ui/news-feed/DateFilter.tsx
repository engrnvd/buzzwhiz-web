'use client'

import { useQuickSearchFilter } from 'app/lib/hooks/useQuickFilter'
import { Button } from 'components/ui/button'
import { DatePicker } from 'components/ui/DatePicker'
import { format, parse } from 'date-fns'
import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon'
import { useSearchParams } from 'next/navigation'

export default function DateFilter() {
  const searchParams = useSearchParams()
  const date = searchParams.get('date')
  const handleSearch = useQuickSearchFilter('date')
  const onChange = (date: Date | undefined) => {
    handleSearch(date ? format(date, 'y-MM-dd') : '')
  }

  return (
    <div className="flex items-center space-x-2">
      <DatePicker
        initialDate={date ? parse(date, 'y-MM-dd', new Date) : undefined}
        placeholder="Search by date"
        onChange={onChange}
      />
      {
        date && <Button variant="ghost" size="icon" onClick={() => onChange(undefined)}>
              <CloseIcon/>
          </Button>
      }
    </div>
  )
}
