import Vue from 'vue'
import Router from 'vue-router'
import adminLogin from '@/components/adminLogin'
import adminDashboard from '@/components/adminDashboard'
import addUser from '@/components/addUser'
import userList from '@/components/userList'
import classList from '@/components/classList'
import addSubject from '@/components/addSubject'
import subjectList from '@/components/subjectList'
import addSchedule from '@/components/addSchedule'
import scheduleList from '@/components/scheduleList'
import changePassword from '@/components/changePassword'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'adminLogin',
      component: adminLogin
    },
    {
      path: '/adminDashboard',
      name: 'adminDashboard',
      component: adminDashboard
    },
    {
      path: '/addUser',
      name: 'addUser',
      component: addUser
    },
    {
      path: '/userList',
      name: 'userList',
      component: userList
    },
    {
      path: '/classList',
      name: 'classList',
      component: classList
    },
    {
      path: '/addSubject',
      name: 'addSubject',
      component: addSubject
    },
    {
      path: '/subjectList',
      name: 'subjectList',
      component: subjectList
    },
    {
      path: '/addSchedule',
      name: 'addSchedule',
      component: addSchedule
    },
    {
      path: '/scheduleList',
      name: 'scheduleList',
      component: scheduleList
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: changePassword
    }
  ]
})
