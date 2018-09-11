import React, { Component } from 'react';
import Route from './components/Route';
import Pacific from './components/Pacific';
import Atlantic from './components/Atlantic';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <a href="/atlantic">
              <code>/atlantic</code>
            </a>
          </li>
          <li>
            <a href="/pacific">
              <code>/pacific</code>
            </a>
          </li>
        </ul>

        <hr />
        <Route path="/atlantic" component={Atlantic} />
        <Route path="/pacific" component={Pacific} />
      </div>
    );
  }
}

export default App;
