简体中文 | [English](./README.md)

# NPM-TEMPLATE

NPM-TEMPLATE is a NPM Template Project based on [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) 和 [rollup](https://rollupjs.org/guide/en/) , or you can just start with JavaScript!

we support `.js`, `.ts`, `.tsx` file type

**Attention，you need to config rollup.config.js's input param（which point the entry file）correctly**


## How

### Publish

1. do `npm install` to import some dependences
2. develop under `src/` directory（or you can modify `rollup.config.js` -> `input` to change the rule）
3. do `npm run build` to generate `index.js` on root，the publish it to the NPM platform

### Local Test

Actually in `example/`，i have created a React mini project by `create react app`, what you need to do is importing what you develop to the `example/node_module`

- `cd example` goto example directory
- `yarn add ../` add target file as module
- `yarn start` start the project

Attention, i have created the `npm` directory, so you can publish the npm package in this folder, so you can config the `control.sh` to do something, in this case to avoid some unless dependencies!

### Support Typescript

Firstly, you need to `npm install --save typescript @types/node @types/react @types/react-dom @types/jest` and `npm install --save-dev @rollup/plugin-typescript` to support Typescript compile and package!

Then, we need to add some configs:
- remove `outDir` in `tsconfig.json`, or you will caught some errors when packing
- config `types` in `package.json`, which will take the type define file into the bundle
- config `files` to open whitelist, used to publish the target files to npm

Attention: `dependencies` is required to support the `.d.ts` file, see [publish](https://www.tslang.cn/docs/handbook/declaration-files/publishing.html) for more details

### About React

In most case, you will not want to include some packages(like `React`, `lodash` etc) when bundle up.

You can config `external: ["react", "react-dom"]` in `rollup.config.js` to avoid this case, it will not the bundle up the whole `react`, and will replace with `var React = require('react');`, so you must ensure that you have included the `react` in your project! 