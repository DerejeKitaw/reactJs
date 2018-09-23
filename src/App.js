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
    showPersons: false
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
  render() {
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
        {this.state.showPersons ? (
          <div>
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
              clickP={this.switchNameHandler.bind(this, 'Helu')}
            >
              My Hobbies: Sport
            </Person>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
