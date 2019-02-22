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
        <v-layout
          row
          v-if="item.heading"
          align-center
          :key="item.heading"
        >
        </v-layout>
        <v-list-group no-action sub-group
                      v-else-if="item.children"
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
              <router-link :click="child.evt" :to="child.href">
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
      <span class="hidden-sm-and-down">School Management</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <!--<v-btn flat><router-link to="/adminDashboard" style="color: #fff;">Dashboard</router-link></v-btn>-->
        <template v-for="itemT in items">
          <v-menu offset-y no-action sub-group
                        v-if="itemT.children"
                        v-model="itemT.model"
                        :key="itemT.text"
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                {{ itemT.text }}
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, j) in itemT.children"
              :key="j"
            >
              <v-list-tile-content>
                <router-link :click="child.evt" :to="child.href">
                  <v-list-tile-title>
                    {{ child.text }}
                  </v-list-tile-title>
                </router-link>
              </v-list-tile-content>
            </v-list-tile>
          </v-menu>
          <v-list-tile v-else :key="itemT.text">
            <v-list-tile-content>
              <router-link :to="itemT.href">
                <v-list-tile-title>
                  {{ itemT.text }}
                </v-list-tile-title>
              </router-link>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      <!--end---->
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
          { icon: 'close', text: 'Logout', href: '', evt: 'logout' }
        ]
      }
    ]
  }),
  props: {
    source: String
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
  .v-menu__content {
    background-color: #fff;
    top:65px !important;
  }
</style>
