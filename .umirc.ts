import { defineConfig } from 'umi';

export default defineConfig({
  // 配置主题颜色
  theme: {
    '@primary-color': '#1DA57A',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  // 配置别名
  alias: {
    '@': '/src'
  },
  /*routes: [
    { path: '/', component: '@/pages/index' },
  ],*/
  // 配置代理能力。
  proxy: {
    '/api': {
      'target': 'http://jsonplaceholder.typicode.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
});
