import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainDocumentCardsView from '../views/MainDocumentCardsView.vue'
import EquivalentDocumentCardsView from '../views/EquivalentDocumentCardsView.vue'
import MappingAttributesView from '../views/MappingAttributesView.vue'
import RequestDocumentsView from '../views/RequestDocumentsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: MainDocumentCardsView
  },  
  {
    path: '/equivalent',
    name: 'equivalent',
    component: EquivalentDocumentCardsView
  },  {
    path: '/mapping',
    name: 'mapping',
    component: MappingAttributesView
  },{
    path: '/requestdocs',
    name: 'mapping',
    component: RequestDocumentsView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
