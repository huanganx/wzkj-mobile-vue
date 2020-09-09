import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import 'vant/lib/index.css'
import {
  Lazyload
} from 'vant'
Vue.use(Lazyload, {
  lazyComponent: true
})
window.testdata = {
  task: [{
      id: 1,
      name: '开始app开发',
      liable: '黄安宣',
      endTime: '2020-10-01 10:00',
      startTime: '2020-09-10 10:00',
      degree: '一般',
      seller: '小黎'
    },
    {
      id: 2,
      name: '开始app开发2',
      liable: '黄安宣2',
      endTime: '2020-10-01 10:00',
      startTime: '2020-09-10 10:00',
      degree: '重要',
      seller: '小黎2'
    }
  ],
  follow: [
    {
      id:1,
      history: [
        {
          name: '小黄',
          title: '物资准备工作',
          time: '2020-09-08 22:00'
        },
        {
          name: '小黎',
          title: '物资准备工作',
          time: '2020-09-06 21:00'
        },
      ]
    }
  ]
}
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')