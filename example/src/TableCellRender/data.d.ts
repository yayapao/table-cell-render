export enum Types {
  code,
  string,
  date,
  tags,
  status,
  list,
}

enum WrapType {
  wrap,
  nowrap,
}

export interface Config {
  callback?: (value?: any) => void
  format?: string
  color?: string | { value: any; color: string; label?: string }[]
  copyable?: boolean
  // control whether code should be break
  wrap?: keyof typeof WrapType
  // control list target and display nums
  max?: number
  key?: string
  itemRender?: (value: any, index: number) => React.ReactNode
}
