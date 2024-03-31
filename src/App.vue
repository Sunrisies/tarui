<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goTo = (path: string) => {
  console.log(path, 'path')
   router.push(path)
}
</script>

<template>
 <div id="app">  
    <!-- <router-link to="/home">Home</router-link> 
    <span>     </span>
    

    <router-link to="/about">About</router-link>   -->
    <button @click="goTo('home')">home</button>
    <button @click="goTo('About')">About</button>
    测试

  
    <router-view></router-view>  
  </div>  
</template>

<style scoped>
#app {
  text-align: center;
  padding:20px;
  width: 100%;
}

</style>
