<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view></router-view> -->
    {{ totalPrice }}
    <p>

      <!-- <router-link to="/apple">to apple</router-link>
      <router-link to="/banana">to banana</router-link> -->
      <apple></apple>
      <banana></banana>
      
    </p>
   
  </div>
</template>

<script>

import Apple from './components/apple'
import Banana from './components/banana'
// import redApple from './components/redApple'

export default {
  name: 'app',
  components: {
    Apple,
    Banana
  },
  computed: {
    totalPrice() {
      return this.$store.getters.getTotal
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
