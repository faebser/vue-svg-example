<template>
  <svg ref="chart">
    <circle v-for="c in mappedPoints" :cx="c.cx" :cy="c.cy" r="3" fill="red" :key="c.id"></circle>
  </svg>
</template>

<script>
import Vuex from 'vuex';
import Vue from 'vue';

export default {
  name: 'Canvas',
  data() {
    return {
      mappedPoints: [],
      w: null,
      h: null
    }
  },
  mounted() {
    const chart = this.$refs['chart'];
    // Resize the canvas to fit its parent's width.
    chart.setAttribute( 'width', chart.parentElement.clientWidth );
    chart.setAttribute( 'height', chart.parentElement.clientHeight );
    this.w = chart.parentElement.clientWidth;
    this.h = chart.parentElement.clientHeight;
    window.requestAnimationFrame( this.update );
   },
   methods: {
     update() {
       for (let i = 0; i < this.points.length; i++ ) {
         // check if we already have it
         if ( !(i in this.mappedPoints) ) {
           // tell vue that there is a new element
           // to keep track of
           Vue.set( this.mappedPoints, i, {
             cx: null,
             cy: null,
             id: this.points[ i ].id
           });
         }
         // the manipulation of the points
         // should actually happen in the store
         // but the data is only used in this
         // compontent, so I think it is okay
         const p = this.points[ i ];
         // update point with vector
         // and make sure that it stays
         // in the 0..1 range
         p.x = ( p.x + p.vec[ 0 ] ) % 1;
         p.y = ( p.y + p.vec[ 1 ] ) % 1;
         
         this.mappedPoints[ i ].cx = p.x * this.w;
         this.mappedPoints[ i ].cy = p.y * this.h;  
       }

       window.requestAnimationFrame( this.update );
     }
   },
   computed: {
     ...Vuex.mapGetters( [
       'points'
     ] )
   },
}
</script>

<style>
</style>
