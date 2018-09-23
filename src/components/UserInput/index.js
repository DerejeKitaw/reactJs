import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
    console.log('{props.userName}', props);
    this.clearInput = this.clearInput.bind(this);
  }
  state = {
    userName: ''
}
  clearInput() {
    this.setState({userName: ''})
    console.log('cleared');
    console.log("userName :", this.state.userName);
    
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
    
  }
  componentWillReceiveProps(prevValue) {
    console.log('prevValue', prevValue);
    this.setState({userName: prevValue.userName})
  }
  render() {
    return (
      <div>
        User Input {this.state.userName}
        <input name="userName" onChange={this.props.change} type="text" />
        <button onClick={this.clearInput} className="btn btn-primary">Clear</button>
      </div>
    )
  }
}
