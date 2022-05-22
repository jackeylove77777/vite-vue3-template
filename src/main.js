import { createApp } from 'vue'
import App from './App.vue'

//按需引入后这里不需要再引入，Vue实例也不需要use(Elementsplus),加载太慢，最好用cdn引入
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// createApp(App).use(ElementPlus).mount("#app");
console.log('hahahaha')
import ElementPlus from "element-plus";
createApp(App).use(ElementPlus).mount('#app')
