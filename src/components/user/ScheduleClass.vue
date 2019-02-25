<template id="Scheduleclass">
  <div class="scedule">
    <frontend-header></frontend-header>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm4 md2>
          <front-sidebar></front-sidebar>
        </v-flex>
        <v-flex xs12 sm4 md6 class="table-schedule">
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            hide-actions
            :pagination.sync="pagination"
            class="elevation-1"
            disable-initial-sort="true"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.day }}</td>
              <td class="text-xs-right">{{ props.item.ten }}</td>
              <td class="text-xs-right">{{ props.item.eleven }}</td>
              <td class="text-xs-right">{{ props.item.twelve }}</td>
              <td class="text-xs-right">{{ props.item.thirteen }}</td>
              <td class="text-xs-right">{{ props.item.fourteen }}</td>
              <td class="text-xs-right">{{ props.item.fifteen }}</td>
              <td class="text-xs-right">{{ props.item.sixteen }}</td>
            </template>
          </v-data-table>
          <div class="text-xs-center pt-2">
            <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
          </div>
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
  name: 'ScheduleClass',
  components: {FrontSidebar, FrontendFooter, FrontendHeader},
  data () {
    return {
      search: '',
      pagination: {},
      selected: [],
      headers: [
        { text: 'Day', value: 'day' },
        { text: '10-11 am', value: 'ten' },
        { text: '11-12 am', value: 'eleven' },
        { text: '12-13 pm', value: 'twelve' },
        { text: '13-14 pm', value: 'thirteen' },
        { text: '14-15 pm', value: 'fourteen' },
        { text: '15-16 pm', value: 'fifteen' },
        { text: '16-17 pm', value: 'sixteen' }
      ],
      desserts: [
        {
          day: 'Mondays (25/02/2019)',
          ten: 'Bengali',
          eleven: 'English',
          twelve: 'Life Science',
          thirteen: 'Math',
          fourteen: 'Science',
          fifteen: 'Hindi',
          sixteen: 'Geography'
        },
        {
          day: 'Tuesday (26/02/2019)',
          ten: 'Bengali',
          eleven: 'English',
          twelve: 'Life Science',
          thirteen: 'Math',
          fourteen: 'Science',
          fifteen: 'Hindi',
          sixteen: 'Geography'
        },
        {
          day: 'Wednesday (27/02/2019)',
          ten: 'Bengali',
          eleven: 'English',
          twelve: 'Life Science',
          thirteen: 'Math',
          fourteen: 'Science',
          fifteen: 'Hindi',
          sixteen: 'Geography'
        },
        {
          day: 'Thursday (28/02/2019)',
          ten: 'Bengali',
          eleven: 'English',
          twelve: 'Life Science',
          thirteen: 'Math',
          fourteen: 'Science',
          fifteen: 'Hindi',
          sixteen: 'Geography'
        },
        {
          day: 'Friday (01/03/2019)',
          ten: 'Bengali',
          eleven: 'English',
          twelve: 'Life Science',
          thirteen: 'Math',
          fourteen: 'Science',
          fifteen: 'Hindi',
          sixteen: 'Geography'
        },
        {
          day: 'Saturday (02/03/2019)',
          ten: 'Bengali',
          eleven: 'English',
          twelve: 'Life Science',
          thirteen: 'Math'
        }
      ]
    }
  },
  computed: {
    pages () {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) return 0

      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  }
}
</script>

<style scoped>
.table-schedule {
  z-index: 99999;
}
</style>
