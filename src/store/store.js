import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import state from './state';
import mutations from './mutations';
import getters from './getters';
import oneTimeTaskStore from './modules/one-time-task/one-time-task';
import recurringTask from './modules/recurring-task/recurring-task';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
      oneTimeTaskStore,
      recurringTask,
  },
  actions,
  mutations,
  getters,
  state,
})
