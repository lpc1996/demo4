// 引入创建路由的函数，和配置路由模式的函数
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import(/* webpackChunkName: "登录页面" */ "../view/login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
