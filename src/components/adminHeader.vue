<template>
  <div id="adminHeader">
  <v-navigation-drawer
    fixed
    :clipped="$vuetify.breakpoint.mdAndUp"
    app
    v-model="drawer"
    mobile-break-point="10240"
  >
    <v-list dense>
      <template v-for="item in items">
        <v-list-group no-action sub-group
                      v-if="item.children"
                      v-model="item.model"
                      :key="item.text"
                      :prepend-icon="item.model ? item.icon : item['icon-alt']"
                      append-icon=""
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              {{ item.text }}
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="(child, i) in item.children"
            :key="i"
          >
            <v-list-tile-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <router-link :click="child.userLogout" :to="child.href">
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </router-link>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile v-else :key="item.text">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <router-link :to="item.href">
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar
    color="blue darken-3"
    dark
    app
    :clipped-left="$vuetify.breakpoint.mdAndUp"
    fixed
  >
    <v-toolbar-title class="ml-0 pl-0">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <span class="hidden-sm-and-down">School Management {{authStatus}}
      </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-menu offset-y
              v-for="itemMenu in items"
              v-bind:key="itemMenu.text"
      >
        <v-btn
          slot="activator"
          color="blue darken-3"
          dark
        >
          <v-list-tile-title v-if ="itemMenu.children">
            {{ itemMenu.text }}
          </v-list-tile-title>
          <router-link v-else :to="itemMenu.href" class="txtwt">
            {{ itemMenu.text }}
          </router-link>
        </v-btn>
        <v-list v-if="itemMenu.children">
          <v-list-tile
            v-for="(childText, J) in itemMenu.children"
                       :keyN="J"
            v-bind:key="childText.text"
          >
            <router-link :click="childText.userLogout" :to="childText.href" >
              <v-list-tile-title>
                {{ childText.text }}
              </v-list-tile-title>
            </router-link>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
  </div>
</template>
<script>
export default {
  name: 'adminHeader',
  data: () => ({
    dialog: false,
    drawer: null,
    items2: [
      { icon: 'lock', text: 'Change Password', href: 'changePassword' },
      { icon: 'close', text: 'Logout', href: 'adminDashboard' }
    ],
    items: [
      { icon: 'dashboard', text: 'Dashboard', href: 'adminDashboard' },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'User',
        model: false,
        children: [
          { icon: 'edit', text: 'Add New User', href: 'addUser' },
          { icon: 'list', text: 'User List', href: 'userList' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Class',
        model: false,
        children: [
          { icon: 'list', text: 'Class List', href: 'classList' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Subject',
        model: false,
        children: [
          { icon: 'edit', text: 'Add New Subject', href: 'addSubject' },
          { icon: 'list', text: 'Subject List', href: 'subjectList' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Scheduling',
        model: false,
        children: [
          { icon: 'edit', text: 'Add New Schedule', href: 'addSchedule' },
          { icon: 'list', text: 'Schedule List', href: 'scheduleList' }
        ]
      },
      {
        icon: 'settings',
        'icon-alt': 'settings',
        text: 'Settings',
        model: false,
        children: [
          { icon: 'lock', text: 'Change Password', href: 'changePassword' },
          { icon: 'close', text: 'Logout', href: '/admin', userLogout: 'logout()' }
        ]
      }
    ]
  }),
  props: {
    source: String
  },
  computed: {
    isLoggedIn: function () { return this.$store.getters.isLoggedIn },
    authStatus: function () { return this.$store.getters.authStatus },
    token: function () { return this.$store.getters.token },
    userid: function () { return this.$store.getters.userid }
  },
  methods: {
    logout: function () {
      alert('Logout')
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>
<style scoped>
  a{
    text-decoration: none;
    color: #000;
  }
  a:hover{
    text-decoration: underline;
    color: #000;
  }
  .txtwt {
    color: #fff;
  }
  .router-link-active {
    color: darkorange;
  }
</style>
