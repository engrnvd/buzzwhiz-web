'use client'

import { useQuickSearchFilter } from 'app/lib/hooks/useQuickFilter'
import { DatePicker } from 'components/ui/DatePicker'
import { format, parse } from 'date-fns'
import { useSearchParams } from 'next/navigation'

export default function DateFilter() {
  const searchParams = useSearchParams()
  const date = searchParams.get('date')
  const handleSearch = useQuickSearchFilter('date')
  const onChange = (date: Date | undefined) => {
    handleSearch(date ? format(date, 'y-MM-dd') : '')
  }

  return (
    <DatePicker
      initialDate={date ? parse(date, 'y-MM-dd', new Date) : undefined}
      placeholder="Search by date"
      onChange={onChange}
    />
  )
}
