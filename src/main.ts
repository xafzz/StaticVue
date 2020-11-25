import {createApp} from 'vue' //createVNode
import App from './App.vue'
import router from './router'
console.log('这是main','------->',__dirname)

createApp(App).use(router).mount('#app')
