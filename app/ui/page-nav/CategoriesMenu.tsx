import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger, } from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { fetchNewsCategories } from 'app/lib/data'
import CategorySelector from 'app/ui/CategorySelector'
import { Button } from 'components/ui/button'

export default async function CategoriesMenu() {
  const categories = await fetchNewsCategories()
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
        <CategorySelector categories={categories}/>
      </SheetContent>
    </Sheet>
  )
}
