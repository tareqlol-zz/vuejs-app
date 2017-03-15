<template>
  <section class="hotel-list">
    <section is="hotel-item" v-for="hotel in hotelList" v-bind:hotel="hotel"></section>
  </section>
</template>

<script>
import hotelItem from './item.vue'

// API url 
const serviceUrl = 'https://api.beach-inspector.com/'

export default {
  name: 'hotel-list',
  data () {
    return {
      hotelList : []
    }
  },
  created () {
    // fetch the hotel list
    this.$http.get(serviceUrl).then(response => {

      // get body data
      this.hotelList = response.body;

    }, response => {
      
    });
  },
  components : { hotelItem }
}
</script>
