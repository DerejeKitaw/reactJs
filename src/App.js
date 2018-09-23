import React, { Component } from 'react';
import './index.css';
import Home from './components/Home'
import ValidationComponent from './components/ValidationComponent'
import CharComponent from './components/CharComponent'
class App extends Component {
  state = {
    user:''
  }
  inputChangHandler = (event) => {
    console.log('inputChangHandler', event.target.name);
    console.log('inputChangHandler', event.target.value);
this.setState({[event.target.name]:event.target.value})
  }
  render() {
    return (
      <div>
        <Home />
        <input
          type="text"
          name="user"
          value={this.state.user}
          onChange={(event) => { this.inputChangHandler(event) }}

        />
        <p>You have entered {this.state.user.length} words</p>

        <ValidationComponent inputLength={this.state.user.length} />
        
        <CharComponent />
      </div>
    );
  }
}

export default App;
