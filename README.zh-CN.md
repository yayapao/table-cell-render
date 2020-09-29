简体中文 | [English](./README.md)

# NPM-TEMPLATE

NPM-TEMPLATE 是一个基于 [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) 和 [rollup](https://rollupjs.org/guide/en/) 的 NPM 模版项目，当然你完全可以忽略 React 而是从一个 JavaScript 项目开始

该项目提供对 `.js`, `.ts`, `.tsx` 文件类型的支持

**注意，rollup.config.js 内的 input 参数（指明入口文件）需要正确配置**


# 如何开始

## 发布

1. 在当前项目内执行 `npm install`，引入相关依赖
2. 在 `src/` 目录下开发（当然，你可以修改 `rollup.config.js` 内的 `input` 来修改这一规则）
3. 执行 `npm run build` 在根目录下生成 `index.js` 文件，将该文件发布到 npm 平台上即可（推荐在其他文件内，执行 `npm init` 进行发布管理）

## 本地测试

实际上在 `example/` 目录下，我通过 `create react app` 添加了一个 React 项目的单元，你需要做的就是将生成的目标文件引入到 `example/node_module` 内

- `cd example` 进入到 example 目录
- `yarn add ../` 引入根目录作为依赖
- `yarn start` 启动项目，进行测试

注意，我新建了一个 `npm` 的文件夹，你可以在该文件下进行 npm 包的发布，因此你可以修改 `control.sh` 脚本来执行一些简单的脚本。这么做的目的时减少一些不必要的 `dependencies`


### 支持 TypeScript

首先，你需要执行 `npm install --save typescript @types/node @types/react @types/react-dom @types/jest` and `npm install --save-dev @rollup/plugin-typescript` 来支持编辑和打包！

然后，你需要添加一些配置，来使其生效：
- 从 `tsconfig.json` 内清楚 `outDir` 属性, 不然在打包时会产生错误
- 在 `package.json` 内配置 `types` 属性来引入声明文件
- 在 `package.json` 内配置 `files` 属性来开启白名单，发布指定的文件到 npm

注意：`dependencies` 需要正确配置来支持 `.d.ts` 文件的打包，参看 [publish](https://www.tslang.cn/docs/handbook/declaration-files/publishing.html) 获取更多细节


### 关于 React

大多数情况下，你并不想打包诸如 `React` 等依赖包，因为在你的项目内大概率已经引入了相关的依赖

你可以配置 `rollup.config.js` 文件内的 `external` 属性来达到这一目的，它不会整体打包 `react` 项目，只是转换成 `var React = require('react');` 来进行引入，所以你必须确保在你自己的项目内已经引入了 `react` 