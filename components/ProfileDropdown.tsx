'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from 'components/ui/button'
import { useAuth } from 'lib/hooks/auth'
import { useRouter } from 'next/navigation'

export default function ProfileDropdown() {
  const auth = useAuth({})
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-purple-900 text-lg font-black" variant="outline" size="icon">
          {auth.user.name[0]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom">
        <DropdownMenuLabel>
          {auth.user.name}
          <br/>
          <span className="font-normal text-sm text-muted-foreground">{auth.user.email}</span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator/>

        <DropdownMenuItem
          onClick={() => router.push('/dashboard')}
        >Dashboard</DropdownMenuItem>

        <DropdownMenuSeparator/>

        <DropdownMenuItem onClick={auth.logout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}
