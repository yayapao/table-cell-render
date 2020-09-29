import React from 'react'

export interface NPMTemplateProps extends React.Props<NPMTemplate> {
  name: string
}


declare class NPMTemplate extends React.Component<NPMTemplateProps, any> {}

export default NPMTemplate