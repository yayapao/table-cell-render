简体中文 | [English](./README.md)

# TABLE-CELL-RENDER

This project is generated from [npm-template](https://github.com/Y-lonelY/npm-template).

**Table-cell-render defined the common table cell render functions based on [ant-design](https://ant.design/index-cn)**


## Install

`$ npm install table-cell-render --save` or `yarn add table-cell-render`

## Quick Start

Here's a quick demostration:

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

see [api docs](https://y-lonely.github.io/table-cell-render/) for usage!


### Develop

Actually in `example/`，i have created a React mini project by `create react app`, what you need to do is importing what you develop to the `example/node_module`

- `cd example` goto example directory
- `yarn add ../` add target file as module
- `yarn start` start the project

Attention, i have created the `npm` directory, so you can publish the npm package in this folder, so you can config the `control.sh` to do something, in this case to avoid some unless dependencies!


