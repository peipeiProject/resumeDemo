import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import resumeSearch from '@/components/resumeSearch'
import resumeSystem from '@/components/resumeSystem'
import resumeSearchList from '@/components/resumeSearchList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/resumeSearch',
          name: '简历搜索',
          component: resumeSearch
        },
        {
          path: '/resumeSystem',
          name: '简历管理',
          component: resumeSystem
        },
        {
          path: '/resumeSearchList',
          name: '简历列表',
          component: resumeSearchList
        }
      ]
    },
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/resumeSearch'
    }
  ]
})
