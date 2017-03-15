<template>
	<section class="hotels-list-items">

	<div class="hotel-item" v-for="hotel in hotelList" >
	{{hotel.name}}
	{{hotel.city}}
	{{hotel.price}}
	{{hotel.category}}
	{{hotel.image}}
</div>
  </section>
</template>

<script>   
export default {
  name: 'hotels-list-item',
  props : {
    hotelList : Array
  },
  data () {
    return {
      
    }
  }
}
</script>