import Vue from 'vue'
import Vuex from 'vuex'
// import list from '../mock/list.json'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    //  list
    currentIndex:0
  },
  mutations: {
    //下一题，最后一题不在加
    add(state){
      if(state.currentIndex< state.list.length-1){
        state.currentIndex++
      }
      

    }
  },
  actions: {
  },
  modules: {
  }
})
