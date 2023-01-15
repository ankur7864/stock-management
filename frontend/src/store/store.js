import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth/auth';
import portfolio from './modules/portfolio/portfolio';
import stock from './modules/stock/stock';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    portfolio,
    stock,
  },
});
