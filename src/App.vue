<template>
  <div id="app">
    <app-canvas></app-canvas>
    <counter id="info" v-if="isFetching"></counter>
  </div>
</template>

<script>
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

import Canvas from './components/Canvas.vue';
import Counter from './components/Counter.vue';

export default {
  name: 'App',
  components: {
    'app-canvas': Canvas,
    'counter': Counter
  },
  created() {
    this.fetch();
  },
  methods: {
    ...Vuex.mapActions( ['fetch'] )
  },
  computed: {
    ...Vuex.mapGetters( ['isFetching'] )
  },
}
</script>

<style>

html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}

#info {
  position: absolute;
  left: 0;
  bottom: 20vh;
  width: 100%;
}

</style>
