import Vue from 'vue'
import Router from 'vue-router'
import adminLogin from '@/components/adminLogin'
import adminDashboard from '@/components/adminDashboard'
import addStudent from '@/components/addStudent'
import studentList from '@/components/studentList'
import addParent from '@/components/addParent'
import parentList from '@/components/parentList'
import addTeacher from '@/components/addTeacher'
import teacherList from '@/components/teacherList'
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
      path: '/addStudent',
      name: 'addStudent',
      component: addStudent
    },
    {
      path: '/studentList',
      name: 'studentList',
      component: studentList
    },
    {
      path: '/addTeacher',
      name: 'addTeacher',
      component: addTeacher
    },
    {
      path: '/teacherList',
      name: 'teacherList',
      component: teacherList
    },
    {
      path: '/addParent',
      name: 'addParent',
      component: addParent
    },
    {
      path: '/parentList',
      name: 'parentList',
      component: parentList
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
