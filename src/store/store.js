import Vue from 'vue';
import Vuex from 'vuex';

// store setup
import actions from './actions';
import state from './state';
import mutations from './mutations';
import getters from './getters';

// store modules
import oneTimeTaskStore from './modules/one-time-tasks/one-time-tasks';
import recurringTask from './modules/recurring-tasks/recurring-tasks';

Vue.use(Vuex);
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
      oneTimeTaskStore,
      recurringTask,
  },
})
