import React from 'react'
import { Table, Space, Button } from 'antd'
import './App.css'

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

function App() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => {
        console.log(text)
        console.log(record)
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
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default App
