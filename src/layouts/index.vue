<template>
  <div class="container">
    <div class="left">
      <el-button @click="router.push('/index')">首页</el-button>
      <el-button @click="router.push('about')">关于</el-button>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.left {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
}
.right {
  flex: 1;
  border:1px solid pink;
}
</style>
