import { format } from 'date-fns'
import enUS from 'date-fns/locale/en-US'

export function FormatDate(date: string) {
  return format(new Date(date), 'LLLL dd, yyyy', {
    locale: enUS,
  })
}
