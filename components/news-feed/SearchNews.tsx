'use client'

import Search from 'components/Search'
import { useQuickSearchFilter } from 'lib/hooks/useQuickFilter'
import { useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export default function SearchNews({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams()
  const updateParams = useQuickSearchFilter('query')
  const handleSearch = useDebouncedCallback(updateParams, 300)

  return (
    <Search
      placeholder={placeholder}
      onSearch={handleSearch}
      defaultValue={searchParams.get('query') || ''}
    />
  )
}
