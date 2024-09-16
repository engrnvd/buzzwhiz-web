import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { NavigationMenuProps } from '@radix-ui/react-navigation-menu'
import { NewsCategory } from 'lib/types'
import { cn } from 'lib/utils'
import Link from 'next/link'

interface Props extends NavigationMenuProps {
  categories: NewsCategory[]
}

export default function CategorySelectorDesktop({ categories, className }: Props) {
  return (
    <NavigationMenu className={cn(className)}>
      <NavigationMenuList className="overflow-x-auto w-[98vw] justify-start px-[1vw]">
        {
          categories.map((category) => (
            <NavigationMenuItem key={category.id}>
              {
                category.categories?.length ?
                  (
                    <>
                      <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[96vw] flex items-center justify-center p-8">
                          <div className="w-96 grid grid-cols-2 gap-4">
                            {
                              category.categories.map(subCat => (
                                <div key={subCat.id}>
                                  <NavigationMenuLink href={'/?' + subCat.slug}
                                  >{subCat.name}</NavigationMenuLink>
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={'/?' + category.slug} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {category.name}
                      </NavigationMenuLink>
                    </Link>
                  )
              }
            </NavigationMenuItem>
          ))
        }
      </NavigationMenuList>
    </NavigationMenu>
  )
}
