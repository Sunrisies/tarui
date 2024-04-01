<script setup lang="ts">
import { useCounterStore } from './stores/index'
const router = useRouter()
const counter = useCounterStore()
const goTo = (path: string) => {
  console.log(path, 'path')
  router.push(path)
}
const setIncrement = () => {
  counter.increment()
console.log(counter.getIncrement(), ' counter')

}
</script>

<template>
  <div id="app">
    <button @click="setIncrement">添加 pinia</button>
    {{ counter.getIncrement() }}
    <button @click="goTo('home')">home</button>
    <button @click="goTo('About')">About</button>

    <router-view></router-view>
  </div>
</template>

<style scoped>
#app {
  text-align: center;
  padding: 20px;
  width: 100%;
}
</style>
