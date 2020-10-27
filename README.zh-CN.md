简体中文 | [English](./README.md)

# TABLE-CELL-RENDER

这个项目以 [npm-template](https://github.com/Y-lonelY/npm-template) 作为模版

**Table-cell-render 基于 [ant-design](https://ant.design/index-cn) 封装了一系列渲染模版，主要用于渲染描述列表和单元格**


## 安装

`$ npm install table-cell-render --save` or `yarn add table-cell-render`

## 快速开始

这里有一个入门例子：

```tsx
import renderCell from 'cell-render'

function App() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 120,
      render: (value: any) => {
        return renderCell('string', value)
      },
    },
    ...
  ]
  return (
    <div className="App" style={{ padding: '50px' }}>
      <Table scroll={{ x: 1500}} columns={columns} dataSource={data} />
    </div>
  )
}

export default App
```


## API

Here, here✨

参考 [api docs](https://y-lonely.github.io/table-cell-render/) 获取更多信息！


## 本地开发

实际上在 `example/` 目录下，我通过 `create react app` 添加了一个 React 项目的单元，你需要做的就是将生成的目标文件引入到 `example/node_module` 内

- `cd example` 进入到 example 目录
- `yarn add ../` 引入根目录作为依赖
- `yarn start` 启动项目，进行测试

注意，我新建了一个 `npm` 的文件夹，你可以在该文件下进行 npm 包的发布，因此你可以修改 `control.sh` 脚本来执行一些简单的脚本。这么做的目的时减少一些不必要的 `dependencies`