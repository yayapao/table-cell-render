export enum Types {
  code,
  string,
  date
}

export interface Config {
  callback?: (value?: any) => void
  format?: string
}

