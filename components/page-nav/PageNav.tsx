import AppLogoFull from 'components/AppLogoFull'
import Container from 'components/Container'
import CategoriesMenu from 'components/page-nav/CategoriesMenu'
import ProfileBtn from 'components/ProfileBtn'

export default function PageNav() {
  return <div className={`px-4 py-3 border-b`}>
    <Container>
      <div className="flex justify-between items-center space-x-2">
        <div>
          <div className="md:hidden"><CategoriesMenu/></div>
        </div>
        <AppLogoFull/>
        <ProfileBtn/>
      </div>
    </Container>
  </div>
}
