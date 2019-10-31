import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills:[],
    exp:[]
  },
  mutations: {
    SET_SKILLS(state, _skills){
      state.skills = _skills
    },
    SET_EXP(state, _exp){
      state.exp = _exp
    }
  },
  actions: { 
    set_skills({ commit }, _skills){
      commit("SET_SKILLS", _skills)
    },
    set_exp({ commit }, _exp){
      commit("SET_EXP", _exp)
    }
  },

  getters:{
    get_skills(state){
      return state.skills
    }
  },
  modules: {
  }
})
