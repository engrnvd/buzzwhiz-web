import Header from '@/app/dashboard/Header'
import UserSettingTabs from 'app/dashboard/UserSettingTabs'
import Welcome from 'app/dashboard/Welcome'
import Container from 'components/Container'

export const metadata = {
  title: 'Dashboard',
}

const Dashboard = async () => {
  return (
    <Container className="py-8">
      <Header title="Dashboard"/>
      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div className="p-6 bg-white border-b border-gray-200">
          <Welcome className="mb-4"/>
          <UserSettingTabs defaultValue="sources"/>
        </div>
      </div>
    </Container>
  )
}

export default Dashboard
