export enum Types {
  code,
  string,
  date,
  tags,
  status
}

enum WrapType {
  wrap,
  nowrap
}

export interface Config {
  callback?: (value?: any) => void
  format?: string
  color?: string | {value: any, color: string}[]
  copyable?: boolean
  // control whether code should be break
  wrap?: keyof typeof WrapType
}

