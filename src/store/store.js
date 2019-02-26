import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: false,
  state: {
    token: localStorage.getItem('token') || '',
    status: '',
    userid: localStorage.getItem('userid') || '',
    fetchUsers: []
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    token: state => state.token,
    userid: state => state.userid,
    userlist: state => state.fetchUsers
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, data) {
      state.status = 'success'
      state.token = data.token
      state.userid = data.userid
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
    },
    FETCH_USERS (state, data) {
      state.fetchUsers = data.response
    }
  },
  actions: {
    AUTH_REQUEST ({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'http://10.195.37.114:8000/api/login',
          data: user,
          method: 'POST'
        })
          .then(resp => {
            const token = resp.data.token
            const userid = resp.data.userid
            const role = resp.data.role
            const err = ''
            if (role !== 'Admin') {
              reject(err)
            }
            localStorage.setItem('token', token)
            localStorage.setItem('userid', userid)
            commit('auth_success', { 'token': token, 'userid': userid })
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            localStorage.removeItem('userid')
            reject(err)
          })
      })
    },
    logout ({commit}) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        localStorage.removeItem('userid')
        resolve()
      })
    },
    fetchUsers ({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'http://10.195.37.114:8000/api/users',
          params: { role: 'Student' },
          method: 'GET',
          headers: {
            Authorization: 'Token ' + user
          }
        })
          .then(resp => {
            commit('FETCH_USERS', { 'response': resp.data })
            resolve(resp)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
})
