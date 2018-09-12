# More route
> The imported Route component has several additional features.

> So far, we’ve used the prop component to instruct Route which component to render when the path matches the current location. 
> Route also accepts the `prop render`. We can use this prop to define a render function in-line.
```js
 <Route path='/atlantic/ocean' render={() => (
        <div>
          <h3>Atlantic Ocean — Again!</h3>
          <p>
            Also known as "The Pond."
          </p>
        </div>
      )} />
```

> `atlantic/ocean` will render both atlantic and ocean components. 

> To work around these, we can wrap our `Route components` in a `Switch component`. 

# Using Switch
> When Route components are wrapped in a Switch component, **only the first matching Route will be displayed**.

> Switch help Route:
1. When the user visits /atlantic/ocean, the first Route will match and the subsequent Route matching /atlantic will be ignored.
2. We can include a catch-all Route at the bottom of our Switch container. If none of the other Route components match, this component will be rendered.

```js
import {Switch} from 'react-router-dom'
```
```js
<Router>
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
          <div >
            <h3>
              Error! No matches for <code>{location.pathname}</code>
            </h3>
          </div>
        )} />
      </Switch>
</Router>
```

> Route passes the prop location to the render function. Route always passes this prop to its target.