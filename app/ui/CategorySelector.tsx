'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion'
import { useQuickSearchFilter } from 'app/lib/hooks/useQuickFilter'
import { NewsCategory } from 'app/lib/types'
import { Skeleton } from 'components/ui/skeleton'
import Link from 'next/link'
import { MouseEvent } from 'react'

export function CategorySelectorItem({ category }: { category: NewsCategory }) {
  const onChange = useQuickSearchFilter('category')

  const onSelect = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onChange(category.slug)
  }

  return (
    <Link
      href="#"
      onClick={onSelect}>
      {category.name}
    </Link>
  )
}

export default function CategorySelector({ categories }: { categories: NewsCategory[] }) {
  return (
    <div className="flex flex-col lg:flex-row">
      <Accordion type="single" collapsible className="w-full">
        {
          categories.map((category: NewsCategory) => (
            <AccordionItem key={category.id} value={`${category.id}`}>
              <AccordionTrigger>
                {category.name}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col lg:flex-row space-y-2">
                  {
                    category.categories?.map((subCategory: NewsCategory) => (
                      <CategorySelectorItem key={subCategory.id} category={subCategory}/>
                    ))
                  }
                </div>
              </AccordionContent>
            </AccordionItem>
          ))
        }
      </Accordion>
    </div>
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
