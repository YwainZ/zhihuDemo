import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const index = resolve => require(['../views/index.vue'], resolve)
const hot = resolve => require(['../views/hot.vue'], resolve)
const news = resolve => require(['../views/news.vue'], resolve)
const theme = resolve => require(['../views/theme.vue'], resolve)
const themeInfo = resolve => require(['../views/themeInfo.vue'], resolve)
const themeDetail = resolve => require(['../views/themesDetail.vue'], resolve)
const hotDetail = resolve => require(['../views/hotDetail.vue'], resolve)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/hot',
      name: 'hot',
      component: hot

    },
    {
      path: '/theme',
      name: 'theme',
      component: theme
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/themeDetail',
      name: 'themeDetail',
      component: themeDetail
    },
    {
      path: '/themeDetail/themeInfo',
      name: 'themeInfo',
      component: themeInfo
    },
    {
      path: '/hot/hotDeatil',
      name: 'hotDetail',
      component: hotDetail
    }
  ]
})
