import Vue from 'vue'
import Vuex from 'vuex'
import maindocumets from './modules/maindocumets'
import equivalentdocuments from './modules/equivalentdocuments'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    maindocumets,
    equivalentdocuments
  }
})
