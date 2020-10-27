import React, { CSSProperties } from 'react'
import { Tooltip, Button, Tag, Badge, Typography } from 'antd'
import dayjs from 'dayjs'
import { Types, Config } from './data.d'
import './style.css'

const initConfig = {
  format: 'YYYY-MM-DD HH:mm:ss',
  wrap: 'nowrap',
}

const { Paragraph } = Typography

export default function renderCell(
  type: keyof typeof Types = 'string',
  data: any = 'TableCellRender',
  style: CSSProperties = {},
  config: Config = {}
) {
  const { callback, format, color, copyable, wrap } = Object.assign(
    {},
    initConfig,
    config
  )
  switch (type) {
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
      let label = '-'
      if (callback) {
        closeable = true
      }
      if (typeof color === 'string') {
        cr = color
        label = 'data'
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
          {label}
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
    case 'string': {
      if (copyable) {
        return String(data).length > 0 ? (
          <Tooltip title={data} placement="topLeft">
            <Paragraph style={{ marginBottom: 0 }} copyable ellipsis>
              {data ?? '-'}
            </Paragraph>
          </Tooltip>
        ) : (
          '-'
        )
      }
      return String(data).length > 0 ? (
        <Tooltip title={data} placement="topLeft">
          {callback ? (
            <Button
              className="tcr-colla-button"
              style={style}
              type="link"
              onClick={() => {
                callback()
              }}
            >
              {data}
            </Button>
          ) : (
            <span className="tcr-colla-string" style={style}>
              {data}
            </span>
          )}
        </Tooltip>
      ) : (
        '-'
      )
    }
  }
}
