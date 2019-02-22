<template>
  <div id="app">
    <v-app id="inspire">
      <adminHeader></adminHeader>
      <v-content>
        <v-container
          grid-list-md text-xs-center
        >
          <v-flex xs12 sm11>
            <div class="font-weight-thin my-2 display-1 text-lg-left">
              Change Password
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
                  v-model="password"
                  v-validate="'required|max:20'"
                  :counter="20"
                  :error-messages="errors.collect('oldpassword')"
                  label="Old Password"
                  data-vv-name="oldpassword"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="npassword"
                  v-validate="'required|max:20'"
                  :counter="20"
                  :error-messages="errors.collect('npassword')"
                  label="New Password"
                  data-vv-name="npassword"
                  required
                  ref="npassword"
                ></v-text-field>
                <v-text-field
                  v-model="cpassword"
                  v-validate="'required|max:20|confirmed:npassword'"
                  :counter="20"
                  :error-messages="errors.collect('cpassword')"
                  label="Confirm Password"
                  data-vv-name="cpassword"
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
  name: 'app',
  components: { adminHeader },
  data: () => ({
    password: '',
    npassword: '',
    cpassword: '',
    dictionary: {
      custom: {
        password: {
          required: () => 'Old Password can not be empty',
          max: 'The password field may not be greater than 20 characters'
          // custom messages
        },
        npassword: {
          required: () => 'Password can not be empty',
          max: 'The password field may not be greater than 20 characters'
          // custom messages
        },
        cpassword: {
          required: () => 'Confirm Password can not be empty',
          max: 'The password field may not be greater than 20 characters',
          confirmed: 'The Confirm password field mismatch22'
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
      this.password = null
      this.npassword = null
      this.cpassword = null
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
