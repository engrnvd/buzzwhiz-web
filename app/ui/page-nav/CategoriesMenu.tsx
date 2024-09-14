import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger, } from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import CategorySelector, { CategoriesSkeleton } from 'app/ui/CategorySelector'
import { Button } from 'components/ui/button'
import { Suspense } from 'react'

export default function CategoriesMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <HamburgerMenuIcon/>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-background overflow-y-auto">
        <SheetTitle className="sr-only">News Categories</SheetTitle>
        <SheetDescription className="sr-only">News categories</SheetDescription>
        <Suspense fallback={<CategoriesSkeleton/>}>
          <CategorySelector/>
        </Suspense>
      </SheetContent>
    </Sheet>
  )
}
