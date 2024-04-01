import { defineConfig } from "vite";

import { fileURLToPath, URL } from 'node:url'
import vue from "@vitejs/plugin-vue";
import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';
// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [vue(),AutoImport({
    imports: ['vue', 'vue-router', 'pinia'], 
    dts: 'src/auto-import.d.ts' 
  }),],resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      ignored: ["**/src-tauri/**"],
    },
  },
}));
