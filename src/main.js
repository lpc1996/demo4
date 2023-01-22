import { createApp } from 'vue'
import ElementPlus from "element-plus"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from "element-plus/dist/locale/zh-cn"
import 'dayjs/locale/zh-cn'
import "element-plus/dist/index.css"

//导入font-awesome字体图标库
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import App from './App.vue'
import router from './router'

let app = createApp(App);

app.use(ElementPlus, {
    locale: zhCn
});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

library.add(fas);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.mount('#app');
