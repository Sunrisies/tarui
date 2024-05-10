<template>
  <div>
    <div
      v-for="(item, index) in articleList"
      :key="index"
      class="listItem"
      @click="handleClick(item)"
    >
      <div>{{ item.title }}</div>
      <div>{{ item.author }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getArticleListApi, Article } from "@/api/index";
const router = useRouter()

const handleClick = (item: any) => {
  router.push({ name: "articleDetail", params: { id: item.id } });
};
const articleList = ref<Article[]>([]);
const getArticles = async () => {
  const { data, total, page, pageSize } = await getArticleListApi();
  articleList.value = data;
};
getArticles();
onMounted(async () => {});
</script>

<style lang="scss" scoped>
.listItem {
  padding: 30px;
  text-align: center;
  border: 1px solid #ccc;
  margin: 10px 100px;
  width: 100%;
  border-radius: 30px;
  transition: transform 0.3s ease-out, border-color 0.3s ease-out;
  &:hover {
    transform: translateY(-4px);
    cursor: pointer;
    border-color: #ccc123; /* 鼠标悬浮时边框发光 */
    box-shadow: 0 0 10px #ccc123; /* 可选：增加发光效果 */
  }
}
</style>
