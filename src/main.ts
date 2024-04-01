import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import {createPinia} from 'pinia'

// main.js  
import router from './router';  
  
const app = createApp(App);  
  
app.use(router);  
  app.use(createPinia())
app.mount('#app');
