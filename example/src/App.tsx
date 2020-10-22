import React from 'react'
import { Table, Space, Button } from 'antd'
import { colors, status,  data } from './statics'
// develop
// import renderCell from './TableCellRender'
// local path
import renderCell from 'cell-render'
import './App.css'

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
      title: 'Status',
      dataIndex: 'status',
      width: 120,
      key: 'status',
      render: (value: any) => {
        return renderCell('status', value, undefined, {
          color: status
        })
      }
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      width: 120,
      key: 'tags',
      render: (value: any) => {
        return renderCell('tags', value, undefined, {
          color: colors
        })
      }
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
      <p>current develop env: {process.env.REACT_APP_DENV}</p>
      <Table scroll={{ x: 1500}} columns={columns} dataSource={data} />
    </div>
  )
}

export default App
