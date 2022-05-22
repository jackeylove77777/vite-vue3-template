import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//Elementplus 按需引入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
//Mock
import { viteMockServe } from 'vite-plugin-mock'
//配置Cdn
import ImportToCDN from 'vite-plugin-cdn-import';
//配置代码压缩
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  //配置公共打包路径
  base: "./",
  plugins: [
      vue(),
      viteCompression(),
    //Elementplus 按需引入
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
    //配置Mock
    viteMockServe({
      // default mock data path
      mockPath: "./mock"
    }),
    //配置Cdn
    ImportToCDN({
        modules: [
            {
                name: "vue",
                var: "Vue",
                path:"https://unpkg.com/vue@next"
            },
            {
                name: "element-plus",
                var: "ElementPlus",
                path: "https://unpkg.com/element-plus",
                css:"https://unpkg.com/element-plus/dist/index.css"
            }
        ]
    })
  ],
  resolve: {
    alias: {},
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        //生产环境移除clg和debugger
        drop_console: true,
        drop_debugger: true,
      },
    },

    rollupOptions: {
      //打包输出文件配置
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/entry-[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]",
      },
    },
  },
});
