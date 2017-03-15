<template>
  <div id="app">
    {{msg}}
    <section is="hotels-list"></section>
  </div>
</template>

<script>
// Import the hotel list component
import hotelsList from './components/hotels-list/index.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Vue.js Hotel List'
    }
  },
  // setting App Level Components
  components : { hotelsList }
}
</script>

<style lang="scss">

</style>
