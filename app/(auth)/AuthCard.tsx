import AppLogoFull from 'components/AppLogoFull'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
}

const AuthCard = ({ children }: Props) => (
  <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
    <div>
      <AppLogoFull/>
    </div>

    <div className="w-96 sm:max-w-md mt-6 p-8 bg-background shadow-md overflow-hidden sm:rounded-lg">
      {children}
    </div>
  </div>
)

export default AuthCard
