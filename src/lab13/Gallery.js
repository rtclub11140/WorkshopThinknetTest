import React, { Component } from 'react'

export default class Gallery extends Component {
  componentDidMount(){
    this.fetchImages('http://localhost/images')
  }

  fetchImages = (url) => {}

  render() {
    return (
      <h1>
        Gallery
      </h1>
    )
  }
}
