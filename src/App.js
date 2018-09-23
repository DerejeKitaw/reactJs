import React, { Component } from 'react';
import './index.css';
import Home from './components/Home'
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'


class App extends Component {
  constructor(props){
    super(props)
    this.event_handler = this.event_handler.bind(this);
  }
  state = {
    userName:"DerejeT"
  }
  event_handler = (e) => {
    console.log('e.target.name',e.target.name)
    console.log('e.target.value',e.target.value)
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    return (
      <div >
        <Home />

        <div className="container">
          <UserInput change={this.event_handler} userName={this.state.userName} />
          <UserOutput userName={this.state.userName}/>
          <UserOutput />
          </div>
      </div>
    );
  }
}

export default App;
