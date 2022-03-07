import { defineConfig } from "umi";
import path from 'path';
const resolvePath = (dir: string) => path.join(__dirname, dir);
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  // 生成的js和css文件后面跟hash，禁止缓存
  hash: true,
  // 路由模式
  history: {
    type: 'hash',
  },
  fastRefresh: {},
  base: '/',
  publicPath: './',
  outputPath: '../dist',
  // 打包成Electron专用模式
  chainWebpack: (memo) => {
    memo.target('electron-renderer');
  },
  alias: {
    '@': resolvePath('src')
  }
})