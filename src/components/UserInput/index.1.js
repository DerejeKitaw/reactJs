import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
    console.log('{props.userName}',props)
  }

  clearInput (){
    console.log('cleared');
  }
  render() {
    return (
      <div>
        User Input
        <input name="userName" onChange={this.props.change} type="text" />
        <button onClick={this.clearInput} className="btn btn-primary">Clear</button>
      </div>
    )
  }
}
