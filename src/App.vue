<template>
  <div id="app">
    {{msg}}
    <section is="hotel-list"></section>
  </div>
</template>

<script>
// Import the hotel list component
import hotelList from './components/hotel-list/index.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Vue.js Hotel List'
    }
  },
  // setting App Level Components
  components : { hotelList }
}
</script>

<style lang="scss">

</style>
