<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <router-view></router-view> -->
    <!-- <button @click='getParam'>get params</button> -->
<!--     <p>
      <router-link to="/apple/red">to redApple</router-link>
    </p> -->
    
    <button @click='addOne'>add one</button>
    <button @click='minusOne'>minus one</button>
  </div>
</template>

<script>


export default {
  name: 'apple',
  data () {
    return {
      msg: 'apple',
      price: 10
    }
  },
  methods: {
    addOne() {
      this.$store.dispatch('increase',this.price)
    },
    minusOne() {
      this.$store.commit('decrement',this.price)
    },
  }
  // components: {
  //   redApple: redApple
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
