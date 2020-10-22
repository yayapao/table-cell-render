export enum Types {
  code,
  string,
  date,
  tags,
  status
}

export interface Config {
  callback?: (value?: any) => void
  format?: string
  color?: string | {value: any, color: string}[]
  copyable?: boolean
}

