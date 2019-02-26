<template>
  <div id="addParent">
    <v-app id="inspire">
      <adminHeader></adminHeader>
      <v-content>
        <v-container
          grid-list-md text-xs-center
        >
          <v-flex xs11>
            <div class="font-weight-thin my-2 display-1 text-lg-left" id="s2">
              Add New Parent
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
                  v-model="first_name"
                  v-validate="'required'"
                  :error-messages="errors.collect('first_name')"
                  label="First Name"
                  data-vv-name="first_name"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="last_name"
                  v-validate="'required'"
                  :error-messages="errors.collect('last_name')"
                  label="Last Name"
                  data-vv-name="last_name"
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
                <v-text-field
                  v-model="password"
                  v-validate="'required|max:30|min:5'"
                  :counter="30"
                  :error-messages="errors.collect('password')"
                  label="Password"
                  data-vv-name="password"
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
  name: 'addParent',
  components: { adminHeader },
  data: () => ({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    dictionary: {
      attributes: {
        email: 'E-mail Address'
        // custom attributes
      },
      custom: {
        first_name: {
          required: () => 'First Name can not be empty'
          // custom messages
        },
        last_name: {
          required: () => 'Last Name can not be empty'
          // custom messages
        },
        password: {
          required: () => 'Password can not be empty',
          max: 'The password field may not be greater than 30 characters'
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
      this.first_name = ''
      this.last_name = ''
      this.email = ''
      this.password = null
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
