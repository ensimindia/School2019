<template>
  <div id="studentList">
    <v-app id="inspire">
      <adminHeader></adminHeader>
      <v-content>
        <v-container
          fluid
          grid-list-md text-xs-center
        >
          <v-flex xs12>
            <div class="font-weight-thin my-2 display-1 text-lg-left">
              Student List
            </div>
          </v-flex>
          <v-layout row wrap>
            <v-flex xs11>
              <div class="font-weight-thin my-2 display-1 text-lg-left">
                <v-divider class=""></v-divider>
              </div>
            </v-flex>
            <v-flex xs11 pl-3>
              <div>
                <v-toolbar flat color="white">
                  <!--<v-toolbar-title>Student List</v-toolbar-title>-->
                  <v-dialog v-model="dialog" max-width="700px">
                    <v-btn slot="activator" color="primary" dark class="mb-2">Add New Student</v-btn>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                      </v-card-title>

                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout wrap>
                            <v-flex xs12 sm6 md6>
                              <v-text-field v-model="editedItem.fname" label="First Name"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                              <v-text-field v-model="editedItem.lname" label="Last Name"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                              <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                              <v-text-field v-model="editedItem.password" label="Password"></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                        <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-spacer></v-spacer>
                  <v-card-title>
                    <v-text-field
                      v-model="search"
                      append-icon="search"
                      label="Search"
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-card-title>
                </v-toolbar>
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  :search="search"
                  class="elevation-1"
                >
                  <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.id }}</td>
                    <td class="text-xs-right">{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.email }}</td>
                    <td class="justify-center layout px-0">
                      <v-icon
                        small
                        class="mr-2"
                        @click="editItem(props.item)"
                      >
                        edit
                      </v-icon>
                      <v-icon
                        small
                        @click="deleteItem(props.item)"
                      >
                        delete
                      </v-icon>
                    </td>
                  </template>
                  <!--<template slot="no-data">
                    <v-btn color="primary" @click="initialize">Reset</v-btn>
                  </template>-->
                  <v-alert slot="no-results" :value="true" color="error" icon="warning">
                    Your search for "{{ search }}" found no results.
                  </v-alert>
                </v-data-table>
              </div>
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
  name: 'studentList',
  components: { adminHeader },
  data: () => ({
    search: '',
    dialog: false,
    headers: [
      {
        text: 'Id',
        align: 'left',
        sortable: false,
        value: 'id'
      },
      { text: 'Name', value: 'name' },
      { text: 'Email', value: 'email' },
      { text: 'Date', value: 'date' },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: '',
      name: 0,
      email: 0,
      date: 0
    },
    defaultItem: {
      id: '',
      name: 0,
      email: 0,
      date: 0
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.desserts = [
        {
          id: '1',
          name: 'Oliver Queen',
          email: 'oliver@gmail.com',
          date: '2019-02-10'
        },
        {
          id: '2',
          name: 'Jack Ken',
          email: 'jack@gmail.com',
          date: '2019-02-10'
        },
        {
          id: '3',
          name: 'Flash 2',
          email: 'flash@gmail.com',
          date: '2019-02-10'
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
<style scoped>
  th {
    font-size: 16px;
  }
</style>
