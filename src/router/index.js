import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmpresaView from '../views/EmpresaView.vue'
import ContainerView from '../views/ContainerView.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/empresa',
      name: 'empresa',
      component: EmpresaView
    },
    {
      path: '/container',
      name: 'container',
      component: ContainerView
    }
  ]
})

export default router
