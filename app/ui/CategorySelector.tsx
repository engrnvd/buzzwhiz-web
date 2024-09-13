import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion'
import { fetchNewsCategories } from 'app/lib/data'
import { NewsCategory } from 'app/lib/types'
import { Skeleton } from 'components/ui/skeleton'
import Link from 'next/link'

export default async function CategorySelector() {
  const categories = await fetchNewsCategories()

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
                      <Link key={subCategory.id} href="">{subCategory.name}</Link>
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
