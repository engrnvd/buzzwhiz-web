import AppLogo from 'components/AppLogo'
import { cn } from 'lib/utils'
import Link from 'next/link'
import process from 'node:process'

export default function AppLogoFull({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn(className, 'flex items-center space-x-2')}>
      <AppLogo/>
      <h1 className={`text-xl font-bold tracking-tight`}>{process.env.APP_NAME}</h1>
    </Link>
  )
}
