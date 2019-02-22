<template>
  <div id="addStudent">
    <v-app id="inspire">
      <adminHeader></adminHeader>
      <v-content>
        <v-container
          grid-list-md text-xs-center
        >
          <v-flex xs11>
            <div class="font-weight-thin my-2 display-1 text-lg-left">
              Add New Schedule
            </div>
          </v-flex>
          <v-layout row wrap>
            <v-flex xs11>
              <div class="font-weight-thin my-2 display-1 text-lg-left">
                <v-divider class=""></v-divider>
              </div>
            </v-flex>
            <v-flex xs11 pl-3>
              <form>
                <v-select
                  v-model="teacher"
                  v-validate="'required'"
                  :items="itemsSelect"
                  :error-messages="errors.collect('teacher')"
                  label="Select Teacher"
                  data-vv-name="teacher"
                  required
                ></v-select>
                <v-select
                  v-model="sclass"
                  v-validate="'required'"
                  :items="itemsSelectClass"
                  :error-messages="errors.collect('sclass')"
                  label="Select Class"
                  data-vv-name="sclass"
                  required
                ></v-select>
                <v-select
                  v-model="subject"
                  v-validate="'required'"
                  :items="itemsSelectSubject"
                  :error-messages="errors.collect('subject')"
                  label="Select Subject"
                  data-vv-name="subject"
                  required
                ></v-select>
                <v-datetime-picker
                  label="Start Datetime"
                  v-model="datetime">
                </v-datetime-picker>
                <v-datetime-picker
                  label="End Datetime"
                  v-model="datetimeNew">
                </v-datetime-picker>
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
import adminHeader from './adminHeader'
export default {
  name: 'addStudent',
  components: { adminHeader },
  data: () => ({
    datetime: new Date().toISOString().substr(0, 10),
    datetimeNew: new Date().toISOString().substr(0, 10),
    teacher: null,
    sclass: null,
    subject: null,
    itemsSelect: [
      'Jack',
      'Oliver Queen',
      'Ram Sen',
      'Flash qrt'
    ],
    itemsSelectClass: [
      'i',
      'ii',
      'iii',
      'iv',
      'v',
      'vi'
    ],
    itemsSelectSubject: [
      'Math',
      'Physic',
      'English',
      'Life Science',
      'Hindi',
      'Bengla'
    ],
    dictionary: {
      custom: {
        teacher: {
          required: 'Select field is required'
        },
        sclass: {
          required: 'Select field is required'
        },
        subject: {
          required: 'Select field is required'
        }
      }
    }
  }),
  mounted () {
    this.$validator.localize('en', this.dictionary)
  },
  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.teacher = null
      this.sclass = null
      this.subject = null
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
