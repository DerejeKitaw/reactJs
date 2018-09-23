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
