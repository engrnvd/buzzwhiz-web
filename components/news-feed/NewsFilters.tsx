import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion'
import { fetchNewsSources } from 'lib/data'
import DateFilter from 'components/news-feed/DateFilter'
import { SourceSelector } from 'components/news-feed/SourceSelector'

export default async function NewsFilters(
  {
    searchParams
  }: {
    searchParams: { source: string, date: string }
  }
) {
  const sources = await fetchNewsSources()
  const open = searchParams.source || searchParams.date

  return (
    <Accordion type="single" defaultValue={open ? 'opened' : ''} collapsible className="mb-4 border rounded px-4">
      <AccordionItem value="opened" className="border-b-0">
        <AccordionTrigger className="py-3">Filter News</AccordionTrigger>
        <AccordionContent className="flex flex-col space-y-2">
          <SourceSelector sources={sources}/>
          <DateFilter/>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
