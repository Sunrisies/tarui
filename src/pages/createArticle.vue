<template>
  <div class="create-article">
    <el-input v-model="title" placeholder="请输入文章标题"></el-input>
    <el-button type="primary" @click="addArticle">添加</el-button>
    <el-button type="primary" @click="createDirApi">保存到本地</el-button>
    <el-button type="primary" @click="readBinaryFileApi">读取本地</el-button>

    <MdEditor v-model="text" class="md-container"></MdEditor>
  </div>
</template>

<script setup lang="ts">
import { copyFile, BaseDirectory, createDir, readTextFile ,readDir,writeTextFile} from '@tauri-apps/api/fs'
import { MdEditor, MdPreview, MdCatalog } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { publishArticleApi, Article } from "@/api/index";
const text = ref("");
const title = ref("");
const addArticle = async () => {
  const params = {
    title: title.value,
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
  };
  const data = await publishArticleApi(params);
  console.log(data, "addArticle");
  //   const response = await fetch("http://localhost:3000/api/article", {
  //     timeout: 30,
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: ad,
  //   });
};
const copyFileApi = async () => {
  const data = await copyFile('app.conf', 'app.conf.bk', { dir: BaseDirectory.Desktop })
  console.log(data, 'data')
}
const createDirApi = async () => {
    console.log(BaseDirectory.AppData, 'BaseDirectory')
   const d = await writeTextFile('app.md', 'file contents', { dir: BaseDirectory.AppData });
//   const d = await readBinaryFile('users2', { dir: BaseDirectory.AppData.users, recursive: true })
  console.log(d, 'ddd')
}
const readBinaryFileApi = async () => {
  const data = await readTextFile('app.md', { dir: BaseDirectory.AppData })
  console.log(data, 'data')
}
const readDirApi = async () => {
  const data = await readDir('users', { dir: BaseDirectory.AppData,recursive: true })
  console.log(data, 'data')
}
</script>

<style lang="scss" scoped>
.create-article {
  margin-top: 20px;

  padding: 20px;
  border: 1px solid #ccc;
height: 100%;
  border-radius: 5px;
}
.md-container {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
}
</style>
