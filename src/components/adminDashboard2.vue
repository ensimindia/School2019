<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        fixed
        :clipped="$vuetify.breakpoint.mdAndUp"
        app
        v-model="drawer"
      >
        <v-list dense>
          <template v-for="item in items">
            <v-layout
              row
              v-if="item.heading"
              align-center
              :key="item.heading"
            >
              <v-flex xs6>
                <v-subheader v-if="item.heading">
                  {{ item.heading }}
                </v-subheader>
              </v-flex>
              <v-flex xs6 class="text-xs-center">
                <a href="#!" class="body-2 black--text">EDIT</a>
              </v-flex>
            </v-layout>
            <v-list-group
              v-else-if="item.children"
              v-model="item.model"
              :key="item.text"
              :prepend-icon="item.model ? item.icon : item['icon-alt']"
              append-icon=""
            >
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.text }}
                  </v-list-tile-title>
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
                  <v-list-tile-title>
                    {{ child.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-list-tile v-else @click="" :key="item.text">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
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
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <span class="hidden-sm-and-down">School Management</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!--<v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>-->
        <v-btn icon large>
          <v-avatar size="32px" tile>
            <img
              src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
              alt="Vuetify"
            >
          </v-avatar>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <v-layout justify-center align-center>
           

          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
export default {
  $_veeValidate: {
    validator: 'new'
  },
    data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: 'dashboard', text: 'Dashboard' },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Student Mgmt',
        model: false,
        children: [
          { icon: 'add', text: 'Add New Student' },
          { icon: 'list', text: 'Student List' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Teacher Mgmt',
        model: false,
        children: [
          { icon: 'add', text: 'Add New Teacher' },
          { icon: 'list', text: 'Teacher List' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Parent Mgmt',
        model: false,
        children: [
          { icon: 'add', text: 'Add New Parent' },
          { icon: 'list', text: 'Parent List' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Class Mgmt',
        model: false,
        children: [
          { icon: 'add', text: 'Add New Class' },
          { icon: 'list', text: 'Class List' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Subject Mgmt',
        model: false,
        children: [
          { icon: 'add', text: 'Add New Subject' },
          { icon: 'list', text: 'Subject List' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Scheduling Mgmt',
        model: false,
        children: [
          { icon: 'add', text: 'Add New Schedule' },
          { icon: 'list', text: 'Schedule List' }
        ]
      },
      {
        icon: 'settings',
        'icon-alt': 'settings',
        text: 'Settings',
        model: false,
        children: [
          { icon: 'lock', text: 'Change Password' },
          { icon: 'poweroff', text: 'Logout' }
        ]
      }
      /*{ icon: 'settings', text: 'Settings' },
      { icon: 'chat_bubble', text: 'Send feedback' },
      { icon: 'help', text: 'Help' },
      { icon: 'phonelink', text: 'App downloads' },
      { icon: 'keyboard', text: 'Go to the old version' }*/
    ]
  }),
  props: {
    source: String
  },
  methods: {
    submit() {
      this.$validator.validateAll()
    }
  }
}
</script>
