import AuthCard from '@/app/(auth)/AuthCard'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <div className="text-gray-900 antialiased">
        <AuthCard>
          {children}
        </AuthCard>
      </div>
    </div>
  )
}

export default Layout
