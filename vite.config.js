/*
 * @Author: “mxmxmx” “2454023350@qq.com”
 * @Date: 2023-03-13 15:09:52
 * @LastEditors: “mxmxmx” “2454023350@qq.com”
 * @LastEditTime: 2023-04-17 17:48:56
 * @FilePath: /website-react/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginRequire from "vite-plugin-require";
console.log(vitePluginRequire.default);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginRequire.default({
      // @fileRegex RegExp
      //   optional:default file processing rules are as follows
      //   fileRegex:/(.jsx?|.tsx?|.vue)$/,
      //   Conversion mode. The default mode is import
      //   importMetaUrl | import
      //   importMetaUrl see https://vitejs.cn/guide/assets.html#new-url-url-import-meta-url
      //   translateType: "importMetaUrl" | "import";
    }),
  ],
});
