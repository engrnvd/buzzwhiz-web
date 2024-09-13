import AppLogo from '@/app/ui/components/AppLogo'
import process from 'node:process'

export default function PageNav() {
  return <div className={`flex justify-between items-center space-x-2 px-4 py-2 border-b`}>
    <div className="flex items-center space-x-2">
      <AppLogo/>
      <h2 className={`text-lg`}>{process.env.APP_NAME}</h2>
    </div>
  </div>
}
