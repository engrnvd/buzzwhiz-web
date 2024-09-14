import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

dayjs.extend(relativeTime)
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'moments',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  }
})

export const dateSummary = (dateStr: string) => {
  const date = dayjs(dateStr)
  const today = dayjs()
  if (date.isSame(today, 'date')) return 'Today'

  const yesterday = dayjs().subtract(1, 'day')
  if (date.isSame(yesterday, 'date')) return 'Yesterday'

  if (date.isSame(today, 'week')) return 'This week'
  if (date.isSame(today.subtract(1, 'week'), 'week')) return 'Last week'

  if (date.isSame(today, 'month')) return 'This month'
  if (date.isSame(today.subtract(1, 'month'), 'month')) return 'Last month'

  return date.format('MMMM YYYY')
}

export default dayjs
