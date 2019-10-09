import * as AviasalesService from '@/services/AviasalesService'

export const fetchSearchId = async ({ state, commit }) => {
  try {
    if (!state.searchId) {
      const { data } = await AviasalesService.fetchSearchId()
      commit('setSearchId', data.searchId)
    }
  } catch (e) {
    console.log(e)
  }
}

export const fetchTickets = async ({ state, commit }) => {
  try {
    console.log(state.stopSearch)
    if (state.searchId) {
      let tickets = []
      while (!state.stopSearch) {
        tickets = await AviasalesService.fetchTickets(state.searchId)
        commit('setStopSearch', tickets.data.stop)
      }
      commit('setTickets', tickets.data.tickets)
      console.log(tickets.data.tickets)
    }
  } catch (e) {
    console.log(e.response)
    let tickets = []
    while (!state.stopSearch) {
      tickets = await AviasalesService.fetchTickets(state.searchId)
      commit('setStopSearch', tickets.data.stop)
    }
    commit('setTickets', tickets.data.tickets)
    console.log(tickets.data.tickets)
  }
}
