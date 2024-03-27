<script setup lang="ts">
import { ref } from 'vue'
import { invoke } from '@tauri-apps/api/tauri'

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
</script>

<template>
  <div class="container">
    <button class="bottom" type="submit" @click="handleWifiClick">获取WiFi</button>
    <div>{{ error }}</div>
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
