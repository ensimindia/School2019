import axios from 'axios'
const state = {
  usertoken: localStorage.getItem('token') || '',
  userstatus: localStorage.getItem('status') || '',
  userrole: localStorage.getItem('userrole') || '',
  useruseid: localStorage.getItem('userid') || ''
}
const getters = {
  usertoken: state => state.usertoken,
  useruseid: state => state.useruseid,
  userrole: state => state.userrole
}
const mutations = {
  user_auth_request (state) {
    state.userstatus = 'loading'
  },
  user_auth_success (state, data) {
    state.userstatus = 'success'
    state.usertoken = data.token
    state.useruseid = data.useruseid
    state.userrole = data.userrole
  },
  user_auth_error (state) {
    state.userstatus = 'error'
  },
  userlogout (state) {
    state.userstatus = ''
    state.usertoken = ''
    state.userrole = ''
  }
}
const actions = {
  AUTH_USER_REQUEST ({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('user_auth_request')
      axios({
        url: 'http://10.195.37.114:8000/api/login',
        data: user,
        method: 'POST'
      })
        .then(resp => {
          const usertoken = resp.data.token
          const useruseid = resp.data.userid
          const userrole = resp.data.role
          if (resp.data.role === 'Admin')
          {
            reject(err)
          }
          localStorage.setItem('token', usertoken)
          localStorage.setItem('userid', useruseid)
          localStorage.setItem('userrole', userrole)
          commit('user_auth_success', { 'usertoken': usertoken, 'useruseid': useruseid, 'userrole': userrole  } )
          resolve(resp)
        })
        .catch(err => {
          commit('user_auth_error')
          localStorage.removeItem('usertoken')
          localStorage.removeItem('useruseid')
          localStorage.removeItem('usertype')
          reject(err)
        })
    })
  },
  logout ({commit}) {
  return new Promise((resolve, reject) => {
    commit('userlogout')
    localStorage.removeItem('token')
    localStorage.removeItem('userid')
    localStorage.removeItem('userrole')
    resolve()
    })
    }
}
export default {
  state,
  mutations,
  actions,
  getters
}
