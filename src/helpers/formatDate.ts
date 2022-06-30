import { format } from 'date-fns'
import enUS from 'date-fns/locale/en-US'

export function FormatDate(date: string) {
  return format(new Date(date), 'M/dd/yyyy', {
    locale: enUS,
  })
}
