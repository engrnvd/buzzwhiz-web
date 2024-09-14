import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion'
import { fetchNewsSources } from 'app/lib/data'
import { SourceSelector } from 'app/ui/news-feed/SourceSelector'

export default async function NewsFilters({ searchParams }: { searchParams: { source: string } }) {
  const sources = await fetchNewsSources()
  const open = searchParams.source

  return (
    <Accordion type="single" defaultValue={open ? 'opened' : ''} collapsible className="mb-4 border rounded px-4">
      <AccordionItem value="opened" className="border-b-0">
        <AccordionTrigger>Filters</AccordionTrigger>
        <AccordionContent>
          <SourceSelector sources={sources}/>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
