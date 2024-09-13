import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger, } from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import CategorySelector, { CategoriesSkeleton } from 'app/ui/CategorySelector'
import { Suspense } from 'react'

export default function CategoriesMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon/>
      </SheetTrigger>
      <SheetContent side="left" className="bg-background">
        <SheetTitle className="sr-only">News Categories</SheetTitle>
        <SheetDescription className="sr-only">News categories</SheetDescription>
        <Suspense fallback={<CategoriesSkeleton/>}>
          <CategorySelector/>
        </Suspense>
      </SheetContent>
    </Sheet>
  )
}
