<template>
  <div>
    <MdPreview :editorId="id" :modelValue="text" />
    <MdCatalog :editorId="id" :scrollElement="scrollElement" />
  </div>
</template>

<script setup lang="ts">
import { getArticleDetailApi, Article } from "@/api/index";
import { MdEditor, MdPreview, MdCatalog } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
const id = "preview-only";

const scrollElement = document.documentElement;
const route = useRoute();
const article = ref<Article | null>(null);
const text = ref("");
const getArticleDetail = async () => {
  const { id } = route.params;
  article.value = (await getArticleDetailApi(id)) || {};
  text.value = article.value.content;
};
getArticleDetail();
</script>

<style lang="less" scoped></style>
