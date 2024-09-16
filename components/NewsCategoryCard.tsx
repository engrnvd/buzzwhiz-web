import { HeartFilledIcon } from '@radix-ui/react-icons'
import { AccordionContent, AccordionItem, AccordionTrigger } from 'components/ui/accordion'
import UserItemCard from 'components/UserItemCard'
import { NewsCategory, UserItem } from 'lib/types'
import { cn } from 'lib/utils'
import { Dispatch, HTMLAttributes, SetStateAction } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  categories: NewsCategory[]
  item: NewsCategory
  favorites: number[]
  setFavorites: Dispatch<SetStateAction<number[]>>
}

export default function NewsCategoryCard(
  {
    categories,
    item,
    favorites,
    setFavorites,
    className
  }: Props
) {
  const toggle = (id: number) => {
    setFavorites(fav => {
      let newFav = [...fav]
      const updateFav = (id: number, checked: boolean) => {
        newFav = checked ? [...newFav, id] : newFav.filter(i => i !== id)
      }
      const checked = !fav.includes(id)
      updateFav(id, checked)

      // update children
      if (!item.parent_id) {
        item.categories?.forEach(c => {
          updateFav(c.id, checked)
        })
      } else {
        // update parent
        const pc = categories.find(c => c.id === item.parent_id)
        if (!pc) return newFav
        const checkedItems = pc?.categories?.filter(c => newFav.includes(c.id))
        if (checkedItems?.length) updateFav(pc.id, checkedItems?.length === pc?.categories?.length)
      }

      return newFav
    })
  }
  const icon = item.categories?.find(c => favorites.includes(c.id)) &&
      <HeartFilledIcon className="size-3 text-red-800"/>
  const card = <UserItemCard
    className={cn('border-none max-w-full py-0 px-2 flex-row-reverse', className)}
    item={item as UserItem}
    favorite={favorites.includes(item.id)}
    onToggled={toggle}
    toggleUrl={`/api/user-categories/toggle/${item.id}`}
    icon={icon}
  />

  if (!item.categories?.length) return card

  return (
    <AccordionItem value={`${item.slug}`}>
      <AccordionTrigger className="text-left py-1">
        {card}
      </AccordionTrigger>
      <AccordionContent className="pl-4">
        {
          item.categories?.map((category) => (
            <NewsCategoryCard
              categories={categories}
              item={category}
              favorites={favorites}
              setFavorites={setFavorites}
              key={item.id + '-' + category.id}
            />
          ))
        }
      </AccordionContent>
    </AccordionItem>
  )
}
