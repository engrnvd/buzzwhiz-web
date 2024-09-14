'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger, } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'

export function DatePicker(
  {
    placeholder,
    initialDate,
    onChange,
  }: {
    placeholder?: string,
    initialDate?: Date,
    onChange?: (date: Date | undefined) => void,
  },
) {
  const [date, setDate] = React.useState<Date | undefined>(initialDate)

  const update = (date: Date | undefined) => {
    setDate(date)
    onChange?.(date)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4"/>
          {date ? format(date, 'PPP') : <span>{placeholder || 'Pick a date'}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={update}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
