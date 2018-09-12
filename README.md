# Building Router
> Our basic version of Router should do two things:
1. Supply its children with context for both location and history 
2. Re-render the app whenever the history changes.

> Regarding the first requirement, at the moment our Route and Link components are using two external APIs directly. 

> Route uses window.location to read the location and Link uses history to modify the location. 

> Redirect will need to access the same APIs. 

> The Router supplied by react-router makes these APIs available to child components via context. 

> This is a cleaner pattern and means you can easily inject your own location or history object into your app for testing purposes.

> Regarding the second requirement, right now App subscribes to history in componentDidMount(). 

> * We’ll move this responsibility up to Router, which will be our app’s top-most component.

> Let’s use Router inside App before building it. Because we will no longer need to use componentDidMount() in App, we can turn the component into a stateless function.

> At the top of App, we’ll convert the component to a function, remove componentDidMount(), and add the opening tag for <Router>:
Route.js
  ```js
  import React from 'react';
import PropTypes from 'prop-types';

const Route = ({ path, component }, { location }) => {
  const pathname = location.pathname;
  if (pathname.match(path)) {
    return React.createElement(component);
  } else {
    return null;
  }
};

Route.contextTypes = {
  location: PropTypes.object
};
export default Route;
```
