import React, { Component } from 'react';
import './index.css';
import Home from './components/Home'
import Form from './components/Form'
class App extends Component {

  render() {
    return (
      <div>
        <Home />
        <Form />
      </div>
    );
  }
}

export default App;
