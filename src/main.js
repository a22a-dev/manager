import Vue from 'vue';
import store from '../src/store/store';
import Manager from './manager.vue';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(Manager),
  store,
});