import React, { CSSProperties } from 'react'
import { Tag, Badge, Space, Popover } from 'antd'
import StringRender from './StringRender'
import { thsplite } from 'ele-utility'
import dayjs from 'dayjs'
import { Types, Config } from './index.d'
import './style.css'

const initConfig = {
  format: 'YYYY-MM-DD HH:mm:ss',
  wrap: 'nowrap',
}


export default function renderCell(
  type: keyof typeof Types = 'string',
  data: any = 'TableCellRender',
  style: CSSProperties = {},
  config: Config = {}
) {
  const {
    callback,
    format,
    color,
    copyable,
    wrap,
    max,
    key,
    // for render number seperator
    splitLabel,
    itemRender,
  } = Object.assign({}, initConfig, config)

  switch (type) {
    case 'list': {
      if (Array.isArray(data) && data.length > 0) {
        return !max || max === -1 || data.length <= max ? (
          <>
            {data.map((item, index) => {
              return (
                <p style={{ padding: '2px 0', ...style }} key={index}>
                  {itemRender
                    ? itemRender(item, index)
                    : key
                    ? item[key]
                    : item}
                </p>
              )
            })}
          </>
        ) : (
          <span className="list-global">
            {key ? data[0][key] : data[0]}
            <Popover
              placement="right"
              trigger="hover"
              overlayClassName="cell-popver"
              content={data.map((item, index) => {
                return (
                  <p style={{ padding: '2px 0', ...style }} key={index}>
                    {itemRender
                      ? itemRender(item, index)
                      : key
                      ? item[key]
                      : item}
                  </p>
                )
              })}
            >
              <span
                onClick={() => {
                  callback && callback(data)
                }}
                style={{
                  fontWeight: 'bold',
                  color: '#1890ff',
                  cursor: 'pointer',
                  margin: '0 0 0 3px',
                  ...style,
                }}
              >
                等{data.length - 1}项
              </span>
            </Popover>
          </span>
        )
      }
      return '-'
    }
    case 'status': {
      let cr = 'blue'
      let label = '-'
      if (typeof color === 'string') {
        cr = color
        label = data
      } else if (Array.isArray(color)) {
        const current = color.find((item) => {
          return item.value === data
        })
        cr = current?.color ?? 'blue'
        label = current?.label ?? current?.value
      }
      return <Badge color={cr} text={label} />
    }
    case 'tags': {
      let closeable = false
      let cr = 'blue'
      let label = undefined
      if (callback) closeable = true
      if (typeof color === 'string') {
        cr = color
        label = data
        if (Array.isArray(data) && data.length > 0) {
          return (
            <Space size={4}>
              {data.map((item: any, index: number) => {
                return (
                  <Tag color={cr} key={index}>
                    {item}
                  </Tag>
                )
              })}
            </Space>
          )
        }
      } else if (Array.isArray(color)) {
        const current = color.find((item) => {
          return item.value === data
        })
        cr = current?.color ?? 'blue'
        label = current?.label ?? current?.value
      }
      return (
        <Tag
          color={cr ?? 'blue'}
          closable={closeable}
          onClose={() => {
            callback && callback()
          }}
        >
          {label ?? data}
        </Tag>
      )
    }
    case 'code': {
      return (
        <>
          {wrap === 'nowrap' && (
            <pre className="tcr-code-pre" style={style}>
              <code>{String(data)}</code>
            </pre>
          )}
          {wrap === 'wrap' && <code>{String(data)}</code>}
        </>
      )
    }
    case 'date': {
      const isValid = dayjs(data, format).isValid()
      if (!isValid) {
        return '-'
      }
      return <span style={style}>{dayjs(data).format(format)}</span>
    }
    case 'number': {
      if (typeof data === 'string' || typeof data === 'number') {
        const current = thsplite(data, splitLabel ?? ',')
        return <span style={style}>{current}</span>
      }
      return <span style={style}>{data ?? '-'}</span>
    }
    case 'string': {
      let current = {
        tooltips: false,
        text: data,
      }
      const judges = ["boolean", "undefined"]
      const isBool = judges.includes(typeof copyable)
      if (typeof copyable !== 'boolean') {
        current = {
          ...current,
          ...copyable,
        }
      }
      return (
        <StringRender
          data={data}
          copyable={isBool ? copyable : current}
          callback={callback}
          style={style}
        />
      )
    }
  }
}
