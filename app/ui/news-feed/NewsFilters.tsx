import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion'
import { fetchNewsSources } from 'app/lib/data'
import { SourceSelector } from 'app/ui/news-feed/SourceSelector'

export default async function NewsFilters() {
  const sources = await fetchNewsSources()

  return (
    <Accordion type="single" collapsible className="mb-4 border rounded px-4">
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger>Filters</AccordionTrigger>
        <AccordionContent>
          <SourceSelector sources={sources}/>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
