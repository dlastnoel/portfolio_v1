import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import VueWriter from "vue-writer";

createApp(App)
  .use(router)
  .use(VueWriter)
  .mount('#app')
