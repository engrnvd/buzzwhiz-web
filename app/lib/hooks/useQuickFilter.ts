import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function useQuickSearchFilter(param: string) {
  const router = useRouter()
  const path = usePathname()
  const searchParams = useSearchParams()

  return (currentValue: string, params?: URLSearchParams) => {
    if (!params) params = new URLSearchParams(searchParams)

    if (currentValue) params.set(param, currentValue)
    else params.delete(param)

    return router.replace(`${path}?${params.toString()}`)
  }
}
