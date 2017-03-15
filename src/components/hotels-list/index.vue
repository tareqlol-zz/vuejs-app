<template>
  <section class="hotel-list" v-bind:class="{ 'loading' : fetching }">
    <section is="hotels-list-header"></section>
    <section is="hotels-list-item" v-bind:hotelList="hotelList"></section>

    <section class="error" v-if="fetchError">
      There was an error with the request!
      <button @click="fetchData">Reload</button>
    </section>
  </section>
</template>

<script>
import hotelsListHeader from './header.vue'
import hotelsListItem from './item.vue'

// API url 
const serviceUrl = 'https://api.beach-inspector.com/'

export default {
  name: 'hotels-list',
  data () {
    return {
      hotelList : [],
      fetchError : false
    }
  },
  methods : {
    // define a fetch data that is used
    // on created event or from the view
    // if there are an error
    fetchData (){
      this.fetching = true;
      // fetch the hotel list using vue-resource
      this.$http.get(serviceUrl).then(response => {
        // get body data
        if(response.body && response.body.length){
          this.hotelList = response.body;
        }else{
          this.fetchError = true;
        }
        // remove the loading
        this.fetching = false;
      }, response => {
          this.fetchError = true;
      });
    }
  },
  created () {
    this.fetchData()
  },
  // define the hotelsListItem, and hotelsListHeader as children components
  components : { hotelsListItem , hotelsListHeader }
}
</script>

<style lang="scss">
  .hotel-list{
    width: 90%;
    margin: 0 auto;
  }
</style>
