import Vue from 'vue'
import Router from 'vue-router'
import Pie from '@/components/pie'

Vue.use(Router)

export default new Router({
  routes: [
   {
     path:'/pie',
     component:Pie
   }
  ]
})
