<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p v-text='hello'></p>
    <p v-html='hello'></p>
    {{ status ? 'success' : 'failed'}}

    <!-- array -->
    <ul>
      <li v-for='(item,index) in list' :class="{odd:index%2}">
        {{item.name}} -- {{item.price}} -- {{index}}
      </li>
    </ul>
    <button v-on:click='addItem'>addItem</button>

    <!-- obj -->
    <ul>
      <li v-for='(value,key) in objList'>
        {{key}} -- {{value}}
      </li>
    </ul>
    <a :href="link">to baidu</a>
      
    

  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      hello: '<span><img>world</span>',
      num: 1,
      status: true,
      link:'http://www.baidu.com',
      list: [
        {
          'name': 'apple',
          'price': 32
        },
        {
          'name': 'orige',
          'price': 56
        }
      ],
      objList: {
        name: 'apple',
        price: 34,
        color: 'red',
        weight: 13
      }
    }
  },
  methods: {
    addItem ()  {
      // this.list.push({
      //   name: 'bnana',
      //   price: 200
      // })
      // 
    Vue.set(this.list,2, {
      name: 'bnana',
      price: 201
    })
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
