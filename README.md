# Create two components
Atlantic.js
```js
import React from 'react'

export default() => (
  <div>
    <h3>Atlantic Ocean</h3>
    <p>
      The Atlantic Ocean covers approximately 1/5th of the
      surface of the earth.
    </p>
  </div>
);
```
Pacific.js
```js
import React from 'react'

export default () => (
  <div>
    <h3>Pacific Ocean</h3>
    <p>
      Ferdinand Magellan, a Portuguese explorer, named the ocean
      'mar pacifico' in 1521, which means peaceful sea.
    </p>
  </div>
);
```
# Create Route component to route between above two components
Route.js
```js
import React from 'react'

export default ({ path, component }) => {
  const pathname = window.location.pathname;
  if (pathname.match(path)) {
    return (
      React.createElement(component)
    );
  } else {
    return null;
  }
};
```
# Add the two components to with path
App.js
```js
import React, { Component } from 'react';
import Route from './components/Route';
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
```
# Now /pacific and /atlantic should route us to its component.
