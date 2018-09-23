import React, { Component } from 'react';
import './index.css';
import Home from './components/Home';
import Person from './components/Person';
class App extends Component {
  state = {
    persons: [
      { id:1 ,name: 'Winta', age: 10 },
      { id:2 ,name: 'Ruhama', age: 8 },
      { id:3 ,name: 'Noah', age: 5 }
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
    console.log('personIndex', personIndex);
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    // const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }
  render() {
    let person = null;
    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              // clickGGGG={() => this.deletePersonHandler(index)}
              changed={(event)=>this.nameChangedHandler(event, person.id)}
              key={person.id}
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
