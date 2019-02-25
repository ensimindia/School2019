<template id="userlogin">
  <div>
    <frontend-header></frontend-header>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
          <v-form>
            <v-card-title>
              <span class="headline" justify-center >User Login</span>
            </v-card-title>
            <div>
              <v-alert v-if="submited"
                       :value="true"
                       color="error"
                       icon="warning"
                       outline
              >
                Invalid Username/Password
              </v-alert>
            </div>
            <v-text-field
                v-model="username"
                label="Username"
                data-vv-name="username"
                required
              ></v-text-field>
            <v-text-field
                v-model="password"
                data-vv-name="password"
                label="Password*"
                v-validate="'required'"
                type="password"
                required></v-text-field>
            <v-btn color="green" type="button" v-on:click="submit()">Submit</v-btn>
          </v-form>
        </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <frontend-footer fixed></frontend-footer>
  </div>
</template>

<script>
import FrontendHeader from './FrontendHeader'
import FrontendFooter from './FrontendFooter'
export default {
  name: 'Userlogin',
  components: {FrontendFooter, FrontendHeader},
  data: () => {
    return {
      username: '',
      password: '',
      submited: false
    }
  },
  methods: {
    submit: function () {
      const { username, password } = this
      this.$store.dispatch('AUTH_USER_REQUEST', {username, password})
        .then((response) => {
          console.log(response)
          this.$router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
          this.submited = true
        })
    }
  }
}
</script>

<style scoped>

</style>
