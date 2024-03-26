<script setup>
import Greet from './components/Greet.vue'
// import { Command } from '@tauri-apps/api/shell'
import { arch } from '@tauri-apps/api/os';
import { appCacheDir } from '@tauri-apps/api/path';



// const command = new Command('node');
// command.on('close', data => {
//   console.log(`command finished with code ${data.code} and signal ${data.signal}`)
// });
// command.on('error', error => console.error(`command error: "${error}"`));
// command.stdout.on('data', line => console.log(`command stdout: "${line}"`));
// command.stderr.on('data', line => console.log(`command stderr: "${line}"`));
(async () => {
  const archName = await arch();
  console.log(archName, 'archName')
  const appCacheDirPath = await appCacheDir();
  console.log(appCacheDirPath,'appCacheDirPath')
  // console.log(121,await command.spawn())

})()
// const child = await command.spawn();
// console.log('pid:', child.pid);
</script>

<template>
  <div class="container">
    <Greet />
  </div>
</template>

<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
</style>
