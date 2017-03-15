import Vue from 'vue'
import App from './App.vue'
import vueResource from '../node_modules/vue-resource/dist/vue-resource.min.js'

// using $http resource 
Vue.use(vueResource)

new Vue({
  el: '#app',
  render: h => h(App)
})