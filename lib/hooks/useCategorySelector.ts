import { NewsCategory } from 'lib/types'
import { useRouter } from 'next/navigation'
import { MouseEvent, useState } from 'react'

export function useCategorySelector() {
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)

  const openCategoryWithNoChildren = (e: MouseEvent, category: NewsCategory) => {
    if (!category.categories?.length) {
      e.preventDefault()
      router.push('/?category=' + category.slug)
      setOpen(false)
    }
  }

  return {
    open,
    setOpen,
    openCategoryWithNoChildren,
  }
}
