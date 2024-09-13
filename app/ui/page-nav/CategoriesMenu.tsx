import { Sheet, SheetContent, SheetTrigger, } from '@/components/ui/sheet'
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
        <Suspense fallback={<CategoriesSkeleton/>}>
          <CategorySelector/>
        </Suspense>
      </SheetContent>
    </Sheet>
  )
}
