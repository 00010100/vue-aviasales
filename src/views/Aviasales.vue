<template>
  <TicketsList :tickets="tickets" />
</template>

<script>
import TicketsList from '@/components/TicketsList'

export default {
  name: 'aviasales',
  components: {
    TicketsList
  },
  async created () {
    await this.$store.dispatch('fetchSearchId')
    await this.$store.dispatch('fetchTickets')
  },
  computed: {
    tickets () {
      return this.$store.getters.tickets
    }
  }
}
</script>
