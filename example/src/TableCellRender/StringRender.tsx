import React, { CSSProperties } from 'react'
import { Tooltip, Button, Typography } from 'antd'

interface StringProps {
  data: any
  copyable?: boolean | { tooltips?: boolean; text?: boolean }
  callback?: (value?: any) => void
  style: CSSProperties
}

const { Paragraph } = Typography

const StringRender: React.FC<StringProps> = (props) => {
  const { copyable, data, callback, style } = props

  if (!data || String(data).length <= 0) {
    return <span>-</span>
  }

  // copyable here means whether to display~
  if (copyable) {
    return (
      <Tooltip title={data} placement="topLeft">
        <Paragraph style={{ marginBottom: 0 }} copyable={copyable as any} ellipsis>
          {data}
        </Paragraph>
      </Tooltip>
    )
  }

  return (
    <Tooltip title={data} placement="topLeft">
      {callback ? (
        <Button
          className="tcr-colla-button"
          style={{ textAlign: 'left', ...style }}
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
  )
}

export default StringRender
