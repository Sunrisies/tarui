import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import {createPinia} from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// main.js  
import router from './router';  
  
const app = createApp(App);  
  
app.use(router);  
  app.use(createPinia())
  app.use(ElementPlus)
app.mount('#app');
