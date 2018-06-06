import React, { Component } from 'react'
import Styled from 'styled-components'
const InputText = Styled.input`
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
`

class StyleComponent extends Comment {
  render() {
    return (
      <div>
        <InputText type="text" height="30px" width="200px"/>
      </div>
    )
  }
}

export default StyleComponent
