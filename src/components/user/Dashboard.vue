<template id="TeacherDashboard">
  <div>
    <frontend-header></frontend-header>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm4 md2>
          <front-sidebar></front-sidebar>
        </v-flex>
        <v-flex xs12 sm4 md6>
          <v-toolbar flat>
            <v-list>
              <v-list-tile>
                <v-list-tile-title class="title">
                  Personal Details
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-toolbar>
          <v-divider></v-divider>
          <v-card dark color="purple">
            <v-form>
              <v-flex xs12 sm12>
                <v-text-field
                  v-model="user.fstname"
                  label="First Name:"
                  box
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm12>
                <v-text-field
                  v-model="user.lstname"
                  label="Last Name:"
                  box
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm12>
                <v-text-field
                  v-model="user.email"
                  label="Email"
                  box
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm12>
                <v-text-field
                  v-model="user.username"
                  label="Username"
                  box
                ></v-text-field>
              </v-flex>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <frontend-footer></frontend-footer>
  </div>
</template>

<script>
import FrontendHeader from './FrontendHeader'
import FrontendFooter from './FrontendFooter'
import FrontSidebar from './FrontSidebar'
export default {
  name: 'Dashboard',
  components: {FrontSidebar, FrontendFooter, FrontendHeader},
  data () {
    return {
      user: {
        fstname: '',
        lstname: '',
        email: '',
        username: ''
      }
    }
  },
  created: {
    
  }
}
</script>

<style scoped>

</style>
