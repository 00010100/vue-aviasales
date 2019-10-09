<template>
  <li>
    <span>{{ticket.price}}</span>
    <span>{{ticket.carrier}}</span>
    <span v-for="segment in ticket.segments" key="segment.origin">
      {{segment.origin}}
      {{segment.destination}}
      {{segment.date}}
      {{segment.duration}}
    </span>
  </li>
</template>

<script>
export default {
  name: 'ticketsListItem',
  props: ['ticket']
}
</script>

<style scoped>

</style>
