<template>
  <div class="container">
    <div class="sidebar">
     <Menu></Menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from './menu.vue'
const router = useRouter()
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
}
.sidebar{
  height: 100%;
  border:1px solid red;
  .el-menu-vertical-demo{
    height: 100%;
  }
}

.content {
  flex: 1;
}
</style>
