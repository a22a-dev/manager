import Vue from 'vue';
import store from '../src/store/store';
import Manager from './manager.vue';
// import App from './App.vue';
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(Manager),
  vuetify,
  store
});