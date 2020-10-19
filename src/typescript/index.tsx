import React, { CSSProperties } from 'react'
import { Tooltip, Button } from 'antd'
import dayjs from 'dayjs'
import { Types, Config } from '../../index.d'
import './style.css'

const initConfig = {
  format: 'YYYY-MM-DD HH:mm:ss',
}

export default function renderCell(
  type: keyof typeof Types = 'string',
  data: any = 'TableCellRender',
  style: CSSProperties = {},
  config: Config = {}
) {
  const { callback, format } = Object.assign({}, initConfig, config)
  switch (type) {
    case 'code': {
      return (
        <pre className="tcr-code-pre" style={style}>
          <code>{data}</code>
        </pre>
      )
    }
    case 'date': {
      const isValid = dayjs(data, format).isValid()
      return (
        <span>
          {isValid
            ? dayjs(data).format(format)
            : '-'}
        </span>
      )
    }
    case 'string': {
      return data && String(data).length > 0 ? (
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
