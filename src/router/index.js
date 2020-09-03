import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=> {
      return import(/* webpackChunkName: "about" */ '../views/Home')
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Login')
    }
  },
  {
    path: '/my',
    name: 'My',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/My')
    }
  },
  {
    path: '/mail-list',
    name: 'MailList',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/MailList')
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Message')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
