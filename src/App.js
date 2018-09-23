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
    ],
    showPersons: true
  };
  switchNameHandler = newName => {
    // console.log('Clicked');
    this.setState({
      persons: [
        { name: newName, age: 10 },
        { name: 'Ruhama', age: 8 },
        { name: 'Noah', age: 5 }
      ]
    });
  };
  togglePersonhandler = () => {
    // console.log('Clicked');
    const show = this.state.showPersons;
    this.setState({ showPersons: !show });
  };
  deletePersonHandler = (personIndex) => {
    // console.log('personIndex', personIndex);
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({showPersons: persons})
  }
  render() {
    let person = null;
    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              clickGGGG={() => this.deletePersonHandler(index)}
              key={index}
              name={person.name}
              age={person.age} />;
          })}
        </div>
      );
    }
    return (
      <div className="container">
        <Home />
        <button
          onClick={() => this.switchNameHandler('Dad')}
          className="btn btn-primary"
        >
          Switch Name
        </button>
        <br />
        <button onClick={this.togglePersonhandler} className="btn btn-primary">
          Toggle Person
        </button>
        {person}
      </div>
    );
  }
}

export default App;
