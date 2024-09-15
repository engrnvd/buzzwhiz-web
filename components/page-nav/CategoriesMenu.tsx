import { fetchNewsCategories } from 'lib/data'
import CategorySelector from 'components/CategorySelector'

export default async function CategoriesMenu() {
  const categories = await fetchNewsCategories()

  return (
    <CategorySelector categories={categories}/>
  )
}
