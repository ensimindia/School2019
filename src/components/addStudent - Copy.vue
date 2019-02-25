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
                  <v-list-tile-title>
                    {{ child.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-list-tile v-else :key="item.text">
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
        <v-toolbar-title style="width: 300px" class="ml-0 pl-0">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <span class="hidden-sm-and-down">School Management</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu bottom left>
          <v-btn
            slot="activator"
            dark
            icon
          >
            <v-icon>more_vert</v-icon>
          </v-btn>

          <v-list>
            <v-list-tile
              v-for="(item2, i) in items2"
              :key="i"
            >
              <v-list-tile-title>{{ item2.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>
      <v-content>
        <v-container
          fluid
          grid-list-md text-xs-center
        >
          <v-flex xs12>
            <div class="font-weight-thin my-2 display-1 text-lg-left">
              Add New Student
            </div>
          </v-flex>
          <v-layout row wrap>
            <v-flex xs10>
              <div class="font-weight-thin my-2 display-1 text-lg-left">
                <v-divider class=""></v-divider>
              </div>
            </v-flex>
            <v-flex xs10 pl-3>
              <form>
                <v-text-field
                  v-model="name"
                  v-validate="'required|max:10'"
                  :counter="10"
                  :error-messages="errors.collect('name')"
                  label="Name"
                  data-vv-name="name"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  v-validate="'required|email'"
                  :error-messages="errors.collect('email')"
                  label="E-mail"
                  data-vv-name="email"
                  required
                ></v-text-field>
                <v-select
                  v-model="select"
                  v-validate="'required'"
                  :items="itemsSelect"
                  :error-messages="errors.collect('select')"
                  label="Select"
                  data-vv-name="select"
                  required
                ></v-select>
                <v-checkbox
                  v-model="checkbox"
                  v-validate="'required'"
                  :error-messages="errors.collect('checkbox')"
                  value="1"
                  label="Option"
                  data-vv-name="checkbox"
                  type="checkbox"
                  required
                ></v-checkbox>
                <v-btn @click="submit">submit</v-btn>
                <v-btn @click="clear">clear</v-btn>
              </form>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
export default {
  data: () => ({
    name: '',
    email: '',
    select: null,
    itemsSelect: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: null,
    dictionary: {
      attributes: {
        email: 'E-mail Address'
        // custom attributes
      },
      custom: {
        name: {
          required: () => 'Name can not be empty',
          max: 'The name field may not be greater than 10 characters'
          // custom messages
        },
        select: {
          required: 'Select field is required'
        }
      }
    },
    dialog: false,
    drawer: null,
    items2: [
      { title: 'Change Password' },
      { title: 'Logout' }
    ],
    items: [
      { icon: 'dashboard', text: 'Dashboard' },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Student Mgmt',
        model: false,
        children: [
          { icon: 'edit', text: 'Add New Student' },
          { icon: 'list', text: 'Student List' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Teacher Mgmt',
        model: false,
        children: [
          { icon: 'edit', text: 'Add New Teacher' },
          { icon: 'list', text: 'Teacher List' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Parent Mgmt',
        model: false,
        children: [
          { icon: 'edit', text: 'Add New Parent' },
          { icon: 'list', text: 'Parent List' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Class Mgmt',
        model: false,
        children: [
          { icon: 'edit', text: 'Add New Class' },
          { icon: 'list', text: 'Class List' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Subject Mgmt',
        model: false,
        children: [
          { icon: 'edit', text: 'Add New Subject' },
          { icon: 'list', text: 'Subject List' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Scheduling Mgmt',
        model: false,
        children: [
          { icon: 'edit', text: 'Add New Schedule' },
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
          { icon: 'close', text: 'Logout' }
        ]
      }
    ],
    itemsBrd: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'adminDashboard'
      },
      {
        text: 'Student List',
        disabled: false,
        href: 'studentList'
      },
      {
        text: 'Add Student',
        disabled: true,
        href: 'addStudent'
      }
    ]
  }),
  props: {
    source: String
  },
  mounted () {
    this.$validator.localize('en', this.dictionary)
  },
  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$validator.reset()
    }
  }
}
</script>
<style scoped>
  .disabled {
    color: grey;
    pointer-events: none;
    text-decoration: none;
  }
  .brdC {
    text-decoration: none;
  }
</style>
