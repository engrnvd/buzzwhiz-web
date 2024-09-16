import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabsProps } from '@radix-ui/react-tabs'
import UserAuthorsList from 'app/dashboard/UserAuthorsList'
import UserSourcesList from 'app/dashboard/UserSourcesList'

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
        <UserSourcesList/>
      </TabsContent>
      <TabsContent value="categories">Change your password here.</TabsContent>
      <TabsContent value="authors">
        <UserAuthorsList/>
      </TabsContent>
    </Tabs>

  )
}
