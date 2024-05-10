<template>
  <div class="container">
    <div class="top">
      <el-button @click="router.push('/index')">首页</el-button>
      <el-button @click="router.push('about')">关于</el-button>
      <el-button @click="router.push('profile')">个人中心</el-button>
      <el-button @click="router.push('setting')">设置</el-button>
      <el-button @click="router.push('/article')">文章列表</el-button>
      <el-button @click="router.push('/article/create')">创建文章</el-button>
      <el-button @click="router.push('article/edit')">编辑文章</el-button>
      <el-button @click="router.push('article/detail')">文章详情</el-button>
    </div>
    <div class="content">
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
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
}
.content {
  flex: 1;
  width:100%;
}
</style>
