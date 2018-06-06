import React, { Component } from 'react'

export class ComponentInitialState extends Component {
  state = {
    textInput : '',
    members : []
  }

  render() {
    return (
      <div>
        {this.state.members}
      </div>
    )
  }
}

export default ComponentInitialState
