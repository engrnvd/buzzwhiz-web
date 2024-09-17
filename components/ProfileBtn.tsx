'use client'

import { PersonIcon } from '@radix-ui/react-icons'
import ProfileDropdown from 'components/ProfileDropdown'
import { Button } from 'components/ui/button'
import { useAuth } from 'lib/hooks/auth'
import { useRouter } from 'next/navigation'

export default function ProfileBtn() {
  const router = useRouter()
  const auth = useAuth({})

  if (!auth.user) return (
    <Button className="rounded-full" variant="ghost" size="icon" onClick={() => router.push('/login')}>
      <PersonIcon/>
    </Button>
  )

  return <ProfileDropdown/>
}
