import React from 'react'
import { Table, Space, Button, message } from 'antd'
import { colors, status, data } from './statics'
// develop
// import renderCell from './TableCellRender'
// local path
import renderCell from 'cell-render'
import './App.css'

function App() {
  const columns = [
    {
      title: 'Weight',
      dataIndex: 'weight',
      key: 'weight',
      width: 120,
      render: (value: any) => {
        return renderCell(
          'number',
          value,
          { color: '#1890ff' },
          { splitLabel: '@' }
        )
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 120,
      render: (value: any) => {
        return renderCell('string', value, {}, {
          copyable: {
            text: 'hello'
          }
        })
      },
    },
    // {
    //   title: 'Tags',
    //   dataIndex: 'status',
    //   width: 120,
    //   key: 'status',
    //   render: (value: any) => {
    //     return renderCell('tags', value, undefined, {
    //       color: 'blue',
    //     })
    //   },
    // },
    // {
    //   title: 'Person',
    //   dataIndex: 'person',
    //   width: 120,
    //   key: 'person',
    //   render: (value: any) => {
    //     return renderCell('list', value, undefined, {
    //       max: 3,
    //       callback: () => {
    //         message.success(value.join("~"))
    //       },
    //       itemRender: (item: string, index: number) => {
    //         return (
    //           <>
    //             {renderCell('tags', index)}
    //             <b>{item}</b>
    //           </>
    //         )
    //       },
    //     })
    //   },
    // },
    // {
    //   title: 'wrapCode',
    //   dataIndex: 'wrapCode',
    //   width: 120,
    //   key: 'wrapCode',
    //   render: (value: any) => {
    //     return renderCell('code', value, {}, {
    //       wrap: 'wrap'
    //     })
    //   }
    // },
    // {
    //   title: 'Tags',
    //   dataIndex: 'tags',
    //   width: 120,
    //   key: 'tags',
    //   render: (value: any) => {
    //     return renderCell('tags', value, undefined, {
    //       color: colors
    //     })
    //   }
    // },
    // {
    //   title: 'Age',
    //   dataIndex: 'age',
    //   width: 120,
    //   key: 'age',
    // },
    // {
    //   title: 'Date',
    //   dataIndex: 'date',
    //   width: 220,
    //   key: 'date',
    //   render: (value: any) => {
    //     return renderCell('date', value)
    //   }
    // },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    //   width: 140,
    //   render: (value: any) => {
    //     return renderCell('code', value)
    //   },
    // },
    // {
    //   title: 'Remark',
    //   key: 'remark',
    //   dataIndex: 'remark',
    //   width: 200,
    //   render: (value: any) => {
    //     return renderCell(
    //       'string',
    //       value,
    //       {},
    //       {
    //         callback: () => {
    //           console.log(value)
    //         },
    //       }
    //     )
    //   },
    // },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   fixed: 'right' as 'right',
    //   width: 1200,
    //   render: (text: any, record: any) => {
    //     return (
    //       <Space>
    //         <Button type="link" size="small">
    //           add
    //         </Button>
    //         <Button type="link" size="small">
    //           edit
    //         </Button>
    //       </Space>
    //     )
    //   },
    // },
  ]
  return (
    <div className="App" style={{ padding: '50px' }}>
      <p>current develop env: {process.env.REACT_APP_DENV}</p>
      <Table scroll={{ x: 1500 }} columns={columns} dataSource={data} />
    </div>
  )
}

export default App
