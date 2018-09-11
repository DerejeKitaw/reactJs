import React, { Component } from 'react';
import  Route from './components/Route';
import Pacific from './components/Pacific';
import Atlantic from './components/Atlantic';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route path='/atlantic' component={Atlantic} />
      <Route path='/pacific' component={Pacific} />
      </div>
    );
  }
}

export default App;
