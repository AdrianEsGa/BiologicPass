import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    logged: false,
    loggedUser: {
      id: 0, name: "", email: "", picture: ""
    }
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    setLogged (state, payload) {
      state.logged = payload
    },
    setLoggedUser (state, payload) {
      state.loggedUser = payload
    },
  }
})
