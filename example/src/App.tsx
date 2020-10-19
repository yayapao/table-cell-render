import React from 'react'
import { Table, Space, Button } from 'antd'
// develop
// import renderCell from './TableCellRender'
// local path
import renderCell from 'cell-render'
import './App.css'

const data = [
  {
    key: '1',
    name: 'John Brown',
    date: '2020-10-15T15:58:50+08:00',
    age: 32,
    address: 'New York No. 1 Lake Park',
    remark: '',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: '',
    date: '2020-10-15T15:58:50+08:00',
    age: 42,
    address: 'London No. 1 Lake Park',
    remark:
      'it creates a new name to refer to that type. Aliasing a primitive is not terribly useful,',
    tags: ['loser'],
  },
]

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
    {
      title: 'Age',
      dataIndex: 'age',
      width: 120,
      key: 'age',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      width: 220,
      key: 'date',
      render: (value: any) => {
        return renderCell('date', value)
      }
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: 400,
      render: (value: any) => {
        return renderCell('code', value)
      },
    },
    {
      title: 'Remark',
      key: 'remark',
      dataIndex: 'remark',
      width: 200,
      render: (value: any) => {
        return renderCell(
          'string',
          value,
          {},
          {
            callback: () => {
              console.log(value)
            },
          }
        )
      },
    },
    {
      title: 'Tags',
      key: 'tags',
      width: 1200,
      dataIndex: 'tags',
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right' as 'right',
      width: 160,
      render: (text: any, record: any) => {
        return (
          <Space>
            <Button type="link" size="small">
              add
            </Button>
            <Button type="link" size="small">
              edit
            </Button>
          </Space>
        )
      },
    },
  ]
  return (
    <div className="App" style={{ padding: '50px' }}>
      <Table scroll={{ x: 1500}} columns={columns} dataSource={data} />
    </div>
  )
}

export default App
