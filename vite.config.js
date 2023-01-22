import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig(({command,mode}) => {
  // 静态文件路径
  /*
    loadEnv() 三个参数【https://cn.vitejs.dev/guide/api-javascript.html#loadenv】
    @mode：package.json中启动的时候，设置的 --mode <env> 会读取到 <env> 中的变量
    @envDir：.env.xxx文件的路径
    @prefixes：默认情况下只有前缀为 VITE_ 会被加载，除非更改了 prefixes 配置
               现在将前缀更改为BASE_URL，这样我们就可以获取运维在部署时，就可以获取到CDN加载静态资源的前缀了，
               这个BASE_URL是跟运维约定好的字段，实际要根据自己的项目进行判断
  */
  // 如果没有找到 BASE_URL ，就使用 ./ 的目录
  const staticPath = loadEnv(mode, "./", "BASE_URL").BASE_URL || "./";
  return {
    // 静态资源cdn加速，如果是开发环境的话，就是用本地加载不使用cdn
    base: mode == "dev" ? "./" : staticPath,
    build: {
      assetsDir: "static", // 静态资源导出的文件名
    },
    plugins: [
      vue(),
      AutoImport({imports:['vue','vue-router']})
      ],
    resolve: {
      // 配置路径别名，解决不能使用@来指代src目录的问题
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server:{
      host:"localhost",
      port:"1996",
      hmr:true
    },
  }
})
