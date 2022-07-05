import { format } from 'date-fns'
import enUS from 'date-fns/locale/en-US'

export const formatDate = (date: string): string => {
  return format(new Date(date), 'LLLL dd, yyyy', {
    locale: enUS,
  })
}
