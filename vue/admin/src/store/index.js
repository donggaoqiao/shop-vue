import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

export default createStore({
  state: {
    isGetterRouter:false,
    isCollapsed:false
  },
  getters: {
  },
  mutations: {
    changeGetterRouter(state,value){
      state.isGetterRouter = value
    },
    changeCollapsed(state){
      state.isCollapsed = !state.isCollapsed
    }
  },
  actions: {
  },
  modules: {
  },
  //安装插件控制持久化
  plugins:[createPersistedState({
    paths:["isCollapsed"]
  })]
})
