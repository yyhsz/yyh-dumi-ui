/*
 * @Author: your name
 * @Date: 2021-12-20 10:01:07
 * @LastEditTime: 2021-12-20 15:15:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-ui-2\.umirc.ts
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'react-ui-2',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  description: '哈哈哈',
  outputPath: 'docs-dist',
  alias: {
    '@demo': '../../demo',
  },
  // mode: 'site',
  // more config: https://d.umijs.org/config
});
