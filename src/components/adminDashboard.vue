<template>
  <div id="adminDashboard">
    <v-app id="inspire">
      <adminHeader></adminHeader>
      <v-content>
        <v-container
          grid-list-lg
        >
          <v-layout align-center justify-center>
            <!--<v-flex xs10>
              <span v-if="isLoggedIn"> <a @click="logout">Logout</a></span>
            </v-flex>-->
              <v-flex xs12 sm4>
                <v-card color="blue-grey darken-2" class="white--text">
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Students</div>
                      <span>5000</span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat dark>View now</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 sm4>
                <v-card color="cyan darken-2" class="white--text">
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Parents</div>
                      <span>20000</span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat dark>View now</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 sm4>
                <v-card color="purple" class="white--text">
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Teachers</div>
                      <span>25000</span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat dark>View now</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import adminHeader from './adminHeader'
export default {
  name: 'adminDashboard',
  components: { adminHeader },
  computed: {
    isLoggedIn: function () { return this.$store.getters.isLoggedIn },
    authStatus: function () { return this.$store.getters.authStatus },
    token: function () { return this.$store.getters.token },
    userid: function () { return this.$store.getters.userid }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>
