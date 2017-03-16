
<!-- App Level Template -->

<template>
  <div id="app">
    <h1 class="page-header">Welcome to Vue.js Hotel List</h1>
    <section is="hotels-list"></section>
  </div>
</template>

<!-- ENDOF App Level Template -->



<!-- App Level Script -->

<script>
// import the scss files
import './components/scss/app.scss';
// import Hotels List Component
import hotelsList from './components/hotels-list/index';

export default {
  name: 'app',
  data() {
    return {
    };
  },
  // setting App Level Components
  components: { hotelsList },
};
</script>

<!-- ENDOF App Level Script -->
