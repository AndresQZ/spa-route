<template>
  <div class="hello">
    ********************** VUE APP  - this will be shared across all apps ****************
     <p> AMAZING APP VUE 3 - WITH SINGLE SPA </p>
     <p> {{ sharedData}}</p>
     <router-link to="/shop">Go to SHOP</router-link>
     <br>
    **********************************************************************************
  </div>
</template>

<script>
//import {  onMounted, mounted } from 'vue'
import {  sharedData$} from "@web-taxco/spa-shared-state";



export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    sharedData: String
  }, 
   methods: {
    doIt() {
      console.log(`Hello ${this.name}`);
    },
  },
  mounted() {
    console.log(`The initial count is ${this.sharedData}.`)
  },
}

  

sharedData$.subscribe(data => {
  console.log("shared data ", data);
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
