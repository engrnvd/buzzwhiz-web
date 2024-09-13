import AppLogo from '@/app/ui/components/AppLogo'

export default function PageNav() {
  return <div className={`flex justify-between items-center space-x-2 px-4 py-2 border-b`}>
    <div className="flex items-center space-x-2">
      <AppLogo/>
      <h2 className={`text-lg`}>BuzzWhiz News</h2>
    </div>
  </div>
}
