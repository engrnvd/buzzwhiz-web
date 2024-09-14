'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger, } from '@/components/ui/sheet'
import { CheckIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { useQuickSearchFilter } from 'app/lib/hooks/useQuickFilter'
import { NewsCategory } from 'app/lib/types'
import { Button } from 'components/ui/button'
import { Skeleton } from 'components/ui/skeleton'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { MouseEvent, useState } from 'react'

export function CategorySelectorItem(
  { category, parentCategory, onChange }: {
    category: NewsCategory,
    parentCategory: NewsCategory,
    onChange: () => void,
  }) {
  const onParamChange = useQuickSearchFilter('category')
  const searchParams = useSearchParams()

  const onSelect = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    params.set('pc', parentCategory.slug)
    onParamChange(category.slug, params)
    onChange()
  }

  return (
    <Link
      className="flex items-center justify-between"
      href="#"
      onClick={onSelect}>
      {category.name}
      {searchParams.get('category') === category.slug && <CheckIcon/>}
    </Link>
  )
}

export default function CategorySelector({ categories }: { categories: NewsCategory[] }) {
  const searchParams = useSearchParams()
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" onClick={() => setOpen(true)}>
          <HamburgerMenuIcon/>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-background overflow-y-auto">
        <SheetTitle className="sr-only">News Categories</SheetTitle>
        <SheetDescription className="sr-only">News categories</SheetDescription>
        <div className="flex flex-col lg:flex-row">
          <Accordion type="single" defaultValue={searchParams.get('pc') as string} collapsible className="w-full">
            {
              categories.map((category: NewsCategory) => (
                <AccordionItem key={category.id} value={`${category.slug}`}>
                  <AccordionTrigger>
                    {category.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col lg:flex-row space-y-2">
                      {
                        category.categories?.map((subCategory: NewsCategory) => (
                          <CategorySelectorItem
                            key={subCategory.id}
                            category={subCategory}
                            parentCategory={category}
                            onChange={() => setOpen(false)}
                          />
                        ))
                      }
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))
            }
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function CategoriesSkeleton() {
  return (
    <div className="flex flex-col space-y-2 lg:space-x-2 lg:space-y-0 lg:flex-row">
      <Skeleton className="w-12 h-4 rounded"></Skeleton>
      <Skeleton className="w-12 h-4 rounded"></Skeleton>
    </div>
  )
}
