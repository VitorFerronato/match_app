import { createStore } from 'vuex'
import snackbar from "./snackbar-store.js"
import user from "./user-store.js"

export default createStore({
  state: {
    tournament: null
  },
  getters: {
  },
  mutations: {
    setTournament(state, tournament) {
      state.tournament = tournament;
    }
  },
  actions: {
  },
  modules: {
    snackbar,
    user
  }
})
