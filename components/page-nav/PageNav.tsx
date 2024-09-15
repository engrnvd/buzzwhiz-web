import AppLogoFull from 'components/AppLogoFull'
import CategoriesMenu from 'components/page-nav/CategoriesMenu'
import ProfileBtn from 'components/ProfileBtn'

export default function PageNav() {
  return <div className={`flex justify-between items-center space-x-2 px-4 py-2 border-b`}>
    <CategoriesMenu/>
    <AppLogoFull/>
    <ProfileBtn/>
  </div>
}
