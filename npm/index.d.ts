import React from 'react'

export enum Types {
  code,
  string,
  date
}

export interface Config {
  callback?: (value?: any) => void
  format?: string
}

export interface RenderCellParams {
  type: keyof typeof Types
  data: any
  style: React.CSSProperties
  config: Config
}

declare function renderCell (...RenderCellParams): React.ReactNode

export default renderCell