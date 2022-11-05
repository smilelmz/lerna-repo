import { defineConfig } from 'dumi';

export default defineConfig({
  description: 'lmz工具库',
  title: 'lmz-util',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  locales: [['zh-CN', '中文']],
  devtool: 'eval',
  mode: 'site',
});
