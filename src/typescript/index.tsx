// this is the usage with Typescript
// you can config the main in package.json to compile current file🍄
import React from 'react'
import { NPMTemplateProps } from '../../index.d'

export default class NPMTemplate extends React.Component<
  NPMTemplateProps,
  any
> {
  constructor(props: NPMTemplateProps) {
    super(props)
    this.state = {
      name: "hello world"
    }
  }

  render() {
    return <div>{this.props.name}</div>
  }
}
