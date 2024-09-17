import dayjs from 'lib/dayjs'

export default function TodaysDate() {
  const today = dayjs()
  return (
    <div className="border-b px-4 py-3 text-muted-foreground text-xs">{today.format('dddd, MMMM D, YYYY')}</div>
  )
}
