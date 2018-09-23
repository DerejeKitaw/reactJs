import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
    // console.log('{props.userName}',props)
  }
  render() {
    return (
      <div className="userOutput_container">
        User Name: {this.props.userName}
        <p>Paragrap 1</p>
        <p>Paragrap 2</p>
      </div>
    )
  }
}
