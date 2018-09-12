import React, { Component } from 'react';
import Route from './components/Route';
import Link from './components/Link';
import Router from './components/Router';
import Pacific from './components/Pacific';
import Atlantic from './components/Atlantic';
import BlackSea from './components/BlackSea';

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
        <li>
          <Link to='/atlantic'>
            <code>/atlantic</code>
          </Link>
        </li>
        <li>
          <Link to='/pacific'>
            <code>/pacific</code>
          </Link>
        </li>
        <li>
          <Link to='/black-sea'>
            <code>/black-sea</code>
          </Link>
        </li>
      </ul>

      <hr />

      <Route path='/atlantic' component={Atlantic} />
      <Route path='/pacific' component={Pacific} />
      <Route path='/black-sea' component={BlackSea} />
        </div>
      </Router>
    );
  }
}

export default App;
