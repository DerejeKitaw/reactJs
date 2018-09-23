# Creating functional components
Person/index.js
```js
import React from 'react';
import './style.css';

const Person = () => {
  return <p className="container">I'm a Person</p>
}

export default Person;
```

# outputting dynamic values

Person/index.js
```js
import React from 'react';
import './style.css';

const Person = () => {
  return <p className="container">I'm a Person {Math.random() *30}</p>
}

export default Person;
```

# Working with Props
app.js
```js
import React, { Component } from 'react';
import './index.css';
import Home from './components/Home'
import Person from './components/Person'
class App extends Component {

  render() {
    return (
      <div>
        <Home />
        <Person />
        <Person name ="Dereje" age="42" />
        <Person name ="Dereje" age="32" >My Hobbies: Sport</Person>
      </div>
    );
  }
}

export default App;
```
How do we use this passed data in Person component?

> React give us ability to use this values in Person component using props.
```js
import React from 'react';
import './style.css';

const Person = (props) => {
  return <p className="container">I'm {props.name} {props.age} old</p>
}

export default Person;
```
Output
I'm old

I'm Dereje 42 old

I'm Kitaw 32 old

# What about the value between Person tags `My Hobbies: Sport`

Person/index.js
```js
import React from 'react';
import './style.css';

const Person = (props) => {
  return <div className="container person_container">
    <p >I'm {props.name} {props.age} old</p>
    <p>{props.children}</p>
  </div>
}

export default Person;
```
Output:

I'm old

I'm Dereje 42 old

I'm Kitaw 32 old

My Hobbies: Sport

# Change dynamically the Name of Person
App.js
```js
class App extends Component {
  switchNameHandler = () => {
    console.log('Clicked');
  };
  render() {
    return (
      <div className="container">
        <button onClick={this.switchNameHandler} className="btn btn-primary">Switch Name</button>
      </div>
    );
  }
}

export default App;

```
app.js
```js
import React, { Component } from 'react';
import './index.css';
import Home from './components/Home';
import Person from './components/Person';
class App extends Component {
  state = {
    persons: [
      { name: 'Winta', age: 10 },
      { name: 'Ruhama', age: 8 },
      { name: 'Noah', age: 5 }
    ]
  };
  switchNameHandler = () => {
    // console.log('Clicked');
    this.setState({
      persons: [
        { name: 'Winta the best', age: 10 },
        { name: 'Ruhama', age: 8 },
        { name: 'Noah', age: 5 }
    ]})
  };
  render() {
    return (
      <div className="container">
        <Home />
        <button onClick={this.switchNameHandler} className="btn btn-primary">Switch Name</button>
        <Person />
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <Person name="Kitaw" age="32">
          My Hobbies: Sport
        </Person>
      </div>
    );
  }
}

export default App;

```
# Can we run `switchNameHandler` when Person component clicked?
> Yes first pass `switchNameHandler` as props
App.js
```js
class App extends Component {
  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Winta the best', age: 10 },
        { name: 'Ruhama', age: 8 },
        { name: 'Noah', age: 5 }
    ]})
  };
  render() {
    return (
      <div className="container">
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          clickkkkk={this.switchNameHandler}
        >
          My Hobbies: Sport
        </Person>
      </div>
    );
  }
}

export default App;
```
Person/index.js
```js
const Person = (props) => {
  return <div onClick={props.clickkkkk} className="container person_container">
    <p >I'm {props.name} {props.age} years old</p>
    <p>{props.children}</p>
  </div>
}

export default Person;
```
# Can  you pass data to a method?
> Yes, There are two methods
```js
import React, { Component } from 'react';
import './index.css';
import Home from './components/Home';
import Person from './components/Person';
class App extends Component {
  state = {
    persons: [
      { name: 'Winta', age: 10 },
      { name: 'Ruhama', age: 8 },
      { name: 'Noah', age: 5 }
    ]
  };
  switchNameHandler = (newName) => {
    // console.log('Clicked');
    this.setState({
      persons: [
        { name: newName, age: 10 },
        { name: 'Ruhama', age: 8 },
        { name: 'Noah', age: 5 }
    ]})
  };
  render() {
    return (
      <div className="container">
        <Home />
        <button onClick={this.switchNameHandler.bind(this,"Dad")} className="btn btn-primary">Switch Name</button>
        <Person />
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          clickP={this.switchNameHandler.bind(this,"Helu")}
        >
          My Hobbies: Sport
        </Person>
      </div>
    );
  }
}

export default App;

```