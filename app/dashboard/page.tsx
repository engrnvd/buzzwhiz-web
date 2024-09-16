import Header from '@/app/dashboard/Header'
import UserSettingTabs from 'app/dashboard/UserSettingTabs'
import Welcome from 'app/dashboard/Welcome'

export const metadata = {
  title: 'Dashboard',
}

const Dashboard = async () => {
  return (
    <>
      <Header title="Dashboard"/>
      <div className="py-8">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <Welcome className="mb-4"/>
              <UserSettingTabs defaultValue="sources"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
