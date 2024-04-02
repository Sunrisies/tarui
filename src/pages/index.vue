<script setup lang="ts">
import { ref } from 'vue'
import { MdEditor, MdPreview, MdCatalog } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
// Open a selection dialog for image files
const text = ref('# Hello Editor')
</script>

<template>
  <div class="container">
    <MdEditor v-model="text"></MdEditor>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
