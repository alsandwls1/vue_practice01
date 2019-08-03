import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/basic-directive',
      name: 'basicDirective',
      component: () => import('./views/BasicDirective.vue')
    },
    {
      path: '/sign-in',
      name: 'signIn',
      component: () => import('./views/SignIn.vue')

    },
    {
      path: '/firebase-data',
      name: 'firebaseData',
      component: () => import('./views/FirebaseData.vue')
    },
    {
      path: '/product-list',
      name: 'productList',
      component: () => import('./views/ProductList.vue')
    },
    {
      path: '/parent-page',
      name: 'parentPage',
      component: () => import('./views/ParentPage.vue')
    },
    {
      path: '/next-page',
      name: 'nextPage',
      component: () => import('./views/NextPage.vue'),
      props:true
    },
    {
      path: '/inquiry-list',
      name: 'inquiryList',
      component: () => import('./views/InquiryList.vue')
    }
  ]
})
