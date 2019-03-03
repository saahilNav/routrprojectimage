import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import store from './store/index';
import imageDetails from './components/imageDetails.vue'
import sahil from './sahil.vue';
import HelloWorld from './components/HelloWorld.vue';
import { routerHistory, writeHistory } from 'vue-router-back-button'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(routerHistory)
  export const router=new VueRouter({
    mode:'history',
    routes:[
      {path:'/', component: HelloWorld},

       {path:'/image/:id', component: imageDetails},
       {path:'/image1', component: sahil},
    ]
    
  });
  router.afterEach(writeHistory)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
