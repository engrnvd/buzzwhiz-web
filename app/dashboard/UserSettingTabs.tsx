'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PersonIcon } from '@radix-ui/react-icons'
import { TabsProps } from '@radix-ui/react-tabs'
import UserCategoriesList from 'app/dashboard/UserCategoriesList'
import UserItemsList from 'app/dashboard/UserItemsList'
import WebsiteFavicon from 'components/WebsiteFavicon'

interface Props extends TabsProps {
}

export default function UserSettingTabs(props: Props) {
  return (
    <Tabs defaultValue="account" className="w-full" {...props}>
      <TabsList className="w-full md:w-96 grid grid-cols-3">
        <TabsTrigger value="sources">Sources</TabsTrigger>
        <TabsTrigger value="categories">Categories</TabsTrigger>
        <TabsTrigger value="authors">Authors</TabsTrigger>
      </TabsList>
      <TabsContent value="sources" className="py-6">
        <UserItemsList
          title="News Sources"
          url="/api/user-sources"
          icon={i => <WebsiteFavicon website={i.website}/>}
        />
      </TabsContent>
      <TabsContent value="categories" className="py-6">
        <UserCategoriesList/>
      </TabsContent>
      <TabsContent value="authors" className="py-6">
        <UserItemsList
          title="Authors"
          url="/api/user-authors"
          icon={() => <PersonIcon className="shrink-0"/>}
        />
      </TabsContent>
    </Tabs>

  )
}
