import React from 'react'

export enum Types {
  code,
  string,
  date,
  tags,
  status,
  list,
  number
}

export enum WrapType {
  wrap,
  nowrap
}

export interface Config {
  callback?: (value?: any) => void
  format?: string
  color?: string | {value: any, color: string, label?: string }[]
  copyable?: boolean | { tooltips?: boolean, text?: string}
  wrap?: keyof typeof WrapType
  max?: number
  key?: string
  splitLabel?: string
  itemRender?: (value: any, index: number) => React.ReactNode
}

export interface RenderCellParams {
  type: keyof typeof Types
  data: any
  style: React.CSSProperties
  config: Config
}

declare function renderCell(
  type: keyof typeof Types,
  data: any,
  style?: React.CSSProperties,
  config?: Config
): React.ReactNode

export default renderCell