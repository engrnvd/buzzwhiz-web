import AppLogo from '@/app/ui/AppLogo'
import { PersonIcon } from '@radix-ui/react-icons'
import CategoriesMenu from 'app/ui/page-nav/CategoriesMenu'
import { Button } from 'components/ui/button'
import process from 'node:process'

export default function PageNav() {
  return <div className={`flex justify-between items-center space-x-2 px-4 py-2 border-b`}>
    <CategoriesMenu/>
    <div className="flex items-center space-x-2">
      <AppLogo/>
      <h2 className={`text-lg`}>{process.env.APP_NAME}</h2>
    </div>
    <Button variant="ghost" size="icon">
      <PersonIcon/>
    </Button>
  </div>
}
