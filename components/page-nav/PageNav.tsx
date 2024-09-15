import AppLogo from '@/components/AppLogo'
import { PersonIcon } from '@radix-ui/react-icons'
import CategoriesMenu from 'components/page-nav/CategoriesMenu'
import { Button } from 'components/ui/button'
import Link from 'next/link'
import process from 'node:process'

export default function PageNav() {
  return <div className={`flex justify-between items-center space-x-2 px-4 py-2 border-b`}>
    <CategoriesMenu/>
    <Link href="/" className="flex items-center space-x-2">
      <AppLogo/>
      <h1 className={`text-xl font-bold tracking-tight`}>{process.env.APP_NAME}</h1>
    </Link>
    <Button variant="ghost" size="icon">
      <PersonIcon/>
    </Button>
  </div>
}
