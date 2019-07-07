import Vue from 'vue'
import Router from 'vue-router'
import dianying from './dianying';
import my from './my'
import yingyuan from './yingyuan';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'dianying'
    },
    dianying,
    my,
    yingyuan,
    {
      path:'/*',
      redirect:'dianying'
    }
  ]
})
