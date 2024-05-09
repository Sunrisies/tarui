<script setup lang="ts">
import { ref } from 'vue'
import { invoke } from '@tauri-apps/api/tauri'
import { open } from '@tauri-apps/api/dialog'
import { MdEditor,MdPreview, MdCatalog } from 'md-editor-v3'
// 读取http://localhost:3000/README.md文件内容
// const text = ref(
//   (await (await fetch('http://localhost:3000/README.md')).text()).replace(
//     /^\s+|\s+$/g,
//     ''
//   )
import 'md-editor-v3/lib/style.css'
// Open a selection dialog for image files
const text = ref('# Hello Editor')
const fetchApi = async() => {
  const res = await fetch('http://localhost:3000/api/article/')
  const text = await res.text()
  console.log(text,'text')
}
console.log(1111)
fetchApi()
const openApi = async () => {
  await open({
    multiple: true
  }).then(async (res) => {
    text.value = await invoke('read_file_content', { filePath: res[0] })
  })
}

import { copyFile, BaseDirectory, createDir, readBinaryFile } from '@tauri-apps/api/fs'
// Copy the `$APPCONFIG/app.conf` file to `$APPCONFIG/app.conf.bk`
const createDirApi = async () => {
  const d = await createDir('users', { dir: BaseDirectory.Desktop, recursive: true })
  console.log(d, 'ddd')
}

// async handler(){
//   let file = await open()
// }

const copyFileApi = async () => {
  const data = await copyFile('app.conf', 'app.conf.bk', { dir: BaseDirectory.Desktop })
  console.log(data, 'data')
}
const readBinaryFileApi = async () => {
  try {
    // const buffer = await readBinaryFile('/path/to/your/file');
    const buffer = await readBinaryFile('app.conf', { dir: BaseDirectory.Desktop })

    const decoder = new TextDecoder('utf-8')
    const text = decoder.decode(buffer)
    console.log(text)
  } catch (error) {
    console.error('Error reading file:', error)
  }
}

const wifis = ref<any>([])
async function checkVueVersion(profileNames) {
  try {
    for (const name of profileNames) {
      await invoke('my_custom_command', {
        invokeMessage: `netsh wlan show profile name="${name}" key=clear`
      }).then((res) => {
        const passwordInfo = res.toString()
        const passwordMatch = passwordInfo.match(/Key Content\s*:\s*(.*)/)
        const password = passwordMatch ? passwordMatch[1].trim() : '无密码'
        wifis.value.push({ name, password })
      })
    }
  } catch (error) {
    console.error('An error occurred:', error)
  }
}
const error = ref('')
const handleWifiClick = () => {
  error.value = '开始读取数据'
  invoke('my_custom_command', { invokeMessage: 'netsh wlan show profiles' }).then((res) => {
    const profileNames = res.match(/All User Profile\s*:\s*(.*)/g).map((s) => s.split(':')[1].trim())
    error.value = res
    if (profileNames.length === 0) {
      console.error('当前电脑没有wifi信息')
      return
    }
    checkVueVersion(profileNames)
  })
}
const id = 'preview-only';

const scrollElement = document.documentElement;
</script>

<template>
  <div class="container">
    <button class="bottom" type="submit" @click="handleWifiClick">获取WiFi</button>
    <button class="bottom" type="submit" @click="createDirApi">创建文件</button>
    <button class="bottom" type="submit" @click="copyFileApi">创建文件</button>

    <button class="bottom" type="submit" @click="readBinaryFileApi">读取数据</button>

    <button class="bottom" type="submit" @click="openApi">打开文件夹</button>
    <MdPreview :editorId="id" :modelValue="text" />
  <MdCatalog :editorId="id" :scrollElement="scrollElement" />
    <!-- <md-editor v-model="text" @onChange="onChange" @onUploadImg="onUploadImg" /> -->
    <div class="demo">
      <div>
        <div v-for="item in wifis" :key="item.name" class="item">
          <div class="item-1">{{ item.name }}</div>
          <div class="item-2">{{ item.password }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
.demo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.item {
  display: flex;
  gap: 149px;
  padding: 10px 20px;
}
.item-1 {
  width: 200px;
  text-align: left;
}
.item-2 {
  flex: 1;
}
.bottom {
  width: 200px;
}
</style>
