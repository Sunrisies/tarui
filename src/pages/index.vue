<script setup lang="ts">
import { fetch, Body } from "@tauri-apps/api/http";
import { ref } from "vue";
import { MdEditor, MdPreview, MdCatalog } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
// Open a selection dialog for image files
const text = ref("# Hello Editor");
const fetchApi = async () => {
  console.log(2222);
  // https://juejin.cn/post/7353877562303021093?utm_source=gold_browser_extension
  const response = await fetch("http://localhost:3000/api/article/7", {
    timeout: 30,
    method: "GET",
  });
  if (response?.data?.Code === 200) {
    text.value = response.data.content;
    console.log(response.data.content, "====");
    // text.value = response.data.Data.content
  }
  console.log(response, "response.data");
};
const addArticle = async () => {
  const ad = Body.json({
    title: "金气办往一面布们红工三低们加会身办严金",
    category: "毛置合性厂非定步特叫导调影书受",
    content: text.value,
    tags: "使除除手解规边较使质",
    cover: "http://dummyimage.com/120x90",
    status: "清去安不手接展关发参者际方京权导温离式认的被也观约确声被发立",
    author: "金平",
    publish_time: "1972-05-12",
    update_time: "2020-05-11 20:15:30",
    views: "82",
    is_top: "true",
    is_recommend: "true",
    is_delete: "true",
    is_publish: "true",
    is_hide: "false",
  });
  const response = await fetch("http://localhost:3000/api/article", {
    timeout: 30,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: ad,
  });
  console.log(response, "addArticle");
};
</script>

<template>
  <div class="container">
    <div>
      <el-button type="primary" @click="fetchApi">获取</el-button>
      <el-button type="primary" @click="addArticle">添加</el-button>
    </div>

    <!-- {{text}} -->
    <MdEditor v-model="text" class="md-container"></MdEditor>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 80%;
}
.md-container {
  width: 100%;
  height: 100%;
}
</style>
