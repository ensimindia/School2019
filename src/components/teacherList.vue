<template>
  <div id="teacherList">
    <v-app id="inspire">
      <adminHeader></adminHeader>
      <v-content>
        <v-container
          grid-list-md text-xs-center
        >
          <v-flex row xs12>
            <div class="font-weight-thin my-2 display-1 text-lg-left" id="s2">
              Teacher List
            </div>
            <!--<v-alert
              :value="true"
              color="success"
              icon="check_circle"
              outline
            >
              Student Added Successfully
            </v-alert>
            <v-alert
              :value="true"
              color="error"
              icon="warning"
              outline
            >
              This is a error alert.
            </v-alert>-->
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
                  <v-flex xs12 sm4>
                    <v-card-title>
                    <v-btn color="primary" dark class="mb-2"><router-link to="/addTeacher" flat class="txt2">Add Teacher</router-link></v-btn>
                    </v-card-title>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex xs12 sm4>
                    <v-card-title>
                      <v-text-field
                        v-model="search"
                        append-icon="search"
                        label="Search"
                        single-line
                        hide-details
                      ></v-text-field>
                    </v-card-title>
                  </v-flex>
                </v-toolbar>
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  :search="search"
                  class="elevation-1"
                >
                  <template slot="items" slot-scope="props">
                    <td class="text-xs-left">{{ props.item.id }}</td>
                    <td class="text-xs-left">{{ props.item.username }}</td>
                    <td class="text-xs-left">{{ props.item.first_name }} {{ props.item.last_name }}</td>
                    <td class="text-xs-left">{{ props.item.email }}</td>
                    <td class="justify-left layout px-0 pl-4">
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
  name: 'teacherList',
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
      { text: 'Username', value: 'username' },
      { text: 'Name', value: 'name' },
      { text: 'Email', value: 'email' },
      { text: 'Actions', value: 'name', align: 'left', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: '',
      username: 0,
      name: 0,
      email: 0
    },
    defaultItem: {
      id: '',
      username: 0,
      name: 0,
      email: 0
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

  },
  methods: {
    initialize () {
      this.desserts = [
        {
          id: '1',
          username: 'Oliver',
          name: 'Oliver Queen',
          email: 'oliver@gmail.com'
        },
        {
          id: '2',
          username: 'Oliver2',
          name: 'Oliver Queen3',
          email: 'oliver@gmail.com'
        },
        {
          id: '3',
          username: 'Oliver',
          name: 'Oliver Queen',
          email: 'oliver@gmail.com'
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
  .txt2 {
    color: #fff;
    text-decoration: none;
  }
</style>
