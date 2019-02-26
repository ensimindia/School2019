import axios from 'axios'
const state = {
  userfstname: '',
  userlstname: '',
  useremail: '',
  username: '',
  userstatus: ''
}
const getters = {
  userfstname: state => state.userfstname,
  userlstname: state => state.userlstname,
  useremail: state => state.useremail,
  username: state => state.username,
}
const mutations = {
  profile_auth_request (state) {
    state.userstatus = 'loading'
  },
  profile_auth_success (state, data) {
    state.userstatus = 'success'
    state.userfstname = data.userfstname
    state.userlstname = data.userlstname
    state.useremail = data.useremail
    state.username = data.username
  }
}
const actions = {
  USER_DETAILS({commit}, user){
    return new Promise((resolve, reject) => {
      commit('profile_auth_request')
      axios({
        url: 'http://10.195.37.114:8000/api/users/'+user.UserId,
        method: 'GET',
        headers: {
          Authorization: 'Token '+ user.Usertoken
        }
      })
        .then(resp => {
          const userfstname = resp.data.first_name
          const userlstname = resp.data.last_name
          const useremail = resp.data.email
          const username = resp.data.username
          commit('profile_auth_success', { 'userfstname': userfstname, 'userlstname': userlstname, 'useremail': useremail, 'username': username  } )
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
