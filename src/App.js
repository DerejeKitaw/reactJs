import React, { Component } from 'react';
import './index.css';
import Home from './components/Home'
import TimersDashboard from './components/TimersDashboard'
class App extends Component {

  render() {
    return (
      <div>
        <TimersDashboard />
      </div>
    );
  }
}

export default App;
