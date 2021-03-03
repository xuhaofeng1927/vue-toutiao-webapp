# vue-toutiao-webapp

## Project setup
```
  npm install
```

### Compiles and hot-reloads for development
```
  npm run serve
```

### Compiles and minifies for production
```
  npm run build
```

### Lints and fixes files
```
  npm run lint
```

## 2021 03 02日

### AM

* pc端项目存在接口问题，故转战移动端项目
* 复习使用Vuex状态管理

### PM

**搭建vue3.0项目，(Babel，router， Vuex，less，eslink)**

**引入Vant UI组件，封装Vant导入方式，实现按需导入 所需组件 （难点）**

``` JS
// 导入  Vant
  npm install vant
// 安装插件
  npm i babel-plugin-import -D
// babel.config.js 中配置
  module.exports = {
    plugins: [
      ['import', {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      }, 'vant']
    ]
  };
// 使用
  // 接着你可以在代码中直接引入 Vant 组件
  // 插件会自动将代码转化为方式二中的按需引入形式
  import { Button } from 'vant';
  ...
```

**实现Rem适配（难点）**

一、使用 [amfe-flexible](https://github.com/amfe/lib-flexible) 动态设置 REM 基准值（html 标签的字体大小）

1、安装

```sh
# yarn add amfe-flexible
npm i amfe-flexible
```

2、然后在 `main.js` 中加载执行该模块

```js
...
import 'amfe-flexible'
```
最后测试：在浏览器中切换不同的手机设备尺寸，观察 html 标签 `font-size` 的变化。

二、使用 [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 将 px 转为 rem

1、安装

```sh
# yarn add -D postcss-pxtorem
# -D 是 --save-dev 的简写
npm install postcss-pxtorem -D
```

2、然后在**项目根目录**中创建 `postcss.config.js` 文件

```js
module.exports = {
  plugins: {
    "postcss-pxtorem": {
      // 设计稿 375:37.5
      // 设计稿：750:75
      // Vant 是基于 375
      rootValue: 37.5,
      propList: ["*"]
    }
  }
}
```
3、**配置完毕，重新启动服务**

最后测试：在浏览器中审查元素的样式查看是否已将 px 转换为 rem。

> 注意：
> - **只能转换单独的 .css|.less|.scss 之类的文件、.vue 文件中的 style 中的 px**
> - **不能转换行内样式中的 px**

