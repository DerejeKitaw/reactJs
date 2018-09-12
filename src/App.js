import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Pacific from './components/Pacific';
import Atlantic from './components/Atlantic';
import BlackSea from './components/BlackSea';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/atlantic">
                <code>/atlantic</code>
              </Link>
            </li>
            <li>
              <Link to="/pacific">
                <code>/pacific</code>
              </Link>
            </li>
            <li>
              <Link to="/black-sea">
                <code>/black-sea</code>
              </Link>
            </li>
          </ul>

          <hr />
          <Switch>
          <Route path='/atlantic/ocean' render={() => (
            <div>
              <h3>Atlantic Ocean — Again!</h3>
              <p>
                Also known as "The Pond."
              </p>
            </div>
          )} />
          <Route path='/atlantic' component={Atlantic} />
          <Route path='/pacific' component={Pacific} />
          <Route path='/black-sea' component={BlackSea} />
  
          <Route exact path='/' render={() => (
            <h3>
              Welcome! Select a body of saline water above.
            </h3>
          )} />
  
          <Route render={({ location }) => (
            <div className='ui inverted red segment'>
              <h3>
                Error! No matches for <code>{location.pathname}</code>
              </h3>
            </div>
          )} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
