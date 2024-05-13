<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
        <el-menu-item index="index">首页</el-menu-item>
        <el-submenu index="article">
          <template slot="title">文章管理</template>
          <el-menu-item index="/article/create">创建文章</el-menu-item>
          <el-menu-item index="/article/edit">编辑文章</el-menu-item>
          <el-menu-item index="/article">文章列表</el-menu-item>
        </el-submenu>
        <el-menu-item index="about">关于</el-menu-item>
        <el-menu-item index="profile">个人中心</el-menu-item>
        <el-menu-item index="setting">设置</el-menu-item>
      </el-menu>
</template>

<script setup lang='ts'>
const handleGoto = (index: string) => { 

 
    console.log(index)

}

</script>

<style lang='less' scoped>

</style>