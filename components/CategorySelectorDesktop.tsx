'use client'

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
import ScrollBtn from 'components/ScrollBtn'
import { NewsCategory } from 'lib/types'
import { cn } from 'lib/utils'
import Link from 'next/link'
import { useRef } from 'react'

interface Props extends NavigationMenuProps {
  categories: NewsCategory[]
}

export default function CategorySelectorDesktop({ categories, className }: Props) {
  const listRef = useRef<HTMLUListElement>(null)

  return (
    <NavigationMenu className={cn(className)}>
      <NavigationMenuList
        ref={listRef}
        className="overflow-x-hidden w-[98vw] max-w-[1217px] justify-start py-3 scroll-smooth">
        {
          categories.map((category) => (
            <NavigationMenuItem key={category.id}>
              {
                category.categories?.length ?
                  (
                    <>
                      <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[96vw] max-w-[1217px] flex items-center justify-center p-8">
                          <div className="w-96 grid grid-cols-2 gap-4">
                            {
                              category.categories.map(subCat => (
                                <div key={subCat.id}>
                                  <NavigationMenuLink href={'/?category=' + subCat.slug}
                                  >{subCat.name}</NavigationMenuLink>
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={'/?category=' + category.slug} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {category.name}
                      </NavigationMenuLink>
                    </Link>
                  )
              }
            </NavigationMenuItem>
          ))
        }
        <ScrollBtn parentRef={listRef}/>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
