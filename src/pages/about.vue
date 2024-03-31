<template>
  <div>
    <input type="text" v-model="text">
    <button @click="setData">缓存数据</button>
    <button @click="getData">读取缓存数据</button>
    <div>{{ data }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const data = ref('')
const text = ref('')
const setData = () => {
  console.log(text,'data')
  localStorage.setItem('data', text.value)
}
const getData = () => {
  data.value = localStorage.getItem('data')!
  console.log(data, '缓存的数据，，，，')
}
</script>

<style scoped></style>
