import Vue from 'vue'
import Vuex from 'vuex'
import db from "@/firebase/firebase.js";
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
    set_skills({ commit }){
      
      const _skills = [];
      const skillsRef = db.collection("skills");
      const orderedSkills = skillsRef.orderBy("order");
      orderedSkills.get().then(snapshot => {
        snapshot.forEach(doc => {
          _skills.push(doc.data());
        });
        localStorage.setItem("_skills",JSON.stringify(_skills))
        commit("SET_SKILLS", _skills)
      });
     
    },

    set_exp({ commit }){
      const _exp = [];
      const expRef = db.collection("experience");
      const orderedExp = expRef.orderBy("order");
      orderedExp.get().then(snapshot => {
        snapshot.forEach(doc => {
          _exp.push(doc.data());
        });
        localStorage.setItem("_exp", JSON.stringify(_exp) )
        commit("SET_EXP", _exp)
      });
      
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
