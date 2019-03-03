import Vue from 'vue';
import api from '../api/News';
import Vuex from 'vuex';
Vue.use(Vuex);
export const store= new Vuex.Store({
    state:{
      users:[],

 },

 mutations:{
     
     addUsers(state,payload){
    state.users.push(payload)
    },
    setUser(state,user){
      state.users=user
    }

 },

 actions:{
    addUsers({commit}){
        commit('addUsers',
  {
    user:3,         
    userName: "sahil",
    image: "flower3.jpg",
})},
   fetchData({commit},user){
   user= api.fetchDatas();
   alert("user apiDat"+user)
 commit('setUser',user)
 }

},
 getters:{
     getUsers(state){
    //    alert("halala");
        return state.users;
     },

    //  getUserId(id){
    //    return this.getUsers().then((obj)=>obj.id===id)
    //  }
     getUserId: (state) => (id) => {
       alert(id);
      return state.users.find(user => user.id === id)
    }
     
 }
})
   export default store;
