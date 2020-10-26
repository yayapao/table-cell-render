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

Cell-Render can greatly easy to render table cell(emmm, mostly used in the scene), but you can also use it to render something else.

We can easily use it like this:

```js
const tpl = renderCell("string", value, {width: '20px'}, { callback: () => { console.log("hello") }})
```

`renderCell` can accept four params:
- `type`: define which template to return
- `value`: something to be rendered
- `style`: define the element inner style
- `config`

### string

Cell Render support auto handle strings in some ways!

You can use like this: `const tpl = renderCell('string', value)` 

- when the value is nullable(`null` or `undefined`), it will return `-`
- if value.length is greater then the block's width, it will use `text-overflow: ellipisis;`

And if you want to add some click events, the add `{ callback: () => {} }`, it will render with  `antd.Button` and `antd.Tooltip`

### code




### Develop

Actually in `example/`，i have created a React mini project by `create react app`, what you need to do is importing what you develop to the `example/node_module`

- `cd example` goto example directory
- `yarn add ../` add target file as module
- `yarn start` start the project

Attention, i have created the `npm` directory, so you can publish the npm package in this folder, so you can config the `control.sh` to do something, in this case to avoid some unless dependencies!


