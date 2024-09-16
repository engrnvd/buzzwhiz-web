import { AccordionContent, AccordionItem, AccordionTrigger } from 'components/ui/accordion'
import UserItemCard from 'components/UserItemCard'
import { UserItem } from 'lib/types'
import { cn } from 'lib/utils'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  item: UserItem
  favorites: number[]
  toggleFavorite: (id: number) => void
}

export default function NewsCategoryCard(
  {
    item,
    favorites,
    toggleFavorite,
    className
  }: Props
) {
  const card = <UserItemCard
    className={cn('border-none max-w-full p-0', className)}
    item={item}
    favorite={favorites.includes(item.id)}
    onToggled={toggleFavorite}
    toggleUrl={`/api/user-categories/toggle/${item.id}`}
    icon={null}
  />
  if (!item.categories?.length) return card

  return (
    <AccordionItem value={`${item.slug}`}>
      <AccordionTrigger className="text-left">
        {card}
      </AccordionTrigger>
      <AccordionContent className="pl-4">
        {
          item.categories?.map((category) => (
            <NewsCategoryCard
              item={category}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              key={item.id + '-' + category.id}
            />
          ))
        }
      </AccordionContent>
    </AccordionItem>
  )
}
