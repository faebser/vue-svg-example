<template>
  <div>
      <p>Loaded {{ amountFetched }} of {{ amount }}</p>
  </div>
</template>

<script>
import Vuex from 'vuex';

export default {
  name: 'Counter',
  computed: {
      ...Vuex.mapGetters([
          'amount',
          'amountFetched'
      ])
  },
}
</script>

<style>
</style>
