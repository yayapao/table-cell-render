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

Theoretically, you can use this pacakge whrenver you want to render literal content!

## API

Here, here✨

Cell-Render can greatly easy to render table cell(emmm, mostly used in the scene), but you can also use it to render something else.

We can easily use it like this:

```js
const tpl = renderCell("string", value, {width: '20px'}, { callback: () => { console.log("hello") }})
```

`renderCell` can accept four params:

- `type`: define which template to return
- `value`: target content to be rendered
- `style`: define the element inner style
- `config`: addon config to control the rendered template

### string

Look at this below:

![string](https://github.com/Y-lonelY/table-cell-render/blob/master/docs/statics/string.png)

1. `renderCell('string', value) ` normal render

2. `renderCell('string', value, {}, { copyable: true })` to make the value copyable

3. `renderCell('string', value, {}, { callback: () => {}})` to make the content has a callback event

String is **auto support ellipsis**, and it's controled by `copyable` and `callback` 



### code

Look at this below:

![code](https://github.com/Y-lonelY/table-cell-render/blob/master/docs/statics/code.png)



1. `renderCell('code', value)` return normal render content in single line(without wrapped)

2. `renderCell('code', value, {}, { wrap: 'wrap' })` render the code in multi-lines



**Solo with code✨**