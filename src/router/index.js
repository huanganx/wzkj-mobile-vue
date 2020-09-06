import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => {
      return import( /* webpackChunkName: "about" */ '../views/Home')
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: function () {
      return import( /* webpackChunkName: "about" */ '../views/Login')
    }
  },
  {
    path: '/my',
    name: 'My',
    component: function () {
      return import( /* webpackChunkName: "about" */ '../views/My')
    }
  },
  {
    path: '/mail-list',
    name: 'MailList',
    component: function () {
      return import( /* webpackChunkName: "about" */ '../views/MailList')
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: function () {
      return import( /* webpackChunkName: "about" */ '../views/Message')
    }
  },
  {
    path: '/task',
    component: {
      render: h => h('router-view')
    },
    children: [{
        path: '',
        name:'Task',
        component: () => {
          return import( /* webpackChunkName: "about" */ '../views/Task')
        },
      },
      {
        path: 'sell',
        name:'Sell',
        component: () => import( /* webpackChunkName: "about" */ '../views/Task/sell')
      },
      {
        path: 'select',
        name:'Select',
        component: () => import( /* webpackChunkName: "about" */ '../views/Task/select')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === null || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});

export default router