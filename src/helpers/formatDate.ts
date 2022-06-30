import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function FormatDate(date: string) {
  return format(new Date(date), 'mm/dd/yy', {
    locale: ptBR,
  })
}
