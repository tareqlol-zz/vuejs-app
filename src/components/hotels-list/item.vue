<template>
  <section class="hotels-list-items">
    <div class="hotel-item clearfix" v-for="hotel in hotelList">
      <a class="hotel-item-link" v-bind:href="hotel.deeplink" target="_blank">
        <img class="hotel-item-image" v-bind:src="hotel.image" v-bind:alt="hotel.name">
      </a>
      <a class="hotel-item-link" v-bind:href="hotel.deeplink" target="_blank">
        <h1 class="hotel-item-name">{{hotel.name}}</h1>
      </a>
      <h3 class="hotel-item-city">{{hotel.city}}</h3>
      <div class="hotel-item-info">
        <p class="hotel-item-category">Category : <b>{{hotel.category}}</b></p>
        <p class="hotel-item-price">Price : <b>{{hotel.price}}$</b></p>
        <a class="hotel-item-map" @click="goToMap(hotel)">Map</a>
      </div>
    </div>
  </section>
</template>

<script>

// load the scss file for the item
import '../scss/item.scss';

export default {
  name: 'hotels-list-item',
  props: {
    hotelList: Array,
  },
  data() {
    return {
    };
  },
  methods: {
    goToMap(hotel) {
      const link = `https://www.google.com/maps/@${hotel.location.lat},${hotel.location.lon},100z`;
      window.open(link, '_blank');
    },
  },
};
</script>
