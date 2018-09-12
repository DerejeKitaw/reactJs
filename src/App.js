import React, { Component } from 'react';
import Route from './components/Route';
import Link from './components/Link';
import Pacific from './components/Pacific';
import Atlantic from './components/Atlantic';
import Router from './components/Router';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

class App extends Component {
  componentDidMount() {
    history.listen(() => this.forceUpdate());
  }
  render() {
    return (
      <Router>
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
      </Router>
    );
  }
}

export default App;
