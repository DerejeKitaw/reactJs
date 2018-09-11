# Building Link

> When the user clicks on <a> tag, we’ll want the browser to skip its default routine of making a web request to fetch the next page.

> Instead, we just want to manually update the browser’s location.

> Most browsers supply an API for managing the history of the current session, [`window.history`](https://developer.mozilla.org/en-US/docs/Web/API/History_API). 

> It has methods like 
  * history.back() and 
  * history.forward() - to navigate the history stack.
  * pushState() - to navigate the browser to a desired location.

# Install "history":"~4.7.2"

* this function create an object, called history, which we’ll use to interact with the browser’s history API:

# Create `Link` component 

> that produces an <a> tag with a special onClick binding.
> When the user clicks on the Link component, we’ll want to prevent the browser from making a request. Instead, `we’ll use the history API to update the browser’s location.` 

Link.js
```js
import React from 'react';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

export default ({ to, children }) => (
  <a
    onClick={e => {
      e.preventDefault();
      history.push(to);
    }}
    href={to}
  >
    {children}
  </a>
);

```

App.js
```js
import React, { Component } from 'react';
import Route from './components/Route';
import Link from './components/Link';
import Pacific from './components/Pacific';
import Atlantic from './components/Atlantic';

class App extends Component {
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
```
### Now the route in the url updates but component is not updating.

> Use compoentDidMount life cycle to update the component

App.js
```js
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

```
TODO: It is not updating view.