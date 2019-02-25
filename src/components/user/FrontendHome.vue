<template>
  <div id="home">
    <frontend-header></frontend-header>
    <v-container fluid>
      <v-layout row wrap>
        <v-carousel>
          <v-carousel-item v-for="(item,i) in banners" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </v-layout>
    </v-container>
    <v-container grid-list-md text-xs-center>
      <v-layout row justify-space-between>
        <v-flex xs2>
          <v-card dark color="primary">
            <v-card-text>Student</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="secondary">
            <v-card-text>Parent</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="accent">
            <v-card-text>Teacher</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <frontend-footer></frontend-footer>
  </div>
</template>

<script>
import FrontendHeader from './FrontendHeader'
import FrontendFooter from './FrontendFooter'
export default {
  name: 'home',
  components: {FrontendFooter, FrontendHeader},
  data () {
    return {
      banners: [
        {
          src: 'http://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'http://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'http://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'http://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
