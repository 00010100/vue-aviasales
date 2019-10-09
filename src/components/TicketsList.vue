<template>
  <ul>
    <TicketsListItem v-for="ticket in tickets" :ticket="ticket" key="ticket.price" />
  </ul>
</template>

<script>
import TicketsListItem from '@/components/TicketsListItem'

export default {
  name: 'ticketsList',
  components: {
    TicketsListItem
  },
  props: {
    tickets: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
