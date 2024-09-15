'use client'

import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger, } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { useQuickSearchFilter } from 'lib/hooks/useQuickFilter'
import { NewsSource } from 'lib/types'
import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export function SourceSelector({ sources }: { sources: NewsSource[] }) {
  const [open, setOpen] = useState(false)
  const searchParams = useSearchParams()
  const value = searchParams.get('source')

  const onChange = useQuickSearchFilter('source')

  const onSelect = (currentValue: string) => {
    setOpen(false)
    onChange(currentValue)
  }

  return (
    <div className="flex items-center space-x-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value ? sources.find((source) => source.slug === value)?.name : 'Select source...'}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search source..." className="h-9"/>
            <CommandList>
              <CommandEmpty>No source found.</CommandEmpty>
              <CommandGroup>
                {sources.map((source) => (
                  <CommandItem
                    key={source.slug}
                    value={source.slug}
                    onSelect={onSelect}
                  >
                    {source.name}
                    <CheckIcon
                      className={cn(
                        'ml-auto h-4 w-4',
                        value === source.slug ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {
        value && <Button variant="ghost" size="icon" onClick={() => onSelect('')}>
              <CloseIcon/>
          </Button>
      }
    </div>
  )
}
