# CELL RENDER

**Table-cell-render defined the common cell render functions based on [ant-design](https://ant.design/index-cn) and which can greatly easy to render cell**

This project is generated from [npm-template](https://github.com/Y-lonelY/npm-template).


## Install

`$ npm install table-cell-render --save` or `yarn add table-cell-render`


## Usage

You can see [apis](https://y-lonely.github.io/table-cell-render/) for more details!

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

We have supported more useful usages, you can check [docs: cell-render](https://github.com/Y-lonelY/table-cell-render) for more details!

Thanks for using, solo with code🍁!

