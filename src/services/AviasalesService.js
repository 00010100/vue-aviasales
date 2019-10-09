import http from '@/api'
import { AVIASALES } from '@/api/routes'

export const fetchSearchId = () => {
  return http.get(AVIASALES.SEARCH)
}

export const fetchTickets = (searchId) => {
  return http.get(AVIASALES.TICKETS(searchId))
}
