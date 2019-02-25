<template>
  <div id="addClass">
    <v-app id="inspire">
      <adminHeader></adminHeader>
      <v-content>
        <v-container
          fluid
          grid-list-md text-xs-center
        >
          <v-flex xs11>
            <div class="font-weight-thin my-2 display-1 text-lg-left">
              Add New Class
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
                <v-text-field
                  v-model="name"
                  v-validate="'required'"
                  :error-messages="errors.collect('name')"
                  label="Class Name"
                  data-vv-name="name"
                  required
                ></v-text-field>
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
  name: 'addClass',
  components: { adminHeader },
  data: () => ({
    name: '',
    dictionary: {
      custom: {
        name: {
          required: () => 'Class Name can not be empty'
          // custom messages
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
      this.name = ''
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
