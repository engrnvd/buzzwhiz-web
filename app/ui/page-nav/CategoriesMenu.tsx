import { fetchNewsCategories } from 'app/lib/data'
import CategorySelector from 'app/ui/CategorySelector'

export default async function CategoriesMenu() {
  const categories = await fetchNewsCategories()

  return (
    <CategorySelector categories={categories}/>
  )
}
