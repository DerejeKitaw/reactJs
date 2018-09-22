import React, { Component } from 'react';
import Route from './components/Route';
import Link from './components/Link';
import Pacific from './components/Pacific';
import Atlantic from './components/Atlantic';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

class App extends Component {
  componentDidMount() {
    history.listen(() => this.forceUpdate());
  }
  render() {
    return (
      <div className="App">
        <ul>
          {' '}
          <li>
            <Link to="/atlantic">
              <code>/atlantic</code>
            </Link>
          </li>{' '}
          <li>
            <Link to="/pacific">
              <code>/pacific</code>
            </Link>
          </li>{' '}
        </ul>
        <hr />
        <Route path="/atlantic" component={Atlantic} />
        <Route path="/pacific" component={Pacific} />
      </div>
    );
  }
}

export default App;
