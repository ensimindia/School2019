<template>
    <div id="FrontSidebar">
      <div v-if="this.$store.getters.userrole === 'Teacher'">
        <v-container>
          <v-toolbar flat>
            <v-list>
              <v-list-tile>
                <v-list-tile-title class="title">
                   Teacher Dashboard
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-toolbar>

          <v-divider></v-divider>

          <v-list dense class="pt-0">
            <v-list-tile
              v-for="item in titems"
              :key="item.title"
            >
              <v-list-tile-content>
                <router-link :to="item.url">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </router-link>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-container>
      </div>
      <div v-else>
        <v-container>
          <v-toolbar flat>
            <v-list>
              <v-list-tile>
                <v-list-tile-title class="title">
                  Parent Dashboard
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-toolbar>

          <v-divider></v-divider>

          <v-list dense class="pt-0">
            <v-list-tile
              v-for="item in pitems"
              :key="item.title"
            >
              <v-list-tile-content>
                <!----<div class="icon">{{item.icon}}</div>-->
                <router-link :to="item.url">
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </router-link>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-container>
      </div>
    </div>
</template>

<script>
export default {
  name: 'FrontSidebar',
  data () {
    return {
      titems: [
        { title: 'Personal Info', url: 'dashboard?value=' + this.$route.query.value, icon: '<font-awesome-icon icon="home" />' },
        { title: 'My Schedule', value: 't', url: 'schedule', icon: '<font-awesome-icon icon="calendar-alt" />' },
        { title: 'Attendance', value: 't', url: 'attendance', icon: '<font-awesome-icon icon="clipboard-user" />' }
      ],
      pitems: [
        { title: 'Personal Info', url: 'dashboard?value=' + this.$route.query.value, icon: '<font-awesome-icon icon="home" />' },
        { title: 'Children List', value: 'p', url: 'students', icon: '<font-awesome-icon icon="clipboard-user" />' }
      ],
      right: null
    }
  }
}
</script>

<style scoped>

</style>
