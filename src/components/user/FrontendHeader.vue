<template>
  <div class="header">
    <v-app style="height:60px;">
      <v-toolbar dark color="primary">
        <router-link to="/"><v-toolbar-title class="white--text">Title</v-toolbar-title></router-link>
        <v-spacer></v-spacer>
        <v-menu bottom origin="center" transition="scale-transition" v-if=" this.$store.getters.userrole === ''">
          <v-btn slot="activator" color="primary" dark >
            User Login
          </v-btn>
          <div class="menu-list" origin="center">
            <v-list>
              <v-list-tile v-for="(item, i) in items" :key="i">
                <v-list-tile-title>
                  <router-link :to="item.url">
                    {{ item.title }}
                  </router-link>
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </div>
        </v-menu>
        <v-menu bottom origin="center" transition="scale-transition" v-else >
          <v-btn slot="activator" color="primary" dark v-on:click="logout()">
            Logout
          </v-btn>
        </v-menu>
      </v-toolbar>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'FrontendHeader',
  data: () => ({
    items: [
      { title: 'Parent Login', url: 'userlogin', val: 'p' },
      { title: 'Teacher Login', url: 'userlogin', val: 't' }
    ]
  }),
  methods: {
    logout: function () {
      alert('You want to logout')
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style scoped>

</style>
