import { defineConfig } from "umi"

export default defineConfig({
  nodeModulesTransform: {
    type: 'none'
  },
  fastRefresh: {},
  base: '/',
  publicPath: '/',
  outputPath: '../dist'
})