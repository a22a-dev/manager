import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import state from './state';
import mutations from './mutations';
import getters from './getters';
import oneTimeTaskStore from './modules/one-time-tasks/one-time-tasks';
import recurringTask from './modules/recurring-tasks/recurring-tasks';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
      oneTimeTaskStore,
      recurringTask,
  },
  actions,
  mutations,
  getters,
  state,
})
