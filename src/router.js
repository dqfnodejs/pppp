import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Qxlp from './views/Qxlp.vue'
import Eslp from './views/Elsp.vue'
import Qxsp from './views/Qxsp.vue'
import Lsdt from './views/Lsdt.vue'
import Lxwm from './views/Lxwm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/qxlp/:fenlei',
      name: 'qxlp',
      component: Qxlp
    },
    {
      path: '/lsdt',
      name: 'lsdt',
      component: Lsdt
    },
    {
      path: '/lxwm',
      name: 'lxwm',
      component: Lxwm
    },
  ]
})
